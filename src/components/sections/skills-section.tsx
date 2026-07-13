import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/content";

export function SkillsSection() {
    return (
        <Section
            eyebrow="Skills"
            title="A broad toolkit for modern product development."
            description="From frontend architecture to deployment workflows, I build with tools that scale."
            className="border-t border-white/10"
        >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group) => (
                    <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-semibold text-zinc-100">{group.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span key={item} className="rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
