"use client"

// components/portfolio/HeroSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, MessageCircle, ArrowDown } from "lucide-react"
import { useTypewriter } from "@/hooks/useTypewriter"
import { typewriterTexts } from "./data"

interface HeroSectionProps {
  scrollToSection: (id: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const displayText = useTypewriter(typewriterTexts)

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image - Left column on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-start order-1"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse" />
                <Image
                  src="/profile.jpg?height=500&width=500"
                  alt="Muhammad Sultan Alhakim"
                  width={500}
                  height={500}
                  className="relative rounded-full border-4 border-white/50 dark:border-slate-700/50 shadow-2xl w-80 h-80 lg:w-[500px] lg:h-[500px] object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right column on desktop, bottom on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-2 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.h1
                className="font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-slate-800 dark:text-slate-200 text-5xl lg:text-6xl font-medium">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 bg-clip-text text-6xl lg:text-7xl text-transparent font-bold">
                  Muhammad Sultan Alhakim
                </span>
              </motion.h1>
              <div className="text-2xl lg:text-3xl font-normal text-slate-600 dark:text-slate-400 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span>
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                    // Menggunakan border-current agar warna kursor selalu sama dengan warna teks
                    className="border-r-2 border-current ml-1"
                  />
                </span>
              </div>

              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Crafting extraordinary digital experiences that push the boundaries of technology. Specializing in
                AI-powered solutions, scalable architectures, and cutting-edge web applications that deliver exceptional
                user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 hover:from-rose-500 hover:via-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </Button>

            {/* Tombol Let's Connect - Sekarang melakukan scroll ke section kontak */}
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-2xl border-2 border-slate-300 dark:border-slate-600 hover:border-rose-400 hover:bg-rose-400/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Let's Connect
            </Button>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
