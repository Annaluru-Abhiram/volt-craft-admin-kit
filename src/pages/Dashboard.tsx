
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { DashboardChart } from '@/components/dashboard/DashboardChart';
import { TableComponent } from '@/components/dashboard/TableComponent';
import { CardComponent } from '@/components/dashboard/CardComponent';
import { Users, ShoppingCart, DollarSign, TrendingUp, Calendar } from 'lucide-react';

const statsData = [
  {
    title: 'Customers',
    value: '2,567',
    icon: Users,
    change: { value: '16%', isPositive: true },
    variant: 'primary' as const
  },
  {
    title: 'Revenue',
    value: '$46,782',
    icon: DollarSign,
    change: { value: '12%', isPositive: true },
    variant: 'success' as const
  },
  {
    title: 'Orders',
    value: '1,849',
    icon: ShoppingCart,
    change: { value: '5%', isPositive: false },
    variant: 'warning' as const
  },
  {
    title: 'Growth',
    value: '+23.6%',
    icon: TrendingUp,
    change: { value: '10%', isPositive: true },
    variant: 'info' as const
  }
];

const transactionData = [
  { id: '#10001', customer: 'John Doe', date: '2023-04-05', amount: '$240.00', status: 'Completed' },
  { id: '#10002', customer: 'Jane Smith', date: '2023-04-05', amount: '$159.00', status: 'Processing' },
  { id: '#10003', customer: 'Bob Johnson', date: '2023-04-04', amount: '$356.00', status: 'Completed' },
  { id: '#10004', customer: 'Alice Williams', date: '2023-04-04', amount: '$89.00', status: 'Pending' },
  { id: '#10005', customer: 'Charlie Brown', date: '2023-04-03', amount: '$480.00', status: 'Failed' },
];

const columns = [
  { key: 'id', header: 'Order ID' },
  { key: 'customer', header: 'Customer' },
  { key: 'date', header: 'Date' },
  { key: 'amount', header: 'Amount' },
  { 
    key: 'status', 
    header: 'Status',
    cell: (row: any) => {
      const statusClasses = {
        'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        'Processing': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        'Failed': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      };
      
      const statusClass = statusClasses[row.status as keyof typeof statusClasses] || '';
      
      return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClass}`}>
          {row.status}
        </span>
      );
    }
  },
];

const upcomingEvents = [
  { title: 'Marketing Meeting', time: '10:00 AM', date: 'Today' },
  { title: 'Product Launch', time: '2:30 PM', date: 'Tomorrow' },
  { title: 'Team Sync', time: '9:00 AM', date: 'April 7' },
  { title: 'Client Presentation', time: '11:00 AM', date: 'April 8' },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's an overview of your business.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <DashboardChart 
            title="Revenue Overview" 
            subtitle="Monthly revenue and orders"
            type="area"
            categories={['value', 'value2']}
          />
        </div>
        
        <div>
          <CardComponent 
            title="Upcoming Events" 
            subtitle="Your schedule for the next few days"
            className="h-96"
          >
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                      <Calendar className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.time} · {event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardComponent>
        </div>
      </div>
      
      <div className="mb-6">
        <TableComponent 
          title="Recent Transactions" 
          subtitle="Latest orders and payments"
          columns={columns} 
          data={transactionData}
          pagination={true}
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
