import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katiba Na Mia - Constitutional Education for All Kenyans",
  description:
    "Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music. A 47-week journey across all counties, every Wednesday to Friday.",
  keywords: [
    "Kenya Constitution",
    "Civic Education",
    "Katiba",
    "Mia",
    "Ng'ang'a Muigai",
    "Constitutional Education",
    "Kenya",
    "KAMAU Agenda",
  ],
  authors: [{ name: "Katiba Na Mia" }],
  openGraph: {
    title: "Katiba Na Mia - Constitutional Education for All Kenyans",
    description:
      "Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
