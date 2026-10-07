import { HeroSection } from "@/components/home/hero-section";
import { FeatureSection } from "@/components/home/feature-section";
import { StatsSection } from "@/components/home/stats-section";
import { StorySection } from "@/components/home/story-section";
import { ReportsSection } from "@/components/home/reports-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroSection />
        <StatsSection />
        <StorySection />
        <FeatureSection />
        <ReportsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}