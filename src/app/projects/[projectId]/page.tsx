"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/projects"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params as any);
  const projectId = unwrappedParams.projectId;
  
  const project = projects.find((p) => p.id === projectId);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container max-w-5xl mx-auto py-12 md:py-20 px-6 space-y-16">
      {/* Back button */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2 mb-8 text-muted-foreground">
            <ArrowLeft size={16} />
            <span>Back to projects</span>
          </Link>
        </Button>
      </motion.div>
      
      {/* Project Header */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-secondary/20 px-3 py-1 rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4">
          <Button asChild>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>View Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </Button>
        </div>
      </motion.div>
      
      {/* Hero image */}
      <motion.div 
        className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Project content sections */}
      <motion.div 
        className="grid gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Why this project matters */}
        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle>Why This Project Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <p className="text-muted-foreground">{project.impact}</p>
              <p>This project addresses critical needs in the industry by providing innovative solutions that streamline workflows and enhance user experiences.</p>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* What was built */}
        <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>What Was Built</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{project.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a comprehensive solution with attention to user experience</li>
                <li>Implemented advanced features using modern technology stack</li>
                <li>Created scalable architecture to support future growth</li>
                <li>Optimized performance across all devices and platforms</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* What was learned */}
        <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>What Was Learned</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Every project teaches valuable lessons about technology, process, and collaboration. Key insights from this project include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The importance of user testing early in the development process</li>
                <li>How to effectively balance technical requirements with design aesthetics</li>
                <li>Strategies for overcoming unexpected challenges during implementation</li>
                <li>Methods to improve team coordination and knowledge sharing</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}