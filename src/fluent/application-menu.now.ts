import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

/**
 * Gated on platform `admin` only for now. `x_snc_lic_alloc.admin`/`.viewer`
 * exist (see roles.now.ts) as the extension point for when this opens up to
 * product-specific admin roles (usage_admin, itil_admin, sam_admin, etc.) —
 * not wired into gating yet.
 */
const MENU_ROLES = ['admin']

export const licAllocMenu = ApplicationMenu({
    $id: Now.ID['menu-license-allocation'],
    title: 'License Allocation',
    hint: 'Daily license allocation tracking for this instance',
    description: 'Historical view of license allocation collected daily on this instance.',
    roles: MENU_ROLES,
    active: true,
    order: 100,
})

Record({
    $id: Now.ID['module-dashboard'],
    table: 'sys_app_module',
    data: {
        title: 'Dashboard',
        application: licAllocMenu,
        link_type: 'DIRECT',
        query: 'x_snc_lic_alloc_dashboard.do',
        hint: 'Allocation by suite, with history',
        roles: MENU_ROLES,
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['module-suites'],
    table: 'sys_app_module',
    data: {
        title: 'Product Collection',
        application: licAllocMenu,
        link_type: 'LIST',
        name: 'x_snc_lic_alloc_suite',
        hint: 'Turn daily collection on or off per product',
        roles: MENU_ROLES,
        active: true,
        order: 200,
    },
})

Record({
    $id: Now.ID['module-sources'],
    table: 'sys_app_module',
    data: {
        title: 'Metric Sources',
        application: licAllocMenu,
        link_type: 'LIST',
        name: 'x_snc_lic_alloc_source',
        hint: 'Which table each product publishes its licensing counts to',
        roles: MENU_ROLES,
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['module-role-map'],
    table: 'sys_app_module',
    data: {
        title: 'Role to Suite Mapping',
        application: licAllocMenu,
        link_type: 'LIST',
        name: 'x_snc_lic_alloc_role_map',
        hint: 'Link a role to the suite it consumes',
        roles: MENU_ROLES,
        active: true,
        order: 400,
    },
})

Record({
    $id: Now.ID['module-entitlements'],
    table: 'sys_app_module',
    data: {
        title: 'Entitlements',
        application: licAllocMenu,
        link_type: 'LIST',
        name: 'x_snc_lic_alloc_entitlement',
        hint: 'Contracted quantities, entered from your own subscription documents',
        roles: MENU_ROLES,
        active: true,
        order: 500,
    },
})

Record({
    $id: Now.ID['module-snapshots'],
    table: 'sys_app_module',
    data: {
        title: 'Daily Snapshots',
        application: licAllocMenu,
        link_type: 'LIST',
        name: 'x_snc_lic_alloc_snapshot',
        hint: 'Raw collected rows, for auditing a number on the dashboard',
        roles: MENU_ROLES,
        active: true,
        order: 600,
    },
})
