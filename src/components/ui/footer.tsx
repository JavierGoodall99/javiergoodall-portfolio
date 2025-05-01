"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems } from "@/data/navigation";

export function Footer() {

  return (
    <footer className="border-t border-border/20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Name/Brand */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-1">
              Javier Goodall
            </h2>
            
            {/* Tagline */}
            <p className="text-muted-foreground italic">
              Design-aware. Code-driven. Outcome-focused.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-sm text-muted-foreground hover:text-accent-foreground hover:underline underline-offset-4 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/JavierGoodall99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition-colors"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/javier-goodall/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:javiergoodall@outlook.com"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition-colors"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-4 border-t border-border/20 max-w-sm mx-auto w-full">
            &copy; {new Date().getFullYear()} Javier Goodall. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}