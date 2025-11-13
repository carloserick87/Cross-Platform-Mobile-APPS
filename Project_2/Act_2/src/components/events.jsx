import { useFetchData } from "../hooks/useFetchData.jsx";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export function Events() {
  const { data, loading, error } = useFetchData(
    "/data/eventsData.json",
    (json) => json.events || []
  );

  const events = Array.isArray(data) ? data : [];

  if (loading) return <p className="text-center mt-10">Cargando eventos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Próximos Eventos</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          En Nexus organizamos actividades para fomentar la lectura, la creatividad
          y el encuentro entre personas apasionadas por los libros. ¡No te las pierdas!
        </p>

        {loading ? (
          <p>Cargando publicaciones...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-yellow-500  transition">
                  {event.title}
                </h3>

                <div className="text-sm text-gray-500 mb-4 space-y-1">
                  <p className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" /> {event.date}
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> {event.time}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> {event.location}
                  </p>
                </div>

                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="text-yellow-500  font-medium hover:underline">
                  Reservar lugar →
                </button>
              </div>
            </article>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default Events;
