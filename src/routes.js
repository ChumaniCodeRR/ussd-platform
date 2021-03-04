import React from 'react';
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Manage = React.lazy(() => import('./views/campaings/manage/Manage'));
const CreateNewCampaing = React.lazy(() => import('./views/campaings/newCampaing/CreateNewCampaing'));
const EditCampaigns = React.lazy(() => import('./views/campaings/manage/EditCampaigns'));
const DashboardView = React.lazy(() => import('./views/campaings/manage/DashboardView'))
const Profile = React.lazy(() => import('./views/profile/Profile'));

const Admin = React.lazy(() => import('./views/users/admin/Admin'));
const CreateNewAdmin = React.lazy(() => import('./views/users/admin/CreateNewAdmin'));
const EditAdmin = React.lazy(() => import('./views/users/admin/EditAdmin'));

const Clients = React.lazy(() => import('./views/users/clients/Clients'))
const CreateNewClient = React.lazy(() => import('./views/users/clients/CreateNewClient'));
const EditClient = React.lazy(() => import('./views/users/clients/EditClient'));

const Managers = React.lazy(() => import('./views/users/managers/Managers'));
const CreateNewManagers = React.lazy(() => import('./views/users/managers/CreateNewManagers'));
const EditManager = React.lazy(() => import('./views/users/managers/EditManagers'));

const Backup = React.lazy(() => import('./views/backup/Backup'))
const UssdShortCodes = React.lazy(() => import('./views/ussd/UssdShortCodes'))
const WhatsApp = React.lazy(() => import('./views/whatsapp/WhatsApp'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/campaings', name: 'Campaings', component: Manage, exact: true },
  { path: '/campaings/manage', name: 'Manage', component: Manage },
  { path: '/campaings/createNew', name: 'Create new', component: CreateNewCampaing },
  { path: '/campaings/edit/:id', name: 'Edit Campaign', component: EditCampaigns },
  {path:'/campaings/dashboard/:id',name:'Dashboard View',component:DashboardView},

  { path: '/admins', name: 'Admin', component: Admin, exact: true },
  { path: '/admins/admin', name: 'Admin', component: Admin },
  { path: '/admins/createNew', name: 'Create new', component: CreateNewAdmin },
  { path: '/admins/editAdmin/:id', name: 'Edit Admin', component: EditAdmin },

  { path: '/clients', name: 'Client', component: Clients, exact: true },
  { path: '/clients/client', name: 'Clients', component: Clients },
  { path: '/clients/createNew', name: 'Create New', component: CreateNewClient },
  { path: '/clients/editClients/:id', name: 'Edit Client', component: EditClient },

  { path: '/manager', name: 'Managers', component: Managers, exact: true },
  { path: '/manager/managers', name: 'Managers', component: Managers },
  { path: '/manager/createNew', name: 'Create New', component: CreateNewManagers },
  { path: '/manager/editManager/:id', name: 'Edit Manager', component: EditManager },

  { path: '/whatsapp', name: 'WhatsApp', component: WhatsApp },
  { path: '/ussd', name: 'USSD Shortcodes', component: UssdShortCodes },
  { path: '/backup', name: 'Backup', component: Backup },

  {path: '/profile' ,name : 'Profile' ,component:Profile}
];

export default routes;
