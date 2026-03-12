import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo EADES | Salud Mental Aplicada",
  description:
    "Grupo EADES conecta práctica clínica, investigación y formación especializada para desarrollar programas y colaboraciones con instituciones, universidades y organizaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
