/**
 * User Service for YanaSafe
 * Handles user profile management and updates
 */

import { getFirebaseDb } from '@/lib/firebase';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { UserProfile, ProfileUpdateData } from '@/lib/models/user-profile';

export async function createUserProfile(uid: string, data: Partial<UserProfile>) {
  const userRef = doc(getFirebaseDb(), 'users', uid);
  
  const newProfile: UserProfile = {
    uid,
    email: data.email || '',
    displayName: data.displayName || null,
    photoURL: data.photoURL || null,
    createdAt: new Date(),
    updatedAt: new Date(),
    preferences: {
      notifications: true,
      darkMode: false,
    },
    safetyStats: {
      profilesAnalyzed: 0,
      reportsSubmitted: 0,
      trustScore: 100,
    },
    verificationStatus: {
      emailVerified: false,
      phoneVerified: false,
    },
  };

  await setDoc(userRef, {
    ...newProfile,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return newProfile;
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const userRef = doc(getFirebaseDb(), 'users', uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    return null;
  }

  return userDoc.data() as UserProfile;
}

export async function updateUserProfile(
  uid: string,
  data: ProfileUpdateData
): Promise<void> {
  const userRef = doc(getFirebaseDb(), 'users', uid);
  await updateDoc(userRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function updateSafetyStats(
  uid: string,
  stats: Partial<UserProfile['safetyStats']>
): Promise<void> {
  const userRef = doc(getFirebaseDb(), 'users', uid);
  await updateDoc(userRef, {
    'safetyStats': stats,
    updatedAt: serverTimestamp(),
  });
}