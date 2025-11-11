// app/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#testimonios", label: "Casos" },
];

export default function Header() {
  return (
    <header className="header sticky top-0 z-40 w-full bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Hazlo con MaestrIA"
            width={44}
            height={44}
            priority
          />
          <span className="text-xl font-semibold text-neutral-900">
            Hazlo con MaestrIA
          </span>
        </Link>

        {/* Navegación + CTA agrupados a la derecha */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-neutral-900 hover:text-neutral-900 focus:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/diagnostico" className="btn-primary">
            Diagnóstico express
          </Link>
        </div>
      </div>
    </header>
  );
}