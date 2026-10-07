"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { mockReports } from "@/lib/data/mock-reports";
import { getDatingAppName } from "@/lib/data/dating-apps";

export function ReportsSection() {
  // Get the 3 most recent high-severity reports
  const recentReports = mockReports
    .filter(report => report.severity === "high")
    .slice(0, 3);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Community Safety Reports
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about potential risks and help others stay safe. Our community
            contributes real-time reports of suspicious profiles and concerning behavior.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {recentReports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    High Risk Alert
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {report.location}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    {getDatingAppName(report.datingApp)}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {report.reason}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {report.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {report.tags?.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/reports" className="flex items-center gap-2">
              View All Safety Reports
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}