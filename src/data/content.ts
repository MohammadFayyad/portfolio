import type { ExperienceItem, ProjectItem, ResumeItem, SkillGroup } from "@/types";

export const experience: ExperienceItem[] = [
  {
    title: "Front-End & Cross-Platform Development Trainee",
    company: "Information Technology Institute (ITI)",
    period: "Mar 2025 — Aug 2025",
    description:
      "Intensive training in Flutter and Dart for cross-platform mobile development. Developed Flutter applications using state management and REST APIs. Applied clean architecture and software engineering best practices. Worked with Firebase Authentication, Firestore, and FCM.",
  },
  {
    title: "Production Engineer",
    company: "Alporsaideya for Food Industries Co.",
    period: "Nov 2024 — Dec 2024",
    description:
      "Monitored production processes and ensured quality compliance.",
  },
  {
    title: "Assistant Manager",
    company: "Restaurant",
    period: "2021 — Mar 2024",
    description:
      "Managed daily operations, staff coordination, and customer relations.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Dart", "JavaScript", "C/C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Mobile & Frameworks",
    items: ["Flutter", "React", "Firebase", "Supabase"],
  },
  {
    title: "State Management & Architecture",
    items: ["BLoC/Cubit", "Provider", "Clean Architecture", "GoRouter"],
  },
  {
    title: "Backend & APIs",
    items: ["REST APIs", "Dio", "Retrofit", "Firebase Auth & Firestore"],
  },
  {
    title: "Storage & Notifications",
    items: ["SQLite", "Hive", "SharedPreferences", "FCM", "Local Notifications"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Android Studio", "VS Code", "Figma"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Flutter E-Commerce Mobile App",
    description:
      "Production-ready e-commerce mobile application with product listing and cart management. Applied Clean Architecture with feature-based modular structure and robust state management using BLoC/Cubit.",
    stack: ["Flutter", "Dart", "BLoC/Cubit", "Dio", "Clean Architecture"],
    github: "https://github.com/MohammadFayyad",
    demo: "https://github.com/MohammadFayyad",
    image: "/project-1.svg",
  },
  {
    title: "Order Tracking Mobile App",
    description:
      "Real-time order tracking application with map visualization. Integrated Google Maps to track delivery progress and implemented push notifications using Firebase Cloud Messaging (FCM).",
    stack: ["Flutter", "Dart", "Google Maps", "Firebase", "FCM"],
    github: "https://github.com/MohammadFayyad",
    demo: "https://github.com/MohammadFayyad",
    image: "/project-2.svg",
  },
  {
    title: "Kheirak Platform (ITI Graduation Project)",
    description:
      "Multi-role donation and coupon management platform with role-based access control. Implemented Firebase Authentication and real-time data synchronization using Cloud Firestore with full Arabic RTL support.",
    stack: ["React", "Firebase", "Firestore", "RTL", "Role-Based Access"],
    github: "https://github.com/MohammadFayyad",
    demo: "https://github.com/MohammadFayyad",
    image: "/project-3.svg",
  },
];

export const resumeHighlights: ResumeItem[] = [
  { label: "Specialty", value: "Flutter mobile development and cross-platform applications" },
  { label: "Focus", value: "Clean architecture, state management, and scalable solutions" },
  { label: "Location", value: "Port Said, Egypt — Ready to relocate" },
];
