// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ClientLayout from "./components/ClientLayout";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Hazlo con MaestrIA",
  description: "Consultoría y automatización con IA",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", rel: "icon" },
      { url: "/favicon.ico?v=3", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans text-foreground bg-white antialiased`}>
        <ClientLayout
          header={<Header />}
          footer={<Footer />}
          waButton={<WhatsAppButton />}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}