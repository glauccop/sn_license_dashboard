import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

/**
 * Shipped catalogue. Suites whose measurement is verified are enabled; the rest
 * ship disabled so a fresh install collects nothing it cannot explain.
 * Loaded on first install only, so admin edits survive upgrades.
 */
const FIRST_INSTALL = { installMethod: 'first install' as const }

/**
 * For records added in a later version, after the app is already installed on
 * an instance — 'first install' only loads when the app itself is installed
 * for the very first time, so it would never apply to these on an upgrade.
 */
const ONCE = { installMethod: 'once' as const }

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
        unit: 'unrestricted_user',
        counting_method: 'role_based',
        collection_enabled: true,
        display_order: 90,
        active: true,
        methodology:
            'Distinct users holding a Security Incident Response role on the collection date. The SIR entitlement itself is contracted as Unrestricted User — every active user of the instance, regardless of role — which is a much larger number shown under the Unrestricted Users suite. This figure is narrower and shows who actually uses SIR.',
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

export const suiteFsm = Record({
    $id: Now.ID['suite-fsm'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'fsm',
        name: 'Field Service Management',
        unit: 'fulfiller_user',
        counting_method: 'role_based',
        collection_enabled: true,
        display_order: 110,
        active: true,
        methodology:
            'Distinct users holding any Work Management or Field Service Management role mapped to this suite on the collection date. Same Fulfiller/Business Stakeholder rule as ITSM and SPM: a user holding both counts only as a Fulfiller.',
    },
})

export const suiteCsm = Record({
    $id: Now.ID['suite-csm'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'csm',
        name: 'Customer Service Management',
        unit: 'fulfiller_user',
        counting_method: 'role_based',
        collection_enabled: true,
        display_order: 120,
        active: true,
        methodology:
            'Distinct users holding any CSM agent or case-management role mapped to this suite on the collection date. External, self-service personas (Customer, Consumer, Partner, and similar contact-facing roles) are deliberately not mapped — those are not Fulfiller/Business Stakeholder seats, and their usage is measured by ServiceNow separately as CSM portal visits, a capacity metric this dashboard does not track.',
    },
})

export const suiteNowAssist = Record({
    $id: Now.ID['suite-now-assist'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_suite',
    data: {
        code: 'now_assist',
        name: 'Now Assist',
        unit: 'assist',
        counting_method: 'native_counts',
        collection_enabled: true,
        display_order: 130,
        active: true,
        methodology:
            'Total assists consumed, read directly from sn_entitlement_genai_assist_analytics, which Now Assist publishes itself. An assist is consumed per skill action, weighted by that skill’s own assist ratio — a summary can cost one assist, a multi-step agentic workflow can cost 25 or more. This is an account-level consumption figure, not a per-user count, and it accumulates across the current annual contract cycle rather than resetting daily.',
    },
})
