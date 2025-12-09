import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, Building, Lock, Edit, MoreVertical, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileSectionProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconColor: string;
  children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  children,
}) => (
  <Card className="shadow-md h-full">
    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3 border-b border-border">
      <div className="flex items-center">
        <div className={cn("p-2 rounded-full mr-3", iconColor)}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
            <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <MoreVertical className="w-5 h-5 text-muted-foreground" />
      </Button>
    </CardHeader>
    <CardContent className="pt-6">
      <form className="space-y-4">{children}</form>
    </CardContent>
  </Card>
);

const ProfileField: React.FC<{ label: string; value: string; type?: string; readOnly?: boolean }> = ({ label, value, type = "text", readOnly = false }) => (
  <div className="space-y-1">
    <Label className="text-muted-foreground">{label}</Label>
    <div className="relative">
        <Input 
            type={type} 
            defaultValue={value} 
            className={cn("bg-input border-border text-foreground", readOnly && "bg-gray-50 cursor-not-allowed")} 
            readOnly={readOnly}
        />
        {readOnly && type === 'email' && (
            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
    </div>
    {readOnly && type === 'email' && (
        <p className="text-xs text-muted-foreground mt-1">Email cannot be changed</p>
    )}
  </div>
);

const MyProfile = () => {
  const user = {
    name: "John Smith",
    email: "john.smith@company.com",
    company: "Renewable Energy Solutions Ltd",
    phone: "+44 123 456 7890",
    avatarInitials: "JS",
  };

  return (
    <DashboardLayout
      title={user.name}
      subtitle="Manage your account details and security settings"
    >
      {/* User Info Header */}
      <Card className="mb-8 p-6 flex flex-col md:flex-row items-start justify-between bg-card border border-border shadow-md">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
            {user.avatarInitials}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
            <p className="text-muted-foreground flex items-center mt-1">
              <Mail className="w-4 h-4 mr-1" /> {user.email}
            </p>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <Building className="w-4 h-4 mr-1" /> {user.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
          <div className="flex space-x-2">
            <Badge className="bg-green-500 hover:bg-green-500/90 text-white font-semibold">
              Active Account
            </Badge>
            <Badge className="bg-gray-400 hover:bg-gray-500/90 text-white font-semibold">
              Remove Member
            </Badge>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section 1 - Personal Information */}
        <ProfileSection
          title="Personal Information"
          subtitle="Manage your account details"
          icon={User}
          iconColor="bg-purple-600"
        >
          <ProfileField label="Full Name *" value={user.name} />
          <ProfileField label="Phone Number" value={user.phone} type="tel" />
          <ProfileField label="Email Address" value={user.email} type="email" readOnly={true} />
          <ProfileField label="Company" value={user.company} />
          <div className="flex justify-end pt-4">
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                Save Changes
            </Button>
          </div>
        </ProfileSection>

        {/* Section 2 - Change Password */}
        <ProfileSection
          title="Change Password"
          subtitle="Update your account password for security"
          icon={Lock}
          iconColor="bg-red-600"
        >
          <ProfileField label="Current Password *" value="" type="password" />
          <ProfileField label="New Password *" value="" type="password" />
          <ProfileField label="Confirm New Password *" value="" type="password" />
          <div className="flex justify-end pt-4">
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                Update Password
            </Button>
          </div>
        </ProfileSection>
      </div>
    </DashboardLayout>
  );
};

export default MyProfile;