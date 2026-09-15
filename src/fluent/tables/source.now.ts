import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

/**
 * Configures the generic reader that sums licensing counts a product already
 * publishes on the instance. Adding a new product is a data change, not code.
 */
export const x_snc_lic_alloc_source = Table({
    name: 'x_snc_lic_alloc_source',
    label: 'Metric Source',
    display: 'label',
    schema: {
        suite: ReferenceColumn({
            label: 'Suite',
            referenceTable: 'x_snc_lic_alloc_suite',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        label: StringColumn({
            label: 'Label',
            maxLength: 120,
            mandatory: true,
        }),
        source_table: StringColumn({
            label: 'Source Table',
            maxLength: 80,
            mandatory: true,
            hint: 'Table the product writes its licensing counts to, e.g. itom_lu_ci_counts',
        }),
        product_field: StringColumn({
            label: 'Product Field',
            maxLength: 80,
            hint: 'Field holding the product name, e.g. value_stream or application',
        }),
        product_value: StringColumn({
            label: 'Product Value',
            maxLength: 200,
            hint: 'Value identifying this product, e.g. Visibility',
        }),
        category_field: StringColumn({
            label: 'Category Field',
            maxLength: 80,
            hint: 'Field to group by, e.g. category or resource_category',
        }),
        count_field: StringColumn({
            label: 'Resource Count Field',
            maxLength: 80,
            hint: 'Field holding the raw resource count, e.g. count or resource_count',
        }),
        su_field: StringColumn({
            label: 'Subscription Unit Field',
            maxLength: 80,
            hint: 'Field holding the already-computed subscription units, e.g. su_count',
        }),
        ratio_field: StringColumn({
            label: 'Ratio Field',
            maxLength: 80,
            hint: 'Field holding the contractual ratio, e.g. su_ratio',
        }),
        extra_filter: StringColumn({
            label: 'Extra Filter',
            maxLength: 1000,
            hint: 'Encoded query appended to the read, e.g. is_aggregated=true',
        }),
        date_field: StringColumn({
            label: 'Collection Date Field',
            maxLength: 80,
            hint: 'Set when the source keeps history, e.g. last_aggregated. Only the most recent day is read.',
        }),
        status_field: StringColumn({
            label: 'Job Status Field',
            maxLength: 80,
            hint: 'Optional field reporting the product collection job status',
        }),
        entitled_field: StringColumn({
            label: 'Entitlement Flag Field',
            maxLength: 80,
            hint: 'Optional boolean field reporting whether the product is entitled',
        }),
        value_basis: ChoiceColumn({
            label: 'Value Basis',
            maxLength: 40,
            dropdown: 'dropdown_without_none',
            default: 'subscription_units',
            choices: {
                subscription_units: 'Subscription units',
                resource_count: 'Raw resource count',
            },
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
