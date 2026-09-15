import React, { useState } from 'react'
import type { Meta } from '../types'
import type { Strings } from '../i18n'

interface Props {
    meta: Meta | null
    t: Strings
}

export default function AppHeader({ meta, t }: Props) {
    const [showFull, setShowFull] = useState(false)

    return (
        <header className="app-header">
            <div className="app-header-main">
                {meta?.theme.logo_url ? (
                    <img className="app-logo" src={meta.theme.logo_url} alt={meta.theme.product_name} />
                ) : null}
                <div>
                    <h1>{t.appTitle}</h1>
                    <p className="app-subtitle">
                        {meta?.last_collected ? t.lastCollection(meta.last_collected) : t.noCollectionYet}
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
                {meta?.disclaimer_short ?? t.disclaimerFallback}
                <span className="disclaimer-more">{showFull ? t.disclaimerHide : t.disclaimerDetails}</span>
            </button>

            {showFull && meta ? <p className="disclaimer-full">{meta.disclaimer_full}</p> : null}
        </header>
    )
}
