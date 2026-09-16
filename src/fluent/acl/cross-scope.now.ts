import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

/**
 * Now Assist's own usage table lives outside this app's scope, and unlike the
 * ITOM/SAM/HAM/VR tables the collector already reads, scoped-app code needs an
 * explicit cross-scope read grant for it — without this, the collector fails
 * with "ScopeAccessNotGrantedException: read access to
 * sn_entitlement_genai_assist_analytics not granted" on every instance this app
 * installs on, not just this one.
 */
// This app's own scope id, from now.config.json — fixed for this app on every
// instance it installs on (how the platform recognizes "this is an upgrade of
// app X" rather than a new app), so it is safe to use as a literal here.
const OWN_SCOPE = '07305aad6f904d17aa0477398a6dc02d'

export const nowAssistAnalyticsRead = Record({
    $id: Now.ID['privilege-now-assist-analytics-read'],
    table: 'sys_scope_privilege',
    data: {
        source_scope: OWN_SCOPE,
        target_scope: 'global',
        target_name: 'sn_entitlement_genai_assist_analytics',
        target_type: 'sys_db_object',
        operation: 'read',
        status: 'allowed',
    },
})
