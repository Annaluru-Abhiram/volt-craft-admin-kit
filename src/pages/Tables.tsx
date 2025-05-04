
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TableComponent } from '@/components/dashboard/TableComponent';
import { CardComponent } from '@/components/dashboard/CardComponent';
import { Pencil, Trash, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { id: 7, name: 'Edward Norton', email: 'edward@example.com', role: 'User', status: 'Inactive' },
  { id: 8, name: 'Fiona Apple', email: 'fiona@example.com', role: 'Editor', status: 'Active' },
];

const products = [
  { id: '001', name: 'Laptop Pro', category: 'Electronics', price: '$1,299.00', stock: 45 },
  { id: '002', name: 'Smartphone X', category: 'Electronics', price: '$899.00', stock: 78 },
  { id: '003', name: 'Desk Chair', category: 'Furniture', price: '$249.00', stock: 32 },
  { id: '004', name: 'Coffee Maker', category: 'Appliances', price: '$89.00', stock: 24 },
  { id: '005', name: 'Wireless Earbuds', category: 'Electronics', price: '$149.00', stock: 56 },
];

const tableOptions = [
  { value: 'default', label: 'Default Style' },
  { value: 'striped', label: 'Striped Rows' },
  { value: 'bordered', label: 'Bordered Style' },
  { value: 'compact', label: 'Compact Style' },
];

const Tables = () => {
  const [tableStyle, setTableStyle] = React.useState('default');
  
  // Columns configuration for users table
  const userColumns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { 
      key: 'status', 
      header: 'Status',
      cell: (row: any) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          row.status === 'Active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
        }`}>
          {row.status}
        </span>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      cell: (row: any) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  ];
  
  // Columns configuration for products table
  const productColumns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Product Name' },
    { key: 'category', header: 'Category' },
    { key: 'price', header: 'Price' },
    { key: 'stock', header: 'Stock' },
    {
      key: 'actions',
      header: 'Actions',
      cell: (row: any) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" /> View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" /> Edit Product
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash className="mr-2 h-4 w-4" /> Delete Product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tables</h1>
        <p className="text-gray-500 dark:text-gray-400">Examples of table styles and variations.</p>
      </div>
      
      <div className="grid gap-6">
        <TableComponent 
          title="Users Table" 
          subtitle="List of system users"
          columns={userColumns} 
          data={users}
          pagination={true}
          className={tableStyle === 'striped' ? 'striped-table' : ''}
        />
        
        <TableComponent 
          title="Products Table" 
          subtitle="Inventory management"
          columns={productColumns} 
          data={products}
          pagination={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardComponent title="Table Configurations" subtitle="Customize table appearance">
            <div className="space-y-4">
              {tableOptions.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input 
                    type="radio" 
                    id={option.value} 
                    name="tableStyle" 
                    value={option.value}
                    checked={tableStyle === option.value}
                    onChange={(e) => setTableStyle(e.target.value)}
                    className="mr-2 volt-input"
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          </CardComponent>
          
          <CardComponent title="Table Documentation" subtitle="How to use tables in the system">
            <div className="text-sm">
              <p className="mb-2">Tables can be customized with the following options:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Add pagination with the <code>pagination</code> prop</li>
                <li>Make tables responsive with built-in overflow handling</li>
                <li>Custom cell rendering with the <code>cell</code> function</li>
                <li>Row striping with CSS classes for better readability</li>
                <li>Sortable columns (coming soon)</li>
                <li>Filterable data (coming soon)</li>
              </ul>
            </div>
          </CardComponent>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tables;
