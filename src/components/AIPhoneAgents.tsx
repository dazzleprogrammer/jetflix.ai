"use client";

import { Phone, Play, Pause, Sparkles, ArrowRight, Check } from "lucide-react";
import { useState, useEffect } from "react";
import PricingFlow from "./PricingFlow";
import { Button } from "@/components/ui/button";

const AudioVisualizer = ({ isPlaying }: { isPlaying: boolean }) => {
    return (
        <div className="flex items-end justify-center gap-[2px] h-6 w-12 opacity-50">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className={`w-1 rounded-full bg-primary transition-all duration-300 ${isPlaying ? 'animate-music-bar' : 'h-1'}`}
                    style={{
                        height: isPlaying ? '100%' : '20%',
                        animationDelay: `${i * 0.1}s`
                    }}
                />
            ))}
        </div>
    );
};

const AudioPlayer = ({
    title,
    useCase,
    voiceType,
    language,
    duration = "0:15"
}: {
    title: string;
    useCase: string;
    voiceType: string;
    language: string;
    duration?: string
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 50); // Simulates 5 seconds duration roughly
        } else {
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className="group p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 flex items-center gap-4 relative overflow-hidden">

            {/* Play Button */}
            <div className="relative z-10 shrink-0">
                <Button
                    variant="outline"
                    size="icon"
                    className={`h-12 w-12 rounded-full border-2 transition-all duration-300 ${isPlaying
                        ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-lg shadow-blue-500/20 scale-105'
                        : 'border-slate-100 text-slate-500 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 hover:scale-105'}`}
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 ml-1 fill-current" />}
                </Button>
            </div>

            {/* Content */}
            <div className="flex-1 relative z-10 min-w-0">
                <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0">
                        <p className="font-heading font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-base truncate">{title}</p>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1 text-xs text-slate-500 font-medium tracking-wide uppercase">
                            <span className="shrink-0">{useCase}</span>
                            <span className="text-slate-300">•</span>
                            <span className="shrink-0">{voiceType}</span>
                            <span className="text-slate-300">•</span>
                            <span className="shrink-0">{language}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs font-mono text-slate-400 tabular-nums">{isPlaying ? "0:0" + Math.floor(progress / 20) : duration}</span>
                        {isPlaying && <AudioVisualizer isPlaying={isPlaying} />}
                    </div>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden relative mt-3">
                    <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Subtle Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

export default function AIPhoneAgents() {
    const callVolumeOptions = [
        "<15k Call Minutes",
        "15k-50k Call Minutes",
        "50k-1L Call Minutes",
        "1L+ Call Minutes"
    ];

    const features = [
        "Reach out or handle inbound customer calls",
        "Manage reminders and collect payments",
        "Human-like understanding of interruptions",
        "Fluent in 12+ languages for global reach"
    ];

    return (
        <section id="phone-agents" className="py-16 md:py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[100px] rounded-full animate-float -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 blur-[100px] rounded-full animate-float -z-10" style={{ animationDelay: '2s' }} />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-medium animate-fade-in shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="tracking-wide">AI Phone Agents</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-nohemi leading-[1.1] text-slate-900 animate-slide-up relative tracking-tight">
                            Smart Phone Agents <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-text bg-[length:200%_auto]">
                                Just Like Humans
                            </span>
                        </h2>

                        {/* Bullet Points */}
                        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 group">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
                                        <Check className="w-3 h-3 text-blue-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-lg text-slate-600 leading-snug font-medium group-hover:text-slate-900 transition-colors duration-300">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Audio Samples Section */}
                        <div className="space-y-6 pt-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center gap-4">
                                <div className="h-px bg-slate-200 flex-1" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 bg-white px-2">
                                    Listen to Samples
                                </span>
                                <div className="h-px bg-slate-200 flex-1" />
                            </div>
                            <p className="text-sm text-slate-500 text-center max-w-md mx-auto italic">
                                Experience AI call recordings across different use cases & languages
                            </p>

                            <div className="grid gap-4 perspective-[1000px]">
                                <AudioPlayer
                                    title="Car Service Reminder"
                                    useCase="Service Reminder"
                                    voiceType="Female - Professional"
                                    language="English/Hindi"
                                    duration="0:45"
                                />
                                <AudioPlayer
                                    title="Real Estate"
                                    useCase="Lead Qualification"
                                    voiceType="Male - Authoritative"
                                    language="English"
                                    duration="1:20"
                                />
                                <AudioPlayer
                                    title="Payment Dues & Reminders"
                                    useCase="Collections"
                                    voiceType="Female - Polite"
                                    language="Hindi"
                                    duration="0:30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Pricing Card */}
                    <div className="flex-1 w-full max-w-[500px] perspective-[2000px] group/card">
                        <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative transition-all duration-700 hover:rotate-y-[-5deg] hover:scale-[1.02]">

                            {/* Inner Card Background */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-white -z-10" />

                            {/* Card Content */}
                            <div className="p-8 md:p-10 space-y-8 relative z-10">
                                <div className="space-y-4 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 group-hover/card:scale-110 transition-transform duration-500">
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">Get Started</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Share your requirements and we'll craft the perfect voice solution tailored to your scale.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-50 blur-xl rounded-full -z-10" />
                                    <PricingFlow
                                        serviceName="AI Phone Agents"
                                        volumeLabel="Monthly Call Volumes"
                                        volumeOptions={callVolumeOptions}
                                        showVoiceType={true}
                                    />
                                </div>

                                <div className="pt-6 border-t border-slate-100 text-center">
                                    <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        98% Connection Rate
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decor Elements behind card */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 blur-[80px] rounded-full -z-10 animate-pulse-slow mix-blend-multiply" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 blur-[60px] rounded-full -z-10 animate-float mix-blend-multiply" style={{ animationDelay: '1.5s' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
