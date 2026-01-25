import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: "geveo-associate",
    company: "Geveo Australasia (Pvt) Ltd",
    role: "Associate Software Engineer",
    period: "Aug 2025 – Present",
    startDate: "2025-08",
    endDate: "Present",
    description: "Delivering high-impact solutions for enterprise clients with a focus on security and performance optimization.",
    achievements: [
      "Achieved 70% increase in encryption efficiency through optimized cryptographic implementations",
      "Recognized as Employee of the Month twice for exceptional contributions",
      "Active member of the company Welfare team, contributing to employee engagement initiatives"
    ],
    stack: ["C#", "ASP.NET Core", "Azure", "MSSQL"],
    type: "technical",
  },
  {
    id: "geveo-intern",
    company: "Geveo Australasia (Pvt) Ltd",
    role: "Software Engineering Intern",
    period: "Feb 2025 – Jul 2025",
    startDate: "2025-02",
    endDate: "2025-07",
    description: "Developed proof-of-concept solutions and service projects with focus on enhancing user experience.",
    achievements: [
      "Created POCs demonstrating innovative solutions for client requirements",
      "Enhanced UX across multiple service projects through modern frontend implementations"
    ],
    stack: ["React", "Next.js", "Node.js", "TypeScript"],
    type: "technical",
  },
  {
    id: "iot-labs-lead",
    company: "IoT & Embedded Systems Labs, University of Moratuwa",
    role: "Team Lead & Developer",
    period: "Aug 2023 – Jan 2026",
    startDate: "2023-08",
    endDate: "2026-01",
    description: "Led development of IoT products used at scale by the University of Moratuwa, managing cross-functional teams and delivering enterprise-grade solutions.",
    achievements: [
      "Led team in developing products deployed university-wide",
      "Established development best practices and CI/CD pipelines for lab projects"
    ],
    stack: ["React", "Next.js", "Azure", "Node.js", "MQTT"],
    type: "technical",
  }
];
