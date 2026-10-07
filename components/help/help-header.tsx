"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { HelpCircle } from "lucide-react";

export function HelpHeader() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Help & Guidelines</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Learn how to use YanaSafe effectively and get the most out of our safety features.
          Find answers to common questions and best practices for online dating safety.
        </p>
      </div>

      <Alert>
        <HelpCircle className="h-4 w-4" />
        <AlertDescription>
          These guidelines are designed to enhance your safety. Always trust your instincts
          and report any concerns immediately.
        </AlertDescription>
      </Alert>
    </>
  );
}