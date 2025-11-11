"use client";

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  initial: string;
  role: string;
  quote: string;
  stars?: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Yenny M.",
    initial: "Y",
    role: "Contador Auditor, TGR",
    quote:
      "Gracias Gonzalo, quedé como dije hoy al inicio de la clase fascinada con el uso de la IA. ¡Creo que soy #IAlovers! Muchas gracias 🙌",
    stars: 5,
  },
  {
    name: "Octavio L.",
    initial: "O",
    role: "Rector, Betterland School",
    quote:
      "Gonzalo nos ayudó a instalar y subir el piso sobre el uso de IA en Betterland School. Docentes y funcionarios quedaron satisfechos con la experiencia.",
    stars: 5,
  },
  {
    name: "Christian J.",
    initial: "C",
    role: "Jefe Control gestión, TGR",
    quote:
      "Felicitaciones, muy buen facilitador y coach. Atendió cada consulta y se adaptó al nivel de los alumnos.",
    stars: 5,
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function FeaturedCases() {
  return (
    <section id="testimonios" className="container py-16 sm:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted mt-2">
            Testimonios reales de personas que confiaron en nosotros.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={item}
              className="flex flex-col justify-between rounded-2xl bg-white border border-black/5 shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:border-[#0063F7]/70"
            >
              <div>
                {/* Estrellas */}
                <div
                  className="flex items-center gap-1 text-[#FFD642]"
                  aria-label={`${t.stars ?? 5} estrellas`}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className={`h-5 w-5 ${
                        i < (t.stars ?? 5) ? "opacity-100" : "opacity-30"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.95 14.347a1 1 0 00-1.175 0L6.665 16.28c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.03 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.019-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Texto del testimonio */}
                <p className="mt-4 text-foreground/80 leading-relaxed">{t.quote}</p>
              </div>

              {/* Bloque inferior fijo y con aire */}
              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-full bg-[#0063F7] text-white font-bold grid place-items-center">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">
                    {t.role} · <span className="italic">Cliente verificado</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}