import React from 'react'
import type { Suite } from '../types'
import { STATUS_LABELS, UNIT_LABELS } from '../types'

interface Props {
    suites: Suite[]
    selected: string
    onSelect: (code: string) => void
}

function formatNumber(value: number): string {
    return value.toLocaleString()
}

function SuiteCard({ suite, isSelected, onSelect }: { suite: Suite; isSelected: boolean; onSelect: () => void }) {
    const hasContract = suite.contract_quantity > 0
    const usage = hasContract ? Math.min(100, Math.round((suite.consumption / suite.contract_quantity) * 100)) : 0
    const overCommitted = suite.overage > 0

    return (
        <button
            type="button"
            className={
                'suite-card' +
                (isSelected ? ' is-selected' : '') +
                (suite.collection_enabled ? '' : ' is-disabled') +
                (overCommitted ? ' is-over' : '')
            }
            onClick={onSelect}
        >
            <span className="suite-card-head">
                <span className="suite-name">{suite.name}</span>
                <span className={'suite-status status-' + suite.data_status}>
                    {suite.collection_enabled
                        ? STATUS_LABELS[suite.data_status] ?? suite.data_status
                        : 'Collection off'}
                </span>
            </span>

            <span className="suite-value">
                {suite.collection_enabled && suite.data_status === 'ok' ? formatNumber(suite.consumption) : '—'}
            </span>
            <span className="suite-unit">{UNIT_LABELS[suite.unit] ?? suite.unit}</span>

            {hasContract ? (
                <span className="suite-contract">
                    <span className="suite-bar">
                        <span
                            className="suite-bar-fill"
                            style={{ width: usage + '%' }}
                            aria-hidden="true"
                        />
                    </span>
                    <span className="suite-contract-text">
                        {formatNumber(suite.contract_quantity)} entitled
                        {overCommitted ? ' · ' + formatNumber(suite.overage) + ' over' : ''}
                    </span>
                </span>
            ) : (
                <span className="suite-contract-text is-muted">No entitlement recorded</span>
            )}

            {suite.reclaimable > 0 ? (
                <span className="suite-reclaimable">
                    {formatNumber(suite.reclaimable)} allocated without a login in 365 days
                </span>
            ) : null}
        </button>
    )
}

export default function SuiteGrid({ suites, selected, onSelect }: Props) {
    return (
        <div className="suite-grid">
            {suites.map((suite) => (
                <SuiteCard
                    key={suite.code}
                    suite={suite}
                    isSelected={suite.code === selected}
                    onSelect={() => onSelect(suite.code)}
                />
            ))}
        </div>
    )
}
