import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Revkins — Smart Automation for Business Growth",
  description:
    "Revkins is an AI and automation agency that helps service-based businesses eliminate manual work — from the first customer touchpoint all the way through delivery, reporting, and growth.",
  keywords: "AI automation, business automation, workflow automation, AI agency",
  // This explicitly points to the icon you just added
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Revkins — Smart Automation for Business Growth",
    description:
      "Eliminate manual work and scale your business with AI-powered automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* GA4 Script — loads but stays in denied mode until consent given */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0TBS4SVFGC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default consent — denied until user accepts
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500
            });

            gtag('config', 'G-0TBS4SVFGC', {
              send_page_view: false
            });
          `}
        </Script>

        {children}
        <CookieBanner />
      </body>
    </html>
  );
}