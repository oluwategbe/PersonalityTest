/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils";

const AuthGuard = ({ children }) => {
  const location = useLocation();

  if (isAuthenticated()) {
    return <>{children}</>;
  }
  return <Navigate to={"/"} state={{ from: location }} replace />;
};

export default AuthGuard;
