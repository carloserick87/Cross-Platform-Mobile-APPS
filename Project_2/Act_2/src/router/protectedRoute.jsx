// ProtectedRoute

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("registeredUser"));
  return user ? children : <Navigate to="/register" replace />;
}