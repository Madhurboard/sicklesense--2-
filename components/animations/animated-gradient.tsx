"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedGradientProps {
  children: ReactNode
  className?: string
  duration?: number
}

export default function AnimatedGradient({ children, className = "", duration = 10 }: AnimatedGradientProps) {
  return (
    <motion.div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-100/30 via-teal-200/30 to-teal-100/30 bg-[length:200%_100%]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

