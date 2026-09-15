import React from 'react'
import type { Suite } from '../types'

interface Props {
    suite: Suite
}

export default function SuiteDetail({ suite }: Props) {
    const rows = suite.categories.filter((row) => row.data_status === 'ok')
    const isRoleBased = suite.counting_method === 'role_based' || suite.counting_method === 'unrestricted'

    return (
        <section className="detail">
            <p className="detail-methodology">
                <span className="detail-methodology-label">How this is counted</span>
                {suite.methodology}
            </p>

            {rows.length > 0 ? (
                <table className="detail-table">
                    <thead>
                        <tr>
                            <th>{isRoleBased ? 'Role type' : 'Category'}</th>
                            {isRoleBased ? (
                                <>
                                    <th className="is-numeric">Allocated</th>
                                    <th className="is-numeric">Active (365d)</th>
                                    <th className="is-numeric">Reclaimable</th>
                                </>
                            ) : (
                                <>
                                    <th className="is-numeric">Resources</th>
                                    <th className="is-numeric">Ratio</th>
                                    <th className="is-numeric">Subscription units</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.category}>
                                <td>{row.category || '—'}</td>
                                {isRoleBased ? (
                                    <>
                                        <td className="is-numeric">{row.allocated_count.toLocaleString()}</td>
                                        <td className="is-numeric">{row.active_365_count.toLocaleString()}</td>
                                        <td className="is-numeric">
                                            {Math.max(0, row.allocated_count - row.active_365_count).toLocaleString()}
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="is-numeric">{row.resource_count.toLocaleString()}</td>
                                        <td className="is-numeric">{row.su_ratio || '—'}</td>
                                        <td className="is-numeric">{row.su_count.toLocaleString()}</td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="detail-empty">
                    Nothing collected for this suite yet. Enable collection on the suite record, then run the daily
                    collection job.
                </p>
            )}
        </section>
    )
}
