import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  personSchema,
  courseSchema,
  eventSchema
} from "@/lib/schema";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Katiba Na Mia - Constitutional Education for All Kenyans",
    template: "%s | Katiba Na Mia"
  },
  description:
    "Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music. Led by Ng'ang'a Muigai. A 47-week journey across all counties.",
  keywords: [
    "Kenya Constitution",
    "Katiba",
    "Civic Education Kenya",
    "Constitutional Rights Kenya",
    "Ng'ang'a Muigai",
    "Katiba Na Mia",
    "KAMAU Agenda",
    "47 Counties Tour",
    "Kenyan Law",
    "Democracy Kenya",
    "Human Rights Kenya",
    "Public Participation",
  ],
  authors: [{ name: "Katiba Na Mia" }, { name: "Ng'ang'a Muigai" }],
  creator: "Katiba Na Mia",
  publisher: "Katiba Na Mia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Katiba Na Mia | Constitutional Education for All Kenyans",
    description:
      "Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music. Join the 47-week journey across all counties!",
    type: "website",
    locale: "en_KE",
    alternateLocale: ["sw_KE"],
    url: "https://katibanamia.vercel.app",
    siteName: "Katiba Na Mia",
    images: [
      {
        url: "https://katibanamia.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katiba Na Mia - Constitutional Education Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katiba Na Mia | Constitutional Education for All Kenyans",
    description:
      "Empowering every Kenyan with constitutional knowledge. Join the movement led by Ng'ang'a Muigai!",
    creator: "@katibanamia",
    images: ["https://katibanamia.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://katibanamia.vercel.app",
    languages: {
      "en-KE": "https://katibanamia.vercel.app",
      "sw-KE": "https://katibanamia.vercel.app",
    },
  },
  category: "Civic Education",
  classification: "Constitutional Education, Democracy, Human Rights",
  other: {
    "msvalidate.01": "BING_VERIFICATION_CODE",
    "google-site-verification": "GOOGLE_VERIFICATION_CODE",
    "fb:app_id": "FACEBOOK_APP_ID",
    "apple-itunes-app": "app-id=APP_ID",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE" dir="ltr" className={cn("font-sans", geist.variable)}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        
        {/* Language Alternatives */}
        <link rel="alternate" hrefLang="en-KE" href="https://katibanamia.vercel.app" />
        <link rel="alternate" hrefLang="sw-KE" href="https://katibanamia.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://katibanamia.vercel.app" />
      </head>
      <body className="antialiased" itemScope itemType="https://schema.org/WebPage">
        {children}
      </body>
    </html>
  );
}
