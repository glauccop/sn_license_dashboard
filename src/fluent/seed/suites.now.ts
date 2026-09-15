import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

/**
 * Shipped catalogue. Suites whose measurement is verified are enabled; the rest
 * ship disabled so a fresh install collects nothing it cannot explain.
 * Loaded on first install only, so admin edits survive upgrades.
 */
const FIRST_INSTALL = { installMethod: 'first install' as const }

export const suiteItsm = Record({
    $id: Now.ID['suite-itsm'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'itsm',
        name: 'IT Service Management',
        unit: 'fulfiller_user',
        counting_method: 'role_based',
        collection_enabled: true,
        display_order: 10,
        active: true,
        methodology:
            'Distinct users holding any role mapped to this suite on the collection date. A user holding several mapped roles counts once, and a user who is both a fulfiller and a business stakeholder counts only as a fulfiller.',
    },
})

export const suiteSpm = Record({
    $id: Now.ID['suite-spm'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'spm',
        name: 'Strategic Portfolio Management',
        unit: 'user',
        counting_method: 'role_based',
        collection_enabled: true,
        display_order: 20,
        active: true,
        methodology:
            'Distinct users holding any role mapped to this suite on the collection date. Note that ServiceNow defines the SPM unit by right of access, which is broader than role possession.',
    },
})

export const suiteItomVisibility = Record({
    $id: Now.ID['suite-itom-visibility'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'itom_visibility',
        name: 'ITOM Visibility',
        unit: 'subscription_unit',
        counting_method: 'native_counts',
        collection_enabled: true,
        display_order: 30,
        active: true,
        methodology:
            'Subscription units ITOM Visibility publishes in itom_lu_ci_counts, summed across CI categories for the most recent collection. Ratios come from the product itself. ServiceNow bills on a 90-day average of daily counts, so this daily figure will differ.',
    },
})

export const suiteSam = Record({
    $id: Now.ID['suite-sam'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'sam',
        name: 'Software Asset Management',
        unit: 'subscription_unit',
        counting_method: 'native_counts',
        collection_enabled: true,
        display_order: 40,
        active: true,
        methodology:
            'Subscription units Software Asset Management publishes in itam_licensing_resource_counts, summed across resource categories. Ratios come from the product itself.',
    },
})

export const suiteHam = Record({
    $id: Now.ID['suite-ham'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'ham',
        name: 'Hardware Asset Management',
        unit: 'subscription_unit',
        counting_method: 'native_counts',
        collection_enabled: true,
        display_order: 50,
        active: true,
        methodology:
            'Subscription units Hardware Asset Management publishes in itam_licensing_resource_counts, summed across resource categories. Ratios come from the product itself.',
    },
})

export const suiteUnrestricted = Record({
    $id: Now.ID['suite-unrestricted'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'unrestricted',
        name: 'Unrestricted Users',
        unit: 'unrestricted_user',
        counting_method: 'unrestricted',
        collection_enabled: true,
        display_order: 60,
        active: true,
        methodology:
            'All active users with a user ID that are not web-service-only accounts, regardless of role. This is the universe products metered as Unrestricted User draw from.',
    },
})

export const suiteRpa = Record({
    $id: Now.ID['suite-rpa'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'rpa',
        name: 'Robotic Process Automation',
        unit: 'unattended_robot',
        counting_method: 'native_counts',
        collection_enabled: false,
        display_order: 70,
        active: true,
        methodology:
            'Unattended robots utilized, read from the RPA Hub robot license distribution record. RPA licensing is pool allocation per domain rather than usage metering.',
    },
})

export const suiteVr = Record({
    $id: Now.ID['suite-vr'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'vr',
        name: 'Vulnerability Response',
        unit: 'subscription_unit',
        counting_method: 'native_counts',
        collection_enabled: false,
        display_order: 80,
        active: true,
        methodology:
            'Subscription units the Vulnerability Response licensing application publishes by category. ServiceNow meters VR subscription units over a 30-day window, so this daily figure will differ.',
    },
})

export const suiteSir = Record({
    $id: Now.ID['suite-sir'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'sir',
        name: 'Security Incident Response',
        unit: 'subscription_unit',
        counting_method: 'native_counts',
        collection_enabled: false,
        display_order: 90,
        active: true,
        methodology:
            'Usage counts the shared risk and security licensing application publishes per application family. Aggregated monthly by the product, so narrow the source to the relevant family before enabling.',
    },
})

export const suiteAppEngine = Record({
    $id: Now.ID['suite-app-engine'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'app_engine',
        name: 'App Engine',
        unit: 'not_countable',
        counting_method: 'not_measurable',
        collection_enabled: false,
        display_order: 100,
        active: true,
        methodology:
            'No on-instance consumption figure. App Engine attach SKUs are priced as a percentage of net spend, which is not a countable quantity. Only the recorded entitlement is shown.',
    },
})
