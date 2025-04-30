import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { navItems } from "@/data/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="sticky top-0 z-40 w-full border-b shadow-sm bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-6 sm:px-12 py-4">
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
                      className="font-medium text-sm transition-colors hover:text-muted-foreground"
                    >
                      {item.title}
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
          
          <main className="flex-1 container py-6 md:py-12">
            {children}
          </main>
          
          <footer className="border-t py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                &copy; {new Date().getFullYear()} YourName. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
