"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ThemeToggle } from "@/components/sections/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { useMounted } from "@/hooks/use-mounted";

export function Navbar() {
    const mounted = useMounted();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
                <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-zinc-100 uppercase">
                    {siteConfig.name}
                </Link>
                <nav className="hidden items-center gap-6 md:flex">
                    {siteConfig.navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-zinc-400 transition hover:text-zinc-100">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <motion.div initial={false} animate={{ opacity: mounted ? 1 : 0 }}>
                        <Button asChild variant="secondary" size="sm">
                            <Link href="/contact">Let’s talk</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}
