"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const WHATSAPP_URL =
    "https://wa.me/56994720824?text=Hola%20Gonzalo,%20quisiera%20un%20diagn%C3%B3stico%20express%20de%20IA.";

  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      aria-label="Escríbenos por WhatsApp"
      className="
        fixed bottom-6 right-6 z-[60]
        inline-flex items-center justify-center
        h-16 w-16 rounded-full
        bg-[#25D366] text-white
        shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]
        transition-transform hover:scale-[1.05] active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/70
      "
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.39c-.27-.13-1.58-.78-1.82-.86-.24-.09-.41-.13-.59.13-.17.27-.68.86-.83 1.04-.15.17-.3.2-.56.07-.27-.13-1.12-.41-2.14-1.31-.79-.7-1.33-1.56-1.49-1.82-.15-.27-.02-.41.11-.54.11-.11.27-.3.41-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.43-.81-1.96-.21-.5-.42-.43-.59-.43-.15 0-.32-.02-.5-.02s-.45.07-.68.32c-.24.26-.9.88-.9 2.15 0 1.26.92 2.49 1.05 2.66.13.17 1.81 2.76 4.39 3.86.61.26 1.08.41 1.45.52.61.19 1.17.16 1.61.1.49-.07 1.58-.64 1.81-1.27.22-.63.22-1.18.15-1.29-.06-.11-.24-.17-.5-.3zM15.86 4.62a10.27 10.27 0 0 0-8.8 15.32l-1.39 5.06 5.18-1.36A10.28 10.28 0 1 0 15.86 4.62zm0 18.49c-1.77 0-3.42-.52-4.8-1.41l-.34-.22-3.07.81.82-2.99-.23-.35a8.53 8.53 0 1 1 7.62 4.16z" />
      </svg>
    </Link>
  );
}