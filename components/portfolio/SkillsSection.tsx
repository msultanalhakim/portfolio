"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Code, Palette, Server, Database, Cloud, Smartphone } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="w-5 h-5" />,
    color: "from-rose-400 to-pink-500",
  },
  {
    name: "Design",
    icon: <Palette className="w-5 h-5" />,
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Cloud",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-rose-600 to-pink-700",
  },
  {
    name: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    color: "from-pink-600 to-rose-700",
  },
]

const optimizedSkills = [
  { name: "React", category: "Frontend", icon: "⚛️", description: "Advanced component architecture and hooks" },
  { name: "TypeScript", category: "Frontend", icon: "🔷", description: "Type-safe development patterns" },
  { name: "Next.js", category: "Frontend", icon: "▲", description: "Full-stack React framework" },
  { name: "Tailwind CSS", category: "Design", icon: "🎨", description: "Utility-first CSS framework" },
  { name: "Node.js", category: "Backend", icon: "🟢", description: "Server-side JavaScript runtime" },
  { name: "Python", category: "Backend", icon: "🐍", description: "Backend development and automation" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", description: "Relational database management" },
  { name: "MongoDB", category: "Database", icon: "🍃", description: "NoSQL document database" },
  { name: "AWS", category: "Cloud", icon: "☁️", description: "Cloud infrastructure and services" },
  { name: "Docker", category: "Cloud", icon: "🐳", description: "Containerization and deployment" },
  { name: "React Native", category: "Mobile", icon: "📱", description: "Cross-platform mobile development" },
  { name: "GraphQL", category: "Backend", icon: "🔗", description: "API query language and runtime" },
]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSkills = useMemo(
    () =>
      selectedCategory === "All"
        ? optimizedSkills
        : optimizedSkills.filter((skill) => skill.category === selectedCategory),
    [selectedCategory],
  )

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-rose-400/8 to-pink-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/8 to-rose-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 bg-clip-text text-transparent pb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Cutting-edge technologies and frameworks that power modern digital experiences
          </p>

          {/* Optimized Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className={`rounded-full px-6 py-2 transition-colors duration-200 will-change-transform ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/25"
                  : "border-rose-200 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/20"
              }`}
            >
              All Skills
            </Button>
            {skillCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={`rounded-full px-6 py-2 transition-colors duration-200 will-change-transform ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/25"
                    : "border-rose-200 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Optimized Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 border border-rose-200/30 dark:border-rose-700/30 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer overflow-hidden will-change-transform"
            >
              {/* Optimized background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/15 via-pink-500/15 to-rose-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Skill Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-200 will-change-transform">
                    {skill.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-white transition-colors duration-200 break-words">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-rose-500 dark:text-rose-400 font-medium">{skill.category}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-200 leading-relaxed transition-colors duration-200 break-words">
                  {skill.description}
                </p>
              </div>

              {/* Optimized hover border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-rose-400/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
