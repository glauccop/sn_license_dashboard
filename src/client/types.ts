export interface CategoryRow {
    category: string
    su_count: number
    resource_count: number
    allocated_count: number
    active_365_count: number
    su_ratio: string
    data_status: string
    source_job_status: string
}

export interface Suite {
    code: string
    name: string
    unit: string
    counting_method: string
    collection_enabled: boolean
    dashboard_visible: boolean
    methodology: string
    last_collected: string
    consumption: number
    allocated: number
    active_365: number
    reclaimable: number
    contract_quantity: number
    overage: number
    data_status: string
    categories: CategoryRow[]
}

export interface RoleBreakdownRow {
    role: string
    application: string
    role_type: string
    allocated: number
    active_365: number
    reclaimable: number
}

export interface RoleBreakdown {
    code: string
    name: string
    as_of: string
    roles: RoleBreakdownRow[]
}

export interface TrendPoint {
    date: string
    value: number
    allocated: number
    active_365: number
}

export interface Trend {
    code: string
    name: string
    unit: string
    from: string
    to: string
    contract_quantity: number
    points: TrendPoint[]
}

export interface Theme {
    primary: string
    accent: string
    header_text: string
    product_name: string
    logo_url: string
}

export interface Meta {
    language: 'en' | 'pb'
    disclaimer_short: string
    disclaimer_full: string
    last_collected: string
    windows: number[]
    theme: Theme
}
