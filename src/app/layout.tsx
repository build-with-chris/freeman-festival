import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freeman Festival 2025 - Das Jahresentertainment im Münchner Osten",
  description: "Drei Tage Zirkuskunst in München - unterhaltsam, nachdenklich, humorvoll. 14.-16. November 2025 im Pepe Dome, Ostpark. Tickets ab 12€. Barrierefrei & familienfreundlich.",
  keywords: "Freeman Festival, Zirkus München, Ostpark, Pepe Dome, Zirkuskunst, Entertainment München, Festival 2025",
  openGraph: {
    title: "Freeman Festival 2025 - Das Jahresentertainment im Münchner Osten",
    description: "Drei Tage Zirkuskunst in München - unterhaltsam, nachdenklich, humorvoll. 14.-16. November 2025 im Pepe Dome, Ostpark. Tickets ab 12€.",
    images: ["/SaveTheDate.webp"],
    locale: "de_DE",
    type: "website",
    siteName: "Freeman Festival"
  },
  twitter: {
    card: "summary_large_image",
    title: "Freeman Festival 2025 - Das Jahresentertainment im Münchner Osten",
    description: "Drei Tage Zirkuskunst in München - unterhaltsam, nachdenklich, humorvoll. 14.-16. November 2025 im Pepe Dome, Ostpark. Tickets ab 12€.",
    images: ["/SaveTheDate.webp"]
  },
  alternates: {
    canonical: "https://freemanfestival.de"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Freeman Festival 2025",
    "description": "Drei Tage Zirkuskunst - unterhaltsam, nachdenklich, humorvoll. Das Jahresentertainment im Münchner Osten.",
    "startDate": "2025-11-14T19:00:00+01:00",
    "endDate": "2025-11-16T21:00:00+01:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Pepe Dome im Theatron",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Theatron, Ostpark",
        "addressLocality": "Munich",
        "addressRegion": "Bayern",
        "addressCountry": "DE"
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Early Bird",
        "price": "12",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/LimitedAvailability"
      },
      {
        "@type": "Offer",
        "name": "Standard",
        "price": "18",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Abendkasse",
        "price": "22",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    ],
    "organizer": {
      "@type": "Organization",
      "name": "Pepe Arts",
      "url": "https://instagram.com/pepe_arts"
    },
    "performer": [
      {
        "@type": "PerformingGroup",
        "name": "The Nordic Council"
      },
      {
        "@type": "PerformingGroup",
        "name": "Art for Rainy Days"
      }
    ],
    "image": "https://freemanfestival.de/SaveTheDate.webp",
    "url": "https://freemanfestival.de"
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} theme-freeman antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
