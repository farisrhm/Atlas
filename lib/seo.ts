import { Metadata } from "next";

const SITE_URL = "https://votre-domaine.com";
const SITE_NAME = "Flutter AI Agency";
const DESCRIPTION =
  "Agence experte en développement d'applications mobiles Flutter et intégration d'intelligence artificielle. iOS, Android, MVP, marketplace, IA générative.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Applications Flutter & IA sur mesure`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "développement application mobile",
    "Flutter",
    "iOS Android",
    "intelligence artificielle",
    "MVP application",
    "agence développement mobile",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: `${SITE_NAME} — Applications Flutter & IA sur mesure`,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Applications Flutter & IA sur mesure`,
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