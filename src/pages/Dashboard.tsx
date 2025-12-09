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
  Eye,
  Clock,
  MoreVertical,
  File,
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
  <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
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
      {/* Greeting Section */}
      <div className="mb-8 p-6 rounded-lg bg-card border border-border shadow-md">
        <h2 className="text-2xl font-bold text-foreground">
          Hi, John Smith 👋
        </h2>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your surveys today
        </p>
      </div>

      {/* Main Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {/* Card 1 - Next Scheduled Survey */}
        <InfoCard
          title="Next Scheduled Survey"
          icon={Calendar}
          iconColor="text-green-500"
        >
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-start">
                <Badge className="w-fit bg-yellow-500 hover:bg-yellow-500/90 text-black font-semibold">
                    SCHEDULED
                </Badge>
                <MoreVertical className="w-5 h-5 text-muted-foreground cursor-pointer" />
            </div>
            <p className="text-sm text-muted-foreground">Coming Up Soon</p>
            
            <div className="space-y-1">
                <div className="flex items-center text-foreground font-semibold">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    Downtown Office Complex
                </div>
            </div>

            <div className="flex items-center text-sm text-muted-foreground space-x-4 pt-2">
                <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-green-500" />
                    March 15, 2025
                </p>
                <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-orange-500" />
                    10:00 AM
                </p>
            </div>

            <Button asChild className="w-full bg-green-500 text-white hover:bg-green-600 mt-4">
              <Link to="/bookings/BKG001">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Link>
            </Button>
          </div>
        </InfoCard>

        {/* Card 2 - Recent Report Available */}
        <InfoCard
          title="Recent Report Available"
          icon={FileText}
          iconColor="text-yellow-500"
        >
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-start">
                <Badge className="w-fit bg-green-500 hover:bg-green-500/90 text-white font-semibold">
                    READY
                </Badge>
                <MoreVertical className="w-5 h-5 text-muted-foreground cursor-pointer" />
            </div>
            <p className="text-sm text-muted-foreground">Survey ID: #undefined</p>
            
            <div className="space-y-1">
                <div className="flex items-center text-foreground font-semibold">
                    <File className="w-4 h-4 mr-2 text-red-500" />
                    Survey_Report_Building_A.pdf
                </div>
                <div className="flex items-center text-xs text-muted-foreground ml-6 space-x-3">
                    <span>4.2 MB</span>
                    <span>2 hours ago</span>
                </div>
            </div>

            <div className="space-y-1 pt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    Riverside Commercial Center
                </div>
                <p className="text-xs text-muted-foreground ml-6">Completed March 07, 2025</p>
            </div>

            <Button className="w-full bg-primary text-white hover:bg-primary/90 mt-4">
              <Download className="w-4 h-4 mr-2" />
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
        {/* 1. Book New Survey (Black Card) */}
        <Card className="bg-primary text-white shadow-xl border-2 border-primary">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg font-semibold mb-2">Book New Survey</p>
            <p className="text-sm text-gray-300 mb-4">Schedule a new survey for your property with our expert team</p>
            <Button asChild variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100 border border-primary">
              <Link to="/book">Start Booking</Link>
            </Button>
          </CardContent>
        </Card>

        {/* 2. View All Bookings (White Card) */}
        <Card className="bg-card shadow-lg border border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-foreground" />
            </div>
            <p className="text-lg font-semibold mb-2">View All Bookings</p>
            <p className="text-sm text-muted-foreground mb-4">Manage and track all your scheduled surveys in one place</p>
            <Button asChild variant="link" className="w-full text-yellow-500 hover:text-yellow-600">
              <Link to="/bookings">View All</Link>
            </Button>
          </CardContent>
        </Card>

        {/* 3. View Reports (Yellow Card) */}
        <Card className="bg-yellow-500 text-black shadow-xl border-2 border-yellow-500">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg font-semibold mb-2">View Reports</p>
            <p className="text-sm text-gray-800 mb-4">Access detailed analytics and insights from completed surveys</p>
            <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
              <Link to="/reports">
                DOWNLOAD
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;