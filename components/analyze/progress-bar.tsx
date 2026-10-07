"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  showPercentage?: boolean;
  className?: string;
}

export function ProgressBar({ value, showPercentage = true, className }: ProgressBarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative">
        <Progress
          value={value}
          className="h-2 bg-primary/10 [&>div]:bg-gradient-to-r [&>div]:from-primary/50 [&>div]:to-primary [&>div]:transition-all [&>div]:duration-500"
        />
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"
          }}
        />
      </div>
      {showPercentage && (
        <p className="text-sm text-muted-foreground text-center">
          {Math.round(value)}% Complete
        </p>
      )}
    </div>
  );
}