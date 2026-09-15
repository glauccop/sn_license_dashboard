import React, { useEffect, useState } from 'react'
import type { RoleBreakdownRow, Suite } from '../types'
import type { Strings } from '../i18n'
import { fetchRoleBreakdown } from '../services/api'

interface Props {
    suite: Suite
    t: Strings
}

function RoleBreakdownTable({ code, t }: { code: string; t: Strings }) {
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
        return <p className="detail-empty">{t.roleBreakdownError(error)}</p>
    }
    if (!roles) {
        return <p className="detail-empty is-muted">{t.roleBreakdownLoading}</p>
    }
    if (roles.length === 0) {
        return <p className="detail-empty">{t.roleBreakdownEmpty}</p>
    }

    return (
        <table className="detail-table">
            <thead>
                <tr>
                    <th>{t.applicationHeader}</th>
                    <th>{t.roleHeader}</th>
                    <th>{t.typeHeader}</th>
                    <th className="is-numeric">{t.allocatedHeader}</th>
                    <th className="is-numeric">{t.active365Header}</th>
                    <th className="is-numeric">{t.reclaimableHeader}</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((row) => (
                    <tr key={row.role}>
                        <td>{row.application || '—'}</td>
                        <td>{row.role}</td>
                        <td>{row.role_type === 'business_stakeholder' ? t.typeStakeholder : t.typeFulfiller}</td>
                        <td className="is-numeric">{row.allocated.toLocaleString()}</td>
                        <td className="is-numeric">{row.active_365.toLocaleString()}</td>
                        <td className="is-numeric">{row.reclaimable.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function SuiteDetail({ suite, t }: Props) {
    const rows = suite.categories.filter((row) => row.data_status === 'ok')
    const isRoleTypeSummary = suite.counting_method === 'role_based' || suite.counting_method === 'unrestricted'

    return (
        <section className="detail">
            <p className="detail-methodology">
                <span className="detail-methodology-label">{t.howCounted}</span>
                {suite.methodology}
            </p>

            {rows.length > 0 ? (
                <table className="detail-table">
                    <thead>
                        <tr>
                            <th>{isRoleTypeSummary ? t.roleTypeHeader : t.categoryHeader}</th>
                            {isRoleTypeSummary ? (
                                <>
                                    <th className="is-numeric">{t.allocatedHeader}</th>
                                    <th className="is-numeric">{t.active365Header}</th>
                                    <th className="is-numeric">{t.reclaimableHeader}</th>
                                </>
                            ) : (
                                <>
                                    <th className="is-numeric">{t.resourcesHeader}</th>
                                    <th className="is-numeric">{t.ratioHeader}</th>
                                    <th className="is-numeric">{t.subscriptionUnitsHeader}</th>
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
                <p className="detail-empty">{t.nothingCollected}</p>
            )}

            {suite.counting_method === 'role_based' ? (
                <div className="detail-roles">
                    <h4 className="detail-subheading">{t.byRole}</h4>
                    <p className="detail-hint is-muted">{t.byRoleHint}</p>
                    <RoleBreakdownTable code={suite.code} t={t} />
                </div>
            ) : null}
        </section>
    )
}
