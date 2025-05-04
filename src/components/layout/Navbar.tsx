
import React, { useState } from 'react';
import { Bell, Search, Menu, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '../theme/ThemeToggle';

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-volt-primary border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className={`${searchOpen ? 'block' : 'hidden md:block'} transition-all duration-200`}>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                className="pl-8 bg-gray-100 dark:bg-gray-800 border-0 focus-visible:ring-1 w-full md:w-64" 
                placeholder="Search..." 
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <div className="p-2 font-medium">Notifications</div>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                <NotificationItem 
                  title="New User Registration" 
                  time="2 min ago" 
                  status="unread"
                />
                <NotificationItem 
                  title="Server Limit Reached" 
                  time="5 hours ago" 
                />
                <NotificationItem 
                  title="New Report Available" 
                  time="1 day ago" 
                />
                <NotificationItem 
                  title="Monthly Report Generated" 
                  time="3 days ago" 
                />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center font-medium">
                View All Notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

interface NotificationItemProps {
  title: string;
  time: string;
  status?: 'read' | 'unread';
}

const NotificationItem = ({ title, time, status = 'read' }: NotificationItemProps) => {
  return (
    <div className={`p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-start ${
      status === 'unread' ? 'bg-blue-50 dark:bg-blue-900/20' : ''
    }`}>
      <div className="flex-shrink-0 mr-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
          <Bell className="h-4 w-4" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{time}</div>
      </div>
      {status === 'unread' && (
        <div className="w-2 h-2 rounded-full bg-blue-600" />
      )}
    </div>
  );
};
