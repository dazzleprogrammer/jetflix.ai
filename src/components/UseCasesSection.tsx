"use client";

import { useState } from "react";
import {
  GraduationCap,
  Megaphone,
  Users,
  TrendingUp,
  Settings,
  Headphones,
  Code,
  Building,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
  { id: "education", label: "Customer Education", icon: GraduationCap },
  { id: "marketing", label: "Product Marketing", icon: Megaphone },
  { id: "learning", label: "Learning & Development", icon: Users },
  { id: "sales", label: "Sales Enablement", icon: TrendingUp },
  { id: "product", label: "Product Management", icon: Settings },
  { id: "support", label: "Customer Support", icon: Headphones },
  { id: "engineering", label: "Engineering", icon: Code },
  { id: "it", label: "IT Management", icon: Building },
];

const useCaseContent: Record<string, { title: string; description: string; benefits: string[] }> = {
  education: {
    title: "Empower customers with engaging tutorials",
    description:
      "Create comprehensive training videos that help customers master your product, reduce support tickets, and increase satisfaction.",
    benefits: ["Reduce churn rates", "Lower support costs", "Increase product adoption"],
  },
  marketing: {
    title: "Showcase your product's best features",
    description:
      "Produce stunning demo videos and product tours that convert prospects into customers with professional polish.",
    benefits: ["Higher conversion rates", "Better brand consistency", "Faster content creation"],
  },
  learning: {
    title: "Train teams faster and more effectively",
    description:
      "Build a library of training content that new hires can access anytime, accelerating onboarding and skill development.",
    benefits: ["Standardized training", "Reduced onboarding time", "Scalable knowledge base"],
  },
  sales: {
    title: "Close deals with personalized demos",
    description:
      "Create custom video presentations that address each prospect's specific needs and pain points.",
    benefits: ["Shorten sales cycles", "Personalized outreach", "Higher win rates"],
  },
  product: {
    title: "Communicate product updates clearly",
    description:
      "Keep stakeholders informed with professional release notes and feature announcements.",
    benefits: ["Clearer changelogs", "Aligned stakeholders", "Better feature adoption"],
  },
  support: {
    title: "Resolve issues before they escalate",
    description:
      "Build a self-service knowledge base with step-by-step video guides that customers love.",
    benefits: ["24/7 self-service", "Fewer repetitive tickets", "Higher CSAT scores"],
  },
  engineering: {
    title: "Document complex processes",
    description:
      "Create technical documentation and code walkthroughs that help teams understand systems.",
    benefits: ["Better knowledge transfer", "Reduced technical debt", "Faster debugging"],
  },
  it: {
    title: "Simplify IT change management",
    description:
      "Guide employees through system updates and new tool adoptions with clear video instructions.",
    benefits: ["Smoother rollouts", "Fewer helpdesk calls", "Higher compliance"],
  },
};

const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState("education");

  return (
    <section id="use-cases" className="py-28 bg-secondary/30 relative overflow-hidden">
      {/* Smooth fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-50 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explaino is built for{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]">you</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explaining software is hard. Explaino makes it easy.
          </p>
        </div>

        {/* Use Case Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveCase(useCase.id)}
              className={cn(
                "group flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCase === useCase.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white border-border text-muted-foreground hover:border-blue-200 hover:text-foreground hover:bg-blue-50/50"
              )}
            >
              <useCase.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", activeCase === useCase.id ? "text-white" : "text-muted-foreground group-hover:text-blue-600")} />
              {useCase.label}
            </button>
          ))}
        </div>

        {/* Content Display Card */}
        <div className="max-w-5xl mx-auto relative">
          {/* Glowing backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 transition duration-1000 group-hover:opacity-100" />

          <div
            key={activeCase} // Key change triggers animation
            className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-12 shadow-2xl animate-scale-in flex flex-col md:flex-row gap-12 items-center overflow-hidden"
          >
            {/* Text Content */}
            <div className="flex-1 text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold mb-6 border border-blue-200">
                <Users className="w-3 h-3" />
                {useCases.find(u => u.id === activeCase)?.label}
              </div>

              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {useCaseContent[activeCase].title}
              </h3>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {useCaseContent[activeCase].description}
              </p>

              <div className="space-y-3">
                {useCaseContent[activeCase].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/80 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Illustration Area */}
            <div className="flex-1 w-full md:w-auto flex items-center justify-center relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full flex items-center justify-center border border-white/50 shadow-inner">
                <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-pulse-slow" />

                {(() => {
                  const Icon = useCases.find((u) => u.id === activeCase)?.icon || Users;
                  return (
                    <Icon className="w-32 h-32 text-blue-600/20 md:text-blue-600/40 drop-shadow-lg transform transition-all duration-700 hover:scale-110 hover:text-blue-600/60" />
                  );
                })()}
              </div>

              {/* Floating Abstract Shapes */}
              <div className="absolute top-0 right-10 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Smooth fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default UseCasesSection;
