"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Eye, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Google Docs resume link
const GOOGLE_DOCS_RESUME_URL = "https://docs.google.com/document/d/1-myzrU5dvcHSMq3-4XYLdbLPJ41Kw2dPWRCq9BvLsbg/edit?usp=sharing";
// Change this to /resume.pdf once you've added your PDF to the public folder
const PDF_RESUME_URL = GOOGLE_DOCS_RESUME_URL;

export function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

  return (
    <section className="py-24 md:py-32 bg-muted/30" id="resume">
      <div className="container max-w-xl mx-auto px-6 py-16 space-y-6 text-center">
        <motion.h2 
          className="text-2xl md:text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Everything you need, in one file.
        </motion.h2>
        
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A one-page PDF summarizing my experience, projects, and core skills—ready to share.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Card className="w-full overflow-hidden border-border/40 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              {/* Stylized mock preview of resume */}
              <div className="relative aspect-[1.414/1] bg-gradient-to-br from-background to-muted flex items-center justify-center">
                {showPreview ? (
                  <iframe 
                    src={`${GOOGLE_DOCS_RESUME_URL.replace('/edit?usp=sharing', '/preview')}`}
                    className="absolute inset-0 w-full h-full border-0" 
                    title="Resume Preview"
                  />
                ) : (
                  <>
                    {/* Resume paper texture/mockup */}
                    <div className="absolute inset-0 w-full h-full">
                      <div className="w-full h-full flex flex-col">
                        {/* Resume header mockup */}
                        <div className="h-[15%] bg-primary/10 w-full"></div>
                        
                        {/* Resume content mockup */}
                        <div className="flex-1 p-6 flex">
                          {/* Left column */}
                          <div className="w-1/3 pr-4 flex flex-col space-y-3">
                            <div className="h-6 w-3/4 bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-full bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-4/5 bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-6 w-3/4 bg-muted-foreground/10 rounded-sm mt-2"></div>
                            <div className="h-4 w-full bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-4/5 bg-muted-foreground/10 rounded-sm"></div>
                          </div>
                          
                          {/* Right column */}
                          <div className="w-2/3 flex flex-col space-y-3">
                            <div className="h-6 w-3/4 bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-full bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-full bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-4/5 bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-6 w-3/4 bg-muted-foreground/10 rounded-sm mt-2"></div>
                            <div className="h-4 w-full bg-muted-foreground/10 rounded-sm"></div>
                            <div className="h-4 w-full bg-muted-foreground/10 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glass overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-background/60 backdrop-blur-sm">
                      <FileText className="h-12 w-12 text-primary/90 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Javier Goodall</h3>
                      <p className="text-muted-foreground text-sm">Front-end Developer · TypeScript & React</p>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-8 flex flex-col items-center space-y-4 bg-gradient-to-b from-transparent to-muted/20">
                <div className="flex gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="lg"
                          className="group relative transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
                          asChild
                        >
                          <a 
                            href={PDF_RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                            <span>View Full Résumé</span>
                            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 to-primary/10 blur-sm transition-opacity duration-300"></span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View my full résumé</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="transition-all duration-300 hover:border-primary/60 hover:text-primary"
                          onClick={() => setShowPreview(!showPreview)}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">{showPreview ? "Hide Preview" : "Show Preview"}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{showPreview ? "Hide preview" : "Quick preview"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                
                <motion.p 
                  className="text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Last updated: {lastUpdated}
                </motion.p>
                
                <motion.a
                  href="mailto:javiergoodall@outlook.com?subject=Request%20for%20Tailored%20Resume&body=Hi%20Javier%2C%0A%0AI'm%20interested%20in%20a%20version%20of%20your%20resume%20tailored%20to%20my%20company's%20needs.%0A%0ACompany%3A%20%0APosition%3A%20%0AKey%20skills%20required%3A%20%0A%0AThank%20you%2C%0A"
                  className="text-xs underline-offset-4 hover:underline text-muted-foreground hover:text-accent-foreground transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Request tailored résumé for your position
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}