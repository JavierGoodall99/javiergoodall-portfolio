"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AboutMeSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-medium mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet the Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Video/Image Column */}
              <div className="md:w-1/2 h-full">
                <div className="aspect-video bg-black">
                  <video 
                    className="w-full h-full object-cover"
                    controls 
                    poster="/video-poster.jpg"
                  >
                    <source src="/your-video-file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:w-1/2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                      <AvatarImage src="/your-avatar.jpg" alt="Your Name" />
                      <AvatarFallback>YN</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Your Name</CardTitle>
                      <p className="text-sm text-muted-foreground">Frontend Developer</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="prose dark:prose-invert">
                  <h3 className="text-lg font-medium mb-2">My Design Philosophy</h3>
                  <p>
                    I believe in creating interfaces that are not only beautiful but also accessible and 
                    functional for all users. My approach combines clean aesthetics with thoughtful 
                    interactions to build experiences that feel natural and intuitive.
                  </p>
                  
                  <h3 className="text-lg font-medium mb-2 mt-4">My Development Process</h3>
                  <p>
                    Every project starts with understanding user needs and business goals. I sketch ideas,
                    prototype concepts, and iteratively refine solutions. Through collaborative feedback
                    and data-driven insights, I craft experiences that resonate with users while achieving
                    business objectives.
                  </p>

                  <div className="mt-6 flex space-x-3">
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline underline-offset-4"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline underline-offset-4"
                    >
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}