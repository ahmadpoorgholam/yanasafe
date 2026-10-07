/**
 * Policy utilities for YanaSafe
 * Handles policy versioning and consent management
 */

import { getFirebaseDb } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export const CURRENT_POLICY_VERSION = "1.0.0";

export interface PolicyConsent {
  userId: string;
  policyVersion: string;
  timestamp: Date;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

/**
 * Checks if a user has accepted the current policy version
 */
export async function hasAcceptedCurrentPolicy(userId: string): Promise<boolean> {
  try {
    const consentDoc = await getDoc(doc(getFirebaseDb(), "policy_consents", userId));
    if (!consentDoc.exists()) return false;

    const data = consentDoc.data() as PolicyConsent;
    return (
      data.termsAccepted &&
      data.privacyAccepted &&
      data.policyVersion === CURRENT_POLICY_VERSION
    );
  } catch (error) {
    console.error("Error checking policy consent:", error);
    return false;
  }
}

/**
 * Gets the timestamp of when a user accepted the policy
 */
export async function getPolicyAcceptanceDate(userId: string): Promise<Date | null> {
  try {
    const consentDoc = await getDoc(doc(getFirebaseDb(), "policy_consents", userId));
    if (!consentDoc.exists()) return null;

    const data = consentDoc.data() as PolicyConsent;
    return data.timestamp;
  } catch (error) {
    console.error("Error getting policy acceptance date:", error);
    return null;
  }
}