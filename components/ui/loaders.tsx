"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Loader2, Code, Palette, Server } from "lucide-react"

// Main Page Loader
export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-6 mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  )
}

// Spinning Loader
export function SpinLoader({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <Loader2 className="w-full h-full text-rose-500" />
    </motion.div>
  )
}

// Pulse Loader
export function PulseLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  )
}

// Bouncing Dots
export function BouncingDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )
}

// Circular Progress
export function CircularLoader({
  progress = 0,
  size = 60,
  showProgress = false,
  className = "",
}: {
  progress?: number
  size?: number
  showProgress?: boolean
  className?: string
}) {
  const radius = (size - 8) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-slate-200 dark:text-slate-700"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient-loader)"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={progress > 0 ? strokeDasharray : `${circumference * 0.25} ${circumference}`}
          strokeLinecap="round"
          animate={progress === 0 ? { rotate: 360 } : {}}
          transition={progress === 0 ? { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : {}}
        />
        <defs>
          <linearGradient id="gradient-loader" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(251 113 133)" />
            <stop offset="100%" stopColor="rgb(244 63 94)" />
          </linearGradient>
        </defs>
      </svg>
      {showProgress && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{progress}%</span>
        </div>
      )}
    </div>
  )
}

// Skeleton Loader
export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 bg-[length:200%_100%] animate-gradient rounded" />
    </div>
  )
}

// Card Skeleton
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/30 dark:border-slate-700/30 shadow-xl ${className}`}
    >
      <div className="animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <SkeletonLoader className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <SkeletonLoader className="h-5 w-3/4 mb-2 rounded" />
            <SkeletonLoader className="h-3 w-1/2 rounded" />
          </div>
        </div>
        <SkeletonLoader className="h-4 w-full mb-2 rounded" />
        <SkeletonLoader className="h-4 w-2/3 rounded" />
      </div>
    </div>
  )
}

// Button Loading State
export function LoadingButton({
  children,
  loading = false,
  className = "",
  ...props
}: {
  children: React.ReactNode
  loading?: boolean
  className?: string
  [key: string]: any
}) {
  return (
    <button
      className={`relative inline-flex items-center justify-center ${className} ${loading ? "cursor-not-allowed opacity-70" : ""}`}
      disabled={loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinLoader size="sm" />
        </div>
      )}
      <span className={loading ? "opacity-0" : "opacity-100"}>{children}</span>
    </button>
  )
}

// Section Loading
export function SectionLoader({ title, className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`py-32 px-6 flex flex-col items-center justify-center ${className}`}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <CircularLoader size={80} className="mb-6 mx-auto" />
        {title && <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">Loading {title}</h3>}
        <p className="text-slate-500 dark:text-slate-400">Please wait while we prepare the content...</p>
      </motion.div>
    </div>
  )
}

// Skills Loading Animation
export function SkillsLoader({ className = "" }: { className?: string }) {
  const icons = [Code, Palette, Server]

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="p-3 bg-gradient-to-r from-rose-400/20 to-pink-500/20 rounded-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        >
          <Icon className="w-6 h-6 text-rose-500" />
        </motion.div>
      ))}
    </div>
  )
}

// Floating Loader
export function FloatingLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-rose-500/25"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-8 h-8 bg-white rounded-full"
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  )
}

// Wave Loader
export function WaveLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-rose-400 to-pink-500 rounded-full"
          animate={{
            height: [10, 30, 10],
          }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )
}
