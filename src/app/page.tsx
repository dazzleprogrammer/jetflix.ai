"use client";

import Navbar from "@/components/Navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { MouseTrace } from "@/components/ui/mouse-trace";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Global Sparkles */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={0.5}
        />
      </div>

      <MouseTrace />

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <StorySection />
        <ServicesOverview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
