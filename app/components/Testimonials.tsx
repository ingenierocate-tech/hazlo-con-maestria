// app/components/Testimonials.tsx
"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const Star = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-yellow-400">
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export default function Testimonials() {
  const testimonios = [
    {
      nombre: "Yenny M.",
      cargo: "Contador Auditor, TGR",
      texto:
        "Gracias Gonzalo, quedé como dije hoy al inicio de la clase fascinada con el uso de la IA. ¡Creo que soy #IAlovers! Muchas gracias 🙌",
    },
    {
      nombre: "Octavio L.",
      cargo: "Rector, Betterland School",
      texto:
        "Gonzalo nos ayudó a instalar y subir el piso sobre el uso de IA en Betterland School. Docentes y funcionarios quedaron satisfechos con la experiencia.",
    },
    {
      nombre: "Christian J.",
      cargo: "Jefe Control gestión, TGR",
      texto:
        "Felicitaciones, muy buen facilitador y coach. Atendió cada consulta y se adaptó al nivel de los alumnos.",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          aria-labelledby="testimonios-title"
        >
          <motion.h2
            id="testimonios-title"
            variants={item}
            className="text-3xl sm:text-4xl font-bold mb-2"
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <motion.p variants={item} className="text-neutral-500 mb-10">
            Testimonios reales de personas que confiaron en nosotros
          </motion.p>

          <motion.div
            variants={item}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left"
            role="list"
          >
            {testimonios.map((t, i) => (
              <motion.article
                key={i}
                variants={item}
                role="listitem"
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div
                    className="bg-[#0063F7] text-white font-bold w-12 h-12 flex items-center justify-center rounded-full text-xl"
                    aria-hidden
                  >
                    {t.nombre.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-lg">{t.nombre}</p>
                    <p className="text-sm text-neutral-500">{t.cargo}</p>
                  </div>
                </div>

                <div className="mb-3" aria-label="Calificación 5 de 5">
                  <span className="text-yellow-400">★★★★★</span>
                </div>

                <p className="text-neutral-700 leading-relaxed">{t.texto}</p>
              </motion.article>
            ))}
          </motion.div>

          {/* Rating pill: 4.95/5 basado en 180+ reseñas */}
          <motion.div variants={item} className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white shadow-md ring-1 ring-black/5 px-5 py-3">
              <div className="flex -space-x-1">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <span className="text-neutral-700 font-medium">
                4.95/5 basado en <span className="font-semibold">180+ reseñas</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}