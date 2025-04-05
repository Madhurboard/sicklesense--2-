"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function FadeIn({ children, delay = 0, duration = 0.5, direction = "up", className = "" }: FadeInProps) {
  const getInitialY = () => {
    switch (direction) {
      case "up":
        return 20
      case "down":
        return -20
      default:
        return 0
    }
  }

  const getInitialX = () => {
    switch (direction) {
      case "left":
        return 20
      case "right":
        return -20
      default:
        return 0
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

