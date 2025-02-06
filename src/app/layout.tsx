"use client";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { Open_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { Person, WithContext } from "schema-dts";




const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nithin S",
  email: "sureshnithin1729@gmail.com",
  url: "#",
  jobTitle: "Software Engineer",
  birthDate: "2004-12-09",
  image: "https://localhost/assets/me.png",
  description:
    "Nithin S is a software engineer",
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
      <body
        className={cn(openSans.variable, "bg-slate-50 font-body antialiased")}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
