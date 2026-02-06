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
    line1,
    line2,
    audioSrc,
    duration = "0:15"
}: {
    line1: string;
    line2: string;
    audioSrc: string;
    duration?: string
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [audio] = useState(typeof Audio !== 'undefined' ? new Audio(audioSrc) : null);

    useEffect(() => {
        if (!audio) return;

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
            setCurrentTime(audio.currentTime);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        };
    }, [audio]);

    useEffect(() => {
        if (!audio) return;
        if (isPlaying) {
            audio.play().catch(console.error);
        } else {
            audio.pause();
        }
    }, [isPlaying, audio]);

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audio) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width)); // Clamp between 0 and 1
        const newTime = percentage * audio.duration;

        audio.currentTime = newTime;
        setProgress(percentage * 100);
        setCurrentTime(newTime);
    };

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
                        <div className="space-y-0.5 min-w-0">
                            <p className="font-heading font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-base truncate">
                                {line1}
                            </p>
                            <p className="text-xs text-slate-500 font-medium tracking-wide">
                                {line2}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs font-mono text-slate-400 tabular-nums">
                            {isPlaying
                                ? `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')}`
                                : duration}
                        </span>
                        {isPlaying && <AudioVisualizer isPlaying={isPlaying} />}
                    </div>
                </div>

                {/* Progress Bar Container */}
                <div
                    className="h-2 w-full bg-slate-100 rounded-full overflow-hidden relative mt-3 cursor-pointer group/progress"
                    onClick={handleSeek}
                >
                    <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-100 ease-linear group-hover/progress:opacity-80"
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
        <section id="phone-agents" className="py-8 md:py-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[100px] rounded-full animate-float -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 blur-[100px] rounded-full animate-float -z-10" style={{ animationDelay: '2s' }} />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Centered Header */}
                <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-medium animate-fade-in shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="tracking-wide">AI Phone Agents</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-nohemi leading-[1.1] text-slate-900 animate-slide-up relative tracking-tight">
                        Smart Phone Agents <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-text bg-[length:200%_auto]">
                            Just Like Humans
                        </span>
                    </h2>
                </div>


                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* Left Content: Features & Audio */}
                    <div className="flex-1 space-y-8 w-full">

                        {/* Bullet Points */}
                        <div className="grid sm:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 group">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
                                        <Check className="w-3 h-3 text-blue-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-base text-slate-600 leading-snug font-medium group-hover:text-slate-900 transition-colors duration-300">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Audio Samples Section */}
                        <div className="space-y-4 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center gap-4">
                                <div className="h-px bg-slate-200 flex-1" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 bg-white px-2">
                                    Listen to Samples
                                </span>
                                <div className="h-px bg-slate-200 flex-1" />
                            </div>

                            <AudioPlayer
                                line1="Female - Saavi"
                                line2="English (India) - Polite"
                                duration="00:08"
                                audioSrc="https://cdn.vocallabs.ai/Voices/557eb319-ef61-4326-b571-c28c748765f0.mpga"
                            />
                            <AudioPlayer
                                line1="Female - Neha"
                                line2="English (India) - Casual"
                                duration="00:08"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/01d4d6e0-0965-41c8-b2f7-3715d2d4d1d6.mpga"
                            />
                            <AudioPlayer
                                line1="Male - Eric"
                                line2="English - Smooth Trustworthy"
                                duration="00:08"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/81a236f1-6f26-422e-9c59-86b71b9bfb95.mpga"
                            />
                            <AudioPlayer
                                line1="Male - Lucan Rook"
                                line2="English - Energetic"
                                duration="00:08"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/9e353f03-a807-4c96-baf9-207bfbb85c81.mpga"
                            />
                            <AudioPlayer
                                line1="Female - Madsri"
                                line2="Hindi - Warm Friendly"
                                duration="00:13"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/af8c62bb-3761-4ce0-aafd-0b17bf4d7d8f.mpga"
                            />
                            <AudioPlayer
                                line1="Female - Neha"
                                line2="Hindi - Casual"
                                duration="00:13"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/85fc2d19-578c-4e5c-904b-bea9b6e7e24e.mpga"
                            />
                            <AudioPlayer
                                line1="Female - Saavi"
                                line2="Hindi - Polite"
                                duration="00:13"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/d90aef3e-6880-4a37-be7d-e79df85bd04f.mpga"
                            />
                            <AudioPlayer
                                line1="Female - Madsri"
                                line2="Tamil - Warm Friendly"
                                duration="00:13"
                                audioSrc="https://cdn.vocallabs.ai/Blogs/19d909cd-092a-4ad3-a6ed-0c72d3188ed1.mpga"
                            />
                        </div>
                    </div>

                    {/* Right Pricing Card */}
                    <div className="flex-1 w-full max-w-[500px] perspective-[2000px] group/card mx-auto lg:mx-0">
                        <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative transition-all duration-700 hover:rotate-y-[-5deg] hover:scale-[1.02]">

                            {/* Inner Card Background */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-white -z-10" />

                            {/* Card Content */}
                            <div className="p-8 space-y-6 relative z-10">
                                <div className="space-y-4 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4 group-hover/card:scale-110 transition-transform duration-500">
                                        <Sparkles className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Get Started</h3>
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

                                <div className="pt-4 border-t border-slate-100 text-center">
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
