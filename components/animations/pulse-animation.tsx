"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface PulseAnimationProps {
  children: ReactNode
  className?: string
  duration?: number
  scale?: number
}

export default function PulseAnimation({ children, className = "", duration = 2, scale = 1.05 }: PulseAnimationProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

