import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { defaultMetadata, organizationStructuredData } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-white antialiased">
        <Header />
        {/* Structured data for SEO */}
        <script
          key="ld-json"
          type="application/ld+json"
          // dangerouslySetInnerHTML is not allowed in next/server by default, but this is client-rendered body script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}