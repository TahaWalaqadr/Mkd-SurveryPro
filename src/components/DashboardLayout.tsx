import React from "react";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  const isMobile = useIsMobile();

  const HeaderContent = (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8 border border-border">
          <AvatarFallback className="bg-primary text-white text-sm">JS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <header className="p-4 border-b border-border flex items-center justify-between bg-card shadow-sm">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[250px]">
              <Sidebar />
            </SheetContent>
          </Sheet>
          {HeaderContent}
        </header>
        <main className="flex-grow p-4 md:p-8">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-[250px] flex-shrink-0 border-r border-border">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-grow">
        <header className="p-6 border-b border-border bg-card shadow-sm">
          {HeaderContent}
        </header>
        <main className="flex-grow p-6 md:p-8 overflow-y-auto bg-gray-50"> {/* Light gray background for main content area */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;