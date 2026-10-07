"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  activePathname: string;
}

export function NavigationMenu({ items, activePathname }: NavigationMenuProps) {
  const isActive = (path: string) => {
    return activePathname === path || activePathname.startsWith(`${path}/`);
  };

  return (
    <ul className="flex items-center space-x-1" role="menubar">
      {items.map((item) => (
        <li key={item.href} role="none">
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium",
              "transition-colors duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              isActive(item.href)
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
            role="menuitem"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}