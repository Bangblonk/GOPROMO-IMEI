import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOPROMO-IMEI - Layanan IMEI Profesional",
  description: "Layanan profesional pengecekan, pembukaan kunci, dan perbaikan IMEI untuk semua perangkat mobile. Cepat, aman, dan terpercaya.",
  keywords: ["IMEI", "cek IMEI", "perbaikan IMEI", "unlock HP", "GOPROMO-IMEI"],
  authors: [{ name: "GOPROMO-IMEI Team" }],
  openGraph: {
    title: "GOPROMO-IMEI - Layanan IMEI Profesional",
    description: "Layanan profesional IMEI untuk semua kebutuhan mobile Anda",
    url: "https://gopromo-imei.com",
    siteName: "GOPROMO-IMEI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOPROMO-IMEI - Layanan IMEI Profesional",
    description: "Layanan profesional IMEI untuk semua kebutuhan mobile Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
