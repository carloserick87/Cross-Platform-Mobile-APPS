import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * AnimatedTestimonialsDemo
 * - Autoplay (cambia cada 4s)
 * - Controles prev/next
 * - Responsive y con Tailwind
 *
 * Si usas alias '@', importa con: import AnimatedTestimonialsDemo from '@/components/ui/animated-testimonials-demo';
 * Si no, usa la ruta relativa desde tu archivo.
 */

export default function AnimatedTestimonialsDemo() {
  const data = [
    {
      description:
        "Nexus se ha convertido en mi librería favorita. La web es muy fácil de usar, los libros llegan rápido y siempre con algún detalle bonito.",
      image:
        "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Isabelle Carlos",
      handle: "@isabellecarlos",
    },
    {
      description:
        "Excelente atención al cliente. Tuve un problema con mi pedido y lo solucionaron enseguida. Además, los precios son muy competitivos y el catálogo es enorme. ¡Muy recomendada!",
      image:
        "https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Lana Akash",
      handle: "@lanaakash",
    },
    {
      description:
        "Me gusta mucho el concepto de Nexus: librería, coworking y cafetería. Es el lugar perfecto para leer, estudiar o trabajar. El ambiente es tranquilo y siempre descubro títulos nuevos.",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Liam O’Connor",
      handle: "@liamoc",
    },
    {
      description:
        "Descubrí Nexus buscando un libro difícil de conseguir, y lo encontré ahí. El diseño de la página es moderno y la experiencia de compra, excelente.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Isabella Mendes",
      handle: "@isamendes",
    },
    {
      description:
        "La comunidad de lectores que han creado es increíble. Participo en sus clubs de lectura online y me encanta cómo fomentan el amor por los libros. ¡Una librería con alma!",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Meera Patel",
      handle: "@meerapatel",
    },
    {
      description:
        "La app de Nexus es muy intuitiva y rápida. Puedo reservar lanzamientos y recibir notificaciones de mis autores favoritos. Se nota que combinan bien la tecnología con la pasión por la lectura.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Emily Chen",
      handle: "@emchen",
    },
  ];

  const [index, setIndex] = useState(0);
  const AUTOPLAY_MS = 4000;

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % data.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
  <h2 className="text-2xl font-bold text-gray-800 text-center">
    Opiniones de nuestros lectores
  </h2>
</div>


        <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-center"
              >
                <img
                  src={data[index].image}
                  alt={data[index].name}
                  className="w-20 h-20 object-cover rounded-full shadow-md"
                />
                <div>
                  <p className="text-gray-700 italic mb-4">{`“${data[index].description}”`}</p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-gray-900">{data[index].name}</p>
                      <p className="text-sm text-gray-500">{data[index].handle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-center gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? "bg-amber-300" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
