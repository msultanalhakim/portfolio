"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Settings2, BrainCircuit, Brain, BarChart } from "lucide-react"
import { AnimatePresence } from "framer-motion"

export const skillCategories = [
  {
    name: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "ML Library",
    icon: <Settings2 className="w-5 h-5" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "DL Framework",
    icon: <BrainCircuit className="w-5 h-5" />,
    color: "from-pink-500 to-red-600",
  },
  {
    name: "Visualization",
    icon: <BarChart className="w-5 h-5" />,
    color: "from-purple-500 to-violet-600",
  },
]

export const optimizedSkills = [
  // Programming Languages
  { name: "Python", category: "Programming", icon: "🐍", description: "Primary language for data science and machine learning" },
  { name: "JavaScript", category: "Programming", icon: "🌐", description: "Web development and scripting" },
  { name: "C++", category: "Programming", icon: "💻", description: "Performance-oriented programming for systems and algorithms" },
  { name: "R", category: "Programming", icon: "📊", description: "Statistical computing and data visualization" },
  { name: "SQL", category: "Programming", icon: "🗃️", description: "Structured data querying and manipulation" },

  // Core ML & AI Libraries
  { name: "NumPy", category: "ML Library", icon: "📐", description: "Numerical operations and linear algebra" },
  { name: "Pandas", category: "ML Library", icon: "🧮", description: "Data manipulation and preprocessing" },
  { name: "Scikit-learn", category: "ML Library", icon: "🤖", description: "Essential ML algorithms and pipelines" },
  { name: "XGBoost", category: "ML Library", icon: "🚀", description: "Gradient boosting for structured data" },
  { name: "LightGBM", category: "ML Library", icon: "💡", description: "Fast, efficient boosting for large datasets" },
  { name: "Optuna", category: "ML Library", icon: "🎯", description: "Hyperparameter tuning framework" },

  // Deep Learning
  { name: "TensorFlow", category: "DL Framework", icon: "🔬", description: "Scalable platform for deep learning" },
  { name: "Keras", category: "DL Framework", icon: "🧠", description: "High-level neural network API" },
  { name: "PyTorch", category: "DL Framework", icon: "🔥", description: "Dynamic and flexible deep learning library" },

  // Visualization
  { name: "Matplotlib", category: "Visualization", icon: "📈", description: "Basic plotting for data exploration" },
  { name: "Seaborn", category: "Visualization", icon: "🌊", description: "Statistical plotting built on Matplotlib" }
];


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
    <section id="skills" className="pt-32 pb-18 px-6 relative">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 bg-clip-text text-transparent p-4">
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

        {/* Optimized Skills Grid with Fade Animation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedCategory} // penting agar rerender saat kategori berubah
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 border border-rose-200/30 dark:border-rose-700/30 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-rose-400/40 dark:group-hover:border-rose-500/60 transition-colors duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-200 will-change-transform">
                      {skill.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-rose-600 dark:group-hover:text-white transition-colors duration-200 break-words">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-rose-500 dark:text-rose-400 font-medium">{skill.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 leading-relaxed transition-colors duration-200 break-words">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
