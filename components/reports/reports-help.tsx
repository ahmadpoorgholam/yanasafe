"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export function ReportsHelp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Help & Guidelines
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I submit a report?</AccordionTrigger>
            <AccordionContent>
              Click the "Submit Report" button at the top of the page. Fill in all required
              information, including the dating app, profile details, and description of
              the incident. Be as specific as possible to help us investigate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What happens after I submit a report?</AccordionTrigger>
            <AccordionContent>
              Our team reviews each report within 24 hours. If verified, the report is
              published to warn other users. We may contact you for additional information
              if needed. All reports are handled confidentially.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What should I include in my report?</AccordionTrigger>
            <AccordionContent>
              Include the dating app name, profile information (username/URL), specific
              incidents or behaviors that raised concerns, and any relevant screenshots
              or messages. The more detail you provide, the better we can help protect
              the community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can I verify existing reports?</AccordionTrigger>
            <AccordionContent>
              If you've encountered the same profile or similar behavior, you can add
              your verification to existing reports. This helps establish patterns and
              strengthens the warning to other users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}