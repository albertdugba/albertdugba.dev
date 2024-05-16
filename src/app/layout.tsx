import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppLayout } from "~/components/layout/appLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albert Dugba",
  description:
    "Albert Dugba is a sofware engineer. I am originally from Ghana but currently based in the UK🇬🇧.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
