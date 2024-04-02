import { Navigate } from "react-router";
import { useAuthContext } from "../context/hooks/useAuthContext";

const ProtectedRoute = ({
  redirectPath = "/register",
  children,
}: {
  redirectPath?: string;
  children: React.ReactNode;
}) => {
  const authContext = useAuthContext();

  if (!authContext.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
