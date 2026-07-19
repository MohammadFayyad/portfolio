import type { ExperienceItem, ProjectItem, ResumeItem, SkillGroup } from "@/types";

export const experience: ExperienceItem[] = [
  {
    title: "Front-End & Cross-Platform Development Trainee",
    company: "Information Technology Institute (ITI) - ICC Program",
    period: "Mar 2025 - Aug 2025",
    description:
      "Completed intensive Flutter and Dart training for cross-platform development. Built applications with state management and REST APIs while applying clean architecture, Firebase Authentication, Firestore, and Firebase Cloud Messaging.",
  },
  {
    title: "Production Engineer",
    company: "Alporsaideya for Food Industries Co.",
    period: "Nov 2024 - Dec 2024",
    description:
      "Monitored production processes and supported quality-compliance work in a fast-paced manufacturing environment.",
  },
  {
    title: "Assistant Manager",
    company: "Restaurant",
    period: "2021 - Mar 2024",
    description:
      "Coordinated daily operations, staff, and customer relations - experience that strengthened communication, ownership, and teamwork.",
  },
];

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Dart", "JavaScript", "C/C++", "SQL", "HTML/CSS"] },
  { title: "Mobile & Frameworks", items: ["Flutter", "React", "Firebase", "Supabase"] },
  { title: "Architecture & State", items: ["Clean Architecture", "BLoC/Cubit", "Provider", "GoRouter", "Navigator"] },
  { title: "APIs & Data", items: ["REST APIs", "Dio", "Retrofit", "Firebase Auth", "Firestore"] },
  { title: "Storage & Notifications", items: ["SQLite", "Hive", "SharedPreferences", "Secure Storage", "FCM", "Local Notifications"] },
  { title: "Tools & Delivery", items: ["Git", "GitHub", "Postman", "Android Studio", "VS Code", "Figma"] },
];

export const projects: ProjectItem[] = [
  {
    title: "Flutter E-Commerce App",
    description: "A Flutter e-commerce application with product listing and cart management. It uses a feature-based Clean Architecture structure, BLoC/Cubit state management, Dio for API integration, and Secure Storage for sensitive data.",
    stack: ["Flutter", "Dart", "BLoC/Cubit", "Dio", "Clean Architecture"],
    github: "https://github.com/MohammadFayyad/flutter-ecommerce-app",
    demo: "https://github.com/MohammadFayyad/flutter-ecommerce-app",
    image: "/project-1.svg",
  },
  {
    title: "Order Tracking Mobile App",
    description: "A real-time delivery tracking experience with map visualization, Google Maps integration, and Firebase Cloud Messaging notifications for delivery progress.",
    stack: ["Flutter", "Dart", "Google Maps", "Firebase", "FCM"],
    github: "https://github.com/MohammadFayyad/flutter-order-tracking-app",
    demo: "https://github.com/MohammadFayyad/flutter-order-tracking-app",
    image: "/project-2.svg",
  },
  {
    title: "Kheirak Platform",
    description: "ITI graduation project: a multi-role donation and coupon platform for administrators, donors, organizations, and beneficiaries, with Firebase Authentication, Firestore sync, and a responsive Arabic RTL interface.",
    stack: ["React", "Firebase", "Firestore", "Arabic RTL", "Role-Based Access"],
    github: "https://github.com/michael-g-alfred/Kheirak-Platform",
    demo: "https://donation-platform-97418.web.app/",
    image: "/project-3.svg",
  },
];

export const resumeHighlights: ResumeItem[] = [
  { label: "Education", value: "B.Sc. Computing & Bioinformatics, Very Good with Honors" },
  { label: "Specialty", value: "Flutter, Clean Architecture, and scalable mobile solutions" },
  { label: "Availability", value: "Port Said, Egypt - ready to relocate" },
];