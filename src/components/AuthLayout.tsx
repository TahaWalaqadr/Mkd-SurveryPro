import React from "react";
import { BarChart3, ShieldCheck } from "lucide-react";

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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-3">
            <BarChart3 className="w-8 h-8 text-white" /> {/* White icon on black primary background */}
          </div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>

        {/* Form Card */}
        <div className="bg-card p-8 rounded-lg shadow-xl border border-border">
          {children}
        </div>

        {/* Security Badge */}
        <div className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
          Your information is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;