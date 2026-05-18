import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClaveHogar | Servicios del Hogar en Torrevieja",
  description:
    "Servicios integrales para propietarios y viajeros en Torrevieja. Limpieza, gestión de alquiler vacacional, lavandería, handyman y más.",
  keywords:
    "Torrevieja, limpieza apartamentos, gestión Airbnb, handyman, alquiler vacacional, Alicante",
  authors: [{ name: "ClaveHogar" }],
  openGraph: {
    title: "ClaveHogar | Servicios del Hogar en Torrevieja",
    description:
      "Tu hogar en buenas manos. Siempre. Servicios integrales para propietarios en Torrevieja.",
    url: "https://clavehogar.es",
    siteName: "ClaveHogar",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
