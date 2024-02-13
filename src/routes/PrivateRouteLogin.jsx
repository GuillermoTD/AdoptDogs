import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home/HomePage";

const PrivateRouteLogin = () => {
  const auth = useSelector((state) => state.auth);
  return auth.isLogged==true ? <Home /> : <Navigate to="/login" />;
};

export default PrivateRouteLogin;
