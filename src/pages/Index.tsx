import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to the sign-in page as the application entry point
  return <Navigate to="/signin" replace />;
};

export default Index;