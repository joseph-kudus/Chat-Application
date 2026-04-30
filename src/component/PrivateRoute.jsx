import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function PrivateRoute({ children }) {
  const { user } = useUser();

  // If no user, redirect to /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user exists, render the protected component
  return children;
}

export default PrivateRoute;
