import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-[#2A5AF6] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Logo + marca */}
        <div className="flex items-center gap-4">
          <Image
            src="/img/logo.png"
            alt="Hazlo con MaestrIA"
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-semibold">Hazlo con MaestrIA</span>
        </div>

        {/* Frase exacta (sin cambios futuros) */}
        <p className="text-white/90 text-center md:text-left max-w-2xl italic">
          “La Inteligencia Artificial llegó para quedarse, súmate a ella antes que sea demasiado tarde.”
        </p>

        {/* Ícono Instagram */}
        <a
          href="https://instagram.com/hazloconmaestria.cl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center justify-center"
        >
          <span
            className="
              inline-flex h-12 w-12 items-center justify-center rounded-full
              shadow-sm hover:shadow
              bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-1.25 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </span>
        </a>
      </div>
    </footer>
  );
}