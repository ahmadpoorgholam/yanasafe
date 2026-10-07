"use client";

import { ReportsOverview } from "@/components/reports/reports-overview";
import { ReportsList } from "@/components/reports/reports-list";
import { ReportsFilters } from "@/components/reports/reports-filters";
import { ReportsHelp } from "@/components/reports/reports-help";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { ReportFilters } from "@/components/reports/reports-filters";

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<ReportFilters>({
    dateRange: { from: undefined, to: undefined },
    type: "all",
    status: "all",
    severity: "all",
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  const handleFilterChange = (newFilters: ReportFilters) => {
    setFilters(newFilters);
    // Implement filter logic here
  };

  return (
    <div className="container py-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Community Safety Reports</h1>
          <p className="text-muted-foreground">
            Stay informed about potential risks and help others stay safe
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/report" className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Submit Report
          </Link>
        </Button>
      </div>

      {/* Overview Cards */}
      <ReportsOverview />

      {/* Filters */}
      <ReportsFilters 
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />

      {/* Reports List */}
      <ReportsList />

      {/* Help Section */}
      <ReportsHelp />
    </div>
  );
}