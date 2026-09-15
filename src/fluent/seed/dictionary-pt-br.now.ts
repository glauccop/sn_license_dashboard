import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

const FIRST_INSTALL = { installMethod: 'once' as const }

// Brazilian Portuguese table and field labels, for native list/form views.

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-table'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        language: 'pb',
        label: 'Suíte de Licenciamento',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-code'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'code',
        language: 'pb',
        label: 'Código',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-name'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'name',
        language: 'pb',
        label: 'Nome',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-unit'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'unit',
        language: 'pb',
        label: 'Unidade de Medida',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-counting_method'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'counting_method',
        language: 'pb',
        label: 'Método de Contagem',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-collection_enabled'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'collection_enabled',
        language: 'pb',
        label: 'Coleta Habilitada',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-dashboard_visible'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'dashboard_visible',
        language: 'pb',
        label: 'Visível no Painel',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-methodology'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'methodology',
        language: 'pb',
        label: 'Metodologia',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-display_order'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'display_order',
        language: 'pb',
        label: 'Ordem',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_suite-active'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_suite',
        element: 'active',
        language: 'pb',
        label: 'Ativo',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-table'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        language: 'pb',
        label: 'Fonte de Métrica',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-suite'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'suite',
        language: 'pb',
        label: 'Suíte',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-label'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'label',
        language: 'pb',
        label: 'Rótulo',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-source_table'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'source_table',
        language: 'pb',
        label: 'Tabela de Origem',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-product_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'product_field',
        language: 'pb',
        label: 'Campo do Produto',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-product_value'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'product_value',
        language: 'pb',
        label: 'Valor do Produto',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-category_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'category_field',
        language: 'pb',
        label: 'Campo de Categoria',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-count_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'count_field',
        language: 'pb',
        label: 'Campo de Contagem de Recursos',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-su_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'su_field',
        language: 'pb',
        label: 'Campo de Unidade de Assinatura',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-ratio_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'ratio_field',
        language: 'pb',
        label: 'Campo de Proporção',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-extra_filter'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'extra_filter',
        language: 'pb',
        label: 'Filtro Extra',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-date_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'date_field',
        language: 'pb',
        label: 'Campo de Data de Coleta',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-status_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'status_field',
        language: 'pb',
        label: 'Campo de Status do Job',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-entitled_field'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'entitled_field',
        language: 'pb',
        label: 'Campo de Flag de Entitlement',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-value_basis'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'value_basis',
        language: 'pb',
        label: 'Base de Valor',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_source-active'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_source',
        element: 'active',
        language: 'pb',
        label: 'Ativo',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-table'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        language: 'pb',
        label: 'Mapeamento de Role para Suíte',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-suite'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'suite',
        language: 'pb',
        label: 'Suíte',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-role'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'role',
        language: 'pb',
        label: 'Role',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-application_label'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'application_label',
        language: 'pb',
        label: 'Aplicação',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-role_type'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'role_type',
        language: 'pb',
        label: 'Tipo de Role',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-source'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'source',
        language: 'pb',
        label: 'Origem',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_role_map-active'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_role_map',
        element: 'active',
        language: 'pb',
        label: 'Ativo',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-table'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        language: 'pb',
        label: 'Direito Contratado',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-suite'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'suite',
        language: 'pb',
        label: 'Suíte',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-prod_code'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'prod_code',
        language: 'pb',
        label: 'Código do Produto',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-product_name'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'product_name',
        language: 'pb',
        label: 'Nome do Produto',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-sku_unit'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'sku_unit',
        language: 'pb',
        label: 'Unidade do SKU',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-contract_quantity'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'contract_quantity',
        language: 'pb',
        label: 'Quantidade Contratada',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-source_instance'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'source_instance',
        language: 'pb',
        label: 'Contratado Nesta Instância',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_entitlement-active'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_entitlement',
        element: 'active',
        language: 'pb',
        label: 'Ativo',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-table'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        language: 'pb',
        label: 'Registro Diário de Alocação',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-suite'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'suite',
        language: 'pb',
        label: 'Suíte',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-snapshot_date'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'snapshot_date',
        language: 'pb',
        label: 'Data do Registro',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-category'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'category',
        language: 'pb',
        label: 'Categoria',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-role_type'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'role_type',
        language: 'pb',
        label: 'Tipo de Role',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-application_label'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'application_label',
        language: 'pb',
        label: 'Aplicação',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-is_detail'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'is_detail',
        language: 'pb',
        label: 'Detalhe por Role',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-resource_count'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'resource_count',
        language: 'pb',
        label: 'Contagem de Recursos',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-su_count'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'su_count',
        language: 'pb',
        label: 'Unidades de Assinatura',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-allocated_count'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'allocated_count',
        language: 'pb',
        label: 'Usuários Alocados',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-active_365_count'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'active_365_count',
        language: 'pb',
        label: 'Usuários Ativos (365d)',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-su_ratio'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'su_ratio',
        language: 'pb',
        label: 'Proporção',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-source_job_status'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'source_job_status',
        language: 'pb',
        label: 'Status do Job de Origem',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-entitled'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'entitled',
        language: 'pb',
        label: 'Produto com Entitlement',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-data_status'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'data_status',
        language: 'pb',
        label: 'Status do Dado',
    },
})

Record({
    $id: Now.ID['doc-x_snc_lic_alloc_snapshot-error_message'],
    $meta: FIRST_INSTALL,
    table: 'sys_documentation',
    data: {
        name: 'x_snc_lic_alloc_snapshot',
        element: 'error_message',
        language: 'pb',
        label: 'Mensagem de Erro',
    },
})

