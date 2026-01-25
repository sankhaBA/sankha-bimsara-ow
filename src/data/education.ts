import type { Education } from './types';

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
