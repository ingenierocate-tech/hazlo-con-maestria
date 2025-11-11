// app/components/HowWeDo.tsx
"use client";

import { motion, type Variants } from "framer-motion";

// Cubic-bezier suave (equivalente a un easeOut agradable)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,              // 👈 no string
    },
  },
};

const list: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE,              // 👈 no string
    },
  },
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
        {/* título + subtítulo */}
      </motion.div>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
      >
        <motion.article variants={item} role="listitem" className="...">...</motion.article>
        {/* …resto de cards */}
      </motion.div>
    </section>
  );
}