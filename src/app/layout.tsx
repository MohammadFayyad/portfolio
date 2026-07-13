import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fayad.site"),
  title: {
    default: "Mohamed Fayad | Software Engineer",
    template: "%s | Mohamed Fayad",
  },
  description:
    "Software engineer crafting elegant web experiences, scalable products, and premium digital interfaces.",
  keywords: ["software engineer", "frontend engineer", "next.js", "portfolio", "product engineer"],
  openGraph: {
    title: "Mohamed Fayad | Software Engineer",
    description: "Premium portfolio for a software engineer focused on product and frontend craftsmanship.",
    url: "https://fayad.site",
    siteName: "Mohamed Fayad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fayad | Software Engineer",
    description: "Premium portfolio for a software engineer focused on product and frontend craftsmanship.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-zinc-950 text-zinc-100 antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
