"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
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

  // Split headline text for letter animation
  const headlineText = "I choreograph attention."
  const headlineLetters = headlineText.split("")

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                      rgba(var(--color-primary-rgb), 0.15), 
                      rgba(var(--color-primary-rgb), 0.05) 40%, 
                      transparent 60%)`,
        }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                      rgba(var(--color-primary-rgb), 0.15), 
                      rgba(var(--color-primary-rgb), 0.05) 40%, 
                      transparent 60%)`
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="container max-w-5xl">
        <div className="flex flex-col gap-12 items-center text-center lg:items-start lg:text-left">
          {/* Animated heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            {headlineLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ 
                  display: letter === " " ? "inline" : "inline-block",
                  marginRight: letter === " " ? "0.5em" : "0"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading with animation */}
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground max-w-md lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Frontend dev who designs for clarity, not just code.
          </motion.p>

          {/* Buttons with animation */}
          <motion.div 
            className="flex gap-6 flex-col sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button size="lg" variant="default">
              View My Work
            </Button>
            <Button size="lg" variant="outline">
              Let&apos;s Connect
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 w-full h-full pointer-events-none">
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