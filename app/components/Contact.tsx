"use client";

import { useState } from "react";

export default function Contact(){
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Conversemos</h2>
        <p className="mt-3 text-muted">Cuéntame brevemente tu caso y coordinamos una llamada.</p>

        {!sent ? (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e)=>{ e.preventDefault(); setSent(true); }}
          >
            <input className="w-full rounded-xl border p-3" placeholder="Nombre y empresa" required />
            <input type="email" className="w-full rounded-xl border p-3" placeholder="Email" required />
            <textarea rows={5} className="w-full rounded-xl border p-3" placeholder="¿Qué quieres automatizar o mejorar?" />
            <button className="px-5 py-3 rounded-xl bg-primary text-white">Enviar</button>
          </form>
        ) : (
          <div className="mt-6 rounded-xl border p-6">
            ¡Gracias! Te contactaré a la brevedad.
          </div>
        )}
      </div>
    </section>
  );
}