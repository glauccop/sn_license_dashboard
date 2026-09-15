import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

/**
 * Without this, the three routes fall back to the OOB "Scripted REST External
 * Default" ACL, which only blocks external users and requires no role — any
 * authenticated internal user could read license allocation data.
 */
export const dashboardApiAcl = Acl({
    $id: Now.ID['acl-dashboard-rest'],
    name: 'dashboard',
    type: 'rest_endpoint',
    operation: 'execute',
    decisionType: 'allow',
    roles: ['admin'],
    securityAttribute: 'user_is_authenticated',
})
