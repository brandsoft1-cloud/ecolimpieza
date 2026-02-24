import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";
import WelcomeModal from "@/components/ui/WelcomeModal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import LoadingTestWrapper from "@/components/ui/LoadingTestWrapper";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: {
    default: "Ecolimpieza Bogotá S.A.S — Servicios de Limpieza Industrial y Vactor",
    template: "%s | Ecolimpieza Bogotá",
  },
  description: "Expertos en limpieza industrial, mantenimiento de redes hidrosanitarias, succión Vactor e hidrojet en Bogotá y Colombia. Atención 24/7 y gestión de residuos.",
  keywords: ["limpieza industrial Bogotá", "vactor bogotá", "hidrojet colombia", "mantenimiento alcantarillado", "inspección CCTV tuberías"],
  authors: [{ name: "Ecolimpieza Bogotá" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://ecolimpiezabogota.com.co",
    siteName: "Ecolimpieza Bogotá",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecolimpieza Bogotá — Servicios Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecolimpieza Bogotá | Limpieza Industrial y Vactor",
    description: "Servicios profesionales de limpieza técnica y mantenimiento de redes en Colombia.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning>
        <LoadingScreen>
          <LoadingTestWrapper>
            <Navbar />
            <Breadcrumbs />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloating />
            <WelcomeModal />
          </LoadingTestWrapper>
        </LoadingScreen>

        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ecolimpieza Bogotá S.A.S",
              "image": "https://ecolimpiezabogota.com.co/og-image.jpg",
              "@id": "https://ecolimpiezabogota.com.co",
              "url": "https://ecolimpiezabogota.com.co",
              "telephone": "+573000000000",
              "email": "gerencia@ecolimpiezabogota.com.co",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Principal #123",
                "addressLocality": "Bogotá",
                "addressRegion": "Cundinamarca",
                "postalCode": "110111",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.6097,
                "longitude": -74.0817
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/ecolimpiezabogota",
                "https://www.instagram.com/ecolimpiezabogota"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
