// Login
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      localStorage.setItem("token", "nexus_user_token");
      navigate("/dashboard");
    } else {
      alert("Usuario no registrado. Redirigiendo a registro...");
      navigate("/register");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
        <input type="email" placeholder="Correo electrónico" className="w-full px-3 py-2 border rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Contraseña" className="w-full px-3 py-2 border rounded-md" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="w-full bg-amber-400 text-white py-2 rounded-md hover:bg-amber-300">
          Entrar
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-amber-500 font-medium hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
