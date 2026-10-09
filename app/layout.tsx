import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Novotech J.N. Pvt. Ltd",
    template: "%s | Novotech J.N. Pvt. Ltd",
  },
  description:
    "Automation, fabrication, precision engineering and architectural lighting solutions for industrial, commercial and lifestyle environments.",
  keywords: [
    "industrial automation",
    "fabrication",
    "precision engineering",
    "architectural lighting",
    "Sri Lanka",
  ],
  openGraph: {
    type: "website",
    siteName: "Novotech J.N. Pvt. Ltd",
    title: "Novotech J.N. Pvt. Ltd",
    description:
      "Automation, fabrication, precision engineering and architectural lighting solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-16">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}