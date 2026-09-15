import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

const FIRST_INSTALL = { installMethod: 'once' as const }

// Brazilian Portuguese choice labels for the app's own internal choice fields.
// SKU/unit-of-measure vocabulary (Subscription Unit, Fulfiller User, Fulfiller,
// Business Stakeholder, etc.) is left in English on purpose — those are the exact
// contractual terms on a ServiceNow quote, and translating them would make the
// dashboard harder to reconcile against the customer's own paperwork.

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_suite-counting_method-native_counts'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'counting_method',
        value: 'native_counts',
        language: 'pb',
        label: 'Contagens publicadas pelo produto',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_suite-counting_method-role_based'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'counting_method',
        value: 'role_based',
        language: 'pb',
        label: 'Contagem de usuários por role',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_suite-counting_method-unrestricted'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'counting_method',
        value: 'unrestricted',
        language: 'pb',
        label: 'Todos os usuários ativos',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_suite-counting_method-not_measurable'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'counting_method',
        value: 'not_measurable',
        language: 'pb',
        label: 'Não mensurável nesta instância',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_role_map-source-default'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'source',
        value: 'default',
        language: 'pb',
        label: 'Padrão do produto',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_role_map-source-manual'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'source',
        value: 'manual',
        language: 'pb',
        label: 'Adicionado pelo admin',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_source-value_basis-subscription_units'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'value_basis',
        value: 'subscription_units',
        language: 'pb',
        label: 'Unidades de assinatura',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_source-value_basis-resource_count'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'value_basis',
        value: 'resource_count',
        language: 'pb',
        label: 'Contagem bruta de recursos',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_snapshot-data_status-ok'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'data_status',
        value: 'ok',
        language: 'pb',
        label: 'OK',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_snapshot-data_status-no_data'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'data_status',
        value: 'no_data',
        language: 'pb',
        label: 'Sem dados',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_snapshot-data_status-table_missing'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'data_status',
        value: 'table_missing',
        language: 'pb',
        label: 'Tabela de origem não presente',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_snapshot-data_status-not_measurable'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'data_status',
        value: 'not_measurable',
        language: 'pb',
        label: 'Não mensurável',
    },
})

Record({
    $id: Now.ID['choice-x_snc_lic_alloc_snapshot-data_status-error'],
    $meta: FIRST_INSTALL,
    table: 'sys_choice',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'data_status',
        value: 'error',
        language: 'pb',
        label: 'Erro',
    },
})

