"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mb-8 md:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Selected Projects
        </motion.h2>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Deep dives into my most impactful work. Each project showcases my approach to problem-solving and technical execution.
        </motion.p>

        <div className="space-y-32 md:space-y-56">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-16`}
            >
              {/* Project image with hover effect */}
              <div className="md:w-3/5 w-full relative overflow-hidden rounded-lg">
                <Link href={`/projects/${project.id}`} className="block aspect-[16/9] relative group">
                  <motion.div 
                    className="w-full h-full bg-black/30 absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg px-6 py-3 flex items-center gap-2">
                      <span className="font-medium">View Case Study</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.div>
                  
                  {/* Placeholder for actual image - you'll need to create these images */}
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/5 flex items-center justify-center text-muted-foreground"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ 
                      backgroundImage: `url(${project.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                    {/* Display project.title only when no image is available */}
                    <span className="relative z-10 opacity-0">
                      {project.title}
                    </span>
                  </motion.div>
                </Link>
              </div>

              {/* Project details */}
              <div className="md:w-2/5 w-full space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.subtitle}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-secondary/20 text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-medium">{project.impact}</p>
                </div>
                
                <Button asChild className="mt-4" variant="default">
                  <Link href={`/projects/${project.id}`}>
                    Read Case Study
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}