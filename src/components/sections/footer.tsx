import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/constants/site";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-3">
          <p className="text-lg font-semibold tracking-tight text-zinc-100">{siteConfig.name}</p>
          <p className="max-w-md text-sm leading-6 text-zinc-400">Flutter developer building dependable, polished cross-platform experiences.</p>
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <Link key={social.label} href={social.href} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noreferrer"} className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-zinc-300 transition hover:border-teal-200/30 hover:text-teal-100" aria-label={social.label}>
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm text-zinc-400 md:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/projects" className="transition hover:text-zinc-100">Projects</Link>
            <Link href="/resume" className="transition hover:text-zinc-100">Resume</Link>
            <Link href="/contact" className="transition hover:text-zinc-100">Contact</Link>
          </div>
          <p>© 2026 {siteConfig.name}. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}