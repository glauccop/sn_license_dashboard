import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import {
    suiteItomVisibility,
    suiteSam,
    suiteHam,
    suiteRpa,
    suiteVr,
    suiteSir,
} from './suites.now'

/**
 * Reader configuration for the licensing counts each product already publishes.
 * Field names below were verified against a live instance. A product that is not
 * installed simply reports 'Source table not present' and is skipped.
 */
const FIRST_INSTALL = { installMethod: 'first install' as const }

Record({
    $id: Now.ID['source-itom-visibility'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_source',
    data: {
        suite: suiteItomVisibility,
        label: 'ITOM Visibility CI counts',
        source_table: 'itom_lu_ci_counts',
        product_field: 'value_stream',
        product_value: 'Visibility',
        category_field: 'category',
        count_field: 'count',
        su_field: 'su_count',
        ratio_field: 'su_ratio',
        extra_filter: 'is_aggregated=true',
        date_field: 'last_aggregated',
        value_basis: 'subscription_units',
        active: true,
    },
})

Record({
    $id: Now.ID['source-sam'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_source',
    data: {
        suite: suiteSam,
        label: 'SAM resource counts',
        source_table: 'itam_licensing_resource_counts',
        product_field: 'application',
        product_value: 'Software Asset Management',
        category_field: 'resource_category',
        count_field: 'resource_count',
        su_field: 'su_count',
        ratio_field: 'su_ratio',
        status_field: 'licensing_job_status',
        entitled_field: 'active_subscription_entitlement',
        extra_filter: 'is_aggregated=true',
        value_basis: 'subscription_units',
        active: true,
    },
})

Record({
    $id: Now.ID['source-ham'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_source',
    data: {
        suite: suiteHam,
        label: 'HAM resource counts',
        source_table: 'itam_licensing_resource_counts',
        product_field: 'application',
        product_value: 'Hardware Asset Management',
        category_field: 'resource_category',
        count_field: 'resource_count',
        su_field: 'su_count',
        ratio_field: 'su_ratio',
        status_field: 'licensing_job_status',
        entitled_field: 'active_subscription_entitlement',
        extra_filter: 'is_aggregated=true',
        value_basis: 'subscription_units',
        active: true,
    },
})

Record({
    $id: Now.ID['source-rpa'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_source',
    data: {
        suite: suiteRpa,
        label: 'Unattended robots utilized',
        source_table: 'sn_rpa_fdn_license_distribution',
        count_field: 'unattended_utilized',
        value_basis: 'resource_count',
        active: true,
    },
})

Record({
    $id: Now.ID['source-vr'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_source',
    data: {
        suite: suiteVr,
        label: 'VR subscription units by category',
        source_table: 'sn_vul_licensing_su_usage_by_cat',
        category_field: 'category',
        count_field: 'ci_count',
        su_field: 'subscription_units',
        ratio_field: 'subscription_unit_ratio',
        value_basis: 'subscription_units',
        active: true,
    },
})

Record({
    $id: Now.ID['source-sir'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_source',
    data: {
        suite: suiteSir,
        label: 'Risk and security usage counts',
        source_table: 'sn_irm_shared_cmn_aggregated_usage_count',
        category_field: 'licensable_application_family',
        count_field: 'usage_count',
        date_field: 'aggregation_date',
        value_basis: 'resource_count',
        active: true,
    },
})
