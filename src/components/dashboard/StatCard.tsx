
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  variant = 'default',
  className 
}: StatCardProps) => {
  const gradientClasses = {
    default: '',
    primary: 'volt-gradient-primary',
    success: 'volt-gradient-success',
    warning: 'volt-gradient-warning',
    danger: 'volt-gradient-danger',
    info: 'volt-gradient-info',
  };
  
  const textColorClass = variant === 'default' ? 'text-gray-800 dark:text-white' : 'text-white';
  
  return (
    <div className={cn("volt-stat-card", className)}>
      <div className="flex flex-1 justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {change && (
            <div className="mt-1 flex items-center">
              <span className={`text-xs font-medium ${
                change.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {change.isPositive ? '+' : ''}{change.value}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">since last month</span>
            </div>
          )}
        </div>
        
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          variant !== 'default' && gradientClasses[variant]
        )}>
          <Icon className={cn("w-6 h-6", variant === 'default' ? 'text-blue-600 dark:text-blue-400' : 'text-white')} />
        </div>
      </div>
    </div>
  );
};
