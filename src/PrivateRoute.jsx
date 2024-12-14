import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/Login" replace />;
}

export default PrivateRoute;