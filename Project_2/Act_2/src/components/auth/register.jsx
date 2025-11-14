//Register

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Simulación de registro
    localStorage.setItem("registeredUser", JSON.stringify({ email, password }));
    alert("Usuario registrado correctamente!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Registro</h2>
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-3 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-3 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-amber-400 text-white py-2 rounded-md hover:bg-amber-300">
          Registrar
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-amber-500 font-medium hover:underline">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
