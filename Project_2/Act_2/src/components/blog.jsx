//Blog
import { useFetchData } from "../hooks/useFetchData.jsx";
import { Calendar, User } from "lucide-react";

export const Blog = () => {
  const { data: posts, loading } = useFetchData("/data/blogData.json", (json) =>
    json.blog.map((post) => ({
      id: post.id,
      title: post.title,
      author: post.author,
      date: post.date,
      image: post.image || "https://via.placeholder.com/600x400?text=Sin+Imagen",
      excerpt: post.excerpt,
    }))
  );

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Blog Nexus</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Noticias, reseñas y artículos sobre el fascinante mundo de los libros.
        </p>

        {loading ? (
          <p>Cargando publicaciones...</p>
        ) : (
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
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
