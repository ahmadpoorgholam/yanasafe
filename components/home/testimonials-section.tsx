"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Quote, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "I wanted somewhere to research a match without joining a women-only app. The safety tips alone — meet in public, don't rush to hotels — are the kind of reminders everyone needs.",
    author: "Jordan M.",
    location: "Community feedback",
    tag: "Inclusive Safety",
    verificationCount: 0
  },
  {
    id: 2,
    quote: "Romance scams aren't only a women's problem. Having an open place to talk about red flags and share assessments matters for men too.",
    author: "Alex R.",
    location: "Community feedback",
    tag: "Community Reports",
    verificationCount: 0
  },
  {
    id: 3,
    quote: "Treating this as a proof of concept with honest mock analysis is better than fake user counts. I'd rather see a clear roadmap than theater.",
    author: "Sam K.",
    location: "Community feedback",
    tag: "Transparency",
    verificationCount: 0
  },
  {
    id: 4,
    quote: "Profile scoring plus practical suggestions is a useful frame — even when the AI path is still experimental.",
    author: "Riley T.",
    location: "Community feedback",
    tag: "Profile Analysis",
    verificationCount: 0
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            <span>Community Voices</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Voices we want to hear
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Illustrative feedback goals for an inclusive dating-safety community — not manufactured metrics.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8 md:p-10">
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                          <Badge variant="secondary" className="inline-flex items-center gap-1">
                            <Shield className="h-3 w-3" />
                            {testimonial.tag}
                          </Badge>
                          {testimonial.verificationCount > 0 && (
                            <Badge variant="outline" className="text-xs">
                              {testimonial.verificationCount} verifications
                            </Badge>
                          )}
                        </div>

                        <blockquote className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-lg md:text-xl pl-8 italic text-muted-foreground">
                            "{testimonial.quote}"
                          </p>
                        </blockquote>

                        <div className="text-right">
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary w-4" 
                    : "bg-primary/20 hover:bg-primary/40"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}