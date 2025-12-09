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
  Info,
  Target,
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
  <Card className="shadow-md h-full">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <div className={cn("p-2 rounded-full mr-3", iconColor)}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-4 text-sm text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

const BookingDetails = () => {
  return (
    <DashboardLayout
      title="Booking Details"
      subtitle="Downtown Office Complex"
    >
      <div className="mb-6 flex items-center justify-between">
        <Button asChild variant="outline" className="text-primary hover:bg-gray-100 border-border">
          <Link to="/bookings">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bookings
          </Link>
        </Button>
        <Badge className="bg-blue-500 hover:bg-blue-500/90 text-white text-base px-4 py-1 font-semibold">
          SCHEDULED
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Site Information (Blue icon) */}
        <DetailCard
          title="Site Information"
          icon={Building}
          iconColor="bg-blue-600"
        >
          <div className="space-y-2">
            <p className="font-medium text-foreground">Downtown Office Complex</p>
            <p>123 Business Street, Downtown District, City 12345</p>
            <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-500/90 text-black font-semibold">
              Building Survey
            </Badge>
          </div>
        </DetailCard>

        {/* Card 2 - Schedule (Green icon) */}
        <DetailCard
          title="Schedule"
          icon={Calendar}
          iconColor="bg-green-600"
        >
          <div className="space-y-2">
            <p className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-400" />
              Survey Date: <span className="font-medium text-foreground ml-1">March 15, 2025</span>
            </p>
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              Survey Time: <span className="font-medium text-foreground ml-1">10:00 AM - 2:00 PM</span>
            </p>
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              Duration: <span className="font-medium text-foreground ml-1">Approximately 4 hours</span>
            </p>
          </div>
        </DetailCard>

        {/* Card 3 - Assigned Engineer (Purple icon) */}
        <DetailCard
          title="Assigned Engineer"
          icon={User}
          iconColor="bg-purple-600"
        >
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gray-500 rounded-full mr-3 flex items-center justify-center text-white font-bold relative">
              JM
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-500" />
            </div>
            <div>
              <p className="font-medium text-foreground">John Mitchell</p>
              <p className="text-xs text-muted-foreground">Senior Building Surveyor</p>
              <div className="space-y-1 mt-2">
                <p className="text-xs flex items-center">
                  <Mail className="w-3 h-3 mr-1 text-purple-400" /> john.mitchell@example.com
                </p>
                <p className="text-xs flex items-center">
                  <Phone className="w-3 h-3 mr-1 text-purple-400" /> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </DetailCard>

        {/* Card 4 - Site Contact (Orange icon) */}
        <DetailCard
          title="Site Contact"
          icon={Phone}
          iconColor="bg-orange-600"
        >
          <div className="flex items-start">
            <div className="w-10 h-10 bg-yellow-500 rounded-full mr-3 flex items-center justify-center text-black font-bold">
              SW
            </div>
            <div>
              <p className="font-medium text-foreground">Sarah Williams</p>
              <p className="text-xs text-muted-foreground">Facilities Manager</p>
              <div className="space-y-1 mt-2">
                <p className="text-xs flex items-center">
                  <Phone className="w-3 h-3 mr-1 text-orange-400" /> +1 (555) 987-6543
                </p>
                <p className="text-xs flex items-center">
                  <Mail className="w-3 h-3 mr-1 text-orange-400" /> s.williams@downtownoffices.com
                </p>
              </div>
            </div>
          </div>
        </DetailCard>

        {/* Card 5 - Access Instructions (Blue icon) */}
        <DetailCard
          title="Access Instructions"
          icon={Key}
          iconColor="bg-blue-800"
        >
          <div className="flex items-start mb-2">
            <Info className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" />
            <p className="font-medium text-foreground">Detailed Instructions</p>
          </div>
          <p>
            Please report to the main reception on the ground floor. Ask for Sarah Williams or mention the building survey appointment. Security will provide access cards and escort to all required areas. Parking is available in the underground garage - use visitor spaces 1-5.
          </p>
        </DetailCard>

        {/* Card 6 - Purpose of Survey (Red icon) */}
        <DetailCard
          title="Purpose of Survey"
          icon={Target}
          iconColor="bg-red-600"
        >
          <p className="font-medium text-foreground mb-2">Assessment Goal:</p>
          <p>
            Comprehensive building condition assessment for insurance renewal purposes. Focus on structural integrity, building services, fire safety installations, and general building maintenance requirements.
          </p>
        </DetailCard>

        {/* Card 7 - Notes & Special Requests (Teal icon) */}
        <DetailCard
          title="Notes & Special Requests"
          icon={NotebookPen}
          iconColor="bg-teal-600"
        >
          <p className="font-medium text-foreground mb-2">Special Requirements:</p>
          <p>
            Please pay special attention to the roof area as there have been minor leak reports. Access to mechanical rooms required for full HVAC inspection. Site contact will escort for security protocols.
          </p>
        </DetailCard>

        {/* Card 8 - Survey Report (Gray icon) */}
        <DetailCard
          title="Survey Report"
          icon={FileText}
          iconColor="bg-gray-600"
        >
          <div className="flex items-center text-red-500 font-semibold">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Report not yet available
          </div>
          <p className="mt-2 text-xs">
            Will be available within 5 business days of completion
          </p>
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-gray-100">
                View Report
            </Button>
          </div>
        </DetailCard>
      </div>
    </DashboardLayout>
  );
};

export default BookingDetails;