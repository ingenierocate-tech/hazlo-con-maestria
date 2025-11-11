// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // si no existe, comenta esta línea
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Consultoría IA — Hazlo con MaestrIA",
  description:
    "IA aplicada a tus procesos: automatización, formación de equipos y quick-wins medibles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans text-foreground bg-white antialiased`}>
        {/* deja un padding-top si tu Header es fijo */}
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}