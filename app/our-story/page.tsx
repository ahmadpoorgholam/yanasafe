"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/utils/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="container py-16 space-y-16">
      <div className="relative py-24 overflow-hidden rounded-3xl bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0">
          <Image
            src={images.journey}
            alt="The evolution of dating safety"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            <span>Our Journey</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Safety for <span className="text-primary">everyone</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why YanaSafe exists as an open, inclusive dating-safety proof of concept
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50">
          <CardContent className="p-8 space-y-6">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Communities like “Are We Dating the Same Guy?” and women-only apps such as Tea
              show that people want a place to talk about dating safety. Those spaces matter —
              but romance scams and unsafe meetings also target men and non-binary people.
              YanaSafe explores an independent alternative: open discussion, research, and
              practical tips for anyone who wants to date more carefully.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">From private groups to shared tooling</h2>
          <p className="text-lg text-muted-foreground">
            Private Facebook groups and closed apps help, but they are hard to search,
            unevenly moderated, and often locked to one gender. Automation and social-profile
            signals can help surface patterns faster — while a public community can still
            share lived experience.
          </p>
          <p className="text-lg text-muted-foreground">
            This repository is a proof of concept. It is not a finished product, and it is
            not a replacement for law enforcement, your instincts, or meeting-in-public
            common sense.
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <Image
            src={images.evolution}
            alt="The evolution of dating safety"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What YanaSafe explores</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-card/50">
            <CardContent className="p-8 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Automated assessments</h3>
              <p className="text-muted-foreground">
                Profile analysis that scores risk signals and returns plain-language flags
                and suggestions — with a mock path for local demos and an optional live AI path.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="p-8 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Community reports</h3>
              <p className="text-muted-foreground">
                A place for people of every gender to share experiences and help others
                research someone before a first date.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="p-8 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Practical safety tips</h3>
              <p className="text-muted-foreground">
                Meet in public places. Avoid fancy isolated restaurants when you are unsure.
                Do not go to hotels too quickly. Never give someone access to your room,
                keys, or accounts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="p-8 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Inclusive by design</h3>
              <p className="text-muted-foreground">
                Scams and unsafe dates are not gendered problems alone. YanaSafe is meant
                as a place for everyone to talk about safety without gatekeeping who can warn whom.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative py-16 overflow-hidden rounded-3xl bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0">
          <Image
            src={images.future}
            alt="A holistic approach to dating safety"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative container max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold">A holistic approach</h2>
          <p className="text-lg text-muted-foreground">
            Grassroots groups prove the demand for shared vigilance. YanaSafe experiments
            with centralizing research, assessments, and tips so more people can find them —
            while keeping the reminder that tools supplement, not replace, common-sense precautions.
          </p>
        </div>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Try the prototype</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the open-source proof of concept, fork it, and help make dating a little safer.
        </p>
        <Button asChild size="lg" className="group">
          <Link href="/analyze" className="flex items-center gap-2">
            Start Analyzing Profiles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
