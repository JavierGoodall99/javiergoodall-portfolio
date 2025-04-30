"use client"

import React from "react"
import { motion } from "framer-motion"

// Define the philosophy items
const philosophies = [
  {
    statement: "Speed is a feature—but calm is a value",
    description: "Fast interfaces are essential, but not at the expense of sudden movements that distract users from their goals. I build with the harmony of both in mind."
  },
  {
    statement: "Design is how it works, not just how it looks",
    description: "Beautiful aesthetics matter, but thoughtful interactions define the experience. Every element serves both form and function."
  },
  {
    statement: "Accessibility is not a feature, it's a requirement",
    description: "I build for everyone—regardless of ability or context. Inclusive design creates better experiences for all users."
  },
  {
    statement: "Code is a means, not an end",
    description: "Clean architecture matters, but user outcomes matter more. I optimize for maintainability without sacrificing the experience."
  },
  {
    statement: "Less, but better",
    description: "I believe in the power of restraint. Removing what's unnecessary often creates more impact than adding more features."
  }
]

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          My frontend philosophy
        </motion.h2>

        <div className="space-y-32 md:space-y-64">
          {philosophies.map((philosophy, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Philosophy statement with serif font */}
              <div className="md:w-1/2 space-y-6">
                <motion.h3 
                  className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight"
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
                  className="text-lg md:text-xl text-muted-foreground"
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

              {/* Visual element */}
              <div className="md:w-1/2">
                <motion.div 
                  className={`h-[300px] md:h-[400px] rounded-lg bg-gradient-to-br ${
                    index % 2 === 0 
                      ? 'from-primary/10 to-secondary/5' 
                      : 'from-secondary/10 to-primary/5'
                  }`}
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
                  {/* Optional: Could add illustrations or icons here */}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}