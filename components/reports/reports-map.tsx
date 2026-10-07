"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function ReportsMap() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Safety Report Locations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[4/3] rounded-lg border bg-muted/50 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Map visualization coming soon</p>
        </div>
      </CardContent>
    </Card>
  );
}