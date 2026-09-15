import type { Meta, Suite, Trend } from '../types'

declare global {
    interface Window {
        g_ck: string
    }
}

const BASE = '/api/x_snc_lic_alloc/dashboard'

async function get<T>(path: string): Promise<T> {
    const response = await fetch(BASE + path, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-UserToken': window.g_ck,
        },
    })

    if (!response.ok) {
        let detail = 'HTTP ' + response.status
        try {
            const body = await response.json()
            detail = body.error?.message || body.error || detail
        } catch {
            // response had no JSON body; the status alone is the best available detail
        }
        throw new Error(detail)
    }

    const { result } = await response.json()
    return result as T
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
