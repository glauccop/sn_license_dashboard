import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'
import { getSuites, getTrend, getMeta, getRoleBreakdown, setSuiteVisibility } from '../../server/handlers/dashboard'
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
        {
            $id: Now.ID['api-dashboard-roles'],
            name: 'roles',
            method: 'GET',
            version: 1,
            path: '/suites/{code}/roles',
            shortDescription: 'Per-role breakdown for a role-based suite (itil, itil_admin, etc).',
            script: getRoleBreakdown,
            enforceAcl: [dashboardApiAcl],
        },
        {
            $id: Now.ID['api-dashboard-visibility'],
            name: 'visibility',
            method: 'PUT',
            version: 1,
            path: '/suites/{code}/visibility',
            shortDescription: 'Show or hide a suite card on the dashboard.',
            script: setSuiteVisibility,
            enforceAcl: [dashboardApiAcl],
        },
    ],
})
