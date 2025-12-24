"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/navidad5.jpg",
  "/navidad6.jpg",
  "/navidad7.jpg",
];

export default function Navidad5Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Carousel */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Fondo Navidad ${index + 5}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={100}
          />
          {/* Overlay oscuro para asegurar que las letras blancas se lean bien */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 text-center px-4 animate-in fade-in duration-1000">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl tracking-wide max-w-5xl leading-tight">
          Nos vamos a SAN PEDRO!!!!
        </h1>
        
        <p className="text-white text-3xl md:text-5xl font-bold drop-shadow-xl max-w-4xl leading-relaxed">
          Pero ahora la historia la escribiremos juntos ❤️
        </p>
      </div>
    </div>
  );
}