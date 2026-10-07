"use client";

import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { HelpArticle } from "@/lib/data/help-content";

interface HelpArticleProps {
  article: HelpArticle;
}

export function HelpArticleComponent({ article }: HelpArticleProps) {
  return (
    <article className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{article.title}</h2>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold mt-6 mb-4">{children}</h3>
            ),
            ul: ({ children }) => (
              <ul className="my-4 space-y-2">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{children}</span>
              </li>
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}