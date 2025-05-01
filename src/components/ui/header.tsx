"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { Home, User, FileText, Mail, LayoutGrid, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  const navIcons = {
    "Home": Home,
    "About": User,
    "Philosophy": FileText,
    "Tech Stack": Monitor,
    "Projects": LayoutGrid,
    "Contact": Mail,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();

      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <TooltipProvider>
        <nav className="flex items-center rounded-full border bg-background/70 backdrop-blur-md shadow-sm px-6 py-2">
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = navIcons[item.title as keyof typeof navIcons] || Home;
              const isActive = item.href.substring(2) === activeSection;

              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="default"
                      className={`relative flex items-center gap-2 px-3 py-1.5 text-sm font-medium tracking-tight 
                        transition-colors duration-200 hover:text-accent-foreground hover:bg-accent/20
                        ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}
                      asChild
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.title}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-muted rounded-md -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          <div className="h-6 mx-6 w-[1px] bg-border/50" />

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="rounded-full p-1 transition-colors hover:bg-muted">
                <ThemeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle theme</p>
            </TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </header>
  );
}