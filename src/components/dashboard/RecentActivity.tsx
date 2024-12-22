import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    user: {
      name: "John Doe",
      image: "https://github.com/shadcn.png",
      initials: "JD",
    },
    action: "completed task",
    target: "Q1 Planning",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Sarah Smith",
      image: "https://github.com/shadcn.png",
      initials: "SS",
    },
    action: "created project",
    target: "Marketing Campaign",
    time: "4 hours ago",
  },
  {
    user: {
      name: "Michael Brown",
      image: "https://github.com/shadcn.png",
      initials: "MB",
    },
    action: "uploaded file",
    target: "Q4 Report.pdf",
    time: "6 hours ago",
  },
];

export const RecentActivity = () => {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.image} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name}{" "}
              <span className="text-muted-foreground">{activity.action}</span>{" "}
              {activity.target}
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};