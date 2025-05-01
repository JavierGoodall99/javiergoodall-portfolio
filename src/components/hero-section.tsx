"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, MousePointer } from "lucide-react"
import { cn } from "@/lib/utils"

const particlePositions = [
  { id: 0, size: 7.3, x: 25, y: 62 },
  { id: 1, size: 8.1, x: 79, y: 85 },
  { id: 2, size: 8.4, x: 32, y: 57 },
  { id: 3, size: 6.3, x: 65, y: 82 },
  { id: 4, size: 8.7, x: 5, y: 62 },
  { id: 5, size: 5.8, x: 90, y: 17 },
  { id: 6, size: 8.6, x: 30, y: 82 },
  { id: 7, size: 4.3, x: 66, y: 22 },
  { id: 8, size: 8.3, x: 3, y: 15 },
  { id: 9, size: 6.3, x: 70, y: 67 },
  { id: 10, size: 3.8, x: 95, y: 87 },
  { id: 11, size: 8.1, x: 84, y: 34 },
  { id: 12, size: 3.2, x: 19, y: 35 },
  { id: 13, size: 6.6, x: 77, y: 93 },
  { id: 14, size: 4.6, x: 48, y: 74 },
  { id: 15, size: 5.2, x: 93, y: 87 },
  { id: 16, size: 6.1, x: 26, y: 79 },
  { id: 17, size: 3.9, x: 1, y: 14 },
  { id: 18, size: 3.5, x: 1, y: 17 },
  { id: 19, size: 4.3, x: 99, y: 95 },
];

const particleDurations = [15, 18, 22, 17, 19, 21, 16, 23, 20, 18, 25, 19, 17, 22, 21, 24, 18, 20, 19, 23];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
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
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  // Letter animation variants for headline
  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.04,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    })
  }

  const headlineWords = [
    { text: "I", className: "font-light" },
    { text: "choreograph", className: "font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70" },
    { text: "attention.", className: "italic text-accent-foreground" }
  ]

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Main content with scroll-based animation */}
      <motion.div 
        className="max-w-5xl mx-auto px-6 py-32 text-center relative z-10"
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label above heading */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium px-4 py-2 rounded-full border border-border/30 backdrop-blur-sm bg-background/30">
            Hi, I&apos;m Javier Goodall — Frontend Developer
          </span>
        </motion.div>

        {/* Animated heading with word-by-word animation and varied styling */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8"
          variants={itemVariants}
        >
          <div className="inline-flex flex-wrap justify-center gap-x-4">
            {headlineWords.map((word, wordIndex) => (
              <div key={wordIndex} className="overflow-hidden inline-block">
                <div className={cn("inline-block", word.className)}>
                  {word.text.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      custom={(wordIndex * 10) + letterIndex}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {wordIndex < headlineWords.length - 1 ? <span>&nbsp;</span> : null}
                </div>
              </div>
            ))}
          </div>
        </motion.h1>

        {/* Subheading with animation */}
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          Frontend developer who designs for clarity, not just code.
        </motion.p>

        {/* Buttons with enhanced animation */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
            variant="default"
            className="relative group transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToWork}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-primary/40 group-hover:bg-primary/60 transition-all duration-500 -z-20" />
          </Button>
          
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>or scroll down to see how I work</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </div>
        </motion.div>

      </motion.div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0"
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
      
        {/* SVG noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Animated particles with consistent values */}
        {particlePositions.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, particle.x > 50 ? -30 : 30, 0],
              y: [0, particle.y > 50 ? -30 : 30, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: particleDurations[index],
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Larger decorative elements */}
      <div className="absolute -z-5 w-full h-full pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            left: '10%',
            top: '20%'
          }}
        />
        <motion.div 
          className="absolute w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-secondary/10 to-primary/5 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            right: '5%',
            bottom: '15%'
          }}
        />
      </div>
      
      <motion.div
        className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground opacity-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <MousePointer className="h-3 w-3" />
        <span>Try moving your cursor</span>
      </motion.div>
    </section>
  )
}