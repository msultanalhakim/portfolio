"use client"

// components/portfolio/AchievementModal.tsx
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Calendar, Award, BadgeIcon as Certificate } from "lucide-react"
import type { AchievementType } from "./data"

interface AchievementModalProps {
  achievement: AchievementType | null
  onClose: () => void
}

export function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-700/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={achievement.image || "/placeholder.svg"}
                alt={achievement.title}
                width={800}
                height={600}
                className="w-full h-auto max-h-[50vh] object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-3 text-slate-800 dark:text-slate-100 break-words">
                {achievement.title}
              </h3>
              <p className="text-rose-500 dark:text-rose-400 font-semibold text-lg mb-3 break-words">
                {achievement.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed break-words">
                {achievement.description}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {achievement.year}
                </span>
                <span className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                  {achievement.type === "certification" ? (
                    <Certificate className="w-4 h-4" />
                  ) : (
                    <Award className="w-4 h-4" />
                  )}
                  Verified {achievement.type === "certification" ? "Credential" : "Award"}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
