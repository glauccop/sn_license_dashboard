import { GlideRecord, GlideAggregate, GlideDateTime, gs } from '@servicenow/glide'

const SUITE = 'x_snc_lic_alloc_suite'
const ENTITLEMENT = 'x_snc_lic_alloc_entitlement'
const SNAPSHOT = 'x_snc_lic_alloc_snapshot'

const DISCLAIMER_SHORT =
    'Collected daily on this instance · informational tracking reference, not ServiceNow official license measurement.'

const DISCLAIMER_FULL =
    'The data in this dashboard is collected daily on this instance and represents the license allocation observed on ' +
    'each collection date. Official consumption measurement is performed by ServiceNow through its own metering ' +
    'mechanisms, which may apply different criteria, measurement windows, and counting rules than those used here. ' +
    'These figures are therefore informational and intended for historical tracking, and do not replace ' +
    'the official ServiceNow consumption report.'

interface CategoryRow {
    category: string
    su_count: number
    resource_count: number
    allocated_count: number
    active_365_count: number
    su_ratio: string
    data_status: string
    source_job_status: string
}

interface RoleBreakdownRow {
    role: string
    application: string
    role_type: string
    allocated: number
    active_365: number
    reclaimable: number
}

/** True for per-role detail rows, which overlap each other and must never be summed into a total. */
function isDetailRow(gr: any): boolean {
    const value = gr.getValue('is_detail')
    return value === '1' || value === 'true'
}

/** Defaults to visible: only an explicit false hides a suite's card. */
function isVisible(value: string | null): boolean {
    return value !== '0' && value !== 'false'
}

/** Field that carries this suite's headline number, given its unit of measure. */
function valueField(unit: string): string {
    return unit === 'subscription_unit' ? 'su_count' : 'allocated_count'
}

function toInt(value: string | null): number {
    const parsed = parseInt(value || '0', 10)
    return isNaN(parsed) ? 0 : parsed
}

/** Today as yyyy-mm-dd, in the session time zone. */
function todayString(): string {
    return new GlideDateTime().getValue().split(' ')[0]
}

/** MAX over a date column comes back datetime-formatted; the stored value is a bare date. */
function asDate(value: string | null): string {
    return (value || '').split(' ')[0]
}

/**
 * Ordered read rather than a MAX aggregate: MAX over this date column returns
 * the earliest value, not the latest, which silently pins the whole dashboard
 * to the oldest day of history.
 */
function latestSnapshotDate(suiteId: string): string {
    const gr = new GlideRecord(SNAPSHOT)
    gr.addQuery('suite', suiteId)
    gr.orderByDesc('snapshot_date')
    gr.setLimit(1)
    gr.query()
    return gr.next() ? asDate(gr.getValue('snapshot_date')) : ''
}

function categoriesFor(suiteId: string, day: string): CategoryRow[] {
    const rows: CategoryRow[] = []
    if (!day) {
        return rows
    }
    const snap = new GlideRecord(SNAPSHOT)
    snap.addQuery('suite', suiteId)
    snap.addQuery('snapshot_date', day)
    snap.orderBy('category')
    snap.query()
    while (snap.next()) {
        if (isDetailRow(snap)) {
            continue // surfaced separately via /suites/{code}/roles, not part of the totals
        }
        rows.push({
            category: snap.getValue('category') || '',
            su_count: toInt(snap.getValue('su_count')),
            resource_count: toInt(snap.getValue('resource_count')),
            allocated_count: toInt(snap.getValue('allocated_count')),
            active_365_count: toInt(snap.getValue('active_365_count')),
            su_ratio: snap.getValue('su_ratio') || '',
            data_status: snap.getValue('data_status') || '',
            source_job_status: snap.getValue('source_job_status') || '',
        })
    }
    return rows
}

/**
 * Per-individual-role counts for a role-based suite (e.g. itil, itil_admin,
 * sn_incident_write), read from the same day's detail rows. Not deduplicated
 * against each other, so these do not sum to the suite's headline number —
 * that figure comes from `categoriesFor`, which excludes these rows.
 */
function roleBreakdownFor(suiteId: string, day: string): RoleBreakdownRow[] {
    const rows: RoleBreakdownRow[] = []
    if (!day) {
        return rows
    }
    const snap = new GlideRecord(SNAPSHOT)
    snap.addQuery('suite', suiteId)
    snap.addQuery('snapshot_date', day)
    snap.orderByDesc('allocated_count')
    snap.query()
    while (snap.next()) {
        if (!isDetailRow(snap)) {
            continue
        }
        const allocated = toInt(snap.getValue('allocated_count'))
        const active365 = toInt(snap.getValue('active_365_count'))
        rows.push({
            role: snap.getValue('category') || '',
            application: snap.getValue('application_label') || '',
            role_type: snap.getValue('role_type') || '',
            allocated: allocated,
            active_365: active365,
            reclaimable: Math.max(0, allocated - active365),
        })
    }
    return rows
}

function contractQuantity(suiteId: string): number {
    const agg = new GlideAggregate(ENTITLEMENT)
    agg.addQuery('suite', '=', suiteId)
    agg.addQuery('active', '=', 'true')
    agg.addAggregate('SUM', 'contract_quantity')
    agg.query()
    return agg.next() ? toInt(agg.getAggregate('SUM', 'contract_quantity')) : 0
}

/**
 * GET /suites — current position of every suite, plus the category breakdown of
 * the most recent collection.
 */
export function getSuites(request: any, response: any): void {
    const suites: unknown[] = []

    const suite = new GlideRecord(SUITE)
    suite.addQuery('active', 'true')
    suite.orderBy('display_order')
    suite.query()

    while (suite.next()) {
        const suiteId = suite.getUniqueValue()
        const unit = suite.getValue('unit') || ''
        const day = latestSnapshotDate(suiteId)
        const categories = categoriesFor(suiteId, day)

        let consumption = 0
        let allocated = 0
        let active365 = 0
        let collectedRows = 0
        let firstProblem = ''
        let jobStatus = ''

        const field = valueField(unit)
        for (let i = 0; i < categories.length; i++) {
            const row = categories[i]
            consumption += field === 'su_count' ? row.su_count : row.allocated_count
            allocated += row.allocated_count
            active365 += row.active_365_count
            if (row.source_job_status && !jobStatus) {
                jobStatus = row.source_job_status
            }
            if (row.data_status === 'ok') {
                collectedRows++
            } else if (row.data_status && !firstProblem) {
                firstProblem = row.data_status
            }
        }

        // A suite with several sources can partly collect; report a problem only
        // when nothing came through, so one missing product does not mask the rest.
        const status = collectedRows > 0 ? 'ok' : firstProblem || 'no_data'

        const contracted = contractQuantity(suiteId)

        suites.push({
            code: suite.getValue('code'),
            name: suite.getValue('name'),
            unit: unit,
            counting_method: suite.getValue('counting_method'),
            collection_enabled: suite.getValue('collection_enabled') === '1',
            dashboard_visible: isVisible(suite.getValue('dashboard_visible')),
            methodology: suite.getValue('methodology') || '',
            last_collected: day,
            consumption: consumption,
            allocated: allocated,
            active_365: active365,
            reclaimable: allocated > 0 ? allocated - active365 : 0,
            contract_quantity: contracted,
            overage: contracted > 0 ? consumption - contracted : 0,
            data_status: status,
            source_job_status: jobStatus,
            categories: categories,
        })
    }

    response.setBody({ suites: suites, disclaimer: DISCLAIMER_SHORT })
}

/**
 * GET /suites/{code}/trend — daily series for a window.
 * Accepts window=7|14|30|60|90|180|240|365 or an explicit from/to pair.
 */
export function getTrend(request: any, response: any): void {
    const code = request.pathParams.code
    const windowParam = request.queryParams.window
    const fromParam = request.queryParams.from
    const toParam = request.queryParams.to

    const suite = new GlideRecord(SUITE)
    suite.addQuery('code', code)
    suite.setLimit(1)
    suite.query()
    if (!suite.next()) {
        response.setStatus(404)
        response.setBody({ error: 'Unknown suite code: ' + code })
        return
    }

    const suiteId = suite.getUniqueValue()
    const unit = suite.getValue('unit') || ''
    const field = valueField(unit)

    let from = firstValue(fromParam)
    let to = firstValue(toParam)

    if (!from) {
        const days = parseInt(firstValue(windowParam) || '30', 10)
        const start = new GlideDateTime()
        start.addDaysUTC(-(isNaN(days) ? 30 : days))
        from = start.getValue().split(' ')[0]
    }
    if (!to) {
        to = todayString()
    }

    const agg = new GlideAggregate(SNAPSHOT)
    agg.addQuery('suite', '=', suiteId)
    agg.addQuery('snapshot_date', '>=', from)
    agg.addQuery('snapshot_date', '<=', to)
    agg.groupBy('snapshot_date')
    agg.addAggregate('SUM', field)
    agg.addAggregate('SUM', 'allocated_count')
    agg.addAggregate('SUM', 'active_365_count')
    agg.orderBy('snapshot_date')
    agg.query()

    const points: unknown[] = []
    while (agg.next()) {
        points.push({
            date: asDate(agg.getValue('snapshot_date')),
            value: toInt(agg.getAggregate('SUM', field)),
            allocated: toInt(agg.getAggregate('SUM', 'allocated_count')),
            active_365: toInt(agg.getAggregate('SUM', 'active_365_count')),
        })
    }

    response.setBody({
        code: code,
        name: suite.getValue('name'),
        unit: unit,
        from: from,
        to: to,
        contract_quantity: contractQuantity(suiteId),
        points: points,
    })
}

/**
 * The dashboard's colours are its own property (see fluent/properties.now.ts),
 * not the instance's Next Experience theme — a published, generic app should
 * not carry any one customer's brand as its default. Each instance sets its
 * own values; the logo still follows the instance, since that has no such
 * conflict.
 */
function instanceTheme(): unknown {
    const logo = gs.getProperty('glide.product.image', '')
    return {
        primary: gs.getProperty('x_snc_lic_alloc.theme.primary', '#1f2933'),
        accent: gs.getProperty('x_snc_lic_alloc.theme.accent', '#3d68c4'),
        header_text: '#ffffff',
        product_name: gs.getProperty('glide.product.name', 'ServiceNow'),
        logo_url: logo ? '/' + logo : '',
    }
}

/** GET /meta — disclaimer text, instance theme and collection freshness. */
export function getMeta(request: any, response: any): void {
    const latest = new GlideRecord(SNAPSHOT)
    latest.orderByDesc('snapshot_date')
    latest.setLimit(1)
    latest.query()
    const lastCollected = latest.next() ? asDate(latest.getValue('snapshot_date')) : ''

    response.setBody({
        disclaimer_short: DISCLAIMER_SHORT,
        disclaimer_full: DISCLAIMER_FULL,
        last_collected: lastCollected,
        windows: [7, 14, 30, 60, 90, 180, 240, 365],
        theme: instanceTheme(),
    })
}

/**
 * GET /suites/{code}/roles — per-role breakdown for a role-based suite (e.g. itil,
 * itil_admin, sn_incident_write), for the most recent collection day. Empty, not an
 * error, for suites counted by another mechanism.
 */
export function getRoleBreakdown(request: any, response: any): void {
    const code = request.pathParams.code

    const suite = new GlideRecord(SUITE)
    suite.addQuery('code', code)
    suite.setLimit(1)
    suite.query()
    if (!suite.next()) {
        response.setStatus(404)
        response.setBody({ error: 'Unknown suite code: ' + code })
        return
    }

    const suiteId = suite.getUniqueValue()
    const day = latestSnapshotDate(suiteId)

    response.setBody({
        code: code,
        name: suite.getValue('name'),
        as_of: day,
        roles: roleBreakdownFor(suiteId, day),
    })
}

/** Body may already be parsed (`.data`) or arrive as a JSON string (`.dataString`). */
function parseJsonBody(request: any): any {
    if (request.body && typeof request.body.data === 'object' && request.body.data !== null) {
        return request.body.data
    }
    const raw = request.body && request.body.dataString
    if (!raw) {
        return null
    }
    try {
        return JSON.parse(raw)
    } catch (e) {
        return null
    }
}

/**
 * PUT /suites/{code}/visibility — show or hide a suite's card on the dashboard,
 * independent of whether its collection is enabled. Body: {"visible": boolean}.
 */
export function setSuiteVisibility(request: any, response: any): void {
    const code = request.pathParams.code
    const body = parseJsonBody(request)

    if (!body || typeof body.visible !== 'boolean') {
        response.setStatus(400)
        response.setBody({ error: 'Request body must be JSON with a boolean "visible" field.' })
        return
    }

    const suite = new GlideRecord(SUITE)
    suite.addQuery('code', code)
    suite.setLimit(1)
    suite.query()
    if (!suite.next()) {
        response.setStatus(404)
        response.setBody({ error: 'Unknown suite code: ' + code })
        return
    }

    suite.setValue('dashboard_visible', body.visible)
    suite.update()

    response.setBody({ code: code, dashboard_visible: body.visible })
}

function firstValue(param: string | string[] | undefined): string {
    if (!param) {
        return ''
    }
    return Array.isArray(param) ? param[0] : param
}
