"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8 md:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Selected Projects
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Deep dives into my most impactful work. Each project showcases my approach to problem-solving and technical execution.
        </motion.p>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 xl:space-y-56">
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
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16`}
            >
              {/* Project image with hover effect */}
              <div className="w-full lg:w-3/5 relative overflow-hidden rounded-lg order-1 lg:order-none">
                <Link href={`/projects/${project.id}`} className="block aspect-video relative group">
                  <motion.div 
                    className="w-full h-full bg-black/30 absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2">
                      <span className="font-medium text-sm sm:text-base">View Case Study</span>
                      <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                    </div>
                  </motion.div>
                  
                  {/* Project image */}
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/5 flex items-center justify-center text-muted-foreground relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center rounded-lg" 
                      style={{ 
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }} 
                    />
                    {/* Fallback text - hidden when image loads */}
                    <span className="relative z-10 opacity-0 text-lg font-medium">
                      {project.title}
                    </span>
                  </motion.div>
                </Link>
              </div>

              {/* Project details */}
              <div className="w-full lg:w-2/5 space-y-4 sm:space-y-6 order-2 lg:order-none px-4 sm:px-0">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-secondary/20 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                
                {/* Impact statement */}
                <div className="border-l-4 border-primary pl-3 sm:pl-4 py-2">
                  <p className="font-medium text-sm sm:text-base leading-relaxed">
                    {project.impact}
                  </p>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  {/* <Button asChild variant="default" size="sm" className="w-full sm:w-auto">
                    <Link href={`/projects/${project.id}`}>
                      View Details
                    </Link>
                  </Button> */}
                  <Button asChild variant="default" size="sm" className="w-full sm:w-auto">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                    >
                      <span>Visit Site</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}