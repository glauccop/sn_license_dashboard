import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

/**
 * The dashboard's colours are its own property, not the instance's Next
 * Experience theme. A published, generic app should not carry any customer's
 * brand — these ship with a neutral default, and each customer instance sets
 * its own values.
 *
 * installMethod: 'once' — without it, every `now-sdk install` (an upgrade, not
 * just the first install) re-applies `value` below and silently overwrites
 * whatever colour the instance admin had set. 'once' applies the shipped
 * default only the first time this property is installed; an admin's later
 * edit on the instance survives every subsequent upgrade.
 */
const ONCE = { installMethod: 'once' as const }

export const themePrimary = Property({
    $id: Now.ID['property-theme-primary'],
    $meta: ONCE,
    name: 'x_snc_lic_alloc.theme.primary',
    type: 'color',
    value: '#1f2933',
    description: 'License Allocation Dashboard — header background colour.',
})

export const themeAccent = Property({
    $id: Now.ID['property-theme-accent'],
    $meta: ONCE,
    name: 'x_snc_lic_alloc.theme.accent',
    type: 'color',
    value: '#3d68c4',
    description: 'License Allocation Dashboard — accent colour for charts and highlights.',
})
