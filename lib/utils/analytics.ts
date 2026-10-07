/**
 * Analytics utilities for YanaSafe
 * Handles user activity tracking and metrics
 */

import { getFirebaseAnalytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Tracks a profile analysis event
 * @param userId - The ID of the user performing the analysis
 * @param success - Whether the analysis was successful
 */
export function trackProfileAnalysis(userId: string, success: boolean) {
  const analytics = getFirebaseAnalytics();
  if (!analytics) return;
  logEvent(analytics, 'profile_analysis', {
    userId,
    success,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Tracks a profile report event
 * @param userId - The ID of the user submitting the report
 * @param reportType - The type of report submitted
 */
export function trackProfileReport(userId: string, reportType: string) {
  const analytics = getFirebaseAnalytics();
  if (!analytics) return;
  logEvent(analytics, 'profile_report', {
    userId,
    reportType,
    timestamp: new Date().toISOString(),
  });
}