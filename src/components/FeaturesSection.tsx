import {
  FileText,
  Mic,
  ZoomIn,
  Captions,
  BookOpen,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FileText,
    title: "Perfect Video Scripts",
    description:
      "AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice.",
    className: "md:col-span-2",
  },
  {
    icon: Mic,
    title: "Lifelike AI Voiceovers",
    description:
      "Your recorded audio is swapped with AI voiceovers that sound impressively professional.",
    className: "md:col-span-1",
  },
  {
    icon: ZoomIn,
    title: "Smart Auto-Zooms",
    description:
      "AI automatically zooms into key actions, highlighting exactly what viewers need to see.",
    className: "md:col-span-1",
  },
  {
    icon: Captions,
    title: "Beautiful Captions",
    description:
      "Instantly engage your viewers with eye-catching, AI-generated captions.",
    className: "md:col-span-2",
  },
  {
    icon: BookOpen,
    title: "Auto-Generated SOPs",
    description:
      "Clear, step-by-step documentation magically created from your videos.",
    className: "md:col-span-1",
  },
  {
    icon: Palette,
    title: "Branded Templates",
    description:
      "Keep your videos consistently on brand with themed intros, outros, and backgrounds.",
    className: "md:col-span-2", // Changed to make layout asymmetric and interesting
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      {/* Smooth fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Background gradient like hero */}
      <div className="absolute inset-0 gradient-hero opacity-50 pointer-events-none" />

      {/* Background blobs for depth */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-20 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6 shadow-sm">
            Crafted with AI
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            Major video edits,{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              automated.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-1xl mx-auto">
            AI does the heavy-lifting. The final touches are all yours –
            everything is customizable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden",
                feature.className
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Icon Fade */}
              <feature.icon className="absolute -bottom-8 -right-8 w-40 h-40 text-blue-50/50 group-hover:text-blue-100/50 transition-colors duration-500 -rotate-12 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Smooth fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default FeaturesSection;
