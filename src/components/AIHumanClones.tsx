"use client";

import { UserCircle2, Users, Wand2, PlayCircle, PauseCircle, Sparkles, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import PricingFlow from "./PricingFlow";
import { Button } from "@/components/ui/button";

export default function AIHumanClones() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const videoVolumeOptions = [
        "4 videos/month",
        "8 videos/month",
        "12 videos/month",
        "16+ videos/month"
    ];

    const features = [
        {
            icon: <UserCircle2 className="w-5 h-5 text-purple-600" />,
            title: "Real Human Clones",
            desc: "Clone yourself accurately",
            bgColor: "bg-purple-100 dark:bg-purple-900/20"
        },
        {
            icon: <Wand2 className="w-5 h-5 text-pink-600" />,
            title: "AI Avatars",
            desc: "Create unreal personas",
            bgColor: "bg-pink-100 dark:bg-pink-900/20"
        }
    ];

    return (
        <section id="human-clones" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Content Side */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium animate-fade-in shadow-sm">
                                <Users className="w-4 h-4" />
                                <span>AI Human Clones</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-nohemi leading-[1.1] animate-slide-up">
                                Scale Yourself with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient-text bg-[length:200%_auto]">
                                    Digital Twins
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                Create a digital AI twin of yourself or an unreal persona that speaks in your voice.
                                Perfect for marketing videos, training content, and 24/7 customer support.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {features.map((item, idx) => (
                                <div key={idx} className="group p-1 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:from-purple-500 hover:to-pink-500 transition-all duration-500">
                                    <div className="bg-white dark:bg-slate-950 rounded-[14px] p-5 flex items-center gap-4 h-full">
                                        <div className={`p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">{item.title}</div>
                                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Request Pricing Card (Moved from Right) */}
                        <div className="pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden group/pricing">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 opacity-0 group-hover/pricing:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 space-y-8">
                                    <div className="text-center space-y-3">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mx-auto flex items-center justify-center shadow-lg shadow-purple-500/20 mb-4">
                                            <Sparkles className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold">Create Your Clone</h3>
                                        <p className="text-muted-foreground text-sm">Select your volume and get a customized quote instantly.</p>
                                    </div>

                                    <PricingFlow
                                        serviceName="AI Human Clones"
                                        volumeLabel="Monthly Video Volume"
                                        volumeOptions={videoVolumeOptions}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating Decor elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-500/30 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Right Sticky Side */}
                    <div className="flex-1 lg:pl-10">
                        <div className="sticky top-24 space-y-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>

                            {/* Refined Video Showcase (Moved from Left) */}
                            <div className="relative group w-full mx-auto lg:mx-0">
                                {/* Premium Card Container */}
                                <div className="relative p-2 bg-white/20 dark:bg-slate-900/20 backdrop-blur-md rounded-[2.5rem] border border-white/20 dark:border-slate-800 shadow-2xl transition-all duration-700">

                                    {/* Video Content */}
                                    <div
                                        className="relative overflow-hidden rounded-[2rem] aspect-video bg-slate-950 cursor-pointer"
                                        onClick={togglePlay}
                                    >
                                        <video
                                            ref={videoRef}
                                            src="https://cdn.vocallabs.ai/Blogs/b4506c0e-bd88-4728-84c3-c4fef6aeab39.mp4"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />

                                        {/* Minimal Overlay */}
                                        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                                            <div className="p-6 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-glow group-hover:scale-110 transition-transform">
                                                {isPlaying ? (
                                                    <PauseCircle className="w-16 h-16 text-white" />
                                                ) : (
                                                    <PlayCircle className="w-16 h-16 text-white" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Bottom Fade */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

                                        {/* Minimal Label */}
                                        <div className="absolute bottom-6 left-8 z-20">
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Founder Clone</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Talk to AI Twin CTA */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="relative rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-[2px] overflow-hidden">
                                    <div className="bg-white dark:bg-slate-950 rounded-[22px] p-8 text-center space-y-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                            Instant Access
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">Want to talk to an AI Twin?</h3>
                                            <p className="text-muted-foreground">Experience sub-500ms conversation latency and studio-quality voice.</p>
                                        </div>
                                        <Button className="w-full h-14 text-lg font-bold bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] transition-all rounded-xl shadow-xl hover:shadow-purple-500/20 group/btn">
                                            <span className="flex items-center gap-2">
                                                Talk to AI Twin Now
                                                <MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
