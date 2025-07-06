"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { Home, User, FileText, Mail, LayoutGrid, Monitor, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setActiveSection(targetId);
      
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu when link is clicked
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
        <TooltipProvider>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center rounded-full border bg-background/70 backdrop-blur-md shadow-sm px-6 py-2">
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

          {/* Mobile/Tablet Navigation */}
          <nav className="lg:hidden flex items-center justify-between w-full max-w-sm rounded-full border bg-background/70 backdrop-blur-md shadow-sm px-4 py-2">
            {/* Logo/Brand */}
            <Link 
              href="/#hero"
              onClick={(e) => handleLinkClick(e, "/#hero")}
              className="text-lg font-bold tracking-tight"
            >
              JG
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </nav>
        </TooltipProvider>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 mt-20 mx-4"
            >
              <div className="bg-background/95 backdrop-blur-md border rounded-2xl shadow-lg p-6">
                <div className="grid gap-4">
                  {navItems.map((item) => {
                    const Icon = navIcons[item.title as keyof typeof navIcons] || Home;
                    const isActive = item.href.substring(2) === activeSection;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors
                          ${isActive 
                            ? 'bg-muted text-foreground' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{item.title}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}