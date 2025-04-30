"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Text animation variants
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  // Split headline text into words for animation
  const headlineText = "I choreograph attention."
  const headlineWords = headlineText.split(" ")

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 py-32 text-center space-y-8 relative z-10">
        {/* Label above heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-wider text-muted-foreground font-medium"
        >
          Hi, I&apos;m Javier Goodall — Frontend Developer
        </motion.div>

        {/* Animated heading with word-by-word animation */}
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
              style={{ 
                marginRight: index < headlineWords.length - 1 ? "0.5em" : "0"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading with animation */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Frontend developer who designs for clarity, not just code.
        </motion.p>

        {/* Buttons with animation */}
        <motion.div 
          className="flex gap-4 flex-wrap justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button 
            size="lg" 
            variant="default"
            className="transition-transform hover:scale-105"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="ghost"
            className="transition-transform hover:scale-105"
          >
            Let&apos;s Connect
          </Button>
        </motion.div>
      </div>

      {/* Interactive background effect */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                    rgba(100, 100, 255, 0.15), 
                    rgba(100, 100, 255, 0.05) 40%, 
                    transparent 60%)`,
        }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                    rgba(100, 100, 255, 0.15), 
                    rgba(100, 100, 255, 0.05) 40%, 
                    transparent 60%)`
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Low opacity grid background for visual interest */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-5 w-full h-full pointer-events-none">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            left: '10%',
            top: '20%'
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            right: '5%',
            bottom: '15%'
          }}
        />
      </div>
    </div>
  )
}