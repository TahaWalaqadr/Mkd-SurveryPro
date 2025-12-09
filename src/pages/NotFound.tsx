import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 bg-card rounded-lg shadow-xl border border-border">
        <h1 className="text-6xl font-extrabold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground mb-6">Oops! Page not found</p>
        <Link to="/" className="text-primary hover:text-primary/80 underline font-medium">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;