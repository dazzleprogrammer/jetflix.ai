import { Upload, Sparkles, Wand2, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Record or Upload",
    description:
      "Record a new video with Explaino or upload an existing screen recording or slide deck.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Explaino does the magic",
    description:
      "Explaino's AI improves your script, adds a natural-sounding AI voiceover, and enhances visuals.",
  },
  {
    number: "03",
    icon: Wand2,
    title: "Make it your own",
    description:
      "Add finishing touches—every element is fully customizable to match your style.",
  },
  {
    number: "04",
    icon: Download,
    title: "Download or embed",
    description:
      "Share your professional video anywhere—download, embed, or publish directly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      {/* Smooth fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-slide-up">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6">
            Stunning content in{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              just four steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From raw idea to polished video in minutes with our simple workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          {/* Animated Connecting Beam (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-blue-100/50 overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 animate-border-flow" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center relative z-10">
                {/* Step Number & Icon */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8 transition-transform duration-500 group-hover:scale-105">
                  {/* Glowing Backdrop */}
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white border border-blue-100 rounded-3xl shadow-lg shadow-blue-500/10 flex items-center justify-center group-hover:border-blue-300 transition-colors duration-300">
                    <step.icon className="w-12 h-12 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-lg font-bold flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-4">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default HowItWorks;
