import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Lock, Scale, Target, CheckCircle, BrainCircuit } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { images } from "@/lib/utils/images";


export default function AboutPage() {
  return (
    <div className="container py-8 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Shield className="h-4 w-4" />
          <span>Your Guardian in Online Dating</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Making Dating <span className="text-primary">Safer</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering users with AI-driven insights and community wisdom for safer online dating experiences
        </p>
      </div>

      {/* Mission Statement */}
      <div className="relative py-16 overflow-hidden rounded-3xl bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0">
          <Image
            src={images.community}
            alt="Safe dating concept"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative container max-w-4xl text-center space-y-6">
          <Heart className="h-12 w-12 text-primary mx-auto" />
          <p className="text-2xl font-medium">
            At YanaSafe, we believe everyone deserves to date without compromising their safety —
            women, men, and everyone in between. This open proof of concept explores automation
            and community wisdom as tools for researching matches before you meet.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Scale className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Trust & Transparency</h3>
          <p className="text-muted-foreground">
            We build trust through transparent practices and clear communication about how we protect your safety and privacy.
          </p>
        </div>

        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Innovation & Accuracy</h3>
          <p className="text-muted-foreground">
            Our AI-powered analysis provides precise, actionable insights to help you make informed decisions about your dating journey.
          </p>
        </div>

        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Community First</h3>
          <p className="text-muted-foreground">
            We foster a supportive community where users help each other stay safe through shared experiences and insights.
          </p>
        </div>
      </div>

      {/* How We Help */}
      <div className="py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">How We Help</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach combines technology, community, and education
            to enhance your safety in online dating
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-card/50">
            <CardContent className="pt-6 space-y-4">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Advanced algorithms analyze dating profiles to detect potential red flags
                  and safety concerns in real-time.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Image authenticity verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Text pattern analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Behavioral red flags detection
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="pt-6 space-y-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Community Safety</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Leverage collective experiences and insights to identify and report
                  suspicious profiles and behaviors.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Anonymous reporting system
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Real-time safety alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Community-driven safety metrics
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="pt-6 space-y-4">
              <Lock className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Privacy First</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Your privacy and data security are our top priorities, with robust
                  protection measures in place.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Firebase Auth for sign-in
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Anonymous report options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Env-based secrets (no keys in repo)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Date Safer?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the open-source proof of concept and help shape safer dating tools for everyone.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/analyze">
              Start Analyzing Profiles
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/report">
              Report Suspicious Activity
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}