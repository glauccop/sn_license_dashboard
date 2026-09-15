import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ChoiceColumn,
    BooleanColumn,
    IntegerColumn,
    ReferenceColumn,
    DateColumn,
} from '@servicenow/sdk/core'

/**
 * Stored at category grain rather than suite grain, so a suite total can always
 * be re-aggregated without recollecting history.
 */
export const x_snc_lic_alloc_snapshot = Table({
    name: 'x_snc_lic_alloc_snapshot',
    label: 'Daily Allocation Snapshot',
    display: 'category',
    schema: {
        suite: ReferenceColumn({
            label: 'Suite',
            referenceTable: 'x_snc_lic_alloc_suite',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        snapshot_date: DateColumn({
            label: 'Snapshot Date',
            mandatory: true,
        }),
        category: StringColumn({
            label: 'Category',
            maxLength: 200,
        }),
        role_type: StringColumn({
            label: 'Role Type',
            maxLength: 40,
        }),
        resource_count: IntegerColumn({
            label: 'Resource Count',
        }),
        su_count: IntegerColumn({
            label: 'Subscription Units',
        }),
        allocated_count: IntegerColumn({
            label: 'Allocated Users',
            hint: 'Users holding a mapped role on the collection date',
        }),
        active_365_count: IntegerColumn({
            label: 'Active Users (365d)',
            hint: 'Subset that also logged in within the last 365 days',
        }),
        su_ratio: StringColumn({
            label: 'Ratio',
            maxLength: 20,
        }),
        source_job_status: StringColumn({
            label: 'Source Job Status',
            maxLength: 60,
        }),
        entitled: BooleanColumn({
            label: 'Product Entitled',
        }),
        data_status: ChoiceColumn({
            label: 'Data Status',
            maxLength: 40,
            dropdown: 'dropdown_without_none',
            default: 'ok',
            choices: {
                ok: 'OK',
                no_data: 'No data',
                table_missing: 'Source table not present',
                not_measurable: 'Not measurable',
                error: 'Error',
            },
        }),
        error_message: StringColumn({
            label: 'Error Message',
            maxLength: 500,
        }),
    },
    index: [{ name: 'idx_suite_date', element: ['suite', 'snapshot_date'], unique: false }],
})
