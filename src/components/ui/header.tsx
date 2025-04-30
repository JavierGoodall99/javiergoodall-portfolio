import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b shadow-sm bg-background/80 backdrop-blur-md">
      <div className="w-full flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-mono text-xl font-semibold tracking-tight transition-colors hover:text-foreground/80">
            <span>Javier Goodall</span>
          </Link>
        </div>
        
        <div className="flex items-center">
          <nav className="hidden md:flex items-center gap-8 mr-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative font-medium text-sm transition-colors hover:text-foreground/80 group"
              >
                {item.title}
                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          <ThemeToggle />
          
          <button className="ml-4 p-2 rounded-md hover:bg-accent md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}