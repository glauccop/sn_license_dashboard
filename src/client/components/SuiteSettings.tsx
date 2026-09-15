import React, { useState } from 'react'
import type { Suite } from '../types'

interface Props {
    suites: Suite[]
    onToggle: (code: string, visible: boolean) => void
}

/**
 * Controls which suite cards appear on the dashboard, independent of whether
 * collection is enabled — for a suite that is correctly collecting a zero or
 * not-applicable result (e.g. RPA with no active robots) and is just noise.
 */
export default function SuiteSettings({ suites, onToggle }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="suite-settings">
            <button
                type="button"
                className="gear-button"
                aria-label="Choose which suite cards to show"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                ⚙
            </button>

            {open ? (
                <div className="suite-settings-panel">
                    <div className="suite-settings-head">
                        <span>Cards shown on the dashboard</span>
                        <button type="button" className="suite-settings-close" onClick={() => setOpen(false)}>
                            Done
                        </button>
                    </div>
                    <ul className="suite-settings-list">
                        {suites.map((suite) => (
                            <li key={suite.code}>
                                <label className="suite-settings-item">
                                    <input
                                        type="checkbox"
                                        checked={suite.dashboard_visible}
                                        onChange={(e) => onToggle(suite.code, e.target.checked)}
                                    />
                                    <span>{suite.name}</span>
                                    {!suite.collection_enabled ? (
                                        <span className="suite-settings-hint">collection off</span>
                                    ) : suite.data_status !== 'ok' ? (
                                        <span className="suite-settings-hint">{suite.data_status.replace(/_/g, ' ')}</span>
                                    ) : null}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}
