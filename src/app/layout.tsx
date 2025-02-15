import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { Open_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { Person, WithContext } from "schema-dts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Nithin S",
    template: "Nithin S",
  },
  description: "Nithin S",
  keywords: ["Software Engineer", "Web Developer", "Nithin S", "Portfolio"],
  authors: [{ name: "Nithin S" }],
  creator: "Nithin S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithins.vercel.app",
    title: "Nithin S | Software Engineer",
    description: "IT Undergrad at NITK'26",
    siteName: "Nithin S Portfolio",
    images: [
      {
        url: "https://nithins.vercel.app/preview.png", // Replace with the actual image URL
        width: 1200, // Recommended size
        height: 630,
        alt: "Nithin S Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin S | Software Engineer",
    description: "IT Undergrad at NITK'26",
    creator: "@Nithin1729S",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nithin S",
  email: "sureshnithin1729@gmail.com",
  url: "https://nithins.vercel.app",
  jobTitle: "Software Engineer",
  birthDate: "2003-12-09",
  image: "https://localhost/assets/me.png",
  description: "IT Undergrad at NITK'26",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-50">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="#" />
      </head>
      <body
        className={cn(openSans.variable, "bg-slate-50 font-body antialiased")}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}