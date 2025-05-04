
import React from 'react';
import { cn } from '@/lib/utils';

interface CardComponentProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  noPadding?: boolean;
}

export const CardComponent = ({ 
  title, 
  subtitle, 
  children, 
  className,
  footer,
  noPadding = false
}: CardComponentProps) => {
  return (
    <div className={cn("volt-card", className)}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'py-2'}>
        {children}
      </div>
      
      {footer && (
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};
