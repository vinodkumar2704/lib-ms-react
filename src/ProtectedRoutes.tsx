import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = localStorage.getItem("logstate");
  return auth ? <Outlet /> : <Navigate to={"/"} />;
};
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLogin = localStorage.getItem("logstate");
  if (!isLogin) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
