import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navidad | Hazlo con MaestrIA",
  description: "Todo comenzó hace 10 años atrás.",
};

export default function NavidadPage() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/navidad.jpg"
          alt="Fondo de Navidad"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 text-center px-4 animate-in fade-in duration-1000">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg tracking-wide max-w-5xl leading-tight">
          Todo comenzó hace casi 10 años atrás...
        </h1>
        
        <Link 
          href="/navidad2"
          className="px-10 py-4 text-xl font-bold text-[#5D4037] bg-white hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-transparent hover:border-[#5D4037]/20"
        >
          Un 6 de febrero, a las 15:45...
        </Link>
      </div>
    </div>
  );
}