import React from "react";
import { BarChart3, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  // Custom dark colors for Auth pages based on screenshots
  // Using gradient for background: #1a1d3e to #0f1226
  const darkBg = "bg-gradient-to-b from-[#1a1d3e] to-[#0f1226]";
  const darkCard = "bg-[#2d3748] shadow-2xl border border-[#4b5563]"; // Dark card background
  const lightText = "text-white";
  const mutedDarkText = "text-gray-400";
  const yellowAccent = "bg-yellow-400";
  const securityBadgeBg = "bg-[#374151]";

  return (
    <div className={cn("min-h-screen flex flex-col items-center justify-center p-4", darkBg)}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-3", yellowAccent)}>
            <BarChart3 className="w-8 h-8 text-black" />
          </div>
          <h1 className={cn("text-3xl font-bold", lightText)}>{title}</h1>
          <p className={cn("text-sm mt-1", mutedDarkText)}>{subtitle}</p>
        </div>

        {/* Form Card */}
        <div className={cn("p-8 rounded-lg", darkCard)}>
          {children}
        </div>

        {/* Security Badge */}
        <div className={cn("mt-8 text-center text-sm flex items-center justify-center p-3 rounded-lg", securityBadgeBg, mutedDarkText)}>
          <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
          Your information is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;