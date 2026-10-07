import { Shield, Users, Lock, AlertTriangle, CheckCircle, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  const CardWrapper = link ? Link : "div";
  
  return (
    <CardWrapper 
      href={link || "#"} 
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-background p-6 transition-all",
        link && "hover:border-primary/50 hover:shadow-md cursor-pointer"
      )}
    >
      <div className="space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export function FeatureSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose YanaSafe?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Our comprehensive safety features help you make informed decisions and stay protected
            in the world of online dating.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="AI-Powered Analysis"
            description="Advanced algorithms analyze profiles for authenticity, detecting potential red flags and safety concerns in real-time."
            link="/analyze"
          />
          <FeatureCard
            icon={<AlertTriangle className="h-6 w-6 text-primary" />}
            title="Community Safety Reports"
            description="Access and contribute to real-time community safety reports. Stay informed about potential risks and help others stay safe."
            link="/reports"
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Our Story"
            description="Learn about our journey and mission to revolutionize dating safety through technology and community."
            link="/our-story"
          />
          <FeatureCard
            icon={<Lock className="h-6 w-6 text-primary" />}
            title="Inclusive by Design"
            description="Not women-only. Anyone can research, discuss, and share safety context — including men targeted by romance scams."
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
            title="Safety Recommendations"
            description="Practical tips from analysis and community wisdom: meet in public, go slow on private places, never hand over hotel or account access."
          />
          <FeatureCard
            icon={<Heart className="h-6 w-6 text-primary" />}
            title="Dating Safety Guide"
            description="Access comprehensive resources and best practices for safer online dating."
          />
        </div>
      </div>
    </section>
  );
}