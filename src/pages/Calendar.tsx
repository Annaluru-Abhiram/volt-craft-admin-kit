
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Calendar</h1>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Monthly Calendar</h2>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
            />
          </Card>
          
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="p-3 border rounded-md bg-muted/20">
                <h3 className="font-medium">Team Meeting</h3>
                <p className="text-sm text-muted-foreground">May 5th, 2025 - 10:00 AM</p>
              </div>
              <div className="p-3 border rounded-md bg-muted/20">
                <h3 className="font-medium">Product Launch</h3>
                <p className="text-sm text-muted-foreground">May 10th, 2025 - 2:00 PM</p>
              </div>
              <div className="p-3 border rounded-md bg-muted/20">
                <h3 className="font-medium">Quarterly Review</h3>
                <p className="text-sm text-muted-foreground">May 15th, 2025 - 9:30 AM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
