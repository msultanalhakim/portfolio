"use client"

// components/portfolio/ContactSection.tsx
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's collaborate and build the future together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 hover:from-rose-500 hover:via-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-slate-500/25 hover:shadow-slate-500/40 hover:scale-105 transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
