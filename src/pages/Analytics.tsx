
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardChart } from '@/components/dashboard/DashboardChart';
import { CardComponent } from '@/components/dashboard/CardComponent';
import { StatCard } from '@/components/dashboard/StatCard';
import { ChartBar, TrendingUp, Users, Eye } from 'lucide-react';

// Sample data
const analyticsStats = [
  {
    title: 'Visitors',
    value: '12,454',
    icon: Users,
    change: { value: '8.2%', isPositive: true },
    variant: 'primary' as const
  },
  {
    title: 'Page Views',
    value: '36,782',
    icon: Eye,
    change: { value: '12.5%', isPositive: true },
    variant: 'info' as const
  },
  {
    title: 'Bounce Rate',
    value: '42.3%',
    icon: TrendingUp,
    change: { value: '3.1%', isPositive: false },
    variant: 'warning' as const
  },
  {
    title: 'Avg. Session',
    value: '3m 24s',
    icon: ChartBar,
    change: { value: '0.5%', isPositive: true },
    variant: 'success' as const
  }
];

// Traffic by source data
const trafficSourceData = [
  { name: 'Organic Search', value: 5240 },
  { name: 'Direct', value: 3580 },
  { name: 'Social Media', value: 2840 },
  { name: 'Referral', value: 1760 },
  { name: 'Email', value: 940 },
];

// Traffic by country data
const trafficByCountry = [
  { country: 'United States', visitors: '4,650', percentage: 37.6 },
  { country: 'United Kingdom', visitors: '1,752', percentage: 14.1 },
  { country: 'Germany', visitors: '1,350', percentage: 10.9 },
  { country: 'Japan', visitors: '985', percentage: 7.9 },
  { country: 'France', visitors: '854', percentage: 6.9 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400">Website performance metrics and insights.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {analyticsStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <DashboardChart
          title="Visitors Overview"
          subtitle="Last 7 days"
          type="line"
          data={[
            { name: 'Mon', value: 1200, value2: 940 },
            { name: 'Tue', value: 1400, value2: 1120 },
            { name: 'Wed', value: 1650, value2: 1300 },
            { name: 'Thu', value: 1500, value2: 1150 },
            { name: 'Fri', value: 1780, value2: 1420 },
            { name: 'Sat', value: 1650, value2: 1300 },
            { name: 'Sun', value: 1450, value2: 1200 },
          ]}
          categories={['value', 'value2']}
        />
        
        <DashboardChart
          title="Traffic by Source"
          subtitle="Top traffic sources"
          type="bar"
          data={trafficSourceData}
          categories={['value']}
          colors={['#2361CE']}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <CardComponent
            title="Traffic by Page"
            subtitle="Top performing pages"
          >
            <div className="space-y-4">
              {[
                { title: '/homepage', views: 12540, change: 5.3 },
                { title: '/products', views: 8760, change: 2.1 },
                { title: '/about', views: 4320, change: -1.2 },
                { title: '/blog', views: 3640, change: 7.6 },
                { title: '/contact', views: 2180, change: 3.2 },
              ].map((page, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{page.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{page.views.toLocaleString()} views</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    page.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {page.change >= 0 ? '+' : ''}{page.change}%
                  </div>
                </div>
              ))}
            </div>
          </CardComponent>
        </div>
        
        <CardComponent
          title="Traffic by Country"
          subtitle="Geographic distribution"
        >
          <div className="space-y-4">
            {trafficByCountry.map((country, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{country.country}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{country.visitors}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{country.percentage}% of total visitors</p>
              </div>
            ))}
          </div>
        </CardComponent>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
