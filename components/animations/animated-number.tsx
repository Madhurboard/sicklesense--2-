"use client"

import { useEffect, useState } from "react"
import { useSpring } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function AnimatedNumber({
  value,
  duration = 1.5,
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
    delay: delay * 1000,
  })

  useEffect(() => {
    springValue.set(value)

    // Subscribe to changes in the spring value
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(latest.toFixed(decimals))
    })

    // Clean up subscription
    return () => unsubscribe()
  }, [value, decimals, springValue])

  return (
    <span className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

