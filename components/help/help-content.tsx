"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { helpContent } from "@/lib/data/help-content";
import { HelpSection } from "./help-section";

export function HelpContent() {
  return (
    <Card>
      <CardContent className="p-6">
        <Tabs defaultValue="gettingStarted" className="space-y-6">
          <TabsList>
            <TabsTrigger value="gettingStarted">Getting Started</TabsTrigger>
            <TabsTrigger value="safetyGuidelines">Safety Guidelines</TabsTrigger>
            <TabsTrigger value="privacySecurity">Privacy & Security</TabsTrigger>
          </TabsList>

          {Object.entries(helpContent).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              {category.sections.map((section, index) => (
                <HelpSection key={index} section={section} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}