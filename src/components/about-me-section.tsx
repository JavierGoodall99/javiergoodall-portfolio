"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Play, Pause, Volume2 } from "lucide-react"

export function AboutMeSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const updateProgress = () => {
      const value = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(value) ? 0 : value);
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => setIsPlaying(false));
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-muted">
      <div className="container max-w-5xl mx-auto p-6 sm:p-10">
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
          <Card className="overflow-hidden rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Audio Player Column */}
              <div className="md:w-1/2 p-4 md:p-6 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  {/* Audio Visualizer Circle */}
                  <motion.div 
                    className="relative w-56 h-56 rounded-full flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Animated ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40"
                      animate={{ 
                        boxShadow: isPlaying 
                          ? [
                              "0 0 0 0px rgba(79, 70, 229, 0.2)",
                              "0 0 0 20px rgba(79, 70, 229, 0)",
                            ] 
                          : "none" 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: isPlaying ? Infinity : 0, 
                        repeatType: "loop" 
                      }}
                    />
                    
                    {/* Inner circle with icon */}
                    <div className="absolute inset-3 rounded-full bg-card shadow-lg flex items-center justify-center">
                      <Volume2 
                        size={64} 
                        className={`text-primary transition-all ${isPlaying ? 'animate-pulse' : ''}`}
                      />
                    </div>
                    
                    {/* Progress ring */}
                    <svg 
                      className="absolute inset-0 w-full h-full -rotate-90" 
                      viewBox="0 0 100 100"
                    >
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-muted-foreground/20"
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * progress) / 100}
                        className="text-primary transition-all duration-100"
                      />
                    </svg>
                    
                    {/* Play/Pause button */}
                    <button 
                      onClick={togglePlayPause}
                      className="absolute w-full h-full rounded-full flex items-center justify-center cursor-pointer z-10"
                      aria-label={isPlaying ? "Pause audio" : "Play audio"}
                    >
                      <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
                    </button>
                  </motion.div>
                  
                  {/* Hidden native audio element */}
                  <audio 
                    ref={audioRef} 
                    src="/IntuitiveDesign.wav" 
                    className="sr-only"
                    preload="metadata"
                  />
                  
                  {/* Play/Pause Control */}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="mb-4"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? (
                      <><Pause size={16} className="mr-2" /> Pause</>
                    ) : (
                      <><Play size={16} className="mr-2" /> Play</>
                    )}
                  </Button>
                  
                  {/* Caption */}
                  <p className="text-center text-sm text-muted-foreground">
                    Listen to my 5-min philosophy on frontend
                  </p>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:w-1/2 p-6 md:p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                      <AvatarImage src="/your-avatar.jpg" alt="Javier Goodall" />
                      <AvatarFallback>JG</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-3xl font-semibold">Javier Goodall</CardTitle>
                      <p className="text-slate-500">Frontend Developer</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-medium mb-2 font-serif">My Design Philosophy</h3>
                    <p className="leading-relaxed">
                      I believe in creating interfaces that are not only beautiful but also accessible and 
                      functional for all users. My approach combines clean aesthetics with thoughtful 
                      interactions to build experiences that feel natural and intuitive.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h3 className="text-xl font-medium mb-2 font-serif">My Development Process</h3>
                    <p className="leading-relaxed">
                      Every project starts with understanding user needs and business goals. I sketch ideas,
                      prototype concepts, and iteratively refine solutions. Through collaborative feedback
                      and data-driven insights, I craft experiences that resonate with users while achieving
                      business objectives.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex gap-4 mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2 transition-all hover:text-primary hover:border-primary"
                      asChild
                    >
                      <a 
                        href="https://github.com/JavierGoodall99" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="transition-transform group-hover:scale-110" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2 transition-all hover:text-primary hover:border-primary"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/javier-goodall/" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} className="transition-transform group-hover:scale-110" />
                        LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}