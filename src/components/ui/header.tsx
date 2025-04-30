"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { Home, User, FileText, Mail, LayoutGrid } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  
  // Map of icons for each navigation item
  const navIcons = {
    "Home": Home,
    "About": User,
    "Blog": FileText,
    "Contact": Mail,
    "Work": LayoutGrid,
  };

  // Handle smooth scrolling for hash links on the home page
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the home page
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      
      const targetId = href.substring(2); // Remove the '/#' to get the ID
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smoothly scroll to the element
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without reloading the page
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center rounded-full border bg-background/70 backdrop-blur-md shadow-md px-4 py-1 gap-1">
        {/* Navigation links */}
        {navItems.map((item) => {
          const Icon = navIcons[item.title as keyof typeof navIcons] || Home;
          const isActive = pathname === item.href || 
                          (pathname === '/' && item.href.startsWith('/#'));
          
          return (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 ${isActive ? "bg-muted text-foreground" : ""}`}
              asChild
            >
              <Link 
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            </Button>
          );
        })}
        
        {/* Vertical divider before theme toggle */}
        <div className="h-6 w-[1px] bg-border" />
        
        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}