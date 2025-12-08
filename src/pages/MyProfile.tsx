import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, Building, Lock, Edit } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileSectionProps {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  icon: Icon,
  iconColor,
  children,
}) => (
  <Card className="shadow-lg">
    <CardHeader className="flex flex-row items-center space-y-0 pb-3 border-b border-border">
      <div className={cn("p-2 rounded-full mr-3", iconColor)}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-6">
      <form className="space-y-4">{children}</form>
    </CardContent>
  </Card>
);

const ProfileField: React.FC<{ label: string; value: string; type?: string }> = ({ label, value, type = "text" }) => (
  <div className="space-y-1">
    <Label className="text-muted-foreground">{label}</Label>
    <Input type={type} defaultValue={value} className="bg-input border-border text-foreground" />
  </div>
);

const MyProfile = () => {
  const user = {
    name: "John Smith",
    email: "john.smith@surveypro.com",
    company: "Global Infrastructure Co.",
    phone: "+1 (555) 123-4567",
    avatarInitials: "JS",
  };

  return (
    <DashboardLayout
      title="My Profile"
      subtitle="Manage your account details and security settings"
    >
      {/* User Info Header */}
      <Card className="mb-8 p-6 flex flex-col md:flex-row items-center justify-between bg-card border border-border">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-black mr-4">
            {user.avatarInitials}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <Building className="w-4 h-4 mr-1" /> {user.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
          <div className="flex space-x-2">
            <Badge className="bg-green-500 hover:bg-green-500/90 text-white">
              Active Account
            </Badge>
            <Badge className="bg-yellow-600 hover:bg-yellow-600/90 text-black">
              Premium Member
            </Badge>
          </div>
          <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information Section */}
        <ProfileSection
          title="Personal Information"
          icon={User}
          iconColor="bg-blue-600"
        >
          <ProfileField label="Full Name" value={user.name} />
          <ProfileField label="Phone Number" value={user.phone} type="tel" />
          <ProfileField label="Email Address" value={user.email} type="email" />
          <ProfileField label="Company" value={user.company} />
          <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 mt-4">
            Save Changes
          </Button>
        </ProfileSection>

        {/* Change Password Section */}
        <ProfileSection
          title="Change Password"
          icon={Lock}
          iconColor="bg-pink-600"
        >
          <ProfileField label="Current Password" value="" type="password" />
          <ProfileField label="New Password" value="" type="password" />
          <ProfileField label="Confirm New Password" value="" type="password" />
          <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4">
            Update Password
          </Button>
        </ProfileSection>
      </div>
    </DashboardLayout>
  );
};

export default MyProfile;