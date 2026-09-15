import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

/**
 * The dashboard's colours are its own property, not the instance's Next
 * Experience theme. A published, generic app should not carry any customer's
 * brand — these ship with a neutral default, and each customer instance sets
 * its own values.
 */
export const themePrimary = Property({
    $id: Now.ID['property-theme-primary'],
    name: 'x_snc_lic_alloc.theme.primary',
    type: 'color',
    value: '#1f2933',
    description: 'License Allocation Dashboard — header background colour.',
})

export const themeAccent = Property({
    $id: Now.ID['property-theme-accent'],
    name: 'x_snc_lic_alloc.theme.accent',
    type: 'color',
    value: '#3d68c4',
    description: 'License Allocation Dashboard — accent colour for charts and highlights.',
})
