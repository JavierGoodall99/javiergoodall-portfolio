"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

// Tech stack data
const techStack = [
  {
    name: "React",
    icon: "react",
    description: "Building component-based UIs with custom hooks and context API"
  },
  {
    name: "Next.js",
    icon: "nextjs",
    description: "Server components, routing, and API endpoints for full-stack React applications"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    description: "Strong typing for scalable, maintainable, and error-resistant code"
  },
  {
    name: "JavaScript",
    icon: "javascript",
    description: "Dynamic, event-driven programming for interactive web applications"
  },
  {
    name: "Figma",
    icon: "figma",
    description: "Collaborative UI design and prototyping before implementation"
  },
  {
    name: "TailwindCSS",
    icon: "tailwind",
    description: "Utility-first CSS framework for rapid UI development with consistent design tokens"
  },
  {
    name: "ShadCN UI",
    icon: "shadcn",
    description: "Beautifully designed components built with Radix UI and Tailwind CSS"
  },
  {
    name: "Sass",
    icon: "sass",
    description: "Modular, maintainable stylesheets using variables, mixins, and nested rules"
  },
  {
    name: "Node.js",
    icon: "nodejs",
    description: "Server-side JavaScript runtime for building scalable API backends"
  },
  {
    name: "mySQL",
    icon: "mysql",
    description: "Robust relational database for complex data relationships"
  },
  {
    name: "Supabase",
    icon: "supabase",
    description: "Database and authentication service for building web and mobile applications"
  },
  {
    name: "Git",
    icon: "git",
    description: "Version control for collaborative development and code management"
  }
]

// Tech icon component
function TechIcon({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-background flex items-center justify-center overflow-hidden">
      <Image
        src={`/icons/${name}.svg`}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    </div>
  )
}

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Tech I Use to Build Real Things
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-center mb-12 sm:mb-14 md:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Modern tools and technologies I leverage to create efficient, scalable, and user-friendly applications.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {techStack.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.05 * index,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/40 hover:scale-105 group">
                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-2 sm:mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <TechIcon name={tech.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-base sm:text-lg md:text-xl leading-tight mb-1 sm:mb-2">
                        {tech.name}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {tech.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}