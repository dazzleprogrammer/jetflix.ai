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

        {/* Cloudy Transition Orbs at the bottom */}
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] bg-blue-100/50 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 right-1/3 w-[500px] h-[300px] bg-indigo-100/50 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>
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
              className="group bg-gradient-to-r from-green-600 to-emerald-400 text-white hover:from-green-700 hover:to-emerald-500 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold animate-bounce-subtle"
              onClick={() => window.open('https://wa.me/919833219195?text=hey%20i%20want%20to%20know%20more%20about%20your%20services!', '_blank')}
            >
              <MessageSquare className="mr-2 w-5 h-5 fill-white/20" />
              Chat on WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            ✨ No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
