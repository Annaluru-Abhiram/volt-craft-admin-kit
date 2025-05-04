# Volt Admin Dashboard Kit

A modular, customizable admin dashboard UI kit inspired by the Volt Bootstrap 5 Admin Dashboard.

## Features

- Fully responsive design that works on all devices
- Customizable sidebar with collapsible menu items
- Modular component system for easy reuse and extension
- Light/dark mode support
- Interactive charts and tables
- Clean, modern UI based on Volt Admin Dashboard

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal

## Customization Guide

### Sidebar Customization

The sidebar is fully customizable through the `Sidebar.tsx` component:

- **Add/Remove Menu Items**: Edit the `defaultNavItems` array in `src/components/layout/Sidebar.tsx`
- **Change Icons**: Replace the icon component in each menu item
- **Change Sidebar Position**: Use the `position` prop ('left' or 'right')

Example:
```tsx
// Add a new menu item
const defaultNavItems = [
  // ... existing items
  {
    icon: Mail,
    title: 'Messages',
    path: '/messages',
  },
];
```

### Adding New Pages

1. Create a new page component in the `src/pages` directory
2. Use the `DashboardLayout` component to maintain consistent layout
3. Add the route to `App.tsx`

Example:
```tsx
// src/pages/NewPage.tsx
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const NewPage = () => {
  return (
    <DashboardLayout>
      <h1>New Page Content</h1>
    </DashboardLayout>
  );
};

export default NewPage;

// In App.tsx, add:
<Route path="/new-page" element={<NewPage />} />
```

### Component Reuse

The dashboard includes several reusable components:

- **StatCard**: For displaying statistics with icons
- **CardComponent**: General-purpose card container
- **TableComponent**: Customizable tables with pagination
- **DashboardChart**: Charts with multiple visualization options

Example usage:
```tsx
<StatCard 
  title="Users" 
  value="1,234" 
  icon={Users} 
  change={{ value: '12%', isPositive: true }} 
  variant="primary" 
/>

<DashboardChart
  title="Monthly Revenue"
  type="area"
  data={revenueData}
  categories={['revenue', 'profit']}
  colors={['#2361CE', '#10B981']}
/>
```

## Folder Structure

```
src/
├── components/
│   ├── dashboard/       # Dashboard-specific components
│   ├── layout/          # Layout components (sidebar, navbar, etc.)
│   ├── theme/           # Theme-related components
│   └── ui/              # UI components (buttons, inputs, etc.)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
└── App.tsx              # Main app component with routes
```

## Theme Customization

The UI supports light and dark modes. Colors can be customized in:

1. `tailwind.config.ts` - For tailwind theme configuration
2. `src/index.css` - For CSS variables and custom styles

## Available Components

- **Layout**: DashboardLayout, Sidebar, Navbar, Footer
- **Data Display**: StatCard, TableComponent, DashboardChart
- **Containers**: CardComponent
- **UI Elements**: Various shadcn/ui components

## Extending the Dashboard

To add new features:

1. Create new component files in the appropriate directories
2. Add new pages in the `src/pages` directory
3. Update routes in `App.tsx`
4. Use existing components as building blocks for new features

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/393354ef-3537-4f1c-b132-fd6169f0c485) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/393354ef-3537-4f1c-b132-fd6169f0c485) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
