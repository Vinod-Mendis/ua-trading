import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abandtrading.com"),
  title: {
    default: "A & B Trading | Cambodia Shipping & Export Services",
    template: "%s | A & B Trading",
  },
  description:
    "A & B Trading is Cambodia's trusted international shipping and export company. We deliver goods from Cambodia to Sri Lanka and worldwide — reliably, affordably, and on time.",
  keywords: [
    "Cambodia shipping service",
    "Cambodia to Sri Lanka shipping",
    "international cargo Cambodia",
    "export service Cambodia",
    "goods delivery Cambodia",
    "Cambodia freight forwarding",
    "Phnom Penh shipping company",
    "Cambodia international logistics",
  ],
  authors: [{ name: "A & B Trading" }],
  creator: "A & B Trading",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abandtrading.com",
    siteName: "A & B Trading",
    title: "A & B Trading | Cambodia Shipping & Export Services",
    description:
      "Reliable shipping and trading solutions from Cambodia to Sri Lanka and worldwide. Get a free quote today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A & B Trading - Cambodia International Shipping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A & B Trading | Cambodia Shipping & Export Services",
    description:
      "Reliable shipping from Cambodia to Sri Lanka and worldwide. Trusted by hundreds of customers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
