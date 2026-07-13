import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import { projects } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
    return (
        <Section
            eyebrow="Projects"
            title="Selected work with a premium product feel."
            description="Placeholder projects that are easy to replace with your real case studies later."
            className="border-t border-white/10"
        >
            <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                    <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70">
                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                            <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                                <p className="text-sm leading-7 text-zinc-400">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((stack) => (
                                    <span key={stack} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-zinc-300">
                                <Link href={project.github} className="transition hover:text-zinc-100">
                                    GitHub
                                </Link>
                                <Link href={project.demo} className="inline-flex items-center gap-1 transition hover:text-zinc-100">
                                    Live demo <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
