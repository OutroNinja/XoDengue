import { siteConfig } from "@/config/site";
import { Satoshi, fontmono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Dengue",
    "Estátisticas Dengue",
    "Dengue no Brasil",
    "Casos de Dengue",
  ],
  authors: [
    {
      name: "OutroNinja",
      url: "https://github.com/OutroNinja"
    },
  ],
  creator: "OutroNinja",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background antialiased bg-gray-200 scroll-smooth",
          fontmono.variable,
          Satoshi.className,
        )}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
