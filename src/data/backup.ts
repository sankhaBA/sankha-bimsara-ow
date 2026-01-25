// Portfolio Data - Single Source of Truth
// All professional information is maintained here

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  stack?: string[];
  type: 'technical' | 'leadership';
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  affiliation?: string;
  description: string;
  stack: string[];
  achievements?: string[];
  isWinner?: boolean;
  winnerBadge?: string;
  category?: string;
  href?: string;
  year?: string;
  status?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  focus?: string;
  isInternational?: boolean;
  internationalBadge?: string;
  achievements?: string[];
}

export interface Award {
  id: string;
  title: string;
  event: string;
  year: string;
  level?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  href?: string;
  projectHref?: string;
}

export const profile: Profile = {
  name: "Sankha Bimsara Ambeypitiya",
  role: "Associate Software Engineer",
  tagline: "Associate Software Engineer with award-winning international exposure and expertise in full-stack product development and cloud solutions.",
  socials: {
    github: "github.com/sankhaBA",
    linkedin: "linkedin.com/in/sankhabimsara"
  }
};

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

export const leadershipRoles: Experience[] = [
  {
    id: "mass-media-finance",
    company: "Mass Media Club, University of Moratuwa",
    role: "Finance Division Head",
    period: "2024 – 2025",
    startDate: "2024-01",
    endDate: "2025-12",
    description: "Managed financial operations and budgeting for one of the largest student organizations at UoM.",
    achievements: [
      "Oversaw budget allocation for 15+ events and initiatives",
      "Implemented transparent financial tracking systems"
    ],
    type: "leadership",
  },
  {
    id: "speaker-mentor",
    company: "Industry Mentorship & Speaking Engagements",
    role: "Speaker & Mentor",
    period: "2022 – Present",
    startDate: "2022-01",
    endDate: "Present",
    description: "Active contributor to the tech community through speaking engagements and mentorship programs.",
    achievements: [
      "Speaker at Idealize 2022 - UoM's flagship ideation event",
      "Mentor at Rotaract Innovation Workshop 2025",
      "Guided aspiring developers on career paths and technical skills"
    ],
    type: "leadership",
  }
];

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
    status: "Completed"
  },
  {
    id: "npm-package-datacanvas",
    title: "NPM Package: DataCanvas SDK",
    affiliation: "IoT and Embedded Systems Labs",
    description: "Client SDK for data retrieval using API Keys",
    stack: ["TypeScript", "Node"],
    year: "2024",
    status: "In Progress"
  },
  {
    id: "verifica",
    title: "Verifica",
    affiliation: "IoT and Embedded Systems Labs",
    description: "Biometric student verification system enabling secure authentication fingerprint scanning.",
    stack: ["JavaScript", "React Native", "Next"],
    year: "2024",
    status: "Completed"
  },
  {
    id: "datacanvas",
    title: "DataCanvas",
    affiliation: "SaaS Product",
    description: "IoT SaaS platform for IoT data storage and analysis with customizable features.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "MQTT", "Firebase"],
    year: "2024",
    status: "Completed"
  },
  {
    id: "ordereka",
    title: "Ordereka",
    description: "QR based restaurant management platform with online menu, ordering and table reservation",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    year: "2024",
    affiliation: "SaaS Product",
    status: "Completed"
  },
  {
    id: "hawk-iot",
    title: "Hawk IoT",
    description: "Real time IoT device energy monitoring and analytics application",
    stack: ["JavaScript", "React Native", "MQTT", "Firebase"],
    year: "2024",
    affiliation: "Freelance Product",
    status: "Completed"
  },
  {
    id: "fyp",
    title: "Havelock Mall: Blind Navigation System",
    description: "Mapping and navigation system for visually impaired community in Havelock Mall, Sri Lanka",
    stack: ["In Review"],
    year: "2024",
    affiliation: "Academic Project",
    status: "In Progress"
  }
];

export const education: Education[] = [
  {
    id: "uom",
    institution: "University of Moratuwa",
    degree: "BSc (Hons.) in Information Technology",
    location: "Sri Lanka",
    period: "Aug 2022 – Aug 2026 (Expected)",
    gpa: "3.63/4.0",
    achievements: [
      "Dean's List in 1 semester",
      "Active contributor to IoT and Embedded Systems Labs and Mass Media Club",
    ],
  },
  {
    id: "shibaura",
    institution: "Shibaura Institute of Technology",
    degree: "Research Exchange Program",
    location: "Tokyo, Japan",
    period: "Sep 2025 – Oct 2025",
    isInternational: true,
    internationalBadge: "International Research Exchange",
    achievements: [
      "Research focus on Computer Vision and Image Processing",
      "Collaborative research with international faculty",
      "Cross-cultural academic exchange experience"
    ],
  },
  {
    id: "thomas",
    institution: "St. Thomas' College",
    degree: "G.C.E. Advanced Level",
    location: "Matara, Sri Lanka",
    period: "Jan 2018 - Oct 2020",
    isInternational: false,
    achievements: [
      "Extracurricular excellence in Information Technology, Compering and Mass Media",
    ],
  }
];

export const awards: Award[] = [
  {
    id: "huawei-2025",
    title: "Winner: Huawei Developer Competition 2025",
    event: "Huawei Developer Competition",
    year: "2025",
    level: "Asia Pacific"
  },
  {
    id: "codesprint-2024",
    title: "Top 10: Codesprint Startup Competition 2024",
    event: "Codesprint Startup Competition",
    year: "2024",
    level: "Inter-University"
  },
  {
    id: "intellithon-2024",
    title: "Winner: Intellithon AI Ideathon 2022 and 2024",
    event: "Intellithon AI Ideathon by AIESEC",
    year: "2024",
    level: "Inter-University"
  },
  {
    id: "hackx-2024",
    title: "Runner-up: HackX 2024",
    event: "HackX by University of Kelaniya",
    year: "2024",
    level: "Inter-University"
  },
];

export const skills = {
  "Languages": ["TypeScript", "JavaScript", "Java", "PHP"],
  "Frameworks and Libraries": ["React", "Next.js", "Express", "NestJS", "Node.js", "Spring Boot", "React Native", "Android"],
  "Cloud & DevOps": ["Azure Pipelines", "Azure App Service", "Azure Entra ID", "Azure Storage", "Azure AI Services", "Azure Functions", "Azure Logic Apps", "Git", "GitHub", "Vercel", "Firebase", "GitHub Actions"],
  "Database Technologies": ["MySQL", "PostgreSQL"],
  "Blockchain": ["Smart Contracts", "Evernode", "HotPocket"],
  "AI/ML": ["YOLO"],
  "IoT and Other": ["Arduino", "WebSockets", "MQTT", "Stripe"],
};

export const certificates: Certificate[] = [
  {
    id: "shibaura-research-2025",
    title: "Research Exchange Program 2025",
    issuer: "Shibaura Institute of Technology, Tokyo, Japan",
    year: "2025",
    href: "https://1drv.ms/b/c/41b2c25f92a0ea09/ETrCvhRC5YZGoTFu1xiJg4oBIdmC8JEZlSOFzsHfjXAa0A?e=5NUkR2",
    projectHref: "/education",
  },
  {
    id: "shibaura-pbl-2025",
    title: "Project Based Learning 2025",
    issuer: "Shibaura Institute of Technology, Tokyo, Japan",
    year: "2025",
    href: "https://1drv.ms/b/c/41b2c25f92a0ea09/ETrCvhRC5YZGoTFu1xiJg4oBIdmC8JEZlSOFzsHfjXAa0A?e=5NUkR2",
    projectHref: "/education",
  },
  {
    id: "intro-to-ai-ibm",
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/L3NULHD2YMSE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    projectHref: "/education",
  },
  {
    id: "express-ibm",
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    year: "2023",
    href: "https://www.coursera.org/account/accomplishments/certificate/TDRV5V2FK9MB",
    projectHref: "/education",
  },
  {
    id: "google-project-management",
    title: "Foundations of Project Management",
    issuer: "Google",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/records/JT89WLHERNP6",
    projectHref: "/education",
  },
];
