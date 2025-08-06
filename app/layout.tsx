import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Edirne Çocuk Hakları Derneği</title>
        <meta name="description" content="Edirne Çocuk Hakları Derneği Resmi Web Sitesi" />
      </head>
      <body>
        <Header />
        
        {children}
      </body>
    </html>
  );
}
