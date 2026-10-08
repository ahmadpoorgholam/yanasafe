"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Shield, AlertTriangle, Users, Lock, BrainCircuit } from "lucide-react";
import { getFirebaseDb } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { platforms } from "@/lib/data/platforms";

export default function ReportPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    platform: "",
    profileUrl: "",
    reason: "",
    description: "",
    otherPlatform: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit a report. Redirecting you now...",
        variant: "destructive",
      });
      router.push("/login");
      return;
    }

    if (!formData.platform || !formData.profileUrl || !formData.reason || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(getFirebaseDb(), "reports"), {
        userId: user.uid,
        ...formData,
        status: "pending",
        createdAt: serverTimestamp(),
        type: "suspicious",
        severity: "medium",
        verificationCount: 0,
        aiTrainingConsent: true // Flag for using report in AI training
      });

      toast({
        title: "Report Submitted Successfully",
        description: "Thank you for helping maintain a safer dating environment. Your report will help improve our AI analysis models.",
      });

      setFormData({
        platform: "",
        profileUrl: "",
        reason: "",
        description: "",
        otherPlatform: ""
      });
    } catch (error: any) {
      toast({
        title: "Error Submitting Report",
        description: "Please try again. If the problem persists, contact support.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-10">
      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Report a Safety Concern</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help protect our community by reporting suspicious profiles or concerning behavior.
            Your report will be handled with confidentiality and care.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Community-Driven</CardTitle>
              <CardDescription>
                Your reports help keep our community safe and informed
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Confidential</CardTitle>
              <CardDescription>
                All reports are handled privately and securely
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Expert Review</CardTitle>
              <CardDescription>
                Our safety team reviews each report thoroughly
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BrainCircuit className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">AI Enhancement</CardTitle>
              <CardDescription>
                Reports help train our AI to detect new safety threats
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Alert */}
        <Alert className="bg-muted">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            If you believe someone is in immediate danger, please contact your local authorities first.
            YanaSafe is not a substitute for emergency services.
          </AlertDescription>
        </Alert>

        {/* Report Form */}
        <Card>
          <CardHeader>
            <CardTitle>Report Details</CardTitle>
            <CardDescription>
              Please provide as much detail as possible. Your report will help us improve our AI analysis
              models and protect other users.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select
                    value={formData.platform}
                    onValueChange={(value) => setFormData({ ...formData, platform: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Dating Apps</SelectLabel>
                        {platforms.datingApps.map((app) => (
                          <SelectItem key={app.id} value={app.id}>
                            {app.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Social Media</SelectLabel>
                        {platforms.socialMedia.map((platform) => (
                          <SelectItem key={platform.id} value={platform.id}>
                            {platform.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Other Platforms</SelectLabel>
                        {platforms.other.map((platform) => (
                          <SelectItem key={platform.id} value={platform.id}>
                            {platform.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {formData.platform === 'other' && (
                  <div className="space-y-2">
                    <Label htmlFor="otherPlatform">Platform Name</Label>
                    <Input
                      id="otherPlatform"
                      value={formData.otherPlatform}
                      onChange={(e) => setFormData({ ...formData, otherPlatform: e.target.value })}
                      placeholder="Enter platform name..."
                      disabled={loading}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="profileUrl">Profile URL or Username</Label>
                  <Input
                    id="profileUrl"
                    value={formData.profileUrl}
                    onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
                    placeholder="e.g., https://platform.com/username or @username"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Primary Concern</Label>
                  <Input
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Brief description of the main issue..."
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Please provide specific details about the concerning behavior or suspicious activity. This information helps train our AI to better protect the community."
                    disabled={loading}
                    rows={6}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your report will be anonymized and may be used to improve our AI safety analysis models,
                    helping us better protect the community from emerging threats.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  "Submitting Report..."
                ) : (
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Submit Report
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}