"use client"

import { motion } from "framer-motion"
import React from "react"

interface GradientBlobProps {
  colors: string[]
  blur?: number
  duration?: number
  size?: number
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  colors,
  blur = 40,
  duration = 10,
  size = 300,
}) => {
  const variants = {
    initial: { scale: 1, x: 0, y: 0, rotate: 0 },
    animate: {
      scale: [1, 1.1, 1],
      x: [0, 30, 0],
      y: [0, -30, 0],
      rotate: [0, 90, 0],
    },
  }

  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter animate-pulse-slow"
      style={{
        background: `radial-gradient(circle, ${colors.join(", ")})`,
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
      }}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  )
}

