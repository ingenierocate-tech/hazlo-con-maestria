// Copia de respaldo de app/components/QuickWin.tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// 1) Toma desde env si existe; si no, usa la constante de fallback.
// 👉 Reemplaza el número por el tuyo si usas fallback.
const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WA_URL ||
  "https://wa.me/56994720824?text=Hola%20quiero%20agendar%20un%20diagn%C3%B3stico%20express";

export default function QuickWin() {
  return (
    <section id="quickwin" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          aria-labelledby="qw-title"
        >
          <motion.h2
            id="qw-title"
            variants={item}
            className="text-3xl sm:text-4xl font-bold mb-3"
          >
            Quick-win con IA: resultados en días, no meses
          </motion.h2>

          <motion.p variants={item} className="text-neutral-600 max-w-2xl mx-auto mb-10">
            Agenda un diagnóstico express y llévate 2 acciones concretas para implementar ya.
          </motion.p>

          <motion.div
            variants={item}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left"
          >
            <motion.div variants={item} className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="text-4xl mb-2" aria-hidden>🚀</div>
              <h3 className="font-semibold mb-1">Diagnóstico express</h3>
              <p className="text-neutral-600 text-sm">
                Detectamos oportunidades de alto impacto con IA.
              </p>
            </motion.div>

            <motion.div variants={item} className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="text-4xl mb-2" aria-hidden>⚙️</div>
              <h3 className="font-semibold mb-1">Flujos inteligentes</h3>
              <p className="text-neutral-600 text-sm">
                Diseñamos y construimos automatizaciones con tus herramientas.
              </p>
            </motion.div>

            <motion.div variants={item} className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="text-4xl mb-2" aria-hidden>🎓</div>
              <h3 className="font-semibold mb-1">Entrenamiento práctico</h3>
              <p className="text-neutral-600 text-sm">
                Capacitamos a tu equipo con casos reales y prompts aplicados.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Agendar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}