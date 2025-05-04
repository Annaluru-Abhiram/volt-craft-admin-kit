
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

// Sample user data
const users = [
  { 
    id: 1, 
    name: 'Alex Johnson', 
    email: 'alex@example.com', 
    role: 'Admin',
    status: 'active',
    lastActive: '5 mins ago',
    avatarUrl: '' 
  },
  { 
    id: 2, 
    name: 'Sarah Williams', 
    email: 'sarah@example.com', 
    role: 'Editor',
    status: 'active',
    lastActive: '1 hour ago',
    avatarUrl: '' 
  },
  { 
    id: 3, 
    name: 'Michael Brown', 
    email: 'michael@example.com', 
    role: 'User',
    status: 'offline',
    lastActive: '1 day ago',
    avatarUrl: '' 
  },
  { 
    id: 4, 
    name: 'Emily Davis', 
    email: 'emily@example.com', 
    role: 'User',
    status: 'inactive',
    lastActive: '7 days ago',
    avatarUrl: '' 
  },
  { 
    id: 5, 
    name: 'Robert Wilson', 
    email: 'robert@example.com', 
    role: 'Editor',
    status: 'active',
    lastActive: '30 mins ago',
    avatarUrl: '' 
  }
];

const Users = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search users..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
        
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={
                      user.status === 'active' ? 'default' : 
                      user.status === 'inactive' ? 'outline' : 'secondary'
                    }>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Users;
