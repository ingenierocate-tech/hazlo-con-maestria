export default function Hero() {
  return (
    <section className="text-center py-28 px-6 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        IA que se nota en tus resultados.
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
        Automatizamos procesos, creamos copilotos y formamos equipos para que tu negocio gane tiempo, eficiencia y foco. 
        Deja de probar herramientas: aplica IA donde importa.
      </p>
      <div className="flex justify-center gap-4">
        <a href="diagnostico" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
          Diagnóstico express
        </a>
        <a href="#servicios" className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400">
          Ver servicios
        </a>
      </div>
    </section>
  );
}