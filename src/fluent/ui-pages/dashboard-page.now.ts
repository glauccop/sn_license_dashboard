import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import dashboardPage from '../../client/index.html'

export const dashboardUiPage = UiPage({
    $id: Now.ID['ui-page-dashboard'],
    endpoint: 'x_snc_lic_alloc_dashboard.do',
    description: 'License Allocation Dashboard',
    category: 'general',
    html: dashboardPage,
    direct: true,
})
