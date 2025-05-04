
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';

// Default chart data
const defaultChartData = [
  { name: 'Jan', value: 400, value2: 240 },
  { name: 'Feb', value: 300, value2: 139 },
  { name: 'Mar', value: 200, value2: 980 },
  { name: 'Apr', value: 278, value2: 390 },
  { name: 'May', value: 189, value2: 480 },
  { name: 'Jun', value: 239, value2: 380 },
  { name: 'Jul', value: 349, value2: 430 },
];

interface ChartProps {
  type?: 'line' | 'area' | 'bar';
  title: string;
  subtitle?: string;
  data?: Array<Record<string, any>>;
  categories?: string[];
  colors?: string[];
  className?: string;
}

export const DashboardChart = ({
  type = 'line',
  title,
  subtitle,
  data = defaultChartData,
  categories = ['value', 'value2'],
  colors = ['#2361CE', '#10B981'],
  className,
}: ChartProps) => {
  const renderChart = () => {
    switch(type) {
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {categories.map((category, index) => (
              <Area 
                key={category} 
                type="monotone" 
                dataKey={category} 
                fill={colors[index % colors.length]}
                stroke={colors[index % colors.length]} 
                fillOpacity={0.3}
              />
            ))}
          </AreaChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {categories.map((category, index) => (
              <Bar 
                key={category} 
                dataKey={category} 
                fill={colors[index % colors.length]}
              />
            ))}
          </BarChart>
        );
      
      case 'line':
      default:
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {categories.map((category, index) => (
              <Line 
                key={category} 
                type="monotone" 
                dataKey={category} 
                stroke={colors[index % colors.length]}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        );
    }
  };
  
  return (
    <div className={`volt-card h-96 ${className || ''}`}>
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
