import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  FileText,
  Plus, // Changed from BookOpen
  User,
  LogOut,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "My Bookings", path: "/bookings", icon: CalendarCheck },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Book a Survey", path: "/book", icon: Plus }, // Updated icon
  { name: "My Profile", path: "/profile", icon: User },
];

const Logo = () => (
  <div className="flex items-center p-4 mb-6 border-b border-sidebar-border">
    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-3">
      <BarChart3 className="w-5 h-5 text-white" /> {/* Icon color is white against black primary background */}
    </div>
    <h1 className="text-xl font-bold text-foreground">SurveyPro</h1>
  </div>
);

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border shadow-lg">
      <Logo />
      
      <nav className="flex-grow px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link key={item.name} to={item.path}>
              <div
                className={cn(
                  "flex items-center p-3 rounded-lg transition-colors text-muted-foreground",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold" // Black background, white text
                    : "text-foreground", // Dark gray/black text for inactive
                )}
              >
                <Icon className={cn("w-5 h-5 mr-3", isActive ? "text-sidebar-primary-foreground" : "text-muted-foreground")} />
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={() => console.log("Logout")}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;