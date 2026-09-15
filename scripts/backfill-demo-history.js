/**
 * Development utility — not part of the installed application.
 *
 * Clones the most recent day of snapshots backwards over a date range so the
 * dashboard's period selector and trend chart have something to show before the
 * daily job has had time to build real history. Applies a mild downward drift
 * going back in time, so the series reads as growth rather than a flat line.
 *
 * Run from Scripts - Background. Safe to re-run: it replaces any rows it
 * previously wrote for the days in range.
 */
var DAYS_BACK = 180

var SNAPSHOT = 'x_snc_lic_alloc_snapshot'

function latestDay() {
    var agg = new GlideAggregate(SNAPSHOT)
    agg.addAggregate('MAX', 'snapshot_date')
    agg.query()
    return agg.next() ? (agg.getAggregate('MAX', 'snapshot_date') || '').split(' ')[0] : ''
}

function drift(value, daysAgo) {
    if (!value) {
        return value
    }
    var trend = 1 - 0.0022 * daysAgo
    var noise = 1 + (Math.random() - 0.5) * 0.03
    return Math.max(0, Math.round(value * trend * noise))
}

var sourceDay = latestDay()
if (!sourceDay) {
    gs.info('[LICALLOC-BACKFILL] nothing to clone; run the collection first')
} else {
    var template = []
    var src = new GlideRecord(SNAPSHOT)
    src.addQuery('snapshot_date', sourceDay)
    src.query()
    while (src.next()) {
        template.push({
            suite: src.getValue('suite'),
            category: src.getValue('category'),
            role_type: src.getValue('role_type'),
            su_count: parseInt(src.getValue('su_count'), 10) || 0,
            resource_count: parseInt(src.getValue('resource_count'), 10) || 0,
            allocated_count: parseInt(src.getValue('allocated_count'), 10) || 0,
            active_365_count: parseInt(src.getValue('active_365_count'), 10) || 0,
            su_ratio: src.getValue('su_ratio'),
            source_job_status: src.getValue('source_job_status'),
            data_status: src.getValue('data_status'),
        })
    }

    var written = 0
    for (var d = 1; d <= DAYS_BACK; d++) {
        var day = new GlideDateTime()
        day.addDaysUTC(-d)
        var dayValue = day.getValue().split(' ')[0]

        var stale = new GlideRecord(SNAPSHOT)
        stale.addQuery('snapshot_date', dayValue)
        stale.deleteMultiple()

        for (var i = 0; i < template.length; i++) {
            var row = template[i]
            var snap = new GlideRecord(SNAPSHOT)
            snap.initialize()
            snap.setValue('suite', row.suite)
            snap.setValue('snapshot_date', dayValue)
            snap.setValue('category', row.category)
            snap.setValue('data_status', row.data_status)
            if (row.role_type) snap.setValue('role_type', row.role_type)
            if (row.su_ratio) snap.setValue('su_ratio', row.su_ratio)
            if (row.source_job_status) snap.setValue('source_job_status', row.source_job_status)
            snap.setValue('su_count', drift(row.su_count, d))
            snap.setValue('resource_count', drift(row.resource_count, d))
            snap.setValue('allocated_count', drift(row.allocated_count, d))
            snap.setValue('active_365_count', drift(row.active_365_count, d))
            snap.insert()
            written++
        }
    }

    gs.info('[LICALLOC-BACKFILL] cloned ' + template.length + ' rows across ' + DAYS_BACK + ' days (' + written + ' inserted)')
}
