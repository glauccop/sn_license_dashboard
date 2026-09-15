import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

/**
 * The SDK does not create ACLs on install. Without these, the five tables fall
 * through to the platform's generic wildcard ACL, which happens to also require
 * `admin` today — but that is an accident of the wildcard, not a decision this
 * app made. These make the requirement explicit and are the extension point for
 * opening access to other roles later.
 *
 * Literal table/operation values throughout: the Fluent compiler resolves ACL
 * calls statically and cannot follow an array index into a string constant.
 */
const ADMIN = ['admin']

export const suiteRead = Acl({
    $id: Now.ID['acl-suite-read'],
    type: 'record',
    table: 'x_snc_lic_alloc_suite',
    operation: 'read',
    decisionType: 'allow',
    roles: ADMIN,
})
export const suiteCreate = Acl({
    $id: Now.ID['acl-suite-create'],
    type: 'record',
    table: 'x_snc_lic_alloc_suite',
    operation: 'create',
    decisionType: 'allow',
    roles: ADMIN,
})
export const suiteWrite = Acl({
    $id: Now.ID['acl-suite-write'],
    type: 'record',
    table: 'x_snc_lic_alloc_suite',
    operation: 'write',
    decisionType: 'allow',
    roles: ADMIN,
})
export const suiteDelete = Acl({
    $id: Now.ID['acl-suite-delete'],
    type: 'record',
    table: 'x_snc_lic_alloc_suite',
    operation: 'delete',
    decisionType: 'allow',
    roles: ADMIN,
})

export const sourceRead = Acl({
    $id: Now.ID['acl-source-read'],
    type: 'record',
    table: 'x_snc_lic_alloc_source',
    operation: 'read',
    decisionType: 'allow',
    roles: ADMIN,
})
export const sourceCreate = Acl({
    $id: Now.ID['acl-source-create'],
    type: 'record',
    table: 'x_snc_lic_alloc_source',
    operation: 'create',
    decisionType: 'allow',
    roles: ADMIN,
})
export const sourceWrite = Acl({
    $id: Now.ID['acl-source-write'],
    type: 'record',
    table: 'x_snc_lic_alloc_source',
    operation: 'write',
    decisionType: 'allow',
    roles: ADMIN,
})
export const sourceDelete = Acl({
    $id: Now.ID['acl-source-delete'],
    type: 'record',
    table: 'x_snc_lic_alloc_source',
    operation: 'delete',
    decisionType: 'allow',
    roles: ADMIN,
})

export const roleMapRead = Acl({
    $id: Now.ID['acl-role-map-read'],
    type: 'record',
    table: 'x_snc_lic_alloc_role_map',
    operation: 'read',
    decisionType: 'allow',
    roles: ADMIN,
})
export const roleMapCreate = Acl({
    $id: Now.ID['acl-role-map-create'],
    type: 'record',
    table: 'x_snc_lic_alloc_role_map',
    operation: 'create',
    decisionType: 'allow',
    roles: ADMIN,
})
export const roleMapWrite = Acl({
    $id: Now.ID['acl-role-map-write'],
    type: 'record',
    table: 'x_snc_lic_alloc_role_map',
    operation: 'write',
    decisionType: 'allow',
    roles: ADMIN,
})
export const roleMapDelete = Acl({
    $id: Now.ID['acl-role-map-delete'],
    type: 'record',
    table: 'x_snc_lic_alloc_role_map',
    operation: 'delete',
    decisionType: 'allow',
    roles: ADMIN,
})

export const entitlementRead = Acl({
    $id: Now.ID['acl-entitlement-read'],
    type: 'record',
    table: 'x_snc_lic_alloc_entitlement',
    operation: 'read',
    decisionType: 'allow',
    roles: ADMIN,
})
export const entitlementCreate = Acl({
    $id: Now.ID['acl-entitlement-create'],
    type: 'record',
    table: 'x_snc_lic_alloc_entitlement',
    operation: 'create',
    decisionType: 'allow',
    roles: ADMIN,
})
export const entitlementWrite = Acl({
    $id: Now.ID['acl-entitlement-write'],
    type: 'record',
    table: 'x_snc_lic_alloc_entitlement',
    operation: 'write',
    decisionType: 'allow',
    roles: ADMIN,
})
export const entitlementDelete = Acl({
    $id: Now.ID['acl-entitlement-delete'],
    type: 'record',
    table: 'x_snc_lic_alloc_entitlement',
    operation: 'delete',
    decisionType: 'allow',
    roles: ADMIN,
})

export const snapshotRead = Acl({
    $id: Now.ID['acl-snapshot-read'],
    type: 'record',
    table: 'x_snc_lic_alloc_snapshot',
    operation: 'read',
    decisionType: 'allow',
    roles: ADMIN,
})
export const snapshotCreate = Acl({
    $id: Now.ID['acl-snapshot-create'],
    type: 'record',
    table: 'x_snc_lic_alloc_snapshot',
    operation: 'create',
    decisionType: 'allow',
    roles: ADMIN,
})
export const snapshotWrite = Acl({
    $id: Now.ID['acl-snapshot-write'],
    type: 'record',
    table: 'x_snc_lic_alloc_snapshot',
    operation: 'write',
    decisionType: 'allow',
    roles: ADMIN,
})
export const snapshotDelete = Acl({
    $id: Now.ID['acl-snapshot-delete'],
    type: 'record',
    table: 'x_snc_lic_alloc_snapshot',
    operation: 'delete',
    decisionType: 'allow',
    roles: ADMIN,
})
