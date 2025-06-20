"use client"

// components/portfolio/ContactSection.tsx
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

// Anda bisa meletakkan ini di dalam komponen Kontak atau Footer Anda
const socialLinks = [
  { 
    label: 'GitHub',
    href: 'https://github.com/msultanalhakim', // <-- Ganti dengan username GitHub Anda
    icon: <Github size={28} /> 
  },
  { 
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/msultanalhakim', // <-- Ganti dengan URL profil LinkedIn Anda
    icon: <Linkedin size={28} /> 
  },
  { 
    label: 'Email',
    href: 'mailto:msultanalhakim@gmail.com', // <-- Ganti dengan alamat email Anda
    icon: <Mail size={28} /> 
  }
];

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
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I am open to professional opportunities and collaborative partnerships. Please feel free to contact me to discuss a potential project or to explore how my skills can add value to your team.
          </p>
          {/* Bagian Link Sosial Media */}
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.label} profile`}
                className="text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        
        </motion.div>
      </div>
    </section>
  )
}