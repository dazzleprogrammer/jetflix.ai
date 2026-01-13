"use client";

import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ConsultingSection from "@/components/ConsultingSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="selection:bg-primary/20">
      <HeroSection />
      <ServicesOverview />
      <ConsultingSection />
      <CTASection />
    </div>
  );
}
