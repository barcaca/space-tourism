"use client";

import { usePathname } from "next/navigation"; // Hook for obtaining the current page pathname
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google"; // Google fonts for text styling
import { Header } from "@/components/Header"; // Header component for the page structure
import "../styles/globals.css"; // Global CSS styles for the application

import Head from "./head"; // Custom Head component for metadata

const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
  weight: "400",
});
const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow_condensed",
  weight: "400",
});
const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: "400",
});

type PathnameMap = {
  "/": string;
  "/Destination": string;
  "/Crew": string;
  "/Technology": string;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathnameMap: PathnameMap = {
    "/": "bg-homeMobile md:bg-homeTablet xl:bg-homeDesktop",
    "/Destination":
      "bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop",
    "/Crew": "bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop",
    "/Technology":
      "bg-technologyMobile md:bg-technologyTablet xl:bg-technologyDesktop",
  };

  const backgroundClass = pathnameMap[pathname as keyof PathnameMap];

  return (
    <html
      lang="en"
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable}`}
    >
      <Head />
      <body
        className={`relative h-full bg-cover bg-no-repeat prose-headings:font-heading ${backgroundClass}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
