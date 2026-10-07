"use client";

import { GmailAuth } from "@/components/auth/gmail-auth";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to YanaSafe</h1>
          <p className="text-muted-foreground">
            Sign in securely with your Gmail account to continue
          </p>
        </div>

        <div className="space-y-6">
          <GmailAuth />
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              New to YanaSafe?
            </span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm">
            Create an account to start analyzing profiles and staying safe in online dating.
          </p>
          <Link
            href="/help"
            className="text-sm text-primary hover:underline"
          >
            Learn more about our safety features
          </Link>
        </div>
      </div>
    </div>
  );
}