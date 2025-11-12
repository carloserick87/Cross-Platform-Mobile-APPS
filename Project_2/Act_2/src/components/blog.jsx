//Blog
import React from "react";
import { Calendar, User } from "lucide-react";

export const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Los libros más esperados de este mes",
      author: "Equipo Nexus",
      date: "11 de Noviembre, 2025",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Descubre las nuevas publicaciones que están revolucionando el mundo literario. Desde novelas de ciencia ficción hasta historias románticas imperdibles.",
    },
    {
      id: 2,
      title: "Café y lectura: una combinación perfecta",
      author: "María López",
      date: "8 de Noviembre, 2025",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Te contamos por qué disfrutar de un buen libro con una taza de café puede ser la mejor terapia para tu mente y creatividad.",
    },
    {
      id: 3,
      title: "Cómo crear tu propio club de lectura",
      author: "Carlos Ramírez",
      date: "3 de Noviembre, 2025",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Aprende a organizar tu propio grupo de lectura, elegir libros interesantes y fomentar debates literarios en comunidad.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Blog Nexus</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Noticias, reseñas y artículos sobre el fascinante mundo de los libros,
          la creatividad y la cultura. ¡Inspírate con nuestras publicaciones!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-yellow-500 transition">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" /> {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" /> {post.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-yellow-500 font-medium hover:underline">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
