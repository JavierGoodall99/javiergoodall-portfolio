"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define the philosophy items
const philosophies = [
  {
    statement: "Speed is a feature but calm is a value",
    description: "Fast interfaces are essential, but not at the expense of sudden movements that distract users from their goals. I build with the harmony of both in mind.",
    image: "/Speed.png"
  },
  {
    statement: "Design is how it works, not just how it looks",
    description: "Beautiful aesthetics matter, but thoughtful interactions define the experience. Every element serves both form and function.",
    image: "/Design.png"
  },
  {
    statement: "Accessibility is not a feature, it's a requirement",
    description: "I build for everyone regardless of ability or context. Inclusive design creates better experiences for all users.",
    image: "/Accessibility.png"
  },
  {
    statement: "Code is a means, not an end",
    description: "Clean architecture matters, but user outcomes matter more. I optimize for maintainability without sacrificing the experience.",
    image: "/Code.png"
  },
  {
    statement: "Less, but better",
    description: "I believe in the power of restraint. Removing what's unnecessary often creates more impact than adding more features.",
    image: "/Less.png"
  }
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-medium mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          My frontend philosophy
        </motion.h2>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 xl:space-y-64">
          {philosophies.map((philosophy, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16`}
            >
              {/* Philosophy statement with serif font */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-2 lg:order-none px-4 sm:px-0">
                <motion.h3 
                  className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  {philosophy.statement}
                </motion.h3>
                
                {/* Description with sans-serif font */}
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2
                  }}
                >
                  {philosophy.description}
                </motion.p>
              </div>

              {/* Visual element - image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-none">
                <motion.div 
                  className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[400px] rounded-lg bg-muted/50 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1
                  }}
                >
                  <Image 
                    src={philosophy.image} 
                    alt={philosophy.statement}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}