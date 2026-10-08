"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Shield, AlertTriangle, CheckCircle, ImagePlus, Trash2, Lock, Users } from "lucide-react";
import Image from "next/image";
import { AnalysisProgress } from "@/components/analyze/analysis-progress";
import { uploadMultipleImages } from "@/lib/services/image-service";
import { useAuth } from "@/components/auth/auth-context";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AnalysisResult {
  score: number;
  flags: string[];
  suggestions: string[];
  rawSummary?: string;
}

export default function AnalyzePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [imageFiles, setImageFiles] = useState<{ file: File; preview: string }[]>([]);
  const [context, setContext] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imageFiles.length >= 2) {
      toast({
        title: "Maximum Images Reached",
        description: "You can only analyze up to 2 images at a time.",
        variant: "destructive",
      });
      return;
    }

    try {
      const preview = URL.createObjectURL(file);
      setImageFiles((prev) => [...prev, { file, preview }]);
      setHasChanges(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const removeImage = (index: number) => {
    setImageFiles((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
    setHasChanges(true);
  };

  const handleContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
    setHasChanges(true);
  };

  const handleSubmit = async () => {
    if (!process.env.NEXT_PUBLIC_DEBUG_MODE && !user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to analyze profiles.",
        variant: "destructive",
      });
      return;
    }

    if (imageFiles.length === 0 || !context.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide at least one image and additional context.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setUploadProgress(0);

    try {
      const files = imageFiles.map(img => img.file);
      const uploadedImages = await uploadMultipleImages(user?.uid || 'anonymous', files);
      setUploadProgress(50);

      const response = await fetch("/api/analyze-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrls: uploadedImages.map(img => img.url),
          context,
          location: null,
          extraMetadata: null,
        }),
      });

      if (!response.ok) {
        throw new Error("Analysis failed");
      }

      const payload = await response.json();
      const analysis = payload.data;
      setUploadProgress(100);

      if (analysis) {
        setAnalysisResult({
          score: analysis.score || 0,
          flags: analysis.flags || [],
          suggestions: analysis.suggestions || [],
          rawSummary: analysis.rawSummary || "",
        });
        setHasChanges(false);
      }
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: "Unable to complete the analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-10">
      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Profile Safety Analysis</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered analysis helps you make informed decisions about dating profiles
            by detecting potential red flags and safety concerns.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">AI Analysis</CardTitle>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms analyze profiles for authenticity
              </p>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Private & Secure</CardTitle>
              <p className="text-sm text-muted-foreground">
                Your data is handled with complete confidentiality
              </p>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Smart Insights</CardTitle>
              <p className="text-sm text-muted-foreground">
                Get actionable safety recommendations
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Alert */}
        <Alert className="bg-muted">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            While our AI provides valuable insights, always trust your instincts and take necessary precautions.
            If you feel unsafe, contact appropriate authorities.
          </AlertDescription>
        </Alert>

        {/* Analysis Form */}
        <Card>
          <CardHeader>
            <CardTitle>Analysis Details</CardTitle>
            <p className="text-sm text-muted-foreground">
              Upload profile information for comprehensive safety analysis
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-4">
              <Label>Profile Images</Label>
              <div className="grid gap-4 md:grid-cols-2">
                {imageFiles.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-lg border bg-muted">
                    <Image
                      src={image.preview}
                      alt={`Profile image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeImage(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {imageFiles.length < 2 && (
                  <div className="flex items-center justify-center aspect-[4/3] rounded-lg border-2 border-dashed">
                    <div className="text-center">
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={isAnalyzing}
                        className="hidden"
                      />
                      <Label
                        htmlFor="image"
                        className="flex flex-col items-center gap-2 cursor-pointer"
                      >
                        <ImagePlus className="h-6 w-6 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Upload Image {imageFiles.length + 1}
                        </span>
                      </Label>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Upload up to 2 profile images. For best results, include clear photos or screenshots.
              </p>
            </div>

            {/* Context Input */}
            <div className="space-y-2">
              <Label htmlFor="context">Additional Context</Label>
              <Textarea
                id="context"
                value={context}
                onChange={handleContextChange}
                placeholder={`Help our AI by providing:
• Profile bio text
• Claims about occupation/education
• Concerning behavior or inconsistencies
• Relevant social media handles`}
                disabled={isAnalyzing}
                rows={5}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                More context helps us provide better analysis. We'll check for consistency and identify potential concerns.
              </p>
            </div>

            {isAnalyzing && <AnalysisProgress />}

            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={isAnalyzing || (!hasChanges && analysisResult)}
            >
              <Shield className="h-4 w-4 mr-2" />
              {isAnalyzing ? "Analyzing..." : hasChanges ? "Analyze Profile" : "No Changes to Analyze"}
            </Button>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {analysisResult && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Analysis Results</span>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span>Safety Score: {analysisResult.score}%</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {analysisResult.flags.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    Potential Concerns
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {analysisResult.flags.map((flag, index) => (
                      <li key={index}>{flag}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Safety Recommendations
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {analysisResult.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>

              {analysisResult.rawSummary && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Analysis Summary</h3>
                  <p className="text-sm text-muted-foreground">{analysisResult.rawSummary}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}