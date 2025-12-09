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
  MessageSquare, // Chat bubble icon
  FileText, // Form icon
  Map,
  CalendarCheck,
  User,
  Building,
  ClipboardList,
  Wrench,
  ArrowRight,
  Check,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
  buttonText: string;
  note: string;
  onAction: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  iconBg,
  buttonText,
  note,
  onAction,
}) => (
  <Card className={cn("shadow-lg h-full border-2", iconBg === 'bg-blue-600' ? 'border-blue-600' : iconBg === 'bg-green-600' ? 'border-green-600' : 'border-purple-600')}>
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <div className={cn("p-3 rounded-lg mr-4", iconBg)}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-4">
      <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
      <p className="text-xs font-medium text-muted-foreground mb-2">{note}</p>
      <Button onClick={onAction} className={cn("w-full text-white", iconBg)}>
        {buttonText}
        {title === "Quick Support | Call Us" && <Phone className="w-4 h-4 ml-2" />}
        {title === "Self-service | Chat Assistant" && <MessageSquare className="w-4 h-4 ml-2" />}
        {title === "Self-service | Manual Form" && <FileText className="w-4 h-4 ml-2" />}
      </Button>
    </CardContent>
  </Card>
);

interface FormSectionProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, subtitle, icon: Icon, children }) => (
  <div className="mb-8 p-6 rounded-lg bg-card border border-border shadow-md">
    <div className="flex items-center mb-4 border-b border-border pb-3">
      <Icon className="w-5 h-5 mr-3 text-purple-600" />
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
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
      subtitle="Choose a convenient way to schedule your survey. You can call, chat, or fill the form."
    >
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <ActionCard
          title="Quick Support | Call Us"
          subtitle="Connect with our knowledgeable agent for immediate assistance and scheduling."
          icon={Phone}
          iconBg="bg-blue-600"
          buttonText="+44 123 456 7890"
          note="Available 24/7 | Average wait time: 2 mins"
          onAction={() => window.open("tel:+441234567890")}
        />
        <ActionCard
          title="Self-service | Chat Assistant"
          subtitle="Smart chatbot guides you through booking with intelligent questions and instant confirmations."
          icon={MessageSquare}
          iconBg="bg-green-600"
          buttonText="Start Chat"
          note="Quick & immediate | Instant confirmation"
          onAction={() => console.log("Start Chat")}
        />
        <ActionCard
          title="Self-service | Manual Form"
          subtitle="Complete detailed survey requirements form with comprehensive options and specifications."
          icon={FileText}
          iconBg="bg-purple-600"
          buttonText="Fill Form"
          note="Takes ~10 minutes | Full control"
          onAction={() => console.log("Fill Form")}
        />
      </div>

      {/* Survey Booking Form */}
      <form className="space-y-8">
        <FormSection 
          title="Survey Booking Form" 
          subtitle="Please fill in all required details for your survey and survey" 
          icon={FileText}
        >
          {/* Type of Asset */}
          <div className="md:col-span-2 space-y-2">
              <Label className="font-semibold">1. Type of Asset *</Label>
              <RadioGroup defaultValue="solar" className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="solar" id="r1" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="r1">Solar Farm</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wind" id="r2" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="r2">Wind Turbine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="r3" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="r3">Other Infrastructure</Label>
                  </div>
              </RadioGroup>
          </div>

          {/* Site Information */}
          <div className="md:col-span-2 space-y-2">
              <Label className="font-semibold">2. Site Information *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <Input placeholder="Site Name (e.g., Solar Installation)" className="bg-input border-border" />
                  <Input placeholder="System Size (e.g., 500kW (5 slots))" className="bg-input border-border" />
              </div>
          </div>

          {/* Location */}
          <div className="md:col-span-2 space-y-2">
              <Label className="font-semibold">3. Location *</Label>
              <Input placeholder="Address (e.g., GPS coordinates)" className="bg-input border-border" />
          </div>

          {/* Survey Scheduling */}
          <div className="space-y-2">
              <Label className="font-semibold">4. Survey Scheduling *</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border bg-card w-fit shadow-md"
              />
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="flexible" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                <Label htmlFor="flexible">I'm flexible with timing</Label>
              </div>
          </div>
          
          {/* Site Access */}
          <div className="space-y-2">
              <Label className="font-semibold">5. Site Access *</Label>
              <RadioGroup defaultValue="public" className="flex flex-col space-y-3 pt-2">
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="public" id="a1" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="a1">Site is public</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="open" id="a2" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="a2">Open access</Label>
                  </div>
              </RadioGroup>
          </div>

          {/* On-Site Contact */}
          <div className="md:col-span-2 space-y-2">
              <Label className="font-semibold">6. On-Site Contact *</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <Input placeholder="Contact Name" className="bg-input border-border" />
                  <Input placeholder="Phone (e.g., +44-123-456-7890)" className="bg-input border-border" />
                  <Input placeholder="Role (e.g., Facility manager, CC)" className="bg-input border-border" />
              </div>
          </div>

          {/* Purpose of Survey */}
          <div className="md:col-span-2 space-y-2">
              <Label className="font-semibold">7. Purpose of Survey *</Label>
              <RadioGroup defaultValue="maintenance" className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maintenance" id="p1" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="p1">Maintenance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="insurance" id="p2" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="p2">Insurance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fault" id="p3" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="p3">Fault Diagnosis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compliance" id="p4" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="p4">Compliance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="p5" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor="p5">Other</Label>
                  </div>
              </RadioGroup>
          </div>

          {/* Additional Information */}
          <div className="md:col-span-2 space-y-2">
              <Label className="font-semibold">8. Additional Information</Label>
              <Textarea
                  placeholder="PTO requirements, safety information, special access instructions, or any other important details"
                  className="bg-input border-border min-h-[100px]"
              />
          </div>
        </FormSection>

        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-white hover:bg-primary/90 text-lg py-6 px-8">
            Submit Booking Request
            <Check className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default BookSurvey;