"use client";

import { Sparkles, ArrowRight, Zap, Phone, MessageSquare, Video, Bot, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements - Multiple Floating Icons */}
      <div className="absolute inset-0 opacity-20">
        {/* Top Left */}
        <div className="absolute top-20 left-10 w-16 h-16 animate-float">
          <Sparkles className="w-full h-full text-blue-500/40" />
        </div>
        <div className="absolute top-40 left-32 w-12 h-12 animate-float" style={{ animationDelay: '0.5s' }}>
          <Phone className="w-full h-full text-sky-500/40" />
        </div>

        {/* Top Right */}
        <div className="absolute top-32 right-20 w-20 h-20 animate-float" style={{ animationDelay: '1s' }}>
          <MessageSquare className="w-full h-full text-indigo-500/40" />
        </div>
        <div className="absolute top-20 right-48 w-14 h-14 animate-float" style={{ animationDelay: '1.5s' }}>
          <Video className="w-full h-full text-blue-600/40" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-32 left-20 w-18 h-18 animate-float" style={{ animationDelay: '2s' }}>
          <Bot className="w-full h-full text-sky-600/40" />
        </div>
        <div className="absolute bottom-48 left-44 w-12 h-12 animate-float" style={{ animationDelay: '0.8s' }}>
          <Users className="w-full h-full text-blue-500/40" />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-40 right-32 w-16 h-16 animate-float" style={{ animationDelay: '1.2s' }}>
          <Zap className="w-full h-full text-indigo-600/40" />
        </div>
        <div className="absolute bottom-24 right-56 w-14 h-14 animate-float" style={{ animationDelay: '1.8s' }}>
          <TrendingUp className="w-full h-full text-sky-500/40" />
        </div>

        {/* Center floating elements */}
        <div className="absolute top-1/3 left-1/3 w-10 h-10 animate-float" style={{ animationDelay: '2.5s' }}>
          <Sparkles className="w-full h-full text-blue-400/30" />
        </div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 animate-float" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-full h-full text-indigo-400/30" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Transform Your Business Today
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight animate-slide-up font-nohemi">
            Ready to Automate<br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">with AI?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Join thousands of businesses using AI to scale operations, reduce costs, and deliver exceptional customer experiences 24/7.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto py-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">10K+</div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Conversations</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Availability</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">90%</div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Cost Savings</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="xl"
              className="group bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:from-blue-700 hover:to-sky-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-bold"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            ✨ No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </div>

      {/* Animated Waves Separator at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* Wave 1: Cyan-Blue blend transition */}
          <path
            className="animate-wave-slow fill-white"
            style={{ opacity: 0.4 }}
            d="M0,120V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120Z"
          />
          {/* Wave 2: Blue-Purple transition */}
          <path
            className="animate-wave fill-white"
            style={{ animationDelay: '-1s', animationDuration: '6s', opacity: 0.6 }}
            d="M0,120V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,9.41,104.73,20.18,49.4,15.74,101.37,20.85,153.75,12.62,52.08-8.19,98.83-24.53,150.75-30.47,44.76-5.12,93,3.26,135,18.92,32.91,12.3,61.39,31,90.62,49.2V120Z"
          />
          {/* Wave 3: Bottom-most WHITE wave for seamless merging with White Footer */}
          <path
            className="animate-wave-fast fill-white"
            style={{ animationDelay: '-3s', animationDuration: '4s' }}
            d="M0,120V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,82.93,36.2,167,45.34,250.7,23.35,75.93-20,157.47-48.92,180.3-125.13V120Z"
          />
        </svg>
      </div>
    </section>
  );
}
