import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export function PrivateRouter({
  children,
  isAuthenticated,
}: PrivateRouterProps) {
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
