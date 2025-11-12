// app/components/Process.tsx
"use client";

import { motion, type Variants } from "framer-motion";

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
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const steps = [
  {
    n: "01",
    icon: "🩺",
    title: "Diagnóstico",
    desc: "Identificamos oportunidades de impacto inmediato y procesos manuales que pueden automatizarse.",
  },
  {
    n: "02",
    icon: "⚙️",
    title: "Implementación",
    desc: "Integramos IA en tus herramientas actuales (Google Workspace, Shopify, Make, etc.) sin interrumpir tu operación.",
  },
  {
    n: "03",
    icon: "🎓",
    title: "Transferencia",
    desc: "Formamos al equipo, entregamos guías y dejamos todo documentado para que seas autosuficiente.",
  },
  {
    n: "04",
    icon: "📈",
    title: "Mejora continua",
    desc: "Iteramos con métricas, nuevos flujos y mejoras mensuales para maximizar el valor generado.",
  },
];

export default function Process() {
  return (
    <section id="como-lo-hacemos" className="container py-12 sm:py-14">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Cómo lo hacemos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ n, icon, title, desc }) => (
            <motion.div
              key={n}
              variants={item}
              className="group relative rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[#0063F7]">{n}</span>
                <span className="text-3xl">{icon}</span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}