// Type definitions for portfolio data

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
