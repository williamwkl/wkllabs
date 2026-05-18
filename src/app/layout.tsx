import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WKL Labs — Tools for Modern Businesses",
  description:
    "WKL Labs builds focused software products for modern businesses — from appointment booking to digital menus and beyond.",
  metadataBase: new URL("https://wklapp.com"),
  openGraph: {
    title: "WKL Labs — Tools for Modern Businesses",
    description:
      "WKL Labs builds focused software products for modern businesses — from appointment booking to digital menus and beyond.",
    url: "https://wklapp.com",
    siteName: "WKL Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WKL Labs — Tools for Modern Businesses",
    description:
      "WKL Labs builds focused software products for modern businesses — from appointment booking to digital menus and beyond.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
