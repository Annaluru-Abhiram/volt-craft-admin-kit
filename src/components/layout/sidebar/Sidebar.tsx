
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MenuItem } from './types';
import { defaultNavItems } from './defaultNavItems';
import SidebarItem from './SidebarItem';
import UserProfile from './UserProfile';

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
        <UserProfile isCollapsed={!isOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
