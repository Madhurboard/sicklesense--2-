"use client"

import { motion } from "framer-motion"

interface LoadingAnimationProps {
  size?: number
  color?: string
  className?: string
}

export default function LoadingAnimation({
  size = 40,
  color = "#0d9488", // teal-600
  className = "",
}: LoadingAnimationProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `3px solid ${color}`,
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

