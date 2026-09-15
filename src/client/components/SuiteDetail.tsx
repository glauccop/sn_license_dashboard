import React, { useEffect, useState } from 'react'
import type { RoleBreakdownRow, Suite } from '../types'
import { fetchRoleBreakdown } from '../services/api'

interface Props {
    suite: Suite
}

function RoleBreakdownTable({ code }: { code: string }) {
    const [roles, setRoles] = useState<RoleBreakdownRow[] | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        setRoles(null)
        setError('')
        fetchRoleBreakdown(code)
            .then((data) => setRoles(data.roles))
            .catch((e: Error) => setError(e.message))
    }, [code])

    if (error) {
        return <p className="detail-empty">Could not load the role breakdown: {error}</p>
    }
    if (!roles) {
        return <p className="detail-empty is-muted">Loading role breakdown…</p>
    }
    if (roles.length === 0) {
        return (
            <p className="detail-empty">
                No roles mapped to this suite yet. Add them under Role to Suite Mapping.
            </p>
        )
    }

    return (
        <table className="detail-table">
            <thead>
                <tr>
                    <th>Application</th>
                    <th>Role</th>
                    <th>Type</th>
                    <th className="is-numeric">Allocated</th>
                    <th className="is-numeric">Active (365d)</th>
                    <th className="is-numeric">Reclaimable</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((row) => (
                    <tr key={row.role}>
                        <td>{row.application || '—'}</td>
                        <td>{row.role}</td>
                        <td>{row.role_type === 'business_stakeholder' ? 'Stakeholder' : 'Fulfiller'}</td>
                        <td className="is-numeric">{row.allocated.toLocaleString()}</td>
                        <td className="is-numeric">{row.active_365.toLocaleString()}</td>
                        <td className="is-numeric">{row.reclaimable.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function SuiteDetail({ suite }: Props) {
    const rows = suite.categories.filter((row) => row.data_status === 'ok')
    const isRoleTypeSummary = suite.counting_method === 'role_based' || suite.counting_method === 'unrestricted'

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
                            <th>{isRoleTypeSummary ? 'Role type' : 'Category'}</th>
                            {isRoleTypeSummary ? (
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
                                {isRoleTypeSummary ? (
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

            {suite.counting_method === 'role_based' ? (
                <div className="detail-roles">
                    <h4 className="detail-subheading">By role</h4>
                    <RoleBreakdownTable code={suite.code} />
                </div>
            ) : null}
        </section>
    )
}
