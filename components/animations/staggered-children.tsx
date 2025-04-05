"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggeredChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export default function StaggeredChildren({ children, staggerDelay = 0.1, className = "" }: StaggeredChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  )
}

