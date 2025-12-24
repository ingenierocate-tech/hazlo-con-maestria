"use client";

import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  waButton: React.ReactNode;
}

export default function ClientLayout({
  children,
  header,
  footer,
  waButton,
}: ClientLayoutProps) {
  const pathname = usePathname();
  const isLanding =
    pathname === "/navidad" ||
    pathname === "/navidad2" ||
    pathname === "/navidad2" ||
    pathname === "/navidad3" ||
    pathname === "/navidad4" ||
    pathname === "/navidad5";

  if (isLanding) {
    return <main>{children}</main>;
  }

  return (
    <>
      {header}
      <main className="pt-20">{children}</main>
      {footer}
      {waButton}
    </>
  );
}