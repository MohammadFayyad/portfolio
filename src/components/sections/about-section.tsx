import { Section } from "@/components/ui/section";

export function AboutSection() {
    return (
        <Section
            eyebrow="About"
            title="Product-minded engineer with a strong design instinct."
            description="I care about the details that make products feel effortless—clarity, speed, and the confidence that comes from thoughtful engineering."
            className="border-t border-white/10"
        >
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_0.85fr] md:p-8">
                <div className="space-y-4 text-lg leading-8 text-zinc-300">
                    <p>
                        My work sits at the intersection of product strategy, frontend architecture, and polished user experience.
                    </p>
                    <p>
                        I enjoy turning complex ideas into products that feel simple, fast, and premium from the first interaction.
                    </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">What I bring</p>
                    <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                        <li>• Reliable design systems and reusable UI patterns</li>
                        <li>• Clear product thinking with measurable outcomes</li>
                        <li>• High-performance experiences for web and mobile</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
