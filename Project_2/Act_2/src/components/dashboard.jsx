// Dashboard


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const navigate = useNavigate();

  //  Aquí va el useEffect con la redirección
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000); // espera 2 segundos antes de redirigir
    return () => clearTimeout(timer); // limpia el temporizador si se desmonta
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Bienvenido, {user?.email || "Usuario"} 
      </h2>
      <p className="text-gray-600">Redirigiendo al inicio...</p>
    </div>
  );
}
