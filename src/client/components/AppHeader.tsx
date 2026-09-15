import React, { useState } from 'react'
import type { Meta } from '../types'

interface Props {
    meta: Meta | null
}

export default function AppHeader({ meta }: Props) {
    const [showFull, setShowFull] = useState(false)

    return (
        <header className="app-header">
            <div className="app-header-main">
                {meta?.theme.logo_url ? (
                    <img className="app-logo" src={meta.theme.logo_url} alt={meta.theme.product_name} />
                ) : null}
                <div>
                    <h1>License Allocation Dashboard</h1>
                    <p className="app-subtitle">
                        {meta?.last_collected
                            ? 'Last collection ' + meta.last_collected
                            : 'No collection has run yet'}
                    </p>
                </div>
            </div>

            <button
                type="button"
                className="disclaimer-badge"
                aria-expanded={showFull}
                onClick={() => setShowFull(!showFull)}
            >
                <span className="disclaimer-dot" aria-hidden="true" />
                {meta?.disclaimer_short ?? 'Informational tracking reference.'}
                <span className="disclaimer-more">{showFull ? 'Hide' : 'Details'}</span>
            </button>

            {showFull && meta ? <p className="disclaimer-full">{meta.disclaimer_full}</p> : null}
        </header>
    )
}
