// app/gracias/profesional/page.tsx
export default function GraciasProfesional() {
  return (
    <section className="container py-16 sm:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900">
          ¡Gracias por tu diagnóstico! 🙌
        </h1>
        <p className="mt-4 text-neutral-600 text-lg">
          Recibimos tus respuestas y prepararemos recomendaciones prácticas
          para aplicar IA en tu día a día.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl mx-auto">
          <a
            href="https://calendly.com/tu-enlace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
          >
            Agendar 30 minutos
          </a>
          <a
            href="https://wa.me/56994720824?text=Hola,%20vengo%20del%20diagn%C3%B3stico%20profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <div className="mt-10 text-sm text-neutral-500">
          ¿Quieres ver nuestros servicios?
          <a href="/#servicios" className="ml-2 underline text-primary">
            Ir a servicios
          </a>
        </div>
      </div>
    </section>
  );
}