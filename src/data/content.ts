import type { ExperienceItem, ProjectItem, ResumeItem, SkillGroup } from "@/types";

export const experience: ExperienceItem[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Independent Product Studio",
    period: "2023 — Present",
    description:
      "Designing and shipping high-conversion SaaS and product experiences with a strong focus on performance, accessibility, and product storytelling.",
  },
  {
    title: "Software Engineer",
    company: "Digital Product Team",
    period: "2020 — 2023",
    description:
      "Built cross-platform web applications, internal tools, and customer-facing dashboards using React and modern cloud services.",
  },
  {
    title: "Frontend Developer",
    company: "Agency Collective",
    period: "2018 — 2020",
    description:
      "Delivered polished marketing sites and interactive experiences that balanced clean design with measurable business goals.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    items: ["SQL", "Firebase", "Supabase"],
  },
  {
    title: "DevOps",
    items: ["Git", "GitHub", "Docker", "Linux"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Figma", "Power BI", "Excel", "Zabbix"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Northstar Analytics",
    description:
      "A premium analytics workspace for growth teams with elegant reporting patterns and proactive insights.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/project-1.svg",
  },
  {
    title: "Orbit Commerce",
    description:
      "A modern commerce experience designed to feel fast, focused, and trustworthy from the very first interaction.",
    stack: ["React", "Node.js", "Firebase", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/project-2.svg",
  },
  {
    title: "Signal Studio",
    description:
      "A lightweight product studio platform that turns complicated workflows into calm, intuitive operations.",
    stack: ["Flutter", "Dart", "REST APIs", "SQL"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/project-3.svg",
  },
];

export const resumeHighlights: ResumeItem[] = [
  { label: "Specialty", value: "Frontend architecture and product design" },
  { label: "Focus", value: "Performance, accessibility, and product clarity" },
  { label: "Availability", value: "Open for freelance and full-time roles" },
];
