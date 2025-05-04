
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Bell, Check, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NotificationItem = ({ title, time, description, status }: {
  title: string;
  time: string;
  description: string;
  status: 'unread' | 'read';
}) => {
  return (
    <div className={`p-4 border-b last:border-0 flex items-start gap-3 ${
      status === 'unread' ? 'bg-blue-50 dark:bg-blue-900/20' : ''
    }`}>
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
          <Bell className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="flex-shrink-0 flex gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Check className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Notifications</h1>
          <Button variant="outline" size="sm">Mark All as Read</Button>
        </div>
        
        <Card>
          <Tabs defaultValue="all" className="w-full">
            <div className="px-6 pt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="archive">Archive</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="p-0 mt-0">
              <div className="divide-y">
                <NotificationItem 
                  title="New User Registration" 
                  time="2 min ago"
                  description="A new user has registered to your platform."
                  status="unread"
                />
                <NotificationItem 
                  title="Server Limit Reached" 
                  time="1 hour ago"
                  description="Your server has reached 90% of its capacity."
                  status="unread"
                />
                <NotificationItem 
                  title="Monthly Report Available" 
                  time="1 day ago"
                  description="Your monthly analytics report is now available."
                  status="read"
                />
                <NotificationItem 
                  title="System Update Complete" 
                  time="2 days ago"
                  description="The system has been successfully updated to version 2.5."
                  status="read"
                />
              </div>
            </TabsContent>
            <TabsContent value="unread" className="p-0 mt-0">
              <div className="divide-y">
                <NotificationItem 
                  title="New User Registration" 
                  time="2 min ago"
                  description="A new user has registered to your platform."
                  status="unread"
                />
                <NotificationItem 
                  title="Server Limit Reached" 
                  time="1 hour ago"
                  description="Your server has reached 90% of its capacity."
                  status="unread"
                />
              </div>
            </TabsContent>
            <TabsContent value="archive" className="p-0 mt-0">
              <div className="p-6 text-center text-gray-500">
                No archived notifications
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
