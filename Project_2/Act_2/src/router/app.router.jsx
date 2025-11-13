// src/router/app.router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { LandingPage } from "@/components/landing";
import { AboutUs } from "@/components/about";
import { Blog } from "@/components/blog";
import { Events } from "@/components/events";
import { Contact } from "@/components/contact";
import { Login } from "@/components/login";
import { Register } from "@/components/signup";
import { Dashboard } from "@/components/dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <AboutUs /> },
      { path: "blog", element: <Blog /> },
      { path: "events", element: <Events /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
