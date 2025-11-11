// src/layouts/MainLayout.jsx
import NavBar from "@/components/navBar";
import { Footer } from "@/components/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}
