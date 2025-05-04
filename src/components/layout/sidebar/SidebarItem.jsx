
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * SidebarItem component
 * @param {Object} props
 * @param {Object} props.item - Menu item object
 * @param {boolean} props.isCollapsed - Whether sidebar is collapsed
 */
const SidebarItem = ({ item, isCollapsed }) => {
  const [open, setOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const toggleOpen = () => {
    if (hasChildren) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <Link
        to={hasChildren ? '#' : item.path}
        onClick={toggleOpen}
        className={cn(
          "flex items-center p-2 rounded-md w-full",
          "text-sidebar-foreground hover:bg-sidebar-accent",
          "transition-colors duration-200"
        )}
      >
        <item.icon className="w-5 h-5" />
        {!isCollapsed && (
          <>
            <span className="ml-3 flex-1">{item.title}</span>
            {hasChildren && (
              <ChevronDown 
                className={cn(
                  "w-4 h-4 transition-transform",
                  open ? "transform rotate-180" : ""
                )} 
              />
            )}
          </>
        )}
      </Link>
      
      {hasChildren && !isCollapsed && open && (
        <div className="pl-10 mt-1 space-y-1">
          {item.children.map((child, index) => (
            <Link
              key={index}
              to={child.path}
              className="flex items-center p-2 text-sm rounded-md text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
