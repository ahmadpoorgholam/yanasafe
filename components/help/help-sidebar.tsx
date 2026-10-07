"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { helpCategories } from "@/lib/data/help-content";
import { Card } from "@/components/ui/card";

export function HelpSidebar() {
  const pathname = usePathname();

  return (
    <Card className="p-4">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-6">
          {helpCategories.map((category) => (
            <div key={category.id} className="space-y-2">
              <h3 className="font-semibold text-sm text-muted-foreground px-2">
                {category.title}
              </h3>
              <div className="space-y-1">
                {category.articles.map((article) => (
                  <Button
                    key={article.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-sm",
                      pathname === `/help/${article.id}` && "bg-accent text-accent-foreground"
                    )}
                    asChild
                  >
                    <Link href={`/help/${article.id}`}>{article.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}