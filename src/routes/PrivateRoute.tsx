import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  isLogged: boolean | null;
}

const PrivateRoute = ({ children, isLogged }: Props) => {
  if (!isLogged) return children;
  return <Navigate to="/login/admin" replace />;
};

export default PrivateRoute;