import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedgfyad.dev"),
  title: {
    default: "Mohamed Fayyad | Flutter Mobile Developer — Flutter, Dart, Clean Architecture",
    template: "%s | Mohamed Fayyad",
  },
  description:
    "Flutter-focused mobile developer with expertise in cross-platform development, clean architecture, BLoC/Cubit state management, and Firebase integration. Port Said, Egypt.",
  keywords: ["flutter developer", "mobile developer", "dart", "cross-platform", "BLoC", "Cubit", "clean architecture", "firebase", "portfolio", "egypt"],
  openGraph: {
    title: "Mohamed Fayyad | Flutter Mobile Developer",
    description: "Premium portfolio showcasing Flutter mobile development expertise and projects.",
    url: "https://mohamedgfyad.dev",
    siteName: "Mohamed Fayyad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fayyad | Flutter Mobile Developer",
    description: "Premium portfolio showcasing Flutter mobile development expertise and projects.",
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
