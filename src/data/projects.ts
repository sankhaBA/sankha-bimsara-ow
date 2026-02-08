import type { Project } from './types';

export const projects: Project[] = [
  {
    id: "airsense",
    title: "AirSense",
    affiliation: "IoT and Embedded Systems Labs",
    description: "IoT-based air quality monitoring system with real-time analytics and predictive alerts",
    stack: ["Next.js", "Express", "PostgreSQL", "MQTT", "IoT"],
    isWinner: true,
    winnerBadge: "Huawei Asia Pacific Winner 2025",
    year: "2024",
    status: "Completed",
    links: []
  },
  {
    id: "npm-package-datacanvas",
    title: "NPM Package: DataCanvas SDK",
    affiliation: "IoT and Embedded Systems Labs",
    description: "Client SDK for data retrieval using API Keys",
    stack: ["TypeScript", "Node"],
    year: "2024",
    status: "In Progress",
    links: [{title: "NPM Link", href: "https://www.npmjs.com/package/@datacanvas/sdk"}]
  },
  {
    id: "verifica",
    title: "Verifica",
    affiliation: "IoT and Embedded Systems Labs",
    description: "Biometric student verification system enabling secure authentication fingerprint scanning.",
    stack: ["JavaScript", "React Native", "Next"],
    year: "2024",
    status: "Completed",
    links: []
  },
  {
    id: "datacanvas",
    title: "DataCanvas",
    affiliation: "SaaS Product",
    description: "IoT SaaS platform for IoT data storage and analysis with customizable features.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "MQTT", "Firebase"],
    year: "2024",
    status: "Completed",
    links: []
  },
  {
    id: "ordereka",
    title: "Ordereka",
    description: "QR based restaurant management platform with online menu, ordering and table reservation",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    year: "2024",
    affiliation: "SaaS Product",
    status: "Completed",
    links: []
  },
  {
    id: "hawk-iot",
    title: "Hawk IoT",
    description: "Real time IoT device energy monitoring and analytics application",
    stack: ["JavaScript", "React Native", "MQTT", "Firebase"],
    year: "2024",
    affiliation: "Freelance Product",
    status: "Completed",
    links: []
  },
  {
    id: "fyp",
    title: "Havelock Mall: Blind Navigation System",
    description: "Mapping and navigation system for visually impaired community in Havelock Mall, Sri Lanka",
    stack: ["In Review"],
    year: "2024",
    affiliation: "Academic Project",
    status: "In Progress",
    links: []
  }
];
