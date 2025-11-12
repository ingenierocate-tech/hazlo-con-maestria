"use client";

import { motion, type Variants } from "framer-motion";

// Curva bezier para transiciones suaves
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export default function FeaturedCases() {
  return (
    <section id="casos" className="container py-12 sm:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Casos típicos que resolvemos
          </h2>
          <p className="mt-3 text-neutral-600">
            Ejemplos reales de automatizaciones y copilotos que implementamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div
            variants={item}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="text-3xl mb-3">📩</div>
            <h3 className="font-semibold text-lg mb-1">
              Correos postventa automatizados
            </h3>
            <p className="text-neutral-600">
              Envío y seguimiento automático de correos de agradecimiento,
              satisfacción o NPS.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-semibold text-lg mb-1">
              Propuestas técnicas generadas con IA
            </h3>
            <p className="text-neutral-600">
              Redacción de propuestas desde plantillas con datos de CRM o inputs
              del equipo.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="text-3xl mb-3">🧲</div>
            <h3 className="font-semibold text-lg mb-1">
              Clasificación de leads y mensajes
            </h3>
            <p className="text-neutral-600">
              Filtrado y priorización automática de contactos según intención o
              urgencia.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-1">
              Reportes automáticos de desempeño
            </h3>
            <p className="text-neutral-600">
              Envío programado de reportes con métricas clave, sin esfuerzo
              manual.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}