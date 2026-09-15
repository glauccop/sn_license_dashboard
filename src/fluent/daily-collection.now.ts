import '@servicenow/sdk/global'
import { ScheduledScript } from '@servicenow/sdk/core'

/**
 * Runs late enough that the product licensing jobs it reads from have already
 * written the day's counts.
 */
export const dailyCollection = ScheduledScript({
    $id: Now.ID['job-daily-collection'],
    name: 'License Allocation - Daily Collection',
    frequency: 'daily',
    executionTime: { hours: 5, minutes: 30, seconds: 0 },
    active: true,
    script: `
var collector = new x_snc_lic_alloc.LicenseUsageCollector();
var results = collector.collectAll();
gs.info('[License Allocation] Collected ' + results.length + ' suite(s): ' + JSON.stringify(results));
`,
})
