"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedContainerProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function AnimatedContainer({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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

