"use client";

import { Database, Rocket, Cloud, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConsultingSection() {
    const categories = [
        {
            icon: Database,
            title: "AI Consulting for Large-Scale Software Applications",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            icon: Rocket,
            title: "Startup Consulting – From Idea to Production",
            color: "text-indigo-400",
            bg: "bg-indigo-400/10"
        },
        {
            icon: Cloud,
            title: "AWS Cloud & Database Architecture",
            color: "text-sky-400",
            bg: "bg-sky-400/10"
        },
        {
            icon: Brain,
            title: "AI LLM & RAG Integration (In-House ChatGPT)",
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto relative">
                    {/* Main Orangish-Pinkish Glass Card */}
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-50/40 via-orange-50/40 to-pink-50/40 backdrop-blur-3xl px-8 py-12 md:p-16 lg:p-20 shadow-2xl border border-rose-200/50">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-400/10 blur-[120px] -mr-48 -mt-48 rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 blur-[120px] -ml-48 -mb-48 rounded-full" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Left Side: Text Content */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight font-nohemi">
                                        AI Consulting <br />
                                        <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Services</span>
                                    </h2>
                                    <p className="text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                                        Strategic AI guidance for enterprises and startups looking to scale with intelligence.
                                    </p>
                                </div>

                                <Button
                                    size="xl"
                                    className="h-14 px-8 bg-gradient-to-r from-rose-600 to-orange-600 text-white hover:from-rose-500 hover:to-orange-500 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(225,29,72,0.25)] transition-all hover:scale-105 active:scale-95 border-none"
                                    onClick={() => window.open('https://calendly.com', '_blank')}
                                >
                                    Book a Strategy Call
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>

                            {/* Right Side: Features List */}
                            <div className="space-y-4">
                                {categories.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group p-5 rounded-2xl bg-white/60 border border-white/80 hover:bg-white/90 hover:border-rose-400/50 hover:shadow-[0_10px_30px_rgba(225,29,72,0.1)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-6 cursor-default backdrop-blur-sm"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-rose-50/80 to-orange-50/80 flex items-center justify-center shrink-0 border border-rose-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                                            <item.icon className="w-6 h-6 text-rose-600" />
                                        </div>
                                        <span className="text-slate-700 font-bold md:text-lg leading-snug group-hover:text-rose-700 transition-colors duration-300">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
