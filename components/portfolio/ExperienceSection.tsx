"use client"

// components/portfolio/ExperienceSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { workExperience } from "./data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Professional journey building innovative solutions and leading development teams across diverse industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 via-pink-500 to-rose-500 hidden md:block" />

          <div className="space-y-16">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg hidden md:block" />

                <div className="md:ml-24 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-slate-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      width={80}
                      height={80}
                      className="rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{job.position}</h3>
                          <p className="text-rose-500 dark:text-rose-400 font-semibold text-lg">{job.company}</p>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-4 md:mt-0 md:text-right">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4" />
                            {job.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                        {job.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
