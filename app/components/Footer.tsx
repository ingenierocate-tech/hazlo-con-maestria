// app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#2E5AF7] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Marca */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Hazlo con MaestrIA" width={48} height={48} />
          <span className="text-2xl font-semibold">Hazlo con MaestrIA</span>
        </div>

        {/* Frase inspiradora */}
        <p className="text-center text-white/90 text-lg">
          La Inteligencia Artificial llegó para quedarse, súmate a ella antes que sea demasiado tarde.
        </p>

        {/* Redes */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="https://instagram.com/tu_instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}