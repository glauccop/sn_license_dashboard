import React, { useState } from 'react'
import type { Strings } from '../i18n'

interface Props {
    windows: number[]
    activeWindow: number | null
    onSelectWindow: (days: number) => void
    onSelectRange: (from: string, to: string) => void
    t: Strings
}

export default function PeriodSelector({ windows, activeWindow, onSelectWindow, onSelectRange, t }: Props) {
    const [custom, setCustom] = useState(false)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const windowLabels: Record<number, string> = { 365: t.periodOneYear }

    function applyRange() {
        if (from && to) {
            onSelectRange(from, to)
        }
    }

    return (
        <div className="period-selector">
            <span className="period-label">{t.period}</span>

            {windows.map((days) => (
                <button
                    key={days}
                    type="button"
                    className={'period-button' + (!custom && activeWindow === days ? ' is-active' : '')}
                    onClick={() => {
                        setCustom(false)
                        onSelectWindow(days)
                    }}
                >
                    {windowLabels[days] ?? days + 'd'}
                </button>
            ))}

            <button
                type="button"
                className={'period-button' + (custom ? ' is-active' : '')}
                onClick={() => setCustom(!custom)}
            >
                {t.periodCustom}
            </button>

            {custom ? (
                <span className="period-range">
                    <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} aria-label={t.periodFrom} />
                    <span className="period-range-sep">{t.periodTo}</span>
                    <input type="date" value={to} onChange={(e) => setTo(e.target.value)} aria-label={t.periodTo} />
                    <button type="button" className="period-apply" disabled={!from || !to} onClick={applyRange}>
                        {t.periodApply}
                    </button>
                </span>
            ) : null}
        </div>
    )
}
