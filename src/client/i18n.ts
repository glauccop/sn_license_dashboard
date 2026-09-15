export type Lang = 'en' | 'pb'

export interface Strings {
    appTitle: string
    lastCollection: (date: string) => string
    noCollectionYet: string
    disclaimerFallback: string
    disclaimerHide: string
    disclaimerDetails: string

    period: string
    periodCustom: string
    periodTo: string
    periodApply: string
    periodOneYear: string
    periodFrom: string

    collectionOff: string
    entitled: string
    over: string
    noEntitlement: string
    reclaimableNote: (count: string) => string

    chartEmpty: string
    chartEntitled: string
    chartAllocatedNote: (allocated: string, active365: string) => string
    chartReadoutRange: (count: number, from: string, to: string) => string

    howCounted: string
    roleTypeHeader: string
    categoryHeader: string
    allocatedHeader: string
    active365Header: string
    reclaimableHeader: string
    resourcesHeader: string
    ratioHeader: string
    subscriptionUnitsHeader: string
    nothingCollected: string
    byRole: string
    byRoleHint: string
    applicationHeader: string
    roleHeader: string
    typeHeader: string
    typeStakeholder: string
    typeFulfiller: string
    roleBreakdownError: (message: string) => string
    roleBreakdownLoading: string
    roleBreakdownEmpty: string

    gearLabel: string
    cardsShown: string
    done: string
    collectionOffHint: string

    units: Record<string, string>
    status: Record<string, string>
}

const EN: Strings = {
    appTitle: 'License Allocation Dashboard',
    lastCollection: (date) => 'Last collection ' + date,
    noCollectionYet: 'No collection has run yet',
    disclaimerFallback: 'Informational tracking reference.',
    disclaimerHide: 'Hide',
    disclaimerDetails: 'Details',

    period: 'Period',
    periodCustom: 'Custom',
    periodTo: 'to',
    periodApply: 'Apply',
    periodOneYear: '1 year',
    periodFrom: 'From',

    collectionOff: 'Collection off',
    entitled: 'entitled',
    over: 'over',
    noEntitlement: 'No entitlement recorded',
    reclaimableNote: (count) => count + ' allocated without a login in 365 days',

    chartEmpty: 'No collections in this period yet. The dashboard fills in as the daily job runs.',
    chartEntitled: 'Entitled',
    chartAllocatedNote: (allocated, active365) => allocated + ' allocated · ' + active365 + ' with a login in 365 days',
    chartReadoutRange: (count, from, to) =>
        count + ' daily collection' + (count === 1 ? '' : 's') + ' between ' + from + ' and ' + to,

    howCounted: 'How this is counted',
    roleTypeHeader: 'Role type',
    categoryHeader: 'Category',
    allocatedHeader: 'Allocated',
    active365Header: 'Active (365d)',
    reclaimableHeader: 'Reclaimable',
    resourcesHeader: 'Resources',
    ratioHeader: 'Ratio',
    subscriptionUnitsHeader: 'Subscription units',
    nothingCollected: 'Nothing collected for this suite yet. Enable collection on the suite record, then run the daily collection job.',
    byRole: 'By role',
    byRoleHint:
        'Stakeholder rows here exclude users already counted as Fulfiller above, since Fulfiller always wins when a user holds both.',
    applicationHeader: 'Application',
    roleHeader: 'Role',
    typeHeader: 'Type',
    typeStakeholder: 'Stakeholder',
    typeFulfiller: 'Fulfiller',
    roleBreakdownError: (message) => 'Could not load the role breakdown: ' + message,
    roleBreakdownLoading: 'Loading role breakdown…',
    roleBreakdownEmpty: 'No roles mapped to this suite yet. Add them under Role to Suite Mapping.',

    gearLabel: 'Choose which suite cards to show',
    cardsShown: 'Cards shown on the dashboard',
    done: 'Done',
    collectionOffHint: 'collection off',

    units: {
        subscription_unit: 'subscription units',
        fulfiller_user: 'fulfiller users',
        user: 'users',
        unrestricted_user: 'active users',
        device: 'devices',
        unattended_robot: 'unattended robots',
        not_countable: 'not countable',
    },
    status: {
        ok: 'Collected',
        no_data: 'No data',
        table_missing: 'Source not present',
        not_measurable: 'Not measurable',
        error: 'Collection error',
    },
}

const PB: Strings = {
    appTitle: 'Painel de Alocação de Licenças',
    lastCollection: (date) => 'Última coleta ' + date,
    noCollectionYet: 'Nenhuma coleta foi executada ainda',
    disclaimerFallback: 'Referência informativa de acompanhamento.',
    disclaimerHide: 'Ocultar',
    disclaimerDetails: 'Detalhes',

    period: 'Período',
    periodCustom: 'Personalizado',
    periodTo: 'até',
    periodApply: 'Aplicar',
    periodOneYear: '1 ano',
    periodFrom: 'De',

    collectionOff: 'Coleta desativada',
    entitled: 'contratado',
    over: 'acima',
    noEntitlement: 'Nenhuma entitlement registrada',
    reclaimableNote: (count) => count + ' alocado(s) sem login em 365 dias',

    chartEmpty: 'Nenhuma coleta neste período ainda. O painel se preenche conforme o job diário é executado.',
    chartEntitled: 'Contratado',
    chartAllocatedNote: (allocated, active365) => allocated + ' alocado(s) · ' + active365 + ' com login em 365 dias',
    chartReadoutRange: (count, from, to) =>
        count + ' coleta' + (count === 1 ? '' : 's') + ' diária' + (count === 1 ? '' : 's') + ' entre ' + from + ' e ' + to,

    howCounted: 'Como isto é contado',
    roleTypeHeader: 'Tipo de role',
    categoryHeader: 'Categoria',
    allocatedHeader: 'Alocado',
    active365Header: 'Ativo (365d)',
    reclaimableHeader: 'Recuperável',
    resourcesHeader: 'Recursos',
    ratioHeader: 'Proporção',
    subscriptionUnitsHeader: 'Unidades de assinatura',
    nothingCollected:
        'Nada coletado para esta suíte ainda. Habilite a coleta no registro da suíte e execute o job de coleta diária.',
    byRole: 'Por role',
    byRoleHint:
        'As linhas de Stakeholder aqui excluem usuários já contados como Fulfiller acima, já que Fulfiller sempre prevalece quando o usuário tem os dois.',
    applicationHeader: 'Aplicação',
    roleHeader: 'Role',
    typeHeader: 'Tipo',
    typeStakeholder: 'Stakeholder',
    typeFulfiller: 'Fulfiller',
    roleBreakdownError: (message) => 'Não foi possível carregar o detalhamento por role: ' + message,
    roleBreakdownLoading: 'Carregando detalhamento por role…',
    roleBreakdownEmpty: 'Nenhuma role mapeada para esta suíte ainda. Adicione em Mapeamento de Role para Suíte.',

    gearLabel: 'Escolher quais cards de suíte exibir',
    cardsShown: 'Cards exibidos no painel',
    done: 'Concluído',
    collectionOffHint: 'coleta desativada',

    units: {
        subscription_unit: 'unidades de assinatura',
        fulfiller_user: 'usuários fulfiller',
        user: 'usuários',
        unrestricted_user: 'usuários ativos',
        device: 'dispositivos',
        unattended_robot: 'robôs não assistidos',
        not_countable: 'não contável',
    },
    status: {
        ok: 'Coletado',
        no_data: 'Sem dados',
        table_missing: 'Origem não presente',
        not_measurable: 'Não mensurável',
        error: 'Erro na coleta',
    },
}

export const STRINGS: Record<Lang, Strings> = { en: EN, pb: PB }

export function stringsFor(lang: Lang | undefined | null): Strings {
    return STRINGS[lang === 'pb' ? 'pb' : 'en']
}
