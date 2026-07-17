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

const title = "WKL Labs — We build small, serious software";
const description =
  "WKL Labs is an independent software studio behind Nabbee (booking and payments for service businesses) and Spell Collector (a trading-card marketplace).";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://wkllabs.com"),
  openGraph: {
    title,
    description,
    url: "https://wkllabs.com",
    siteName: "WKL Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
