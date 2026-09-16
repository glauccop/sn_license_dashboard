var LicenseUsageCollector = Class.create()

LicenseUsageCollector.prototype = {
    initialize: function () {
        this.SUITE = 'x_snc_lic_alloc_suite'
        this.SOURCE = 'x_snc_lic_alloc_source'
        this.ROLE_MAP = 'x_snc_lic_alloc_role_map'
        this.ENTITLEMENT = 'x_snc_lic_alloc_entitlement'
        this.SNAPSHOT = 'x_snc_lic_alloc_snapshot'
        this.LOGIN_WINDOW_DAYS = 365
    },

    /**
     * Collects every enabled suite and writes today's snapshot rows.
     * Entry point for the daily scheduled collection.
     */
    collectAll: function () {
        var results = []
        var suite = new GlideRecord(this.SUITE)
        suite.addQuery('active', true)
        suite.addQuery('collection_enabled', true)
        suite.orderBy('display_order')
        suite.query()
        while (suite.next()) {
            results.push(this.collectSuite(suite.getUniqueValue()))
        }
        return results
    },

    /**
     * Collects a single suite. Never throws: a suite whose source is missing or
     * erroring records its status and lets the others through.
     */
    collectSuite: function (suiteId) {
        var suite = new GlideRecord(this.SUITE)
        if (!suite.get(suiteId)) {
            return { suite: suiteId, status: 'error', message: 'Suite not found' }
        }

        var method = suite.getValue('counting_method')
        var rows = []

        try {
            if (method === 'native_counts') {
                rows = this._readNativeCounts(suite)
            } else if (method === 'role_based') {
                rows = this._countRoleBased(suite)
            } else if (method === 'unrestricted') {
                rows = this._countUnrestricted()
            } else {
                rows = [{ category: '', data_status: 'not_measurable' }]
            }
        } catch (e) {
            rows = [{ category: '', data_status: 'error', error_message: '' + e }]
        }

        this._writeSnapshot(suiteId, rows)

        return {
            suite: suite.getValue('code'),
            method: method,
            rows: rows.length,
            total: this._sumRows(rows, suite.getValue('unit')),
        }
    },

    /**
     * Sums the licensing counts a product already publishes on this instance.
     * Reads nothing it computes itself — no contractual ratios are reimplemented.
     */
    _readNativeCounts: function (suite) {
        var rows = []
        var src = new GlideRecord(this.SOURCE)
        src.addQuery('suite', suite.getUniqueValue())
        src.addQuery('active', true)
        src.query()

        while (src.next()) {
            var tableName = src.getValue('source_table')

            if (!this._tableExists(tableName)) {
                rows.push({
                    category: src.getValue('label'),
                    data_status: 'table_missing',
                    error_message: 'Table ' + tableName + ' is not present on this instance',
                })
                continue
            }

            try {
                var found = this._aggregateSource(src, tableName)
                if (found.length === 0) {
                    rows.push({ category: src.getValue('label'), data_status: 'no_data' })
                } else {
                    rows = rows.concat(found)
                }
            } catch (e) {
                rows.push({
                    category: src.getValue('label'),
                    data_status: 'error',
                    error_message: '' + e,
                })
            }
        }

        return rows
    },

    /**
     * The ratio and the product's trust signals vary per category, so they are
     * grouped alongside it rather than sampled from one row of the table.
     */
    _aggregateSource: function (src, tableName) {
        var categoryField = src.getValue('category_field')
        var suField = src.getValue('su_field')
        var countField = src.getValue('count_field')
        var ratioField = src.getValue('ratio_field')
        var statusField = src.getValue('status_field')
        var entitledField = src.getValue('entitled_field')

        var ga = new GlideAggregate(tableName)
        var encoded = this._buildSourceQuery(src, tableName)
        if (encoded) {
            ga.addEncodedQuery(encoded)
        }

        if (categoryField) {
            ga.groupBy(categoryField)
        }
        if (ratioField) {
            ga.groupBy(ratioField)
        }
        if (statusField) {
            ga.groupBy(statusField)
        }
        if (entitledField) {
            ga.groupBy(entitledField)
        }

        if (suField) {
            ga.addAggregate('SUM', suField)
        }
        if (countField) {
            ga.addAggregate('SUM', countField)
        }
        ga.query()

        var rows = []
        while (ga.next()) {
            var row = {
                category: categoryField ? ga.getValue(categoryField) : src.getValue('label'),
                su_count: suField ? parseInt(ga.getAggregate('SUM', suField), 10) || 0 : 0,
                resource_count: countField ? parseInt(ga.getAggregate('SUM', countField), 10) || 0 : 0,
                data_status: 'ok',
            }
            if (ratioField) {
                row.su_ratio = ga.getValue(ratioField)
            }
            if (statusField) {
                row.source_job_status = ga.getValue(statusField)
            }
            if (entitledField) {
                var flag = ga.getValue(entitledField)
                row.entitled = flag === '1' || flag === 'true'
            }
            rows.push(row)
        }

        return rows
    },

    _buildSourceQuery: function (src, tableName) {
        var parts = []
        var productField = src.getValue('product_field')
        var productValue = src.getValue('product_value')
        var extra = src.getValue('extra_filter')

        if (productField && productValue) {
            parts.push(productField + '=' + productValue)
        }
        if (extra) {
            parts.push(extra)
        }

        // Sources that keep history must be narrowed to one day, or the sum
        // would span every collection the product ever wrote.
        var dateField = src.getValue('date_field')
        if (dateField && tableName) {
            var bound = this._latestDayBound(tableName, dateField, parts.join('^'))
            if (bound) {
                parts.push(dateField + '>=' + bound)
            }
        }

        return parts.join('^')
    },

    /**
     * Most recent day present in the source, as a query bound. Day granularity,
     * not timestamp: products commonly write one collection across several
     * seconds, and an exact-timestamp match would keep only part of it.
     */
    _latestDayBound: function (tableName, dateField, baseQuery) {
        // Ordered read rather than a MAX aggregate: MAX over a date column
        // returns the earliest value, which would pin the read to the oldest
        // collection the product ever wrote.
        var gr = new GlideRecord(tableName)
        if (baseQuery) {
            gr.addEncodedQuery(baseQuery)
        }
        gr.orderByDesc(dateField)
        gr.setLimit(1)
        gr.query()
        if (!gr.next()) {
            return null
        }

        var max = gr.getValue(dateField)
        if (!max) {
            return null
        }
        var hasTime = max.indexOf(' ') > -1
        return hasTime ? max.split(' ')[0] + ' 00:00:00' : max
    },

    /**
     * Counts distinct users holding any role mapped to this suite.
     *
     * Two figures per role type:
     *   allocated  — holds the role on the collection date
     *   active_365 — also logged in within the last 365 days, which is the
     *                universe ServiceNow's own Subscription Management uses
     * The gap between them is reclaimable allocation.
     */
    _countRoleBased: function (suite) {
        var suiteId = suite.getUniqueValue()
        var rows = []

        var fulfillerRoles = this._mappedRoleIds(suiteId, 'fulfiller')
        var stakeholderRoles = this._mappedRoleIds(suiteId, 'business_stakeholder')

        var fulfillers = this._distinctUsers(fulfillerRoles, false)
        var fulfillers365 = this._distinctUsers(fulfillerRoles, true)

        // ServiceNow defines a Fulfiller as a user who may act beyond what a
        // Business Stakeholder is entitled to, which makes the two mutually
        // exclusive. A user holding both is a Fulfiller, counted once.
        var stakeholders = this._exclude(this._distinctUsers(stakeholderRoles, false), fulfillers)
        var stakeholders365 = this._exclude(this._distinctUsers(stakeholderRoles, true), fulfillers)

        if (fulfillerRoles.length > 0) {
            rows.push({
                category: 'fulfiller',
                role_type: 'fulfiller',
                allocated_count: this._size(fulfillers),
                active_365_count: this._size(fulfillers365),
                data_status: 'ok',
            })
        }

        if (stakeholderRoles.length > 0) {
            rows.push({
                category: 'business_stakeholder',
                role_type: 'business_stakeholder',
                allocated_count: this._size(stakeholders),
                active_365_count: this._size(stakeholders365),
                data_status: 'ok',
            })
        }

        if (rows.length === 0) {
            rows.push({ category: '', data_status: 'no_data', error_message: 'No roles mapped to this suite' })
        }

        // Per-individual-role detail, e.g. itil / itil_admin / sn_incident_write.
        // Deliberately not deduplicated against other roles of the SAME type — a
        // user holding two mapped fulfiller roles appears under both, matching how
        // the source usage report breaks out consumption per role. But a stakeholder
        // role still excludes anyone already counted as a fulfiller above, or this
        // table would show far more "stakeholders" than the deduplicated total ever
        // does. Marked is_detail so the totals above are never double-counted with these.
        rows = rows.concat(this._roleBreakdownRows(suiteId, fulfillers, fulfillers365))

        return rows
    },

    _roleBreakdownRows: function (suiteId, fulfillers, fulfillers365) {
        var rows = []
        var map = new GlideRecord(this.ROLE_MAP)
        map.addQuery('suite', suiteId)
        map.addQuery('active', true)
        map.query()

        while (map.next()) {
            var roleId = this._resolveRoleId(map.getValue('role'))
            if (!roleId) {
                continue // role does not exist on this instance — skip rather than fail
            }

            var roleName = map.getValue('role')
            var roleRecord = new GlideRecord('sys_user_role')
            if (roleRecord.get(roleId)) {
                roleName = roleRecord.getValue('name') || roleName
            }

            var roleType = map.getValue('role_type')
            var users = this._distinctUsers([roleId], false)
            var users365 = this._distinctUsers([roleId], true)

            if (roleType === 'business_stakeholder') {
                // Same mutual-exclusion rule as the summary above: a user who also
                // holds a fulfiller role is a fulfiller, not a stakeholder, even
                // though this specific role is tagged business_stakeholder.
                users = this._exclude(users, fulfillers)
                users365 = this._exclude(users365, fulfillers365)
            }

            rows.push({
                category: roleName,
                application_label: map.getValue('application_label') || '',
                role_type: roleType,
                allocated_count: this._size(users),
                active_365_count: this._size(users365),
                is_detail: true,
                data_status: 'ok',
            })
        }

        return rows
    },

    _exclude: function (users, excluded) {
        var kept = {}
        for (var id in users) {
            if (!excluded[id]) {
                kept[id] = true
            }
        }
        return kept
    },

    _size: function (users) {
        var count = 0
        for (var id in users) {
            count++
        }
        return count
    },

    _mappedRoleIds: function (suiteId, roleType) {
        var ids = []
        var map = new GlideRecord(this.ROLE_MAP)
        map.addQuery('suite', suiteId)
        map.addQuery('active', true)
        map.addQuery('role_type', roleType)
        map.query()
        while (map.next()) {
            var roleId = this._resolveRoleId(map.getValue('role'))
            if (roleId && ids.indexOf(roleId) === -1) {
                ids.push(roleId)
            }
        }
        return ids
    },

    /**
     * Shipped mappings carry the role's name, because a name is the only way to
     * reference a platform role that survives moving between instances. A mapping
     * an admin creates carries a sys_id. Accept either, and skip a role the
     * instance does not have — an app installed without SPM should still count ITSM.
     */
    _resolveRoleId: function (raw) {
        if (!raw) {
            return ''
        }
        if (/^[0-9a-f]{32}$/.test(raw)) {
            return raw
        }
        var role = new GlideRecord('sys_user_role')
        return role.get('name', raw) ? role.getUniqueValue() : ''
    },

    /**
     * The set of users holding any of these roles. Grouping by user collapses
     * duplicate grants — the same role arriving both directly and by inheritance
     * is one allocation, not two.
     */
    _distinctUsers: function (roleIds, requireRecentLogin) {
        var users = {}
        if (roleIds.length === 0) {
            return users
        }

        var ga = new GlideAggregate('sys_user_has_role')
        ga.addQuery('role', 'IN', roleIds.join(','))
        ga.addEncodedQuery(this._activeUserQuery('user.', requireRecentLogin))
        ga.groupBy('user')
        // GlideAggregate returns no rows from a groupBy alone; the COUNT is what
        // makes each group materialise.
        ga.addAggregate('COUNT')
        ga.query()

        while (ga.next()) {
            users[ga.getValue('user')] = true
        }
        return users
    },

    _countUnrestricted: function () {
        var ga = new GlideAggregate('sys_user')
        ga.addEncodedQuery(this._activeUserQuery('', false))
        ga.addAggregate('COUNT')
        ga.query()

        var allocated = ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) || 0 : 0

        var recent = new GlideAggregate('sys_user')
        recent.addEncodedQuery(this._activeUserQuery('', true))
        recent.addAggregate('COUNT')
        recent.query()

        return [
            {
                category: 'all_active_users',
                allocated_count: allocated,
                active_365_count: recent.next() ? parseInt(recent.getAggregate('COUNT'), 10) || 0 : 0,
                data_status: 'ok',
            },
        ]
    },

    /**
     * The user universe, per ServiceNow's documented definition: active, has a
     * user ID, and is not a web-service-only account.
     */
    _activeUserQuery: function (prefix, requireRecentLogin) {
        var parts = [
            prefix + 'active=true',
            prefix + 'user_nameISNOTEMPTY',
            prefix + 'web_service_access_only!=true',
        ]
        if (requireRecentLogin) {
            var cutoff = new GlideDateTime()
            cutoff.addDaysUTC(-this.LOGIN_WINDOW_DAYS)
            parts.push(prefix + 'last_login_time>=' + cutoff.getValue())
        }
        return parts.join('^')
    },

    _tableExists: function (tableName) {
        if (!tableName) {
            return false
        }
        try {
            var probe = new GlideRecord(tableName)
            return probe.isValid()
        } catch (e) {
            return false
        }
    },

    /**
     * Replaces today's rows for this suite, so a re-run corrects rather than duplicates.
     */
    _writeSnapshot: function (suiteId, rows) {
        var today = new GlideDate().getValue()

        var existing = new GlideRecord(this.SNAPSHOT)
        existing.addQuery('suite', suiteId)
        existing.addQuery('snapshot_date', today)
        existing.deleteMultiple()

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i]
            var snap = new GlideRecord(this.SNAPSHOT)
            snap.initialize()
            snap.setValue('suite', suiteId)
            snap.setValue('snapshot_date', today)
            snap.setValue('category', row.category || '')
            snap.setValue('data_status', row.data_status || 'ok')
            if (row.role_type) snap.setValue('role_type', row.role_type)
            if (row.application_label) snap.setValue('application_label', row.application_label)
            if (row.is_detail) snap.setValue('is_detail', true)
            if (row.su_count != null) snap.setValue('su_count', row.su_count)
            if (row.resource_count != null) snap.setValue('resource_count', row.resource_count)
            if (row.allocated_count != null) snap.setValue('allocated_count', row.allocated_count)
            if (row.active_365_count != null) snap.setValue('active_365_count', row.active_365_count)
            if (row.su_ratio) snap.setValue('su_ratio', row.su_ratio)
            if (row.source_job_status) snap.setValue('source_job_status', row.source_job_status)
            if (row.entitled != null) snap.setValue('entitled', row.entitled)
            if (row.error_message) snap.setValue('error_message', row.error_message.substring(0, 500))
            snap.insert()
        }
    },

    /**
     * Field that carries a suite's headline number, given its unit of measure.
     * Fulfiller/user-style units come from role-based or unrestricted counting;
     * everything else is native-counts, and is either a raw resource count
     * (Device, Unattended Robot) or already-computed subscription units
     * (Subscription Unit, Assist).
     */
    _consumptionField: function (unit) {
        if (unit === 'fulfiller_user' || unit === 'user' || unit === 'unrestricted_user') {
            return 'allocated_count'
        }
        if (unit === 'device' || unit === 'unattended_robot') {
            return 'resource_count'
        }
        return 'su_count'
    },

    _sumRows: function (rows, unit) {
        var field = this._consumptionField(unit)
        var total = 0
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].is_detail) {
                continue // per-role detail overlaps with the totals above; not part of the sum
            }
            total += rows[i][field] || 0
        }
        return total
    },

    /**
     * Current consumption for a suite, read from the latest snapshot.
     * Called by the Performance Analytics indicator sources.
     */
    getConsumption: function (suiteId) {
        return this._latestTotal(suiteId, 'consumption')
    },

    getAllocated: function (suiteId) {
        return this._latestTotal(suiteId, 'allocated_count')
    },

    getActive365: function (suiteId) {
        return this._latestTotal(suiteId, 'active_365_count')
    },

    _latestTotal: function (suiteId, metric) {
        var suite = new GlideRecord(this.SUITE)
        if (!suite.get(suiteId)) {
            return 0
        }
        var unit = suite.getValue('unit')

        var latest = new GlideRecord(this.SNAPSHOT)
        latest.addQuery('suite', suiteId)
        latest.orderByDesc('snapshot_date')
        latest.setLimit(1)
        latest.query()
        if (!latest.next()) {
            return 0
        }
        var day = (latest.getValue('snapshot_date') || '').split(' ')[0]
        if (!day) {
            return 0
        }

        var field = metric === 'consumption' ? this._consumptionField(unit) : metric

        var agg = new GlideAggregate(this.SNAPSHOT)
        agg.addQuery('suite', suiteId)
        agg.addQuery('snapshot_date', day)
        agg.addQuery('is_detail', false) // exclude per-role detail rows; they overlap the totals
        agg.addAggregate('SUM', field)
        agg.query()
        return agg.next() ? parseInt(agg.getAggregate('SUM', field), 10) || 0 : 0
    },

    getContractQuantity: function (suiteId) {
        var agg = new GlideAggregate(this.ENTITLEMENT)
        agg.addQuery('suite', suiteId)
        agg.addQuery('active', true)
        agg.addAggregate('SUM', 'contract_quantity')
        agg.query()
        return agg.next() ? parseInt(agg.getAggregate('SUM', 'contract_quantity'), 10) || 0 : 0
    },

    getOverage: function (suiteId) {
        var contracted = this.getContractQuantity(suiteId)
        if (!contracted) {
            return 0
        }
        return this.getConsumption(suiteId) - contracted
    },

    type: 'LicenseUsageCollector',
}
