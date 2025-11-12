import React from "react";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export const Events = () => {
  const events = [
    {
      id: 1,
      title: "Presentación del libro 'El eco de los sueños'",
      date: "20 de Noviembre, 2025",
      time: "6:00 PM",
      location: "Librería Nexus - Dublin City Centre",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      description:
        "Acompáñanos a la presentación del nuevo libro de la autora mexicana Ana Beltrán. Firma de ejemplares y convivencia con lectores.",
    },
    {
      id: 2,
      title: "Taller de escritura creativa",
      date: "28 de Noviembre, 2025",
      time: "5:00 PM",
      location: "Coworking Nexus - Sala 2",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      description:
        "Un taller práctico para desarrollar tu estilo narrativo. Aprende técnicas de escritura y recibe retroalimentación personalizada.",
    },
    {
      id: 3,
      title: "Club de lectura: clásicos contemporáneos",
      date: "5 de Diciembre, 2025",
      time: "4:30 PM",
      location: "Cafetería Nexus",
      image:
        "https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=800&q=80",
      description:
        "Una tarde de café, conversación y literatura. Este mes analizamos *La sombra del viento* de Carlos Ruiz Zafón.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Próximos Eventos</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          En Nexus organizamos actividades para fomentar la lectura, la creatividad
          y el encuentro entre personas apasionadas por los libros. ¡No te las pierdas!
        </p>

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
      </div>
    </section>
  );
};

export default Events;
