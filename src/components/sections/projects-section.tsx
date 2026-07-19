import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Section } from "@/components/ui/section";
import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <Section
      eyebrow="Selected work"
      title="Projects grounded in real product needs."
      description="A selection of mobile and web work focused on architecture, useful integrations, and clear experiences."
      className="border-t border-white/10"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:bg-white/[0.06]">
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
              <Image src={project.image} alt={project.title + " project preview"} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-zinc-950/75 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">{"0" + (index + 1)}</span>
            </div>
            <div className="flex flex-1 flex-col gap-5 p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100">{project.title}</h3>
                <p className="text-sm leading-7 text-zinc-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((stack) => <span key={stack} className="rounded-full border border-white/10 bg-zinc-950/50 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-zinc-300">{stack}</span>)}
              </div>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-4 text-sm font-medium">
                <Link href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-teal-100"><Github className="h-4 w-4" /> Source</Link>
                <Link href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-teal-100">View project <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}