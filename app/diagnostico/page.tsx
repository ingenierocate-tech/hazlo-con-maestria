export default function DiagnosticoSelector() {
  return (
    <section className="container py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">
          Diagnóstico express
        </h1>
        <p className="mt-3 text-neutral-600 text-lg">
          Cuéntanos si eres <strong>empresa</strong> o <strong>profesional</strong> y te guiamos al formulario adecuado.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Empresa */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
          <div className="text-4xl" aria-hidden>🏢</div>
          <h2 className="mt-3 font-semibold text-neutral-900 text-lg">Soy empresa</h2>
          <p className="mt-1 text-neutral-600 text-sm">
            Optimiza procesos, integra IA a tu stack y consigue quick-wins con impacto.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfge4HkbksyJ89A4xgZbomWSa7MSsevKzki1mGmTxDMR-tU0A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Continuar
          </a>
        </div>

        {/* Profesional */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
          <div className="text-4xl" aria-hidden>👤</div>
          <h2 className="mt-3 font-semibold text-neutral-900 text-lg">Soy profesional</h2>
          <p className="mt-1 text-neutral-600 text-sm">
            Diseñamos tu copiloto personal y flujos a tu medida para ahorrar tiempo real.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5aPNwB7DuPQHlSBap0_iq7jqxYIetQ902G-gQuB4LWJ2nDg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Continuar
          </a>
        </div>
      </div>
    </section>
  );
}