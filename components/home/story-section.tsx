"use client";

import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/utils/images";

export function StorySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={images.story}
                alt="Community support and safety in dating"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              <span>Why YanaSafe</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Safety talk should not be{" "}
              <span className="text-primary">one-sided</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Apps like Tea focus on women-only spaces. That fills a real need — but
              romance scams and unsafe dates hurt people of every gender. YanaSafe explores
              an independent place where everyone can research, assess, and share tips.
            </p>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Meet in public places. Avoid rushing to private hotels. Do not hand over
                access to your room or accounts. These are the kinds of practical warnings
                a community — plus light automation — can surface before someone gets hurt.
              </p>

              <Button asChild size="lg" className="group">
                <Link href="/our-story" className="flex items-center gap-2">
                  Read Our Full Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
