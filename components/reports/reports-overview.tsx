"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, Clock, TrendingUp } from "lucide-react";
import { mockStats } from "@/lib/data/mock-reports";

export function ReportsOverview() {
  const { activeReports, contributors, avgResponseTime, resolutionRate } = mockStats;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Reports</p>
              <h3 className="text-2xl font-bold">{activeReports}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Contributors</p>
              <h3 className="text-2xl font-bold">{contributors.toLocaleString()}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg Response</p>
              <h3 className="text-2xl font-bold">{avgResponseTime}h</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Resolution Rate</p>
              <h3 className="text-2xl font-bold">{resolutionRate}%</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}