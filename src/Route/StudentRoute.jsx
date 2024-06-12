import React from "react";
import useContextApi from "../Hooks/useContextApi";
import useFindRole from "../Hooks/useFindRole";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContextApi();
  const [userRole, adminIsLoading] = useFindRole();
  const location = useLocation();

  if (loading || adminIsLoading) {
    return <Spinner></Spinner>;
  }

  if (user && userRole.role === "student") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace={true}></Navigate>;
};

export default StudentRoute;
