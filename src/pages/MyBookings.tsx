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
import { Calendar, MapPin, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Booking {
  id: string;
  site: string;
  date: string;
  time: string;
  status: "Scheduled" | "In Progress" | "Completed";
}

const bookings: Booking[] = [
  {
    id: "BKG001",
    site: "Downtown Office Complex",
    date: "2025-03-15",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: "BKG002",
    site: "Warehouse 4B, Industrial Park",
    date: "2025-03-10",
    time: "09:00 AM",
    status: "In Progress",
  },
  {
    id: "BKG003",
    site: "Residential Property 123",
    date: "2025-03-01",
    time: "02:00 PM",
    status: "Completed",
  },
];

const getStatusBadge = (status: Booking["status"]) => {
  switch (status) {
    case "Scheduled":
      return (
        <Badge className="bg-primary hover:bg-primary/90 text-black">
          {status}
        </Badge>
      );
    case "In Progress":
      return (
        <Badge className="bg-blue-500 hover:bg-blue-500/90 text-white">
          {status}
        </Badge>
      );
    case "Completed":
      return (
        <Badge className="bg-green-500 hover:bg-green-500/90 text-white">
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
      subtitle="Manage and track all your scheduled surveys"
    >
      {/* Filters Section */}
      <div className="mb-8 p-4 rounded-lg bg-card border border-border grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-1 block">
            Start Date
          </label>
          <Input type="date" className="bg-input border-border" />
        </div>
        <div className="col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-1 block">
            End Date
          </label>
          <Input type="date" className="bg-input border-border" />
        </div>
        <div className="col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-1 block">
            Status
          </label>
          <Select>
            <SelectTrigger className="bg-input border-border">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90 col-span-1">
          Apply Filters
        </Button>
      </div>

      {/* Bookings Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary">
            <TableRow className="border-border">
              <TableHead className="w-[200px]">Site Details</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id} className="border-border hover:bg-card/50">
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {booking.site}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {booking.date}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {booking.time}
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
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
      </div>

      {/* Pagination */}
      <div className="mt-6">
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
    </DashboardLayout>
  );
};

export default MyBookings;