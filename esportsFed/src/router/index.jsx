import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children, lazy } from "react";

const LandingLayout = lazy(() => import("../layouts/LandingLayout"));
const Home = lazy(() => import("../pages/Landing"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
        {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
