/**
 * User Profile Model for YanaSafe
 * Defines the structure and types for user profiles
 */

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
  updatedAt: Date;
  preferences: {
    notifications: boolean;
    darkMode: boolean;
  };
  safetyStats: {
    profilesAnalyzed: number;
    reportsSubmitted: number;
    trustScore: number;
  };
  verificationStatus: {
    emailVerified: boolean;
    phoneVerified: boolean;
  };
}

export interface UserSettings {
  notifications: boolean;
  darkMode: boolean;
}

export type ProfileUpdateData = Partial<Omit<UserProfile, 'uid' | 'createdAt'>>;
