import React, { useEffect, useState } from 'react'
import './app.css'
import AppHeader from './components/AppHeader'
import PeriodSelector from './components/PeriodSelector'
import SuiteGrid from './components/SuiteGrid'
import SuiteDetail from './components/SuiteDetail'
import TrendChart from './components/TrendChart'
import { fetchMeta, fetchSuites, fetchTrend } from './services/api'
import type { Meta, Suite, Trend } from './types'

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
                const firstCollected = suitesResult.suites.find((s) => s.collection_enabled)
                setSelected(firstCollected?.code ?? suitesResult.suites[0]?.code ?? '')
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

    const activeSuite = suites.find((s) => s.code === selected)

    return (
        <div className="app" style={style}>
            <AppHeader meta={meta} />

            {error ? <div className="app-error">{error}</div> : null}
            {loading ? <div className="app-loading">Loading allocation data…</div> : null}

            {!loading && suites.length > 0 ? (
                <>
                    <SuiteGrid suites={suites} selected={selected} onSelect={setSelected} />

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
                    />

                    {trend ? <TrendChart trend={trend} /> : null}
                    {activeSuite ? <SuiteDetail suite={activeSuite} /> : null}
                </>
            ) : null}
        </div>
    )
}
