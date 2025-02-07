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
  title: "SmartProjector - Global Software Contractor Management Solution",
  description: "Manage software contractors easier than ever. Even minimize your misclassification risks with delayed projects and missed deadlines. Automate onboarding, managing and tracking in minutes.",
  metadataBase: new URL('https://www.smartprojector.app'),
  openGraph: {
    title: "SmartProjector - Global Software Contractor Management Solution",
    description: "The best way to manage software contractors across the globe. Automate onboarding, managing and tracking in minutes while minimizing risks of delayed projects and missed deadlines.",
    url: "https://www.smartprojector.app/",
    type: "website",
    images: ['/og_logo_image.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartProjector - Global Software Contractor Management Solution",
    description: "The best way to manage software contractors across the globe. Automate onboarding, managing and tracking in minutes while minimizing risks of delayed projects and missed deadlines.",
    images: ['/og_logo_image.png'],
  },
  alternates: {
    canonical: "https://www.smartprojector.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
