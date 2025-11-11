// app/components/PainPoints.tsx
export default function PainPoints() {
  const items: { icon: string; title: string; desc: string }[] = [
    { icon: "⚡️", title: "Propuestas lentas", desc: "Armar presupuestos o propuestas toma horas y se pierde follow-up." },
    { icon: "⏳", title: "Procesos manuales", desc: "Copiar/pegar datos entre sistemas, planillas y correos todos los días." },
    { icon: "💬", title: "Respuestas tardías", desc: "Clientes esperando porque soporte y ventas no dan abasto." },
    { icon: "💸", title: "Cobros y pagos trabados", desc: "Conciliación, recordatorios y facturación que demandan mucho tiempo." },
    { icon: "🔎", title: "Datos dispersos", desc: "Información repartida entre Gmail, Drive, CRM y WhatsApp." },
    { icon: "🧩", title: "Falta de integración", desc: "Tus herramientas no “hablan” entre sí: duplicas trabajo y errores." },
  ];

  return (
    <section id="dolores" className="container mx-auto px-4 md:px-6 lg:px-8 py-12 sm:py-16">
      {/* Título + bajada a ancho completo */}
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl font-semibold">IA práctica, resultados reales.</h2>
        <p className="mt-3 text-neutral-600 text-lg sm:text-xl leading-relaxed w-full max-w-none">
          ¿Te suena alguno de estos dolores? Los resolvemos aplicando IA donde suma:
          tareas repetitivas, procesos lentos y oportunidades de impacto directo en tu
          negocio o práctica profesional.
        </p>
      </div>

      {/* Grid de dolores */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card bg-white hover:shadow-card transition">
            <div className="text-2xl">{it.icon}</div>
            <div className="mt-2 font-semibold">{it.title}</div>
            <div className="mt-1 text-sm text-neutral-600">{it.desc}</div>
          </div>
        ))}
      </div>

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
    </section>
  );
}