import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'
import { getSuites, getTrend, getMeta } from '../../server/handlers/dashboard'
import { dashboardApiAcl } from '../acl/rest.now'

RestApi({
    $id: Now.ID['api-dashboard'],
    name: 'License Allocation Dashboard API',
    serviceId: 'dashboard',
    shortDescription: 'Reads license allocation snapshots for the dashboard UI.',
    consumes: 'application/json',
    produces: 'application/json',
    enforceAcl: [dashboardApiAcl],
    versions: [{ $id: Now.ID['api-dashboard-v1'], version: 1, isDefault: true, active: true }],
    routes: [
        {
            $id: Now.ID['api-dashboard-suites'],
            name: 'suites',
            method: 'GET',
            version: 1,
            path: '/suites',
            shortDescription: 'Current allocation position for every suite.',
            script: getSuites,
            enforceAcl: [dashboardApiAcl],
        },
        {
            $id: Now.ID['api-dashboard-trend'],
            name: 'trend',
            method: 'GET',
            version: 1,
            path: '/suites/{code}/trend',
            shortDescription: 'Daily series for one suite over a window or explicit date range.',
            script: getTrend,
            enforceAcl: [dashboardApiAcl],
        },
        {
            $id: Now.ID['api-dashboard-meta'],
            name: 'meta',
            method: 'GET',
            version: 1,
            path: '/meta',
            shortDescription: 'Disclaimer text, available windows and collection freshness.',
            script: getMeta,
            enforceAcl: [dashboardApiAcl],
        },
    ],
})
