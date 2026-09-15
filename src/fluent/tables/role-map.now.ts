import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_snc_lic_alloc_role_map = Table({
    name: 'x_snc_lic_alloc_role_map',
    label: 'Role to Suite Mapping',
    display: 'role',
    schema: {
        suite: ReferenceColumn({
            label: 'Suite',
            referenceTable: 'x_snc_lic_alloc_suite',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        role: ReferenceColumn({
            label: 'Role',
            referenceTable: 'sys_user_role',
            mandatory: true,
        }),
        application_label: StringColumn({
            label: 'Application',
            maxLength: 120,
            hint: 'Application grouping this role belongs to, as reported on usage reports',
        }),
        role_type: ChoiceColumn({
            label: 'Role Type',
            maxLength: 40,
            dropdown: 'dropdown_without_none',
            default: 'fulfiller',
            choices: {
                fulfiller: 'Fulfiller',
                business_stakeholder: 'Business Stakeholder',
            },
        }),
        source: ChoiceColumn({
            label: 'Source',
            maxLength: 40,
            dropdown: 'dropdown_without_none',
            default: 'default',
            choices: {
                default: 'Shipped default',
                manual: 'Added by admin',
            },
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
