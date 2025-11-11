// app/components/CTA.tsx
"use client";

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-white text-center">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4">
          Diagnóstico express con IA 🚀
        </h2>
        <p className="text-neutral-600 text-lg mb-8">
          Detecta oportunidades concretas de automatización y mejora en tu empresa o práctica profesional.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Bloque 1: Soy empresa */}
          <div className="p-6 rounded-2xl border bg-neutral-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-neutral-800">Soy empresa</h3>
            <p className="text-neutral-600 mb-6 text-sm">
              Obtén un diagnóstico inicial de tus procesos y tareas repetitivas que podrías automatizar con IA.
            </p>
            <a
              href="https://forms.gle/QPVghnAU7Pa2Cm7b9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Continuar
            </a>
          </div>

          {/* Bloque 2: Soy profesional */}
          <div className="p-6 rounded-2xl border bg-neutral-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-neutral-800">Soy profesional</h3>
            <p className="text-neutral-600 mb-6 text-sm">
              Evalúa tu trabajo y descubre cómo incorporar IA para ahorrar tiempo y mejorar resultados.
            </p>
            <a
              href="https://forms.gle/YdFfF2hk28vtz2nz9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-block"
            >
              Continuar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}