import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Calendar, FileText, Download, FileArchive, MapPin, Eye, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface Report {
  id: number;
  title: string;
  location: string;
  date: string;
  fileType: "PDF" | "ZIP" | "CSV";
}

const reports: Report[] = [
  { id: 1, title: "Building Condition Report", location: "Downtown Office Complex", date: "2025-03-22", fileType: "PDF" },
  { id: 2, title: "Equipment Inventory", location: "Manufacturing Plant A", date: "2025-03-12", fileType: "CSV" },
  { id: 3, title: "Structural Assessment", location: "Riverside Warehouse", date: "2025-03-05", fileType: "PDF" },
  { id: 4, title: "Site Photos Collection", location: "Tech Campus Building", date: "2025-02-28", fileType: "ZIP" },
  { id: 5, title: "Safety Compliance Report", location: "Industrial Complex", date: "2025-02-15", fileType: "PDF" },
  { id: 6, title: "Energy Audit Data", location: "Corporate Headquarters", date: "2025-02-01", fileType: "CSV" },
];

const getFileTypeIcon = (type: Report["fileType"]) => {
  switch (type) {
    case "PDF":
      return <FileText className="w-8 h-8 text-red-500" />;
    case "ZIP":
      return <FileArchive className="w-8 h-8 text-yellow-500" />;
    case "CSV":
      // Using FileText with a specific color for CSV, as there is no dedicated CSV icon in lucide
      return <FileText className="w-8 h-8 text-green-500" />;
    default:
      return <FileText className="w-8 h-8 text-gray-500" />;
  }
};

const Reports = () => {
  return (
    <DashboardLayout
      title="Reports"
      subtitle="Access and download your completed survey reports"
    >
      {/* Filters Section */}
      <Card className="mb-8 shadow-md">
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-medium text-muted-foreground mb-1 block">
              Search
            </label>
            <div className="relative">
              <Input placeholder="Search by site name or report title..." className="bg-input border-border pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1 block">
              Date Range
            </label>
            <Select defaultValue="all_time">
              <SelectTrigger className="bg-input border-border">
                <SelectValue placeholder="All Time" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="all_time">All Time</SelectItem>
                <SelectItem value="last_month">Last Month</SelectItem>
                <SelectItem value="last_year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1 block">
              File Type
            </label>
            <Select defaultValue="all_types">
              <SelectTrigger className="bg-input border-border">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="all_types">All Types</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="zip">ZIP</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90 col-span-full md:col-span-1">
            <Filter className="w-4 h-4 mr-2" />
            Apply Filters
          </Button>
        </CardContent>
      </Card>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.id} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              {getFileTypeIcon(report.fileType)}
              <span className="text-xs font-semibold text-muted-foreground">{report.fileType}</span>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold mb-2 text-foreground">{report.title}</CardTitle>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  {report.location}
                </p>
                <p className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                  {report.date}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t pt-4">
              <Button className="bg-primary text-white hover:bg-primary/90">
                <Eye className="w-4 h-4 mr-2" />
                View
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-gray-100">
                <Download className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Reports;