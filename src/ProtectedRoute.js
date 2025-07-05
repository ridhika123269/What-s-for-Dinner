import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("google_token");
  if (!token) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  // Logged in, render children
  return children;
}
