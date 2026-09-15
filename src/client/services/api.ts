import type { Meta, RoleBreakdown, Suite, Trend } from '../types'

declare global {
    interface Window {
        g_ck: string
    }
}

const BASE = '/api/x_snc_lic_alloc/dashboard'

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const response = await fetch(BASE + path, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-UserToken': window.g_ck,
        },
        body: body === undefined ? undefined : JSON.stringify(body),
    })

    if (!response.ok) {
        let detail = 'HTTP ' + response.status
        try {
            const errorBody = await response.json()
            detail = errorBody.error?.message || errorBody.error || detail
        } catch {
            // response had no JSON body; the status alone is the best available detail
        }
        throw new Error(detail)
    }

    const { result } = await response.json()
    return result as T
}

function get<T>(path: string): Promise<T> {
    return request<T>('GET', path)
}

export function fetchMeta(): Promise<Meta> {
    return get<Meta>('/meta')
}

export function fetchSuites(): Promise<{ suites: Suite[]; disclaimer: string }> {
    return get<{ suites: Suite[]; disclaimer: string }>('/suites')
}

export function fetchTrend(code: string, window: number | null, from?: string, to?: string): Promise<Trend> {
    const params = new URLSearchParams()
    if (from && to) {
        params.set('from', from)
        params.set('to', to)
    } else {
        params.set('window', String(window ?? 30))
    }
    return get<Trend>('/suites/' + encodeURIComponent(code) + '/trend?' + params.toString())
}

export function fetchRoleBreakdown(code: string): Promise<RoleBreakdown> {
    return get<RoleBreakdown>('/suites/' + encodeURIComponent(code) + '/roles')
}

export function setSuiteVisibility(code: string, visible: boolean): Promise<{ code: string; dashboard_visible: boolean }> {
    return request('PUT', '/suites/' + encodeURIComponent(code) + '/visibility', { visible: visible })
}
