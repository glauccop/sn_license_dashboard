import React, { useState } from 'react'
import type { Trend } from '../types'
import { UNIT_LABELS } from '../types'

interface Props {
    trend: Trend
}

const WIDTH = 900
const HEIGHT = 260
const PAD = { top: 16, right: 16, bottom: 28, left: 56 }

export default function TrendChart({ trend }: Props) {
    const [hover, setHover] = useState<number | null>(null)

    const points = trend.points
    if (points.length === 0) {
        return (
            <div className="chart-empty">
                No collections in this period yet. The dashboard fills in as the daily job runs.
            </div>
        )
    }

    const plotWidth = WIDTH - PAD.left - PAD.right
    const plotHeight = HEIGHT - PAD.top - PAD.bottom

    const values = points.map((p) => p.value)
    const contract = trend.contract_quantity
    const maxValue = Math.max(...values, contract, 1)
    const ceiling = maxValue * 1.1

    const x = (i: number) => PAD.left + (points.length === 1 ? plotWidth / 2 : (i / (points.length - 1)) * plotWidth)
    const y = (value: number) => PAD.top + plotHeight - (value / ceiling) * plotHeight

    const linePath = points.map((p, i) => (i === 0 ? 'M' : 'L') + x(i) + ' ' + y(p.value)).join(' ')
    const areaPath =
        linePath + ' L' + x(points.length - 1) + ' ' + (PAD.top + plotHeight) + ' L' + x(0) + ' ' + (PAD.top + plotHeight) + ' Z'

    const ticks = [0, 0.5, 1].map((fraction) => Math.round(ceiling * fraction))
    const labelEvery = Math.max(1, Math.ceil(points.length / 8))
    const active = hover != null ? points[hover] : null

    return (
        <div className="chart">
            <div className="chart-head">
                <h3>{trend.name}</h3>
                <span className="chart-unit">{UNIT_LABELS[trend.unit] ?? trend.unit}</span>
            </div>

            <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="chart-svg" role="img">
                {ticks.map((tick) => (
                    <g key={tick}>
                        <line className="chart-gridline" x1={PAD.left} x2={WIDTH - PAD.right} y1={y(tick)} y2={y(tick)} />
                        <text className="chart-axis-label" x={PAD.left - 8} y={y(tick) + 4} textAnchor="end">
                            {tick.toLocaleString()}
                        </text>
                    </g>
                ))}

                {contract > 0 && contract <= ceiling ? (
                    <g>
                        <line
                            className="chart-contract-line"
                            x1={PAD.left}
                            x2={WIDTH - PAD.right}
                            y1={y(contract)}
                            y2={y(contract)}
                        />
                        <text className="chart-contract-label" x={WIDTH - PAD.right} y={y(contract) - 6} textAnchor="end">
                            Entitled {contract.toLocaleString()}
                        </text>
                    </g>
                ) : null}

                <path className="chart-area" d={areaPath} />
                <path className="chart-line" d={linePath} />

                {points.map((point, i) => (
                    <circle
                        key={point.date}
                        className={'chart-dot' + (hover === i ? ' is-hover' : '')}
                        cx={x(i)}
                        cy={y(point.value)}
                        r={hover === i ? 5 : 3}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                    />
                ))}

                {points.map((point, i) =>
                    i % labelEvery === 0 ? (
                        <text
                            key={'label-' + point.date}
                            className="chart-axis-label"
                            x={x(i)}
                            y={HEIGHT - 8}
                            textAnchor="middle"
                        >
                            {point.date.slice(5)}
                        </text>
                    ) : null
                )}
            </svg>

            <div className="chart-readout">
                {active ? (
                    <>
                        <strong>{active.date}</strong>
                        <span>{active.value.toLocaleString()} {UNIT_LABELS[trend.unit] ?? trend.unit}</span>
                        {active.allocated > 0 ? (
                            <span>
                                {active.allocated.toLocaleString()} allocated · {active.active_365.toLocaleString()} with
                                a login in 365 days
                            </span>
                        ) : null}
                    </>
                ) : (
                    <span className="is-muted">
                        {points.length} daily collection{points.length === 1 ? '' : 's'} between {trend.from} and{' '}
                        {trend.to}
                    </span>
                )}
            </div>
        </div>
    )
}
