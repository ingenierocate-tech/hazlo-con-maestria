// app/gracias/empresa/page.tsx
export default function GraciasEmpresa() {
  return (
    <section className="container py-16 sm:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900">
          ¡Gracias por tu diagnóstico! 🎉
        </h1>
        <p className="mt-4 text-neutral-600 text-lg">
          Recibimos tu información y ya estamos preparando tus <b>quick-wins</b> con IA.
          En breve te contactaremos con los siguientes pasos.
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
            href="https://wa.me/56XXXXXXXX?text=Hola,%20vengo%20del%20diagnóstico%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <div className="mt-10 text-sm text-neutral-500">
          ¿Quieres ver cómo trabajamos?
          <a href="/#como-trabajamos" className="ml-2 underline text-primary">
            Ver nuestro paso a paso
          </a>
        </div>
      </div>
    </section>
  );
}