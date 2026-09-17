import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

/**
 * The dashboard's colours are its own property, not the instance's Next
 * Experience theme. They ship with this app's default brand; any instance can
 * override them from the Appearance module (see application-menu.now.ts).
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
    value: '#0070AF',
    description: 'License Allocation Dashboard — header background colour.',
})

export const themeAccent = Property({
    $id: Now.ID['property-theme-accent'],
    $meta: ONCE,
    name: 'x_snc_lic_alloc.theme.accent',
    type: 'color',
    value: '#F58220',
    description: 'License Allocation Dashboard — accent colour for charts and highlights.',
})
