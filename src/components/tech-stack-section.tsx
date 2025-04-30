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
    name: "Framer Motion",
    icon: "framer",
    description: "Production-ready animations and gestures for engaging user experiences"
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
    name: "Prisma",
    icon: "prisma",
    description: "Next-generation ORM for type-safe database access and migrations"
  },
  {
    name: "GraphQL",
    icon: "graphql",
    description: "Efficient API queries with precise data fetching and strong typing"
  },
  {
    name: "Figma",
    icon: "figma",
    description: "Collaborative UI design and prototyping before implementation"
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
    <div className="w-10 h-10 rounded-md bg-background flex items-center justify-center overflow-hidden">
      <Image
        src={`/icons/${name}.svg`}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
    </div>
  )
}

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 lg:py-40 bg-muted/30">
      <div className="container max-w-5xl mx-auto py-16 px-6">
        <motion.h2 
          className="text-3xl font-semibold tracking-tight text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Tech I Use to Build Real Things
        </motion.h2>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Modern tools and technologies I leverage to create efficient, scalable, and user-friendly applications.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * (index % 4),
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/40 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <TechIcon name={tech.icon} />
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}