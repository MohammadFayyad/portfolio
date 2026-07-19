"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const specialties = ["Flutter", "Dart", "BLoC / Cubit", "Clean Architecture"];
const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail };

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_20%_15%,rgba(20,184,166,0.17),transparent_33%),radial-gradient(circle_at_76%_0%,rgba(129,140,248,0.18),transparent_30%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 md:px-8 lg:px-10 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="flex max-w-4xl flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-sm text-teal-100"><Sparkles className="h-4 w-4" />Flutter-focused mobile developer</div>
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-400">Mohamed Fayyad</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl sm:leading-[1.04]">Thoughtful mobile apps, built to scale.</h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">I build cross-platform Flutter applications with clean architecture, reliable state management, and polished user experiences - from API integration to delivery.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg"><Link href="/projects">See selected work <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild variant="secondary" size="lg"><Link href="/contact">Start a conversation</Link></Button>
            <div className="flex items-center gap-2 sm:ml-1">
              {siteConfig.socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return <Link key={social.label} href={social.href} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noreferrer"} className="rounded-full border border-white/10 p-2.5 text-zinc-300 transition hover:border-teal-200/30 hover:text-teal-100" aria-label={social.label}><Icon className="h-4 w-4" /></Link>;
              })}
            </div>
          </div>
        </motion.div>
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-zinc-950/45 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm md:grid-cols-[1.25fr_0.75fr] md:p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-teal-100"><Code2 className="h-4 w-4" /> Core toolkit</div>
            <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-zinc-100">Mobile engineering with structure, speed, and care.</h2>
            <div className="mt-6 flex flex-wrap gap-2">{specialties.map((item) => <span key={item} className="rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1.5 text-sm text-zinc-200">{item}</span>)}</div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-indigo-500/15 to-teal-400/10 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">At a glance</p>
            <dl className="mt-5 space-y-4">
              <div className="border-b border-white/10 pb-3"><dt className="text-sm text-zinc-400">Education</dt><dd className="mt-1 font-medium text-zinc-100">B.Sc. with Honors</dd></div>
              <div className="border-b border-white/10 pb-3"><dt className="text-sm text-zinc-400">ITI ICC Program</dt><dd className="mt-1 font-medium text-zinc-100">Completed 2025</dd></div>
              <div className="flex items-center gap-2 text-sm text-zinc-200"><MapPin className="h-4 w-4 text-teal-200" /> Port Said, Egypt - ready to relocate</div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}