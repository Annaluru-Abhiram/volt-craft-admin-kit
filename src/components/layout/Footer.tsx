
import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-volt-primary border-t border-gray-200 dark:border-gray-700 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} VoltAdmin. All rights reserved.
        </div>
        <div className="mt-2 md:mt-0">
          <nav className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">About</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Privacy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Terms</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
