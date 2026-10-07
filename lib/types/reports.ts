export type ReportStatus = "pending" | "verified" | "resolved";
export type ReportType = "suspicious" | "bad_experience";
export type ReportSeverity = "low" | "medium" | "high";

export interface Report {
  id: string;
  datingApp: string;
  reason: string;
  description: string;
  createdAt: Date;
  status: ReportStatus;
  type: ReportType;
  location: string;
  verificationCount: number;
  severity: ReportSeverity;
  tags?: string[];
}

export interface ReportStats {
  activeReports: number;
  contributors: number;
  avgResponseTime: number;
  resolutionRate: number;
  recentTrends: {
    suspicious: number;
    badExperience: number;
    verified: number;
    resolved: number;
    pending: number;
  };
  topLocations: Array<{
    name: string;
    count: number;
  }>;
  severityDistribution: {
    high: number;
    medium: number;
    low: number;
  };
}