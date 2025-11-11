// Copia de respaldo de app/components/IntroSection.tsx
export default function IntroSection() {
  return (
    <section id="intro" className="container mx-auto px-4 md:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold">IA práctica, resultados reales.</h2>
      <p className="mt-3 text-neutral-600 text-lg sm:text-xl leading-relaxed w-full max-w-none">
        ¿Te suena alguno de estos dolores? Los resolvemos aplicando IA donde suma:
        tareas repetitivas, procesos lentas y oportunidades de impacto directo en tu
        negocio o práctica profesional.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Empezar hoy → Diagnóstico */}
          <a href="/diagnostico" className="btn-primary">
            Empezar hoy
          </a>

          {/* Ver servicios (queda igual) */}
          <a href="#servicios" className="btn-ghost">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}