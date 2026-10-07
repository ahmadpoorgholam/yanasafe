import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { helpCategories } from "@/lib/data/help-content";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

interface HelpArticlePageProps {
  params: {
    articleId: string;
  };
}

export async function generateStaticParams() {
  const articles = helpCategories.flatMap((category) => category.articles);
  return articles.map((article) => ({
    articleId: article.id,
  }));
}

export async function generateMetadata({ params }: HelpArticlePageProps): Promise<Metadata> {
  const article = helpCategories
    .flatMap((category) => category.articles)
    .find((article) => article.id === params.articleId);

  if (!article) {
    return {
      title: "Article Not Found | YanaSafe Help",
      description: "The requested help article could not be found.",
    };
  }

  return {
    title: `${article.title} | YanaSafe Help`,
    description: article.content.slice(0, 160),
  };
}

export default function HelpArticlePage({ params }: HelpArticlePageProps) {
  const article = helpCategories
    .flatMap((category) => category.articles)
    .find((article) => article.id === params.articleId);

  if (!article) {
    notFound();
  }

  return (
    <div className="container py-8">
      <Card>
        <CardContent className="p-6">
          <article className="prose dark:prose-invert max-w-none">
            <h1>{article.title}</h1>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </article>
        </CardContent>
      </Card>
    </div>
  );
}