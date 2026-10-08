"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, MapPin, CheckCircle, Clock, Users, Shield } from "lucide-react";
import { getDatingAppName } from "@/lib/data/dating-apps";
import { mockReports } from "@/lib/data/mock-reports";
import { Report, ReportStatus } from "@/lib/types/reports";
import { cn } from "@/lib/utils";

function getStatusIcon(status: ReportStatus) {
  switch (status) {
    case "verified":
      return <AlertTriangle className="h-4 w-4 text-destructive" />;
    case "resolved":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    default:
      return <Clock className="h-4 w-4 text-yellow-500" />;
  }
}

function getStatusStyles(status: ReportStatus) {
  switch (status) {
    case "verified":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "resolved":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    default:
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
  }
}

function getSeverityStyles(severity: Report["severity"]) {
  switch (severity) {
    case "high":
      return "bg-red-500/10 text-red-500 border-red-500/20";
    case "medium":
      return "bg-orange-500/10 text-orange-500 border-orange-500/20";
    case "low":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
  }
}

export function ReportsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [reports] = useState<Report[]>(mockReports);

  const filteredReports = reports.filter(report => 
    report.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    getDatingAppName(report.datingApp).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Recent Safety Reports
          </CardTitle>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reports..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col gap-3 p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg">{getDatingAppName(report.datingApp)}</h3>
                    <Badge
                      variant="outline"
                      className={cn("flex items-center gap-1", getStatusStyles(report.status))}
                    >
                      {getStatusIcon(report.status)}
                      <span className="capitalize">{report.status}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {report.location}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={cn("flex items-center gap-1", getSeverityStyles(report.severity))}
                    >
                      {report.severity} severity
                    </Badge>
                  </div>
                  <p className="font-medium text-lg text-primary">
                    {report.reason}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <span className="text-sm text-muted-foreground">
                    {report.createdAt.toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{report.verificationCount} verifications</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">{report.description}</p>
              
              {report.tags && (
                <div className="flex flex-wrap gap-2">
                  {report.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}