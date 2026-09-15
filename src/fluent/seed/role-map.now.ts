import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { suiteItsm, suiteSpm, suiteSir } from './suites.now'

/**
 * Default mapping of base ServiceNow roles to suites, so a fresh install has
 * something meaningful to count. Deliberately limited to roles that ship with
 * the base ITSM and SPM plugins — roles from optional scoped applications are
 * left for the admin to add through the Role to Suite Mapping list.
 */
const FIRST_INSTALL = { installMethod: 'first install' as const }

// ---------------------------------------------------------------- ITSM · Fulfiller

Record({
    $id: Now.ID['rm-itsm-itil'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'itil',
        application_label: 'Incident Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-incident-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'incident_manager',
        application_label: 'Incident Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-major-incident-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'major_incident_manager',
        application_label: 'Incident Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-incident-write'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_incident_write',
        application_label: 'Incident Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-problem-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'problem_manager',
        application_label: 'Problem Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-problem-coordinator'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'problem_coordinator',
        application_label: 'Problem Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-problem-task-analyst'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'problem_task_analyst',
        application_label: 'Problem Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-problem-write'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_problem_write',
        application_label: 'Problem Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-change-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'change_manager',
        application_label: 'Change Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-change-write'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_change_write',
        application_label: 'Change Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-request-write'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_request_write',
        application_label: 'Request Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

// ------------------------------------------------------ ITSM · Business Stakeholder

Record({
    $id: Now.ID['rm-itsm-sn-incident-read'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_incident_read',
        application_label: 'Incident Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-problem-read'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_problem_read',
        application_label: 'Problem Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-change-read'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_change_read',
        application_label: 'Change Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-itsm-sn-request-read'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteItsm,
        role: 'sn_request_read',
        application_label: 'Request Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

// ----------------------------------------------------------------- SPM · Fulfiller

Record({
    $id: Now.ID['rm-spm-demand-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'demand_manager',
        application_label: 'Demand Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-demand-user'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'demand_user',
        application_label: 'Demand Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-itfm-planner'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'itfm_planner',
        application_label: 'Financial Planning',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-project-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'project_manager',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-portfolio-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'portfolio_manager',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-program-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'program_manager',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-pps-admin'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'pps_admin',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-project-user'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'project_user',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-project-portfolio-user'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'project_portfolio_user',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-resource-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'resource_manager',
        application_label: 'Resource Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-resource-user'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'resource_user',
        application_label: 'Resource Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-rate-model-admin'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'rate_model_admin',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-rate-model-user'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'rate_model_user',
        application_label: 'Project Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

// ------------------------------------------------------- SPM · Business Stakeholder

Record({
    $id: Now.ID['rm-spm-sn-ppm-read'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'sn_ppm_read',
        application_label: 'Global',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-spm-demand-approver'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSpm,
        role: 'demand_approver',
        application_label: 'Demand Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

// ----------------------------------------------------------------- SIR · Fulfiller
//
// SIR has no product-published licensing table on this instance (see
// sources.now.ts) — this suite is counted by role instead. Safe to list roles
// that may not exist on every instance: the collector resolves each mapping's
// role by name and skips any it cannot find.

Record({
    $id: Now.ID['rm-sir-admin'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSir,
        role: 'sn_si.admin',
        application_label: 'Security Incident Response',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-sir-manager'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSir,
        role: 'sn_si.manager',
        application_label: 'Security Incident Response',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-sir-analyst'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSir,
        role: 'sn_si.analyst',
        application_label: 'Security Incident Response',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

// ------------------------------------------------------- SIR · Business Stakeholder

Record({
    $id: Now.ID['rm-sir-basic'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSir,
        role: 'sn_si.basic',
        application_label: 'Security Incident Response',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-sir-read'],
    $meta: FIRST_INSTALL,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteSir,
        role: 'sn_si.read',
        application_label: 'Security Incident Response',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})
