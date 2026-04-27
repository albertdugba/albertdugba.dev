import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppLayout } from "~/components/layout/appLayout";
import { GoogleAnalytics } from "~/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://albertdugba.dev"),
  title: "Albert Dugba",
  description:
    "Experienced frontend software engineer focused on building enterprise grade, accessible, scalable web and mobile applications.",
  icons: {
    icon: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/images/profile.png" }],
  },
  openGraph: {
    title: "Albert Dugba",
    description:
      "Experienced frontend software engineer focused on building enterprise grade, accessible, scalable web and mobile applications.",
    url: "https://albertdugba.dev",
    siteName: "Albert Dugba",
    images: [
      {
        url: "/images/intro.png",
        width: 800,
        height: 600,
      },
      {
        url: "/images/intro.png",
        width: 1800,
        height: 1600,
        alt: "Albert Dugba",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body
        className={`${inter.className} bg-primary`}
        suppressHydrationWarning
      >
        <AppLayout>
          <main>{children}</main>
          <GoogleAnalytics />
        </AppLayout>
        <Script
          id="credibility-client-98765"
          src="https://client.proofybubble.com/assets/embed.js"
          strategy="afterInteractive"
          data-app-id="fd85196130fac2e206826f4d134f362336c9df2e270a7c64c464b178de55e31e"
        />
      </body>
    </html>
  );
}
