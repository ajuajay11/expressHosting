import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Landing = lazy(()=> import("../pages/Home"));
const About = lazy(()=> import("../pages/About"));
const router = createBrowserRouter([
    {
    path: "/",
    element: <Landing />,
  },
   {
    path: "/about",
    element: <About />,
  },
])

export default router;