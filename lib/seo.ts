import { Metadata } from "next";

const SITE_URL = "https://atlas.example"; // Remplacez par votre domaine réel
const SITE_NAME = "Atlas — Développement Mobile";
const DESCRIPTION =
  "Atlas accompagne les entreprises et startups dans la création d'applications mobiles iOS et Android (Flutter) et l'intégration de fonctionnalités d'intelligence artificielle. MVP, produits scalables et accompagnement jusqu'au store.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Développement d'applications mobiles sur mesure`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "développement application mobile",
    "Flutter",
    "iOS Android",
    "intelligence artificielle",
    "MVP",
    "agence développement mobile",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: `${SITE_NAME} — Développement d'applications mobiles sur mesure`,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Développement d'applications mobiles sur mesure`,
    description: DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// JSON-LD structured data (Organization) — exporté pour inclusion dans le <head> si besoin
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": SITE_URL,
  "name": SITE_NAME,
  "description": DESCRIPTION,
  "sameAs": [
    "https://www.linkedin.com/company/atlas-dev",
    "https://github.com/your-org"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French", "English"]
    }
  ]
};