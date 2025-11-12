// LandingPage.jsx
import { useState, useEffect } from "react";
import AnimatedTestimonialsDemo from "./ui/animated-testimonials-demo";

export function LandingPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  const API_URL = "/data/landingData.json";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("No se pudo cargar el JSON");
        const data = await response.json();

       const formattedBooks = data.books.map((book) => ({
          title: book.title,
          price: book.price,
          cover: book.cover || "https://via.placeholder.com/300x400?text=Sin+Portada",
          reviews: book.reviews ?? 0,
        }));

        setBooks(formattedBooks);
      } catch (error) {
        console.error("Error al cargar los libros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const heroImage =
    "https://imagessl.casadellibro.com/t1e/cw/63/novedades_SEMANA42_2025_1200x430.webp";

  return (
    <div className="flex flex-col items-center w-full mt-28">
     <section className="relative text-white text-center w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl">
      <img src={heroImage} alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0"/>

    <div className="absolute inset-0 bg-linear-to-b from-black/75 to-black/75 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-[60vh] px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Descubre tu siguiente libro favorito</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Explora millones de títulos, autores y descuentos exclusivos cada semana.</p>

        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition">
          Reserva ahora
        </button>
      </div>
    </section>


    <section className="max-w-6xl w-full px-6 py-20 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Libros destacados de la semana</h2>

         {loading ? (
          <p className="text-center text-gray-600">Cargando libros...</p>
            ) : (
             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {books.map((book, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <img src={book.cover} alt={book.title} className="w-screen h-64 object-contain"/>

          
            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-gray-500 mb-1">
                €{book.price?.toFixed(2) ?? "—"}
              </p>

            <h3 className="text-sm sm:text-base font-medium text-gray-700 truncate">
              {book.title}
            </h3>

            <div className="flex justify-center items-center mt-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.463a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.463a1 1 0 00-1.175 0l-3.388 2.463c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">
                {book.reviews ?? 0}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</section>


    
      <section className="bg-blue-50 w-full py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <i className="fas fa-shipping-fast text-yellow-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Envío rápido</h3>
            <p className="text-gray-600">
              Recibe tus libros en tiempo récord, sin demoras.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <i className="fas fa-book-open text-yellow-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Catálogo variado</h3>
            <p className="text-gray-600">
              Miles de títulos para todos los gustos y edades.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <i className="fas fa-tags text-yellow-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Ofertas exclusivas</h3>
            <p className="text-gray-600">
              Descuentos y promociones cada semana.
            </p>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 w-full py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedTestimonialsDemo />
        </div>
      </section>
    </div>
  );
}
