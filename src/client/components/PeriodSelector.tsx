import React, { useState } from 'react'

interface Props {
    windows: number[]
    activeWindow: number | null
    onSelectWindow: (days: number) => void
    onSelectRange: (from: string, to: string) => void
}

const WINDOW_LABELS: Record<number, string> = {
    365: '1 year',
}

export default function PeriodSelector({ windows, activeWindow, onSelectWindow, onSelectRange }: Props) {
    const [custom, setCustom] = useState(false)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    function applyRange() {
        if (from && to) {
            onSelectRange(from, to)
        }
    }

    return (
        <div className="period-selector">
            <span className="period-label">Period</span>

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
                    {WINDOW_LABELS[days] ?? days + 'd'}
                </button>
            ))}

            <button
                type="button"
                className={'period-button' + (custom ? ' is-active' : '')}
                onClick={() => setCustom(!custom)}
            >
                Custom
            </button>

            {custom ? (
                <span className="period-range">
                    <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} aria-label="From" />
                    <span className="period-range-sep">to</span>
                    <input type="date" value={to} onChange={(e) => setTo(e.target.value)} aria-label="To" />
                    <button type="button" className="period-apply" disabled={!from || !to} onClick={applyRange}>
                        Apply
                    </button>
                </span>
            ) : null}
        </div>
    )
}
