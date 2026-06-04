import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClaveHogar | Servicios del Hogar en Torrevieja",
  description:
    "Servicios integrales para propietarios y viajeros en Torrevieja. Limpieza, gestión de alquiler vacacional, lavandería, handyman y más.",
  keywords:
    "Torrevieja, limpieza apartamentos, gestión Airbnb, handyman, alquiler vacacional, Alicante, Costa Blanca, mantenimiento hogar, lavandería, check-in check-out",
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
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1655010159301538');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=1655010159301538&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Schema.org LocalBusiness */}
        <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ClaveHogar",
          "description": "Servicios integrales para propietarios en Torrevieja: limpieza profesional, gestión de Airbnb, lavandería, handyman y check-in/check-out.",
          "url": "https://clavehogar.es",
          "telephone": "+34693976311",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Las Tórtolas, Urbanización Sunlake, Casa 54",
            "addressLocality": "Torrevieja",
            "addressRegion": "Alicante",
            "postalCode": "03184",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.9838,
            "longitude": -0.6830
          },
          "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "20:00"},
            {"@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00"}
          ],
          "sameAs": ["https://www.instagram.com/clavehogar"],
          "priceRange": "€€",
          "areaServed": "Torrevieja, Alicante, Costa Blanca",
          "serviceType": ["Limpieza de apartamentos", "Gestión Airbnb", "Lavandería", "Handyman", "Check-in Check-out"]
        })}} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
