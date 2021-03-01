import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Campaigns']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Manage Campaigns',
    to: '/campaings/manage',
    icon: 'cil-graph',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create Campaign',
    to: '/campaings/createNew',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Manage users']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Admins',
    to: '/admins/admin',
    icon: 'cil-user'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Managers',
    to: '/manager/managers',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Clients',
    to: '/clients/client',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  ,
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Others']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'USSD Shortcodes',
    to: '/ussd',
    icon: <CIcon name="cil-laptop" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'WhatsApp Number',
    to: '/whatsapp',
    icon: <CIcon name="cil-laptop" customClasses="c-sidebar-nav-icon"/>,
  },{
    _tag: 'CSidebarNavItem',
    name: 'Backup',
    to: '/backup',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
