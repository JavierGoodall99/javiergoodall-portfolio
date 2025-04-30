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
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="mr-4 hidden md:flex">
                <Link href="/" className="flex items-center space-x-2 font-mono text-sm font-medium transition-colors hover:text-foreground/80">
                  <span>YourName</span>
                </Link>
              </div>
              
              <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-6">
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
                  <ThemeToggle />
                </nav>
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
