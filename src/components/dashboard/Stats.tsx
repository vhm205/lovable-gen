import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Users, DollarSign, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.2%",
    icon: Users,
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+2.3%",
    icon: Activity,
  },
];

export const Stats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};