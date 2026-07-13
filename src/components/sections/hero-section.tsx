"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:px-8 lg:px-10 lg:py-28">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex max-w-3xl flex-col gap-6"
            >
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                    <Sparkles className="h-4 w-4" />
                    Building scalable cross-platform mobile applications
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl sm:leading-[1.05]">
                        Flutter developer crafting elegant mobile experiences with clean architecture.
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text/xl">
                        I'm Mohamed Fayyad, a mobile developer specializing in Flutter and Dart. Building production-ready apps with robust state management, Firebase integration, and thoughtful user experiences.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                        <Link href="/projects">
                            Explore projects <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                        <Link href="/resume">View resume</Link>
                    </Button>
                </div>
            </motion.div>

            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.35)] md:grid-cols-[1.2fr_0.8fr] md:p-8">
                <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Core expertise</p>
                        <h2 className="mt-3 text-2xl font-semibold text-zinc-100">Building production-ready Flutter apps with clean architecture.</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Flutter', 'Dart', 'BLoC/Cubit', 'Firebase'].map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Key highlights</p>
                    <div className="mt-6 space-y-4 text-sm text-zinc-300">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <span>Projects shipped</span>
                            <span className="text-xl font-semibold text-zinc-100">3+</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <span>ITI Program</span>
                            <span className="text-xl font-semibold text-zinc-100">2025</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Location</span>
                            <span className="text-xl font-semibold text-zinc-100">Port Said</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
