import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const licAllocAdmin = Role({
    $id: Now.ID['role-admin'],
    name: 'x_snc_lic_alloc.admin',
    description: 'Configures license suites, metric sources, role mappings and entitlements.',
})

export const licAllocViewer = Role({
    $id: Now.ID['role-viewer'],
    name: 'x_snc_lic_alloc.viewer',
    description: 'Views the license allocation dashboard.',
})
