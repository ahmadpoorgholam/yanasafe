"use client";

interface HelpSectionProps {
  section: {
    title: string;
    content: string;
  };
}

export function HelpSection({ section }: HelpSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{section.title}</h2>
      <div className="prose dark:prose-invert max-w-none">
        <pre className="whitespace-pre-wrap font-sans text-base">
          {section.content}
        </pre>
      </div>
    </div>
  );
}