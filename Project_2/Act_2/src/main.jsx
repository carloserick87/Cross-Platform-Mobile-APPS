// Main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/app.router";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ✅ versión correcta para React
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights /> 
  </StrictMode>
);

