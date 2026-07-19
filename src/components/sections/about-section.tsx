import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section
      eyebrow="About"
      title="A mobile developer who values clarity and maintainability."
      description="I turn complex requirements into dependable cross-platform experiences, with a practical focus on architecture, collaboration, and delivery."
      className="border-t border-white/10"
    >
      <div className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <div className="space-y-4 text-lg leading-8 text-zinc-300">
          <p>I earned a B.Sc. in Computing & Bioinformatics from Port Said University in 2024, graduating with Very Good with Honors. I then completed ITI&apos;s Front-End & Cross-Platform Development ICC Program in 2025.</p>
          <p>My work centers on Flutter and Dart, where I combine Clean Architecture, BLoC/Cubit, and thoughtful API integration to build applications that are easy to extend and maintain.</p>
        </div>
        <div className="rounded-2xl border border-teal-200/15 bg-gradient-to-br from-teal-300/10 to-indigo-400/10 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-teal-100">What I bring</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-200">
            <li>Clean Architecture and feature-based organization</li>
            <li>Flutter state management with BLoC/Cubit and Provider</li>
            <li>REST APIs, Firebase, Firestore, and notifications</li>
            <li>Clear communication, ownership, and continuous learning</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}