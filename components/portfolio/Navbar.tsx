"use client"

// components/portfolio/Navbar.tsx
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"
import { navigationItems } from "./data"
import { useAutoHidingNavbar } from "@/hooks/useAutoHidingNavbar"
import NextImage from "next/image"

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  scrollToSection: (id: string) => void
}

export function Navbar({ darkMode, setDarkMode, scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navbarVisible = useAutoHidingNavbar()

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: navbarVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-slate-900/10 border-b border-white/20 dark:border-slate-700/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="py-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <a href="#" className="cursor-pointer">
                <NextImage
                  src="/logo-sultan.svg" 
                  alt="Sultan Logo"
                  width={30}
                  height={30}
                  priority={true} 
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                  className="select-none"
                />
              </a>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 relative group whitespace-nowrap"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all duration-300"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20 dark:border-slate-700/20"
            >
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase())
                      setMobileMenuOpen(false)
                    }}
                    className="block w-full text-left text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
