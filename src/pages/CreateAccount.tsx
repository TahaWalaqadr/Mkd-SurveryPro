import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Building, Phone, ArrowRight } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const CreateAccount = () => {
  const renderInput = (
    id: string,
    placeholder: string,
    Icon: React.ElementType,
    type: string = "text",
    optional: boolean = false,
  ) => (
    <div className="relative mb-4">
      <Input
        id={id}
        type={type}
        placeholder={placeholder + (optional ? " (Optional)" : "")}
        className="pr-10 bg-gray-800/70 border-gray-600 text-white placeholder:text-gray-400 focus:bg-gray-800/90 transition-colors"
      />
      <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>
  );

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join the future of survey management"
    >
      {/* Progress Indicator - Using yellow accent color */}
      <div className="flex justify-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </div>

      <form className="space-y-4">
        {renderInput("firstName", "First Name", User)}
        {renderInput("email", "Email Address", Mail, "email")}
        {renderInput("company", "Company", Building, "text", true)}
        {renderInput("phone", "Phone Number", Phone, "tel")}

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox 
            id="terms" 
            className="border-gray-500 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black" 
          />
          <Label
            htmlFor="terms"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
          >
            I agree to the{" "}
            <Link to="#" className="text-yellow-400 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-yellow-400 hover:underline">
              Privacy Policy
            </Link>
            .
          </Label>
        </div>

        <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-6 font-semibold">
          Create Account
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-400">Already have an account?</span>{" "}
        <Link to="/signin" className="text-yellow-400 hover:underline">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default CreateAccount;