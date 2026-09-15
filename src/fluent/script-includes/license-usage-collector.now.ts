import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['si-license-usage-collector'],
    name: 'LicenseUsageCollector',
    apiName: 'x_snc_lic_alloc.LicenseUsageCollector',
    active: true,
    accessibleFrom: 'public',
    callerAccess: 'tracking',
    description:
        'Collects daily license allocation per suite: sums the licensing counts each product publishes on the instance, and counts distinct users holding mapped roles.',
    script: Now.include('../../server/LicenseUsageCollector.server.js'),
})
