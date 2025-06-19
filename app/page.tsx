// app/page.tsx
"use client"

import { useState } from "react"
import { useDarkMode } from "@/hooks/useDarkMode"

// Import semua komponen section
import { Navbar } from "@/components/portfolio/Navbar"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { AchievementsSection } from "@/components/portfolio/AchievementsSection"
import { ContactSection } from "@/components/portfolio/ContactSection"
import { Footer } from "@/components/portfolio/Footer"
import { AchievementModal } from "@/components/portfolio/AchievementModal"
import { ScrollToTop } from "@/components/portfolio/ScrollToTop"
import type { AchievementType } from "@/components/portfolio/data"

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useDarkMode(true)
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementType | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500`}>
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-all duration-1000 -z-10" />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrollToSection={scrollToSection} />

      <main className="relative z-10">
        <HeroSection scrollToSection={scrollToSection} />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection onAchievementClick={setSelectedAchievement} />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />

      <AchievementModal achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />
    </div>
  )
}
