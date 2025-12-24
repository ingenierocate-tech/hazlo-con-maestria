import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navidad 2 | Hazlo con MaestrIA",
  description: "Te vi y desde ahí nunca más quise soltar tu mano.",
};

export default function Navidad2Page() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/navidad2.jpg"
          alt="Fondo de Navidad 2"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 text-center px-4 animate-in fade-in duration-1000">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg tracking-wide max-w-5xl leading-tight">
          Te vi, tomé tu mano y desde ahí nunca más te quise soltar.
        </h1>
        
        <Link 
          href="/navidad3"
          className="px-10 py-4 text-xl font-bold text-[#4A90E2] bg-white hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-transparent hover:border-[#4A90E2]/20"
        >
          Tu sonrisa me atrapó...
        </Link>
      </div>
    </div>
  );
}