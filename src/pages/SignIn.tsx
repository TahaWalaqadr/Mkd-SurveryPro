import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
        className="pr-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
      />
      <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>
  );

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your account">
      {/* Progress Indicator - Using yellow accent color */}
      <div className="flex justify-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {renderInput("email", "Email Address", Mail, "email")}
        {renderInput("password", "Password", Lock, "password")}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              className="border-gray-500 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black" 
            />
            <Label htmlFor="remember" className="text-sm text-gray-400">
              Remember me
            </Label>
          </div>
          <Link to="#" className="text-sm text-yellow-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-6 font-semibold">
          Sign In
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-400">Don't have an account?</span>{" "}
        <Link to="/create-account" className="text-yellow-400 hover:underline">
          Create account
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignIn;