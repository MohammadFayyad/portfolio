import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { resumeHighlights } from "@/data/content";

export function ResumeSection() {
    return (
        <Section
            eyebrow="Resume"
            title="A focused profile for hiring teams and collaborators."
            description="Designed to be easy to skim, easy to trust, and easy to act on."
            className="border-t border-white/10"
        >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:flex md:items-center md:justify-between">
                <div className="space-y-4">
                    <p className="text-lg leading-8 text-zinc-300">
                        I bring a blend of engineering rigor, product empathy, and visual polish to teams that want to ship with confidence.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3">
                        {resumeHighlights.map((item) => (
                            <div key={item.label} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">{item.label}</p>
                                <p className="mt-2 text-sm text-zinc-300">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
                    <Button asChild>
                        <Link href="/contact">Request availability</Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="/about">Learn more</Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
