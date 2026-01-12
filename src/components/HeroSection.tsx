import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute top-20 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-sky-400/20 opacity-30 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-sky-300/30 blur-[80px] rounded-full animate-float" />
      <div className="absolute top-40 left-[-100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-400/20 blur-[60px] rounded-full animate-float" style={{ animationDelay: '1s' }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                AI Agents & Digital Twins
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-nohemi font-normal text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] leading-[1.1] text-foreground mb-6 animate-slide-up hover:scale-[1.02] transition-transform duration-500 origin-left">
              We Build Custom AI
              <br />
              <span className="animate-gradient-text whitespace-nowrap">Employees & Clones</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transform your business with Phone Agents, WhatsApp Bots, and Hyper-realistic Human Clones for video production.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-start mb-16 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-glow hover:ring-2 hover:ring-primary/50">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Demo
                  <Sparkles className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
              </Button>
            </div>
          </div>

          {/* Right Video Preview - Premium 3D Mockup */}
          <div
            className="flex-1 w-full relative max-w-[850px] animate-scale-in perspective-[2000px] group/hero-visual"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Main Mockup Container with 3D Tilt */}
            <div className="relative rounded-[2rem] p-2 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform transition-all duration-700 group-hover/hero-visual:rotate-x-2 group-hover/hero-visual:rotate-y-[-5deg] group-hover/hero-visual:scale-[1.02]">

              {/* Internal Browser Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
                {/* Video content */}
                <div className="relative aspect-video flex items-center justify-center group-hover/hero-visual:scale-105 transition-transform duration-[2s]">
                  <video
                    src="https://cdn.vocallabs.ai/Blogs/8f7e7c13-f520-4ce7-91f2-440c9235e5a4.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge inside video - Hidden on mobile */}
                  <div className="hidden md:flex absolute top-6 right-6 z-20 items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600/90 text-white text-xs font-bold shadow-[0_10px_20px_-5px_rgba(37,99,235,0.5)] backdrop-blur-md animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    Enhanced by AI
                  </div>
                </div>
              </div>

              {/* Exterior Floating Glass UI Elements */}
              {/* Widget 1: Audio Visualizer */}
              <div className="hidden lg:flex absolute -top-12 -left-12 p-5 bg-white shadow-2xl rounded-3xl border border-slate-100 flex-col gap-3 animate-float group-hover/hero-visual:rotate-[-5deg] transition-transform duration-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Audio Quality</p>
                    <p className="text-sm font-bold text-slate-900">Crystal Clear</p>
                  </div>
                </div>
                <div className="flex gap-1 items-end h-8 px-1">
                  {[40, 70, 45, 90, 65, 80, 50, 95, 30].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-600 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>

              {/* Widget 2: Status Indicator */}
              <div className="hidden lg:flex absolute -bottom-10 -right-10 p-6 bg-slate-900 shadow-2xl rounded-3xl border border-white/10 animate-float group-hover/hero-visual:rotate-[3deg] transition-transform duration-700" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-600 animate-ping absolute inset-0" />
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center relative z-10">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">4K Render</p>
                    <p className="text-xs text-blue-400 font-medium">Processing Complete</p>
                  </div>
                </div>
              </div>

              {/* Decorative Glass Shards */}
              <div className="absolute top-1/2 -right-16 w-32 h-32 bg-blue-400/20 blur-[60px] rounded-full animate-pulse transition-opacity group-hover/hero-visual:opacity-100 opacity-60" />
              <div className="absolute bottom-1/4 -left-16 w-40 h-40 bg-indigo-400/10 blur-[80px] rounded-full animate-float transition-opacity group-hover/hero-visual:opacity-100 opacity-60" />
            </div>

            {/* Overall Mockup Shadow/Aura */}
            <div className="absolute inset-[-15%] bg-blue-500/5 blur-[120px] -z-10 rounded-full animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
