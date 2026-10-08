"use client";

import { User } from "firebase/auth";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
  user: User | null;
  activePathname: string;
}

export function MobileMenu({ isOpen, setIsOpen, items, user, activePathname }: MobileMenuProps) {
  if (!isOpen) return null;

  const isActive = (path: string) => {
    return activePathname === path || activePathname.startsWith(`${path}/`);
  };

  return (
    <div 
      className="md:hidden border-t py-4 space-y-4"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium",
            "transition-colors duration-200",
            "hover:bg-accent hover:text-accent-foreground",
            isActive(item.href)
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground"
          )}
          onClick={() => setIsOpen(false)}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.name}</span>
        </Link>
      ))}
      
      {user ? (
        <Link
          href="/analyze"
          className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Analyze
        </Link>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-primary hover:text-primary/80"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      )}
    </div>
  );
}