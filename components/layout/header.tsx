"use client";

import { useAuth } from "@/components/auth/auth-context";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, AlertTriangle, Home, Search, FileText } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "./navigation-menu";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: FileText },
    { name: "Analyze", href: "/analyze", icon: Search },
    { name: "Safety Reports", href: "/reports", icon: AlertTriangle },
    { name: "Submit Report", href: "/report", icon: Shield },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isScrolled ? "border-b shadow-sm" : "border-b border-transparent"
    )}>
      <nav className="container mx-auto px-6" role="navigation" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-colors hover:text-primary"
            aria-label="YanaSafe Home"
          >
            <Shield className="h-6 w-6 text-primary transition-transform hover:scale-110" />
            <span className="font-semibold hidden sm:inline-block">
              YanaSafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu items={navigation} activePathname={pathname} />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Auth Button */}
            <div className="hidden md:block">
              {user ? (
                <Button asChild variant="ghost">
                  <Link href="/analyze">Analyze</Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/login">Join or Log In</Link>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          items={navigation} 
          user={user}
          activePathname={pathname}
        />
      </nav>
    </header>
  );
}