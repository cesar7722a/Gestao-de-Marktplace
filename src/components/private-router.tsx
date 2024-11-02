import { useNavigate } from "react-router-dom";

interface PrivateRouterProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export function PrivateRouter({
  children,
  isAuthenticated,
}: PrivateRouterProps) {
  const navigate = useNavigate();
  return isAuthenticated ? <>{children}</> : navigate("/login");
}
