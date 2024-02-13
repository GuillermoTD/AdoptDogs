import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Auth/Login/LoginPage.jsx";
import SigninPage from "../pages/Auth//Signin/SigninPage.jsx";
import HomePage from "../pages/Home/HomePage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signin",
    element: <SigninPage />,
  },
  
]);

export default routes;
