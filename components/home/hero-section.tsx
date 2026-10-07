"use client";

import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/utils/images";

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={images.hero}
            alt="Safe and loving relationships"
            fill
            className={`object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-15" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background/95" />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            <span>Inclusive dating safety — for everyone</span>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Research before you date with{" "}
              <span className="text-primary">YanaSafe</span>
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              A proof of concept for safer dating through automation, social verification,
              and an open community where anyone can talk about safety — including men who
              get scammed and women looking out for each other.
            </p>

            <div className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              <Shield className="h-4 w-4" />
              Open-source POC — not a finished product
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button asChild size="lg" className="w-full">
              <Link href="/analyze" className="flex items-center justify-center gap-2">
                Analyze a Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/report">Share a Safety Report</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
