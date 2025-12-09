import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SignIn = () => {
  const [signedIn, setSignedIn] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign in
    setSignedIn(true);
  };

  if (signedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const renderInput = (
    id: string,
    placeholder: string,
    Icon: React.ElementType,
    type: string = "text",
  ) => (
    <div className="relative mb-4">
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="pr-10 bg-input border-border text-foreground"
      />
      <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your account">
      {/* Progress Indicator - Using primary color (black) */}
      <div className="flex justify-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {renderInput("email", "Email Address", Mail, "email")}
        {renderInput("password", "Password", Lock, "password")}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" />
            <Label htmlFor="remember" className="text-sm text-muted-foreground">
              Remember me
            </Label>
          </div>
          <Link to="#" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 mt-6">
          Sign In
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <Link to="/create-account" className="text-primary hover:underline">
          Create account
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignIn;