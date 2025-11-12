import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Información de contacto */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">Contáctanos</h2>
          <p className="text-lg text-gray-600 mb-8">
            Si tienes alguna pregunta, sugerencia o simplemente quieres saludar,
            no dudes en escribirnos. En <span className="font-semibold text-black ">Nexus </span><span className="font-semibold text-yellow-500">Books </span>
             nos encanta conectar con nuestros lectores.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-3 text-yellow-500" />
              Dublin City Centre, Irlanda
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-yellow-500" />
              +353 01 234 5678
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-yellow-500" />
              contacto@nexuslibrary.ie
            </li>
          </ul>
        </div>

        {/* Formulario */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-12">
              <Send className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600">
                Gracias por contactarnos. Te responderemos muy pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="tucorreo@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
