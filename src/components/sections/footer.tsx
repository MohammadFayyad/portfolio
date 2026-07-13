import Link from "next/link";

import { siteConfig } from "@/constants/site";

export function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-10 md:px-8 lg:px-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
                <p>© 2026 {siteConfig.name}. Crafted for thoughtful products.</p>
                <div className="flex gap-4">
                    <Link href="/projects" className="transition hover:text-zinc-100">
                        Projects
                    </Link>
                    <Link href="/resume" className="transition hover:text-zinc-100">
                        Resume
                    </Link>
                    <Link href="/contact" className="transition hover:text-zinc-100">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
