import React, { useState } from 'react'
import type { Suite } from '../types'
import type { Strings } from '../i18n'

interface Props {
    suites: Suite[]
    onToggle: (code: string, visible: boolean) => void
    t: Strings
}

/**
 * Controls which suite cards appear on the dashboard, independent of whether
 * collection is enabled — for a suite that is correctly collecting a zero or
 * not-applicable result (e.g. RPA with no active robots) and is just noise.
 */
export default function SuiteSettings({ suites, onToggle, t }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="suite-settings">
            <button
                type="button"
                className="gear-button"
                aria-label={t.gearLabel}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                ⚙
            </button>

            {open ? (
                <div className="suite-settings-panel">
                    <div className="suite-settings-head">
                        <span>{t.cardsShown}</span>
                        <button type="button" className="suite-settings-close" onClick={() => setOpen(false)}>
                            {t.done}
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
                                        <span className="suite-settings-hint">{t.collectionOffHint}</span>
                                    ) : suite.data_status !== 'ok' ? (
                                        <span className="suite-settings-hint">
                                            {t.status[suite.data_status] ?? suite.data_status}
                                        </span>
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
