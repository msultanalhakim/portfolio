"use client"

// components/portfolio/AchievementsSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, BadgeIcon as Certificate, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { achievements, type AchievementType } from "./data"
import { useState, useEffect } from "react" // useEffect ditambahkan untuk best practice

interface AchievementsSectionProps {
  onAchievementClick: (achievement: AchievementType) => void
}

export function AchievementsSection({ onAchievementClick }: AchievementsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fungsi untuk mendapatkan item per halaman berdasarkan lebar layar
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768 ? 2 : 1
    }
    return 2 // Default untuk Server-Side Rendering (SSR)
  }

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage())
  const totalPages = Math.ceil(achievements.length / itemsPerPage)

  // Mengupdate item per halaman saat ukuran jendela berubah
  useEffect(() => {
    // Pastikan kode ini hanya berjalan di sisi client
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newItemsPerPage = window.innerWidth >= 768 ? 2 : 1
        setItemsPerPage(newItemsPerPage)
        
        // Reset ke halaman pertama jika halaman saat ini di luar batas
        const newTotalPages = Math.ceil(achievements.length / newItemsPerPage)
        if (currentIndex >= newTotalPages) {
          setCurrentIndex(0)
        }
      }

      window.addEventListener("resize", handleResize)
      // Membersihkan event listener saat komponen di-unmount
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [currentIndex]) // Tambahkan dependency array

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="achievements" className="pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Awards & Certifications
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          A collection of awards and certifications that demonstrate proven excellence and mastery in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Tombol Navigasi - Diposisikan di sisi */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-rose-300 dark:border-rose-600 hover:bg-rose-400/10 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-rose-300 dark:border-rose-600 hover:bg-rose-400/10 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Slideshow Container */}
          <div className="overflow-hidden rounded-3xl mx-12">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 p-8">
                  <div className={`grid ${itemsPerPage === 2 ? "md:grid-cols-2" : "grid-cols-1"} gap-8`}>
                    {achievements
                      .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                      .map((achievement, index) => (
                        <motion.div
                          key={`${pageIndex}-${index}`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, duration: 0.8 }}
                          className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-lg hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                          onClick={() => onAchievementClick(achievement)}
                        >
                          <div className="relative h-48">
                            <Image
                              src={achievement.image || "/placeholder.svg"}
                              alt={achievement.title}
                              width={600}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-4 right-4">
                              <Badge
                                className={`${achievement.type === "certification" ? "bg-rose-400 hover:bg-rose-500" : "bg-amber-400 hover:bg-amber-500"} text-white shadow-lg whitespace-nowrap`}
                              >
                                {achievement.type === "certification" ? (
                                  <Certificate className="w-3 h-3 mr-1" />
                                ) : (
                                  <Award className="w-3 h-3 mr-1" />
                                )}
                                {achievement.type === "certification" ? "Certification" : "Award"}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-8">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300 break-words">
                              {achievement.title}
                            </h3>
                            <p className="text-rose-500 dark:text-rose-400 font-semibold mb-3 break-words">
                              {achievement.subtitle}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 break-words">
                              {achievement.description}
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap">
                                {achievement.year}
                              </span>
                              <div className="flex items-center text-rose-500 dark:text-rose-400 whitespace-nowrap">
                                <Eye className="w-4 h-4 mr-1" />
                                <span className="text-sm font-medium">View Details</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Titik Paginasi */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-rose-400 to-pink-500 scale-125"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-rose-300 dark:hover:bg-rose-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}