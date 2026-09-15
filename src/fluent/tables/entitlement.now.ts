import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core'

/**
 * Ships empty. Contract quantities are customer-specific and are entered by
 * each organization from its own subscription documents.
 */
export const x_snc_lic_alloc_entitlement = Table({
    name: 'x_snc_lic_alloc_entitlement',
    label: 'Entitlement',
    display: 'product_name',
    schema: {
        suite: ReferenceColumn({
            label: 'Suite',
            referenceTable: 'x_snc_lic_alloc_suite',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        prod_code: StringColumn({
            label: 'Product Code',
            maxLength: 40,
        }),
        product_name: StringColumn({
            label: 'Product Name',
            maxLength: 200,
            mandatory: true,
        }),
        sku_unit: StringColumn({
            label: 'SKU Unit',
            maxLength: 80,
        }),
        contract_quantity: IntegerColumn({
            label: 'Contract Quantity',
            mandatory: true,
        }),
        source_instance: StringColumn({
            label: 'Contracted On Instance',
            maxLength: 100,
            hint: 'Instance the entitlement is contracted for, when it differs from this one',
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
