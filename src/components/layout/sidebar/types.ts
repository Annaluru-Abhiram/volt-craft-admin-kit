
import { ElementType } from 'react';

// Define menu item type
export interface MenuItem {
  icon: ElementType;
  title: string;
  path: string;
  children?: Omit<MenuItem, 'icon' | 'children'>[];
}
