"use client";

import { Tv, Play, Clapperboard, MonitorPlay } from "lucide-react";
import PricingFlow from "./PricingFlow";
import { Button } from "@/components/ui/button";

const AdShowcase = ({ title, category }: { title: string, category: string }) => (
    <div className="relative group overflow-hidden rounded-xl border border-border bg-black aspect-video flex items-center justify-center cursor-pointer">
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />

        <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 mx-auto border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white ml-1" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-400">{category}</p>
        </div>
    </div>
);

export default function AIBrandAdVideos() {
    const videoVolumeOptions = [
        "4 videos/month",
        "8 videos/month",
        "12 videos/month",
        "16+ videos/month"
    ];

    return (
        <section id="brand-ads" className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Content */}
                    <div className="flex-1 space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium">
                            <Tv className="w-4 h-4" />
                            <span>AI Commercials</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-nohemi leading-tight">
                            TV-Ready Ads <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                Without the Crew
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground">
                            Create high-quality TV commercials entirely with AI.
                            No cameras, no studio, no actors needed. Turn audio scripts into full-motion video ads.
                        </p>

                        <div className="grid gap-6">
                            <AdShowcase title="Kinetic Energy Running Shoes" category="Sports & Fitness" />
                            <AdShowcase title="Sonic Pro Earbuds" category="Consumer Electronics" />
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex-1 w-full max-w-md order-1 lg:order-2">
                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border shadow-lg">
                            <div className="space-y-2 mb-8 text-center">
                                <Clapperboard className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
                                <h3 className="text-2xl font-bold">Start Your Campaign</h3>
                                <p className="text-sm text-muted-foreground">
                                    Agencies charge $10k+ for these videos. Start for a fraction of the cost.
                                </p>
                            </div>

                            <PricingFlow
                                serviceName="AI Brand Commercials"
                                volumeLabel="Monthly Video Volume"
                                volumeOptions={videoVolumeOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
