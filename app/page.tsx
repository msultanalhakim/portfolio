"use client"

import { useState, useEffect } from "react"
import { useDarkMode } from "@/hooks/useDarkMode"
import { PageLoader } from "@/components/ui/loaders"

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
  const [darkMode, setDarkMode] = useDarkMode(false)
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementType | null>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
    setDarkMode(prefersDark)
  }, [setDarkMode])

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timeout)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  if (loading) return <PageLoader />

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500`}>
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
