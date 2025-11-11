// app/components/WhatsAppButton.tsx
"use client";

export default function WhatsAppButton() {
  const phone = "56994720824";
  const text = encodeURIComponent("¡Hola! Quiero un diagnóstico express.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <span className="grid place-items-center h-14 w-14 rounded-full bg-[#25D366] shadow-lg ring-1 ring-black/10 hover:shadow-xl hover:brightness-95 transition">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          className="text-white"
        >
          {/* Ícono WhatsApp más limpio */}
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.469-.149-.667.149-.197.297-.767.967-.94 1.164-.173.198-.346.223-.643.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.057-.173-.297-.019-.458.13-.606.134-.133.297-.346.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.667-1.611-.914-2.208-.242-.579-.487-.501-.667-.51-.173-.009-.371-.009-.569-.009-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.19 5.08 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.875.118.572-.085 1.758-.718 2.007-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </span>
    </a>
  );
}