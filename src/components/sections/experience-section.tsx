import { Section } from "@/components/ui/section";
import { experience } from "@/data/content";

export function ExperienceSection() {
    return (
        <Section
            eyebrow="Experience"
            title="A trajectory shaped by product thinking and craft."
            description="A steady path through product teams, startups, and digital product delivery."
            className="border-t border-white/10"
        >
            <div className="grid gap-4">
                {experience.map((item, index) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 md:flex md:items-start md:justify-between">
                        <div className="space-y-2">
                            <div className="text-sm text-zinc-500">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                            <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
                            <p className="text-zinc-400">{item.company}</p>
                            <p className="max-w-2xl text-zinc-300">{item.description}</p>
                        </div>
                        <div className="mt-4 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-400 md:mt-0">
                            {item.period}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
