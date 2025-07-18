"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { ReactNode } from "react"

type MarginType = 
  | string 
  | number 
  | { 
      top?: number 
      right?: number 
      bottom?: number 
      left?: number 
    }

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
  once?: boolean
  margin?: MarginType
  duration?: number
}

export function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "", 
  once = true,
  margin = "-20%",
  duration = 0.6
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once, 
     // Now properly typed
    amount: 0.1
  })

  const getHiddenTransform = () => {
    switch (direction) {
      case "up": return { y: 30 }
      case "down": return { y: -30 }
      case "left": return { x: 30 }
      case "right": return { x: -30 }
      default: return { y: 30 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getHiddenTransform() }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}