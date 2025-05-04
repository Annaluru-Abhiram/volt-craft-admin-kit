
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Home, 
  Users, 
  Settings, 
  Calendar, 
  ChartBar, 
  File,
  Table,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define menu item type
export interface MenuItem {
  icon: React.ElementType;
  title: string;
  path: string;
  children?: Omit<MenuItem, 'icon' | 'children'>[];
}

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

interface SidebarProps {
  isOpen: boolean;
  navItems?: MenuItem[];
  position?: 'left' | 'right';
}

export const Sidebar = ({ 
  isOpen, 
  navItems = defaultNavItems, 
  position = 'left' 
}: SidebarProps) => {
  return (
    <aside 
      className={cn(
        "z-20 h-screen transition-all duration-300 ease-in-out bg-sidebar dark:bg-sidebar",
        position === 'left' ? 'left-0' : 'right-0',
        isOpen ? 'w-64' : 'w-0 md:w-16',
        "flex-shrink-0 overflow-hidden"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 bg-sidebar-accent">
          <Link to="/" className="flex items-center">
            {isOpen ? (
              <span className="text-xl font-bold text-white">VoltAdmin</span>
            ) : (
              <span className="text-xl font-bold text-white">VA</span>
            )}
          </Link>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <SidebarItem key={index} item={item} isCollapsed={!isOpen} />
            ))}
          </nav>
        </div>
        <div className="p-4 bg-sidebar-accent">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-white">
              U
            </div>
            {isOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-300">admin@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const SidebarItem = ({ item, isCollapsed }: SidebarItemProps) => {
  const [open, setOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const toggleOpen = () => {
    if (hasChildren) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <Link
        to={hasChildren ? '#' : item.path}
        onClick={toggleOpen}
        className={cn(
          "flex items-center p-2 rounded-md w-full",
          "text-sidebar-foreground hover:bg-sidebar-accent",
          "transition-colors duration-200"
        )}
      >
        <item.icon className="w-5 h-5" />
        {!isCollapsed && (
          <>
            <span className="ml-3 flex-1">{item.title}</span>
            {hasChildren && (
              <ChevronDown 
                className={cn(
                  "w-4 h-4 transition-transform",
                  open ? "transform rotate-180" : ""
                )} 
              />
            )}
          </>
        )}
      </Link>
      
      {hasChildren && !isCollapsed && open && (
        <div className="pl-10 mt-1 space-y-1">
          {item.children!.map((child, index) => (
            <Link
              key={index}
              to={child.path}
              className="flex items-center p-2 text-sm rounded-md text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
