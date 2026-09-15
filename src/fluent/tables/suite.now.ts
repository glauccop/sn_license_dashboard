import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, BooleanColumn, IntegerColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_snc_lic_alloc_suite = Table({
    name: 'x_snc_lic_alloc_suite',
    label: 'License Suite',
    display: 'name',
    schema: {
        code: StringColumn({
            label: 'Code',
            maxLength: 40,
            mandatory: true,
            unique: true,
        }),
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
            mandatory: true,
        }),
        unit: ChoiceColumn({
            label: 'Unit of Measure',
            maxLength: 40,
            dropdown: 'dropdown_without_none',
            default: 'subscription_unit',
            choices: {
                subscription_unit: 'Subscription Unit',
                fulfiller_user: 'Fulfiller User',
                user: 'User',
                unrestricted_user: 'Unrestricted User',
                device: 'Device',
                unattended_robot: 'Unattended Robot',
                not_countable: 'Not Countable',
            },
        }),
        counting_method: ChoiceColumn({
            label: 'Counting Method',
            maxLength: 40,
            dropdown: 'dropdown_without_none',
            default: 'native_counts',
            choices: {
                native_counts: 'Product-published counts',
                role_based: 'Role-based user count',
                unrestricted: 'All active users',
                not_measurable: 'Not measurable on-instance',
            },
        }),
        collection_enabled: BooleanColumn({
            label: 'Collection Enabled',
            default: false,
        }),
        dashboard_visible: BooleanColumn({
            label: 'Visible on Dashboard',
            default: true,
            hint: 'Hides the card from the dashboard grid without affecting collection — for a suite that is correctly collecting a zero or not-applicable result',
        }),
        methodology: MultiLineTextColumn({
            label: 'Methodology',
            maxLength: 1000,
        }),
        display_order: IntegerColumn({
            label: 'Order',
            default: 100,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
    index: [{ name: 'idx_code', element: 'code', unique: true }],
})
