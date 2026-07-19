"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { ThemeToggle } from "@/components/sections/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    "text-sm transition " +
    (pathname === href
      ? "font-medium text-teal-200"
      : "text-zinc-400 hover:text-zinc-100");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-100">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Let&apos;s talk</Link>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="h-9 w-9 p-0 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-white/10 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-1">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} href={item.href} className={"rounded-xl px-3 py-3 " + linkClass(item.href)} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2 rounded-xl bg-teal-300 px-3 py-3 text-sm font-medium text-zinc-950">
                Let&apos;s talk
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}