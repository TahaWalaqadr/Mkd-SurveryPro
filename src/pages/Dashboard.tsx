import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  FileText,
  Plus,
  Download,
  BarChart3,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface InfoCardProps {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon: Icon,
  iconColor,
  children,
}) => (
  <Card className="shadow-lg">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className={cn("h-5 w-5", iconColor)} />
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Overview of your survey activities"
    >
      {/* Greeting */}
      <div className="mb-8 p-4 rounded-lg bg-card border border-border">
        <h2 className="text-2xl font-semibold text-foreground">
          Hi, John Smith 👋
        </h2>
        <p className="text-muted-foreground mt-1">
          You have 1 scheduled survey this week and 3 reports ready for download.
        </p>
      </div>

      {/* Main Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <InfoCard
          title="Next Scheduled Survey"
          icon={Calendar}
          iconColor="text-green-500"
        >
          <div className="flex flex-col space-y-2">
            <Badge className="w-fit bg-green-500 hover:bg-green-500/90 text-black">
              SCHEDULED
            </Badge>
            <p className="text-lg font-semibold">Downtown Office Complex</p>
            <p className="text-sm text-muted-foreground">
              March 15, 2025, 10:00 AM
            </p>
            <Button variant="link" className="p-0 h-auto justify-start text-primary">
              View Details
            </Button>
          </div>
        </InfoCard>

        <InfoCard
          title="Recent Report Available"
          icon={FileText}
          iconColor="text-primary"
        >
          <div className="flex flex-col space-y-2">
            <Badge className="w-fit bg-primary hover:bg-primary/90 text-black">
              READY
            </Badge>
            <p className="text-lg font-semibold">Survey_Report_Building_A.pdf</p>
            <p className="text-sm text-muted-foreground">2.4 MB</p>
            <Button className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Download Report
            </Button>
          </div>
        </InfoCard>
      </div>

      {/* Quick Actions */}
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        Quick Actions
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Book New Survey */}
        <Card className="bg-card border-primary border-2 shadow-xl">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg font-semibold mb-2">Book New Survey</p>
            <Button asChild className="w-full bg-primary text-black hover:bg-primary/90">
              <Link to="/book">Start Booking</Link>
            </Button>
          </CardContent>
        </Card>

        {/* View All Bookings */}
        <Card className="bg-card shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-foreground" />
            </div>
            <p className="text-lg font-semibold mb-2">View All Bookings</p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/bookings">Go to Bookings</Link>
            </Button>
          </CardContent>
        </Card>

        {/* View Reports */}
        <Card className="bg-card shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg font-semibold mb-2">View Reports</p>
            <Button asChild className="w-full bg-primary text-black hover:bg-primary/90">
              <Link to="/reports">
                Download
                <Download className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;