"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getFirebaseAuth, getGoogleProvider } from "@/lib/firebase";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { createUserProfile, getUserProfile } from "@/lib/services/user-service";

export function GmailAuth() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // Check for redirect result on component mount
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(getFirebaseAuth());
        if (result) {
          await handleAuthSuccess(result.user);
        }
      } catch (error: any) {
        handleAuthError(error);
      }
    };

    handleRedirectResult();
  }, []);

  const handleAuthSuccess = async (user: any) => {
    try {
      const existingProfile = await getUserProfile(user.uid);
      
      if (!existingProfile) {
        await createUserProfile(user.uid, {
          email: user.email || "",
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }

      toast({
        title: "Welcome!",
        description: "Successfully signed in with Gmail.",
      });

      router.push("/analyze");
    } catch (error) {
      console.error("Profile creation error:", error);
      toast({
        title: "Error",
        description: "Failed to create user profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAuthError = (error: any) => {
    console.error("Gmail sign-in error:", error);
    
    let errorMessage = "Failed to sign in. Please try again.";
    switch (error.code) {
      case 'auth/popup-blocked':
        errorMessage = "Pop-up was blocked. Trying alternate sign-in method...";
        // Fallback to redirect method
        signInWithRedirect(getFirebaseAuth(), getGoogleProvider());
        return;
      case 'auth/unauthorized-domain':
        errorMessage = "This domain is not authorized for authentication. Please contact support.";
        break;
      case 'auth/cancelled-popup-request':
      case 'auth/popup-closed-by-user':
        errorMessage = "Sign in was cancelled. Please try again.";
        break;
      case 'auth/network-request-failed':
        errorMessage = "Network error. Please check your connection.";
        break;
      default:
        errorMessage = "An unexpected error occurred. Please try again.";
    }

    toast({
      title: "Sign In Error",
      description: errorMessage,
      variant: "destructive",
    });
  };

  const handleGmailSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(getFirebaseAuth(), getGoogleProvider());
      await handleAuthSuccess(result.user);
    } catch (error: any) {
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleGmailSignIn}
      disabled={loading}
      className="w-full"
    >
      {loading ? (
        "Signing in..."
      ) : (
        <>
          <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Continue with Gmail
        </>
      )}
    </Button>
  );
}