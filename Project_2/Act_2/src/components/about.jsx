import React from "react";
import { BookOpen, Coffee, Users } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-700">Sobre Nosotros</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          En <span className="font-semibold text-gray-800">Nexus </span><span className="font-semibold text-yellow-500">Books</span> creemos en el poder de las ideas
          y en el placer de compartir un buen libro acompañado de un café. Somos una
          librería moderna que combina literatura, tecnología y comunidad en un solo lugar.
        </p>

        {/* Sección de misión y visión */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Nuestra Misión</h3>
            <p className="text-gray-600">
              Promover la lectura, el aprendizaje y la creatividad, creando un espacio
              donde las personas puedan conectar con el conocimiento y con los demás.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Nuestra Visión</h3>
            <p className="text-gray-600">
              Ser un punto de encuentro para lectores, emprendedores y soñadores que buscan
              inspiración en los libros, la tecnología y el trabajo colaborativo.
            </p>
          </div>
        </div>

        {/* Sección de servicios */}
        <h3 className="text-3xl font-bold mb-8 text-gray-700">Nuestros Espacios</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <BookOpen className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Librería</h4>
            <p className="text-gray-600">
              Una amplia selección de libros de todos los géneros, desde clásicos
              hasta novedades de autores independientes.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <Users className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Coworking</h4>
            <p className="text-gray-600">
              Espacios cómodos y creativos para estudiar, trabajar o colaborar en proyectos con otras personas.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <Coffee className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cafetería</h4>
            <p className="text-gray-600">
              Disfruta de un ambiente relajado con cafés artesanales, postres y snacks mientras lees o trabajas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
