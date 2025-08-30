import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "URL Shortener – Simplify and Share Links Easily",
  description: "Smarter link shortener for brands. Create custom short URLs, track clicks with real-time analytics, and boost engagement across social media, email, and SMS. Fast, secure, and mobile-friendly tool to simplify sharing and grow your brand.",
  keywords: ["URL shortener", "link shortener", "short URLs", "custom short links", "branded URLs", "track clicks", "link analytics", "secure URL shortener", "mobile-friendly link shortener", "URL", "url", "link", "links", "share links easily", "link management tool", "smart short links",],
  icons: {
    icon: "/icon.png",
  },
};

import { ThemeProvider } from "@/components/ui/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={``}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
