import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Key,
  FileText,
  NotebookPen,
  AlertTriangle,
  ArrowLeft,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DetailCardProps {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  children: React.ReactNode;
}

const DetailCard: React.FC<DetailCardProps> = ({
  title,
  icon: Icon,
  iconColor,
  children,
}) => (
  <Card className="shadow-lg h-full">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <div className={cn("p-2 rounded-full mr-3", iconColor)}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-4 text-sm text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

const BookingDetails = () => {
  return (
    <DashboardLayout
      title="Booking Details - Downtown Office Complex"
      subtitle="Comprehensive information about your scheduled survey"
    >
      <div className="mb-6 flex items-center justify-between">
        <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
          <Link to="/bookings">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bookings
          </Link>
        </Button>
        <Badge className="bg-primary hover:bg-primary/90 text-black text-base px-4 py-1">
          Scheduled
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Site Information */}
        <DetailCard
          title="Site Information"
          icon={MapPin}
          iconColor="bg-blue-600"
        >
          <p className="font-medium text-foreground">123 Main Street, Suite 400, Anytown, USA 12345</p>
          <Badge className="mt-2 bg-blue-600 hover:bg-blue-600/90 text-white">
            Building Survey
          </Badge>
        </DetailCard>

        {/* Schedule */}
        <DetailCard
          title="Schedule"
          icon={Calendar}
          iconColor="bg-green-600"
        >
          <div className="space-y-1">
            <p className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-400" />
              Date: <span className="font-medium text-foreground ml-1">March 15, 2025</span>
            </p>
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              Time: <span className="font-medium text-foreground ml-1">10:00 AM</span>
            </p>
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              Duration: <span className="font-medium text-foreground ml-1">4 Hours</span>
            </p>
          </div>
        </DetailCard>

        {/* Assigned Engineer */}
        <DetailCard
          title="Assigned Engineer"
          icon={User}
          iconColor="bg-purple-600"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-500 rounded-full mr-3 flex items-center justify-center text-white">
              JS
            </div>
            <div>
              <p className="font-medium text-foreground">Jane Smith</p>
              <p className="text-xs text-muted-foreground">Senior Structural Engineer</p>
              <p className="text-xs flex items-center mt-1">
                <Phone className="w-3 h-3 mr-1" /> (555) 123-4567
              </p>
            </div>
          </div>
        </DetailCard>

        {/* Site Contact */}
        <DetailCard
          title="Site Contact"
          icon={Phone}
          iconColor="bg-orange-600"
        >
          <div className="space-y-1">
            <p className="font-medium text-foreground">Michael Johnson (Facility Manager)</p>
            <p className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-orange-400" />
              (555) 987-6543
            </p>
            <p className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-orange-400" />
              michael.j@office.com
            </p>
          </div>
        </DetailCard>

        {/* Access Instructions */}
        <DetailCard
          title="Access Instructions"
          icon={Key}
          iconColor="bg-blue-800"
        >
          <p>
            Please check in at the main security desk. Use the service elevator to access the 4th floor. Code for the server room is 4567#.
          </p>
        </DetailCard>

        {/* Purpose of Survey */}
        <DetailCard
          title="Purpose of Survey"
          icon={Building}
          iconColor="bg-red-600"
        >
          <p>
            Annual structural integrity assessment and HVAC system performance review required for insurance renewal.
          </p>
        </DetailCard>

        {/* Notes & Special Requests */}
        <DetailCard
          title="Notes & Special Requests"
          icon={NotebookPen}
          iconColor="bg-teal-600"
        >
          <p>
            Engineer requires access to roof and basement utility areas. Please ensure all necessary keys are available upon arrival.
          </p>
        </DetailCard>

        {/* Survey Report */}
        <DetailCard
          title="Survey Report"
          icon={FileText}
          iconColor="bg-gray-600"
        >
          <div className="flex items-center text-yellow-500">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Report not yet available
          </div>
          <p className="mt-2 text-xs">
            Reports are typically available 5-7 business days after the survey completion.
          </p>
        </DetailCard>
      </div>
    </DashboardLayout>
  );
};

export default BookingDetails;