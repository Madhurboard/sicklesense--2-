"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggeredChildProps {
  children: ReactNode
  className?: string
}

export default function StaggeredChild({ children, className = "" }: StaggeredChildProps) {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  }

  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  )
}

