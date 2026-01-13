import { Button } from "@/components/ui/button";
import { Play, Sparkles, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute top-20 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-sky-400/20 opacity-30 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-sky-300/30 blur-[80px] rounded-full animate-float" />
      <div className="absolute top-40 left-[-100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-400/20 blur-[60px] rounded-full animate-float" style={{ animationDelay: '1s' }} />

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6 animate-fade-in backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600/80">
                AI Expert for Business Growth 🤖
              </span>
            </div>

            {/* Headline */}
            <div className="flex items-center gap-4 mb-6 group/title">
              <h1 className="font-nohemi font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-slate-900 animate-slide-up transition-all duration-500">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Jetflix!</span>
              </h1>

            </div>

            {/* Subtitle / Intro */}
            <div className="space-y-4 mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg md:text-2xl font-medium text-slate-800 leading-tight max-w-xl">
                We help brands architect revenue engines, scaling <span className="text-blue-600 font-bold underline decoration-blue-200 decoration-4 underline-offset-4">faster & smarter</span> with custom AI.
              </p>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-lg">
                Specialized AI solutions designed for companies that need to scale rapidly without sacrificing quality or brand authenticity.
              </p>
            </div>

            {/* What Makes Us Different Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              {[
                { text: "Launch in 5 days", sub: "Rapid Deployment", color: "blue" },
                { text: "1L+ AI Calls/Day", sub: "Massive Scale", color: "indigo" },
                { text: "AI Twin in 24h", sub: "Digital Clones", color: "purple" },
                { text: "Ads in a week", sub: "Production Speed", color: "pink" },
                { text: "Expert AI Team", sub: "TheIndianTechGal", color: "sky" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-1.5 transition-all duration-500 group/card cursor-default overflow-hidden relative">
                  {/* Subtle Background Shimmer on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 flex items-center justify-center shrink-0 border border-${item.color}-200 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500 shadow-sm`}>
                    <Sparkles className={`w-5 h-5 text-${item.color}-600 group-hover/card:animate-pulse`} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-bold text-slate-900 leading-tight group-hover/card:text-blue-600 transition-colors duration-300">{item.text}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold whitespace-nowrap group-hover/card:text-blue-400 transition-colors duration-300">{item.sub}</p>
                  </div>

                  {/* Highlight Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-start mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* <Button
                size="xl"
                className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-gradient-to-r from-green-600 to-emerald-400 text-white border-none animate-bounce-subtle"
                onClick={() => window.open('https://wa.me/919833219195?text=hey%20i%20want%20to%20know%20more%20about%20your%20services!', '_blank')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 fill-white/20" />
                  Chat on WhatsApp
                  <Sparkles className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
              </Button> */}
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
