
import { 
  ChartBar, 
  Calendar, 
  Home, 
  Users, 
  Settings, 
  File,
  Table,
  Bell
} from 'lucide-react';
import { MenuItem } from './types';

// Default nav items - can be customized
export const defaultNavItems: MenuItem[] = [
  {
    icon: Home,
    title: 'Dashboard',
    path: '/',
  },
  {
    icon: ChartBar,
    title: 'Analytics',
    path: '/analytics',
  },
  {
    icon: Table,
    title: 'Tables',
    path: '/tables',
    children: [
      {
        title: 'Basic Tables',
        path: '/tables/basic',
      },
      {
        title: 'Data Tables',
        path: '/tables/data',
      },
    ],
  },
  {
    icon: File,
    title: 'Pages',
    path: '/pages',
    children: [
      {
        title: 'Settings',
        path: '/settings',
      },
      {
        title: 'Pricing',
        path: '/pricing',
      },
      {
        title: '404',
        path: '/404',
      },
      {
        title: '500',
        path: '/500',
      },
    ],
  },
  {
    icon: Calendar,
    title: 'Calendar',
    path: '/calendar',
  },
  {
    icon: Bell,
    title: 'Notifications',
    path: '/notifications',
  },
  {
    icon: Users,
    title: 'Users',
    path: '/users',
  },
  {
    icon: Settings,
    title: 'Settings',
    path: '/settings',
  },
];
