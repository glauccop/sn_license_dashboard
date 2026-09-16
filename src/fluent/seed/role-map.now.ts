import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { suiteItsm, suiteSpm, suiteSir, suiteFsm, suiteCsm } from './suites.now'

/**
 * Default mapping of base ServiceNow roles to suites, so a fresh install has
 * something meaningful to count. Deliberately limited to roles that ship with
 * the base ITSM and SPM plugins — roles from optional scoped applications are
 * left for the admin to add through the Role to Suite Mapping list.
 */
const FIRST_INSTALL = { installMethod: 'first install' as const }

/** For mappings added after the app is already installed — see suites.now.ts. */
const ONCE = { installMethod: 'once' as const }

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

// ----------------------------------------------------------------- FSM · Fulfiller

Record({
    $id: Now.ID['rm-fsm-wm-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_agent',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-dispatcher'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_dispatcher',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-manager'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_manager',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-admin'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_admin',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-task-initiator'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_task_initiator',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-crew-moderator'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_crew_moderator',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-servicedesk-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_servicedesk_agent',
        application_label: 'Field Service',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-capacity-write'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_capacity_mg.wm_capacity_write',
        application_label: 'Capacity Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-quality-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_quality.wm_quality_agent',
        application_label: 'Quality Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-technician-sales-write'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_tech_sales.wm_technician_sales_write',
        application_label: 'Technician Sales',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-service-location-write'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_service_loc.wm_service_location_write',
        application_label: 'Service Location Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-territory-manager'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_tp.fsm_territory_manager',
        application_label: 'Territory Planning',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-territory-planner'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_tp.fsm_territory_planner',
        application_label: 'Territory Planning',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-planned-work-admin'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_planned_wm.planned_work_admin',
        application_label: 'Planned Maintenance',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

// ------------------------------------------------------- FSM · Business Stakeholder

Record({
    $id: Now.ID['rm-fsm-wm-basic'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_basic',
        application_label: 'Field Service',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-read'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_read',
        application_label: 'Field Service',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-initiator'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_initiator',
        application_label: 'Field Service',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-qualifier'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_qualifier',
        application_label: 'Field Service',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-wm-approver'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'wm_approver_user',
        application_label: 'Field Service',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-capacity-read'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_capacity_mg.wm_capacity_read',
        application_label: 'Capacity Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-territory-read'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_tp.fsm_territory_read',
        application_label: 'Territory Planning',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-fsm-planned-work-read'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteFsm,
        role: 'sn_fsm_planned_wm.planned_work_read',
        application_label: 'Planned Maintenance',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

// ----------------------------------------------------------------- CSM · Fulfiller

Record({
    $id: Now.ID['rm-csm-manager'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice_manager',
        application_label: 'Case Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice_agent',
        application_label: 'Case Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-case-admin'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.case_admin',
        application_label: 'Case Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-case-task-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.case_task_agent',
        application_label: 'Case Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-relationship-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.relationship_agent',
        application_label: 'Contact & Relationship Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-contact-manager'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.contact_manager',
        application_label: 'Contact & Relationship Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-svc-location-agent'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.svc_location_agent',
        application_label: 'Service Location Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-svc-location-manager'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.svc_location_manager',
        application_label: 'Service Location Management',
        role_type: 'fulfiller',
        source: 'default',
        active: true,
    },
})

// ------------------------------------------------------- CSM · Business Stakeholder
//
// External/self-service personas (sn_customerservice.customer, .consumer_contributor,
// .unified_consumer, .self_contributor, .partner, .case_authorized_consumer/contact and
// similar contact-facing roles) are deliberately not mapped — see suites.now.ts.

Record({
    $id: Now.ID['rm-csm-case-viewer'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.case_viewer',
        application_label: 'Case Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-case-read-granular'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.case_read_granular',
        application_label: 'Case Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-requester'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.requester',
        application_label: 'Case Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

Record({
    $id: Now.ID['rm-csm-case-contributor-viewer'],
    $meta: ONCE,
    table: 'x_snc_lic_alloc_role_map',
    data: {
        suite: suiteCsm,
        role: 'sn_customerservice.case_contributor_viewer',
        application_label: 'Case Management',
        role_type: 'business_stakeholder',
        source: 'default',
        active: true,
    },
})

