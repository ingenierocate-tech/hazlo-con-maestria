// app/components/HowWeDo.tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const list = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function HowWeDo() {
  return (
    <section
      id="como-trabajamos"
      className="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center"
      aria-labelledby="how-title"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
        <h2 id="how-title" className="text-4xl font-bold text-neutral-900 mb-4">
          De los dolores a los resultados 💡
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
          No creemos en la IA por moda, sino por impacto. Te guiamos paso a paso
          para transformar tus procesos y liberar el potencial real de tu equipo.
        </p>
      </motion.div>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
      >
        <motion.article variants={item} role="listitem" className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
          <div className="text-5xl mb-3" aria-hidden>🚀</div>
          <h3 className="font-semibold text-neutral-800 mb-2 text-lg">Diagnóstico express</h3>
          <p className="text-neutral-600 text-sm">En minutos detectamos oportunidades de automatización e impacto inmediato.</p>
        </motion.article>

        <motion.article variants={item} role="listitem" className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
          <div className="text-5xl mb-3" aria-hidden>⚙️</div>
          <h3 className="font-semibold text-neutral-800 mb-2 text-lg">Flujos inteligentes</h3>
          <p className="text-neutral-600 text-sm">Diseñamos y construimos procesos automatizados con tus herramientas actuales.</p>
        </motion.article>

        <motion.article variants={item} role="listitem" className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
          <div className="text-5xl mb-3" aria-hidden>🎓</div>
          <h3 className="font-semibold text-neutral-800 mb-2 text-lg">Entrenamiento del equipo</h3>
          <p className="text-neutral-600 text-sm">Casos reales, prompts personalizados y adopción sostenida de IA.</p>
        </motion.article>

        <motion.article variants={item} role="listitem" className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
          <div className="text-5xl mb-3" aria-hidden>📈</div>
          <h3 className="font-semibold text-neutral-800 mb-2 text-lg">Mejora continua</h3>
          <p className="text-neutral-600 text-sm">Medimos resultados y optimizamos mes a mes para escalar el impacto.</p>
        </motion.article>
      </motion.div>
    </section>
  );
}