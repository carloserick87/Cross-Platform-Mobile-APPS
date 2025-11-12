import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { LandingPage } from "@/components/landing";
import { AboutUs } from "@/components/about";
import { Blog } from "@/components/blog";
import { Events } from "@/components/events";
import { Contact } from "@/components/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/events", element: <Events /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
