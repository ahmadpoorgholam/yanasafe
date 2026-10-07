"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { helpCategories } from "@/lib/data/help-content";
import Link from "next/link";

export function HelpSearch() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const results = query
    ? helpCategories
        .flatMap((category) =>
          category.articles.map((article) => ({
            ...article,
            category: category.title,
          }))
        )
        .filter(
          (article) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.content.toLowerCase().includes(query.toLowerCase())
        )
    : [];

  return (
    <div className="relative max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search help articles..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        className="pl-9"
      />

      {showResults && query && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50">
          <CardContent className="p-2">
            {results.length > 0 ? (
              <div className="space-y-2">
                {results.map((article) => (
                  <Button
                    key={article.id}
                    variant="ghost"
                    className="w-full justify-start text-sm"
                    asChild
                  >
                    <Link href={`/help/${article.id}`} onClick={() => setShowResults(false)}>
                      <div>
                        <div className="font-medium">{article.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {article.category}
                        </div>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground p-2">
                No results found for "{query}"
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {showResults && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResults(false)}
        />
      )}
    </div>
  );
}