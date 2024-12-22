import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/Overview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Stats } from "@/components/dashboard/Stats";

export const DashboardContent = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-semibold text-3xl">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your dashboard.</p>
      </div>
      <Stats />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};