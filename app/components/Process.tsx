export default function Process(){
  const steps = [
    {t:"Diagnóstico", d:"Identificamos oportunidades de impacto inmediato."},
    {t:"Implementación", d:"Integramos IA en tus herramientas actuales (Google Workspace, Shopify, Make, etc.)."},
    {t:"Transferencia", d:"Formamos al equipo y dejamos manuales listos."},
    {t:"Mejora continua", d:"Iteramos con métricas y nuevos flujos mensuales."},
  ];
  return (
    <section className="py-14 bg-[rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Cómo lo hacemos</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s,i)=>(
            <div key={i} className="rounded-2xl border p-6">
              <div className="text-primary text-sm font-semibold">0{i+1}</div>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}