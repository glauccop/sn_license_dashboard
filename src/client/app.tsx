import React, { useEffect, useState } from 'react'
import './app.css'
import AppHeader from './components/AppHeader'
import PeriodSelector from './components/PeriodSelector'
import SuiteGrid from './components/SuiteGrid'
import SuiteSettings from './components/SuiteSettings'
import SuiteDetail from './components/SuiteDetail'
import TrendChart from './components/TrendChart'
import { fetchMeta, fetchSuites, fetchTrend, setSuiteVisibility } from './services/api'
import type { Meta, Suite, Trend } from './types'
import { stringsFor } from './i18n'

const DEFAULT_WINDOWS = [7, 14, 30, 60, 90, 180, 240, 365]

export default function App() {
    const [meta, setMeta] = useState<Meta | null>(null)
    const [suites, setSuites] = useState<Suite[]>([])
    const [selected, setSelected] = useState('')
    const [trend, setTrend] = useState<Trend | null>(null)
    const [window_, setWindow] = useState<number | null>(30)
    const [range, setRange] = useState<{ from: string; to: string } | null>(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([fetchMeta(), fetchSuites()])
            .then(([metaResult, suitesResult]) => {
                setMeta(metaResult)
                setSuites(suitesResult.suites)
                const visible = suitesResult.suites.filter((s) => s.dashboard_visible)
                const pool = visible.length > 0 ? visible : suitesResult.suites
                const firstCollected = pool.find((s) => s.collection_enabled)
                setSelected(firstCollected?.code ?? pool[0]?.code ?? '')
            })
            .catch((e: Error) => setError(e.message))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (!selected) {
            return
        }
        fetchTrend(selected, window_, range?.from, range?.to)
            .then(setTrend)
            .catch((e: Error) => setError(e.message))
    }, [selected, window_, range])

    const theme = meta?.theme
    const style = theme
        ? ({
              '--licalloc-primary': theme.primary,
              '--licalloc-accent': theme.accent,
              '--licalloc-header-text': theme.header_text,
          } as React.CSSProperties)
        : undefined

    const t = stringsFor(meta?.language)
    const activeSuite = suites.find((s) => s.code === selected)
    const visibleSuites = suites.filter((s) => s.dashboard_visible)

    function handleToggleVisibility(code: string, visible: boolean) {
        setSuites((prev) => prev.map((s) => (s.code === code ? { ...s, dashboard_visible: visible } : s)))
        setSuiteVisibility(code, visible).catch((e: Error) => {
            setError(e.message)
            // Roll back the optimistic update — the server did not persist it.
            setSuites((prev) => prev.map((s) => (s.code === code ? { ...s, dashboard_visible: !visible } : s)))
        })
    }

    return (
        <div className="app" style={style}>
            <AppHeader meta={meta} t={t} />

            {error ? <div className="app-error">{error}</div> : null}
            {loading ? <div className="app-loading">Loading allocation data…</div> : null}

            {!loading && suites.length > 0 ? (
                <>
                    <div className="suite-toolbar">
                        <SuiteSettings suites={suites} onToggle={handleToggleVisibility} t={t} />
                    </div>

                    <SuiteGrid suites={visibleSuites} selected={selected} onSelect={setSelected} t={t} />

                    <PeriodSelector
                        windows={meta?.windows ?? DEFAULT_WINDOWS}
                        activeWindow={range ? null : window_}
                        onSelectWindow={(days) => {
                            setRange(null)
                            setWindow(days)
                        }}
                        onSelectRange={(from, to) => {
                            setWindow(null)
                            setRange({ from, to })
                        }}
                        t={t}
                    />

                    {trend ? <TrendChart trend={trend} t={t} /> : null}
                    {activeSuite ? <SuiteDetail suite={activeSuite} t={t} /> : null}
                </>
            ) : null}
        </div>
    )
}
