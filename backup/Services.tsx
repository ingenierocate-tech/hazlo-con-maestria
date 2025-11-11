// Copia de respaldo de app/components/Services.tsx
export default function Services() {
  return (
    <section id="servicios" className="container py-16 sm:py-20">
      {/* Título de sección */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-neutral-900">
        Soluciones con Inteligencia Artificial que generan impacto real
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Tarjeta IZQUIERDA - Empresa Full IA */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3
            className="text-2xl font-semibold"
            style={{ color: "#0063F7" }} // Azul corporativo
          >
            Empresa Full IA
          </h3>

          <p className="mt-4 text-neutral-700 text-lg">
            Transformamos tu operación con inteligencia artificial aplicada a
            procesos y operaciones reales.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• Diagnóstico de oportunidades de automatización.</li>
            <li>• Copilotos y flujos inteligentes en tus herramientas.</li>
            <li>• Formación + acompañamiento del equipo.</li>
            <li>• Mejora continua con métricas de impacto.</li>
          </ul>

          <div className="mt-8">
            <a
              href="https://forms.gle/QPVghnAU7Pa2Cm7b9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#0063F7] px-6 py-3 font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              Quiero escalar mi empresa con IA
            </a>
          </div>
        </div>

        {/* Tarjeta DERECHA - IA personalizada */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3
            className="text-2xl font-semibold"
            style={{ color: "#FFD642" }} // Amarillo corporativo
          >
            IA personalizada a tu medida
          </h3>

          <p className="mt-4 text-neutral-700 text-lg">
            Personalizamos la IA a tu forma de trabajar: flujos, prompts y
            copilotos hechos a tu medida para ahorrar horas cada semana.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• Asesoría 1:1 y acompañamiento continuo.</li>
            <li>• Automatización de tus herramientas diarias.</li>
            <li>• Copilotos adaptados a tu workflow.</li>
            <li>• Entrenamiento exprés para resultados rápidos.</li>
          </ul>

          <div className="mt-8">
            <a
              href="https://forms.gle/q7vAURyku67DxwpQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#FFD642] px-6 py-3 font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              Quiero mi IA personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}