import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo EADES | Salud Mental Aplicada",
  description:
    "Grupo EADES conecta práctica clínica, investigación y formación especializada para desarrollar programas y colaboraciones con instituciones, universidades y organizaciones.",
  keywords: [
    "salud mental",
    "psicoterapia",
    "psicología",
    "Lima",
    "Perú",
    "Grupo EADES",
    "EADES Psicoterapia",
    "Pseres",
    "ITAS",
    "Ilumina",
    "formación especializada",
    "investigación en salud mental",
    "psicología clínica",
    "bienestar emocional",
  ],
  authors: [{ name: "Grupo EADES" }],
  openGraph: {
    title: "Grupo EADES | Salud Mental Aplicada",
    description:
      "Grupo EADES conecta práctica clínica, investigación y formación especializada para desarrollar programas y colaboraciones con instituciones, universidades y organizaciones.",
    url: "https://grupoeades.com",
    siteName: "Grupo EADES",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/img/logo_fondo_claro.png",
        width: 1200,
        height: 630,
        alt: "Grupo EADES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo EADES | Salud Mental Aplicada",
    description:
      "Grupo EADES conecta práctica clínica, investigación y formación especializada para desarrollar programas y colaboraciones con instituciones, universidades y organizaciones.",
    images: ["/img/logo_fondo_claro.png"],
  },
  icons: {
    icon: "/img/icono_grupo_eades.png",
    shortcut: "/img/icono_grupo_eades.png",
    apple: "/img/icono_grupo_eades.png",
  },
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
