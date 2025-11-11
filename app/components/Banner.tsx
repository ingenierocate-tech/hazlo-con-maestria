// app/components/Banner.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  img: string; // ruta en /public o /public/img
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Automatiza y gana tiempo",
    subtitle: "Copilotos y flujos con Make + Google Workspace listos en semanas.",
    ctaText: "Diagnóstico express",
    ctaHref: "#diagnostico",
    img: "/img/hero-1.jpg",
  },
  {
    id: 2,
    title: "IA que se nota en resultados",
    subtitle: "Integraciones reales con tus sistemas: Shopify, CRM y más.",
    ctaText: "Ver servicios",
    ctaHref: "/servicios",
    img: "/img/hero-2.jpg",
  },
  {
    id: 3,
    title: "Formación para tu equipo",
    subtitle: "Capacitaciones prácticas para tu operación diaria.",
    ctaText: "Ver servicios",
    ctaHref: "/servicios",
    img: "/img/hero-3.jpg",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // Auto-rotación cada 6s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-black/5">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((s, i) => (
            <div key={`slide-${s.id}`} className="relative min-w-full h-[420px] sm:h-[520px]">
              <Image src={s.img} alt={s.title} fill className="object-cover" priority={i === 0} />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 h-full w-full flex items-center">
                <div className="px-6 sm:px-10">
                  <h2 className="text-white text-3xl sm:text-5xl font-semibold max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {s.title}
                  </h2>
                  <p className="text-white/95 mt-3 max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                    {s.subtitle}
                  </p>
                  <div className="mt-6">
                    <a
                      href={s.ctaText === "Ver servicios" ? "#servicios" : s.ctaHref}
                      className="inline-block bg-[#FFD642] text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-[#FFE372] transition-colors duration-200"
                    >
                      {s.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={`dot-${i}`}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={clsx(
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}