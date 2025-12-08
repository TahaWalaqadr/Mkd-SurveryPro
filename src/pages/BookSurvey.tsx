import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Phone,
  Play,
  FileText,
  Map,
  CalendarCheck,
  User,
  Building,
  Shield,
  Wrench,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
  buttonText: string;
  onAction: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  iconBg,
  buttonText,
  onAction,
}) => (
  <Card className="shadow-lg h-full">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <div className={cn("p-3 rounded-lg mr-4", iconBg)}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-4">
      <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
      <Button onClick={onAction} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

interface FormSectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, icon: Icon, children }) => (
  <div className="mb-8 p-6 rounded-lg bg-card border border-border">
    <div className="flex items-center mb-4 border-b border-border pb-3">
      <Icon className="w-5 h-5 mr-3 text-primary" />
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);

const BookSurvey = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <DashboardLayout
      title="Book a Survey"
      subtitle="Schedule your next professional site assessment"
    >
      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <ActionCard
          title="Call Us"
          subtitle="Speak directly with a booking specialist for immediate assistance."
          icon={Phone}
          iconBg="bg-blue-600"
          buttonText="+44 123 456 7890"
          onAction={() => window.open("tel:+441234567890")}
        />
        <ActionCard
          title="Online Chat"
          subtitle="Share instant quotes and discuss requirements with our AI assistant."
          icon={Play}
          iconBg="bg-green-600"
          buttonText="Start Chat"
          onAction={() => console.log("Start Chat")}
        />
        <ActionCard
          title="Fill Form"
          subtitle="Complete detailed survey requirements at your own pace."
          icon={FileText}
          iconBg="bg-purple-600"
          buttonText="Fill Form"
          onAction={() => console.log("Fill Form")}
        />
      </div>

      {/* Survey Booking Form */}
      <form className="space-y-8">
        {/* Type of Asset */}
        <FormSection title="Type of Asset" icon={Building}>
          <RadioGroup defaultValue="solar" className="flex space-x-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="solar" id="r1" className="border-primary text-primary" />
              <Label htmlFor="r1">Solar Farm</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wind" id="r2" className="border-primary text-primary" />
              <Label htmlFor="r2">Wind Turbine</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="r3" className="border-primary text-primary" />
              <Label htmlFor="r3">Other Infrastructure</Label>
            </div>
          </RadioGroup>
        </FormSection>

        {/* Site Information */}
        <FormSection title="Site Information" icon={Map}>
          <Input placeholder="Site Name (e.g., East London Warehouse)" className="bg-input border-border" />
          <Input placeholder="System Size (e.g., 500 kWp)" className="bg-input border-border" />
          <div className="relative md:col-span-2">
            <Input placeholder="Location / Address" className="bg-input border-border pr-10" />
            <Map className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </FormSection>

        {/* Survey Scheduling */}
        <FormSection title="Survey Scheduling" icon={CalendarCheck}>
          <div className="flex flex-col space-y-2">
            <Label>Preferred Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border bg-card w-fit"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="flexible" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black" />
              <Label htmlFor="flexible">I'm flexible with timing</Label>
            </div>
            <div className="space-y-2">
              <Label>Site Access</Label>
              <RadioGroup defaultValue="open" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="open" id="a1" className="border-primary text-primary" />
                  <Label htmlFor="a1">Open Access (Unmanned)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="closed" id="a2" className="border-primary text-primary" />
                  <Label htmlFor="a2">Closed Access (Requires Escort)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </FormSection>

        {/* On-Site Contact */}
        <FormSection title="On-Site Contact" icon={User}>
          <Input placeholder="Contact Name" className="bg-input border-border" />
          <Input placeholder="Phone Number" className="bg-input border-border" />
          <Input placeholder="Role (e.g., Site Manager)" className="bg-input border-border md:col-span-2" />
        </FormSection>

        {/* Purpose of Survey */}
        <FormSection title="Purpose of Survey" icon={ClipboardList}>
          <div className="flex flex-col space-y-3 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="p1" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black" />
              <Label htmlFor="p1">Routine Maintenance Check</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="p2" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black" />
              <Label htmlFor="p2">Insurance Claim Documentation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="p3" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black" />
              <Label htmlFor="p3">Third-Party Diagnostic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="p4" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black" />
              <Label htmlFor="p4">Regulatory Compliance Audit</Label>
            </div>
          </div>
        </FormSection>

        {/* Additional Information */}
        <FormSection title="Additional Information" icon={Wrench}>
          <Textarea
            placeholder="Notes & Special Requirements (e.g., specific equipment to inspect, safety concerns)"
            className="bg-input border-border md:col-span-2 min-h-[150px]"
          />
        </FormSection>

        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 text-lg py-6">
          Submit Booking Request
          <ArrowRight className="w-5 h-5 ml-3" />
        </Button>
      </form>
    </DashboardLayout>
  );
};

export default BookSurvey;