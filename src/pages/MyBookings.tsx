import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Eye, Filter, RefreshCw, Check, Download, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Booking {
  id: string;
  site: string;
  type: string;
  date: string;
  time: string;
  status: "Scheduled" | "In Progress" | "Completed";
  initials: string;
  initialsBg: string;
}

const bookings: Booking[] = [
  {
    id: "BKG001",
    site: "Downtown Office Complex",
    type: "Building Survey",
    date: "March 15, 2025",
    time: "10:00 AM",
    status: "Scheduled",
    initials: "B",
    initialsBg: "bg-blue-500",
  },
  {
    id: "BKG002",
    site: "Riverside Commercial Center",
    type: "Structural Survey",
    date: "March 8, 2025",
    time: "2:00 PM",
    status: "In Progress",
    initials: "R",
    initialsBg: "bg-green-500",
  },
  {
    id: "BKG003",
    site: "Tech Park Building A",
    type: "Condition Survey",
    date: "February 28, 2025",
    time: "9:30 AM",
    status: "Completed",
    initials: "TP",
    initialsBg: "bg-purple-500",
  },
];

const getStatusBadge = (status: Booking["status"]) => {
  switch (status) {
    case "Scheduled":
      return (
        <Badge className="bg-yellow-500 hover:bg-yellow-500/90 text-black font-semibold">
          {status}
        </Badge>
      );
    case "In Progress":
      return (
        <Badge className="bg-blue-500 hover:bg-blue-500/90 text-white font-semibold">
          {status}
        </Badge>
      );
    case "Completed":
      return (
        <Badge className="bg-green-500 hover:bg-green-500/90 text-white font-semibold flex items-center">
          <Check className="w-3 h-3 mr-1" />
          {status}
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const MyBookings = () => {
  return (
    <DashboardLayout
      title="My Bookings"
      subtitle="Manage your survey bookings"
    >
      {/* Filters Section */}
      <Card className="mb-8 shadow-md">
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">
                Start Date
              </label>
              <Input type="date" className="bg-input border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">
                End Date
              </label>
              <Input type="date" className="bg-input border-border" />
            </div>
          </div>
          <div className="col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1 block">
              Status
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-input border-border">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90 col-span-1">
            <Filter className="w-4 h-4 mr-2" />
            Apply Filters
          </Button>
          <Button variant="outline" size="icon" className="col-span-1 md:col-span-1">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Bookings Table */}
      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="text-xl font-bold">Survey Bookings</CardTitle>
                <p className="text-sm text-muted-foreground">Manage and track your survey appointments</p>
            </div>
            <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                    <Download className="w-5 h-5 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </Button>
            </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="border-border">
                <TableHead className="w-[250px]">Site Details</TableHead>
                <TableHead className="w-[250px]">Schedule</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id} className="border-border hover:bg-gray-50/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3", booking.initialsBg)}>
                        {booking.initials}
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{booking.site}</p>
                        <p className="text-xs text-muted-foreground">{booking.type}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      <p className="flex items-center text-sm text-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-green-500" />
                        {booking.date}
                      </p>
                      <p className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                        {booking.time}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild className="bg-primary text-white hover:bg-primary/90">
                      <Link to={`/bookings/${booking.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Booking
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <div className="flex items-center justify-between p-4 border-t border-border">
            <p className="text-sm text-muted-foreground">Showing 1-3 of 18 results</p>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default MyBookings;