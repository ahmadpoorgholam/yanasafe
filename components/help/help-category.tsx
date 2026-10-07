"use client";

import { HelpArticleComponent } from "./help-article";
import { HelpCategory } from "@/lib/data/help-content";

interface HelpCategoryProps {
  category: HelpCategory;
}

export function HelpCategoryComponent({ category }: HelpCategoryProps) {
  return (
    <div className="space-y-8">
      {category.articles.map((article) => (
        <HelpArticleComponent key={article.id} article={article} />
      ))}
    </div>
  );
}