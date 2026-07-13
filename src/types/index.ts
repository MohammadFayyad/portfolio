export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
}

export interface ResumeItem {
  label: string;
  value: string;
}
