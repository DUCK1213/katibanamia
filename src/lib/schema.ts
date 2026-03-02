/**
 * Schema.org structured data for Katiba Na Mia
 * Helps AI agents and search engines understand the content
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Katiba Na Mia",
  "alternateName": "Katiba Na Mia Mia",
  "url": "https://katibanamia.vercel.app",
  "logo": "https://katibanamia.vercel.app/logo.png",
  "description": "Constitutional Education Movement led by Ng'ang'a Muigai, empowering Kenyans with constitutional knowledge",
  "founder": {
    "@type": "Person",
    "name": "Ng'ang'a Muigai",
    "jobTitle": "Founder & Leader"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "katibangangamuigai@gmail.com",
    "contactType": "General Inquiry"
  },
  "sameAs": [
    "https://facebook.com/katibanamia",
    "https://twitter.com/katibanamia",
    "https://instagram.com/katibanamia"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Katiba Na Mia",
  "url": "https://katibanamia.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://katibanamia.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Katiba Na Mia",
  "description": "Civic education movement promoting constitutional literacy across Kenya",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressLocality": "Nairobi"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  "telephone": "+254759318855",
  "email": "katibangangamuigai@gmail.com",
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "Free"
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ng'ang'a Muigai",
  "jobTitle": "Founder, Katiba Na Mia",
  "description": "Constitutional education advocate and civic leader",
  "knowsAbout": ["Constitutional Law", "Civic Education", "Kenyan Constitution"],
  "worksFor": {
    "@type": "Organization",
    "name": "Katiba Na Mia"
  }
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Katiba Shuleni 2026",
  "description": "Parliamentary petition to make the Constitution of Kenya a mandatory, examinable subject in schools",
  "provider": {
    "@type": "Organization",
    "name": "Katiba Na Mia",
    "sameAs": "https://katibanamia.vercel.app"
  },
  "educationalLevel": "Primary to Tertiary",
  "inLanguage": ["en", "sw"],
  "teaches": "Constitutional Education"
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "name": "47 Counties Constitutional Education Tour",
  "description": "47-week constitutional education journey across all counties in Kenya",
  "organizer": {
    "@type": "Organization",
    "name": "Katiba Na Mia"
  },
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled"
};

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
