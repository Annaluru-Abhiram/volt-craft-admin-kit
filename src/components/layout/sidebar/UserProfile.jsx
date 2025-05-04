
import React from 'react';

/**
 * User profile component
 * @param {Object} props
 * @param {boolean} props.isCollapsed
 */
const UserProfile = ({ isCollapsed }) => {
  return (
    <div className="p-4 bg-sidebar-accent">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-white">
          U
        </div>
        {!isCollapsed && (
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-300">admin@example.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
