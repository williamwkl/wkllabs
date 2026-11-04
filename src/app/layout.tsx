import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { pageMetadata } from "@/lib/metadata";
import { upworkProfileUrl } from "@/lib/services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...pageMetadata({ path: "/" }),
  alternates: undefined,
  metadataBase: new URL("https://wkllabs.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WKL Labs",
  legalName: "WKL Labs LLC",
  url: "https://wkllabs.com",
  logo: "https://wkllabs.com/brand/mark-512.png",
  email: "hello@wkllabs.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "58 West Portal Ave #556",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94127",
    addressCountry: "US",
  },
  founder: { "@type": "Person", name: "William Lim" },
  sameAs: [upworkProfileUrl],
  owns: [
    { "@type": "SoftwareApplication", name: "Nabbee", url: "https://nabbee.app", applicationCategory: "BusinessApplication" },
    { "@type": "WebSite", name: "Spell Collector", url: "https://spellcollector.com" },
  ],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only rounded-lg bg-primary px-4 py-3 font-mono text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Skip to content
        </a>
        {children}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </body>
    </html>
  );
}
