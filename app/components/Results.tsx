export default function Results(){
  const stats = [
    "−30–60% de tiempo en tareas repetitivas",
    "+15–25% en velocidad de respuesta a clientes",
    "Automatizaciones listas en 2 semanas",
  ];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Menos tareas. Más resultados.</h2>
        <ul className="mt-6 grid md:grid-cols-3 gap-6">
          {stats.map((s,i)=>(
            <li key={i} className="rounded-2xl border p-6">{s}</li>
          ))}
        </ul>
        <p className="mt-6 text-muted">
          La IA aplicada no se mide en likes, se mide en horas ahorradas.
        </p>
      </div>
    </section>
  );
}