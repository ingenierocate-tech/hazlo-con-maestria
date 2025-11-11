// Copia de respaldo de app/layout.tsx
import "./app/globals.css";
import type { Metadata } from "next";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import WhatsAppButton from "./app/components/WhatsAppButton";
import { poppins } from "./app/fonts";

export const metadata: Metadata = {
  title: "Consultoría IA — Hazlo con MaestrIA",
  description: "IA aplicada a tus procesos: automatización, formación de equipos y quick-wins medibles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans text-foreground bg-white antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}