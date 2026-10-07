import { HelpSidebar } from "@/components/help/help-sidebar";

export default function HelpArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        <HelpSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}