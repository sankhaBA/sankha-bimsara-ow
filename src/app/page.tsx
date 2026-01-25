"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <HeroSection/>
        <StatsSection />
        <ExperiencesSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
      </div>
      <Footer />
    </>
  );
}

