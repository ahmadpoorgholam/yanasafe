import { Metadata } from "next";
import { HelpHeader } from "@/components/help/help-header";
import { HelpContent } from "@/components/help/help-content";

export const metadata: Metadata = {
  title: "Help & Guidelines | YanaSafe",
  description: "Learn how to use YanaSafe effectively and stay safe while online dating",
};

export default function HelpPage() {
  return (
    <div className="container py-8">
      <div className="space-y-8">
        <HelpHeader />
        <HelpContent />
      </div>
    </div>
  );
}