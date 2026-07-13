import { Section } from "@/components/ui/section";

export function AboutSection() {
    return (
        <Section
            eyebrow="About"
            title="Flutter-focused mobile developer with clean architecture expertise."
            description="I specialize in building scalable cross-platform applications with strong problem-solving skills and a focus on maintainable solutions."
            className="border-t border-white/10"
        >
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_0.85fr] md:p-8">
                <div className="space-y-4 text-lg leading-8 text-zinc-300">
                    <p>
                        B.Sc. in Computing & Bioinformatics from Port Said University (2024). Currently transitioning from ITI's intensive Front-End & Cross-Platform Development Program (Mar-Aug 2025).
                    </p>
                    <p>
                        I'm passionate about breaking down complex requirements into scalable and maintainable mobile solutions using Flutter, Dart, and modern state management patterns.
                    </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">What I bring</p>
                    <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                        <li>• Clean Architecture with BLoC/Cubit state management</li>
                        <li>• Firebase and REST API integration expertise</li>
                        <li>• Production-ready cross-platform applications</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
