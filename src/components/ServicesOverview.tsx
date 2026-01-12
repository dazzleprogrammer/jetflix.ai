"use client";

import { Phone, MessageSquare, User, Video, Tv, Code, Sparkles, ArrowRight, Brain, Zap, Bot, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PricingFlow from "./PricingFlow";

export default function ServicesOverview() {
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

    const toggleCard = (index: number) => {
        const newExpanded = new Set(expandedCards);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedCards(newExpanded);
    };

    const services = [
        {
            icon: Phone,
            title: "AI Phone Call Agents",
            description: "Smart Phone agents that can reach out or handle customer calls, reminders, and collect payments just like a real person.",
            features: [
                "24/7 Availability & Instant Scale",
                "Speaks in 12+ Languages",
                "Up to 1 Lakh Calls/Day",
                "Send WhatsApp/SMS follow-ups",
                "Listen to Sample AI Call Recordings",
                "Different Use cases & Languages"
            ],
            gradient: "from-blue-500/10 via-indigo-400/5 to-transparent",
            borderColor: "border-blue-500/20",
            iconBg: "from-blue-100 to-indigo-100",
            iconColor: "text-blue-600",
            link: "/phone-agents",
            image: "https://i.pinimg.com/736x/21/2a/fc/212afce47eebb7d34ae69a480263e70f.jpg",
            pricingProps: {
                volumeLabel: "Calls/Month",
                volumeOptions: ["1,000", "5,000", "10,000", "50,000+"],
                showVoiceType: true
            }
        },
        {
            icon: MessageSquare,
            title: "AI WhatsApp Agents",
            description: "Automated agents that manage customer messages, updates, FAQs, and promotions instantly.",
            features: [
                "Auto-Collect Lead Data",
                "Analyses Product Images",
                "Listens to Voice Notes",
                "Updates CRM Records",
                "Try Voice Note Response Ability",
                "Try Product Image Reading"
            ],
            gradient: "from-emerald-500/10 via-teal-400/5 to-transparent",
            borderColor: "border-emerald-500/20",
            iconBg: "from-emerald-100 to-teal-100",
            iconColor: "text-emerald-600",
            link: "/whatsapp-agents",
            image: "https://i.pinimg.com/1200x/42/49/34/424934965bff64129d45456311b6bc95.jpg",
            pricingProps: {
                volumeLabel: "Messages/Month",
                volumeOptions: ["5,000", "25,000", "50,000", "100,000+"],
                showVoiceType: false
            }
        },
        {
            icon: User,
            title: "AI Human Clones",
            description: "A digital AI twin of you or unreal person that speaks in your voice for marketing videos or customer support.",
            features: [
                "Real Human AI Twins",
                "Unreal AI Avatars",
                "Talk to AI Twin in Real-time",
                "Get Instant Answers",
                "Custom Voice Cloning",
                "Multi-Language Support"
            ],
            gradient: "from-purple-500/10 via-violet-400/5 to-transparent",
            borderColor: "border-purple-500/20",
            iconBg: "from-purple-100 to-violet-100",
            iconColor: "text-purple-600",
            link: "/human-clones",
            image: "https://i.pinimg.com/1200x/c4/fa/ab/c4faab263802b0780ce242b0147a5a4d.jpg",
            pricingProps: {
                volumeLabel: "Videos/Month",
                volumeOptions: ["5", "10", "20", "50+"],
                showVoiceType: true
            }
        },
        {
            icon: Video,
            title: "AI Product Videos",
            description: "Convert your product photos into glamorous marketing videos using AI Models.",
            features: [
                "AI Model Jewellery Showcase",
                "Fashion Walk for Clothing",
                "FMCG Product Display",
                "Multiple Language Support",
                "Professional AI Models",
                "Quick Turnaround Time"
            ],
            gradient: "from-pink-500/10 via-fuchsia-400/5 to-transparent",
            borderColor: "border-pink-500/20",
            iconBg: "from-pink-100 to-fuchsia-100",
            iconColor: "text-pink-600",
            link: "/product-videos",
            image: "https://i.pinimg.com/736x/c8/a7/de/c8a7de18b04321ad1d75c14fb4386adc.jpg",
            pricingProps: {
                volumeLabel: "Videos/project",
                volumeOptions: ["1-5", "5-20", "20-50", "50+"],
                showVoiceType: false
            }
        },

    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
            {/* Floating animated icons - AI themed */}
            <Phone className="absolute top-20 left-[10%] w-8 h-8 text-blue-400/30 animate-float hidden md:block" style={{ animationDelay: '0s' }} />
            <MessageSquare className="absolute top-40 right-[15%] w-10 h-10 text-purple-400/30 animate-float hidden md:block" style={{ animationDelay: '1s' }} />
            <User className="absolute top-[30%] left-[5%] w-7 h-7 text-indigo-400/30 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
            <Video className="absolute bottom-40 right-[10%] w-9 h-9 text-violet-400/30 animate-float hidden md:block" style={{ animationDelay: '1.5s' }} />
            <Tv className="absolute bottom-[20%] left-[20%] w-8 h-8 text-blue-400/30 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }} />
            <Brain className="absolute top-[60%] right-[8%] w-10 h-10 text-purple-400/30 animate-float hidden lg:block" style={{ animationDelay: '2.5s' }} />
            <Zap className="absolute top-[50%] left-[12%] w-7 h-7 text-indigo-400/30 animate-float hidden md:block" style={{ animationDelay: '3s' }} />
            <Bot className="absolute bottom-[35%] right-[25%] w-8 h-8 text-violet-400/30 animate-float hidden lg:block" style={{ animationDelay: '1.8s' }} />
            <Sparkles className="absolute top-[25%] right-[30%] w-6 h-6 text-purple-400/40 animate-float hidden md:block" style={{ animationDelay: '2.2s' }} />
            <Code className="absolute bottom-[50%] left-[25%] w-7 h-7 text-blue-400/30 animate-float hidden lg:block" style={{ animationDelay: '3.5s' }} />

            {/* Subtle background blobs with animation */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12 animate-fade-in">
                    <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-600 animate-pulse" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-nohemi bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            AI SPECIALTY
                        </h2>
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <p className="text-slate-700 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
                        Transform your business with our cutting-edge AI solutions
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6 max-w-7xl mx-auto">
                    {services.map((service, idx) => {
                        const isExpanded = expandedCards.has(idx);

                        return (
                            <div
                                key={service.title}
                                className="group relative animate-slide-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Glassmorphism Card */}
                                <div className={`relative p-5 md:p-6 rounded-2xl bg-white/90 backdrop-blur-2xl border-2 ${service.borderColor} hover:border-opacity-60 transition-all duration-500 flex flex-col overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-300/40 h-auto`}>
                                    {/* Background Image - Slide Down Curtain Animation */}
                                    <div className={`absolute inset-0 z-0 transition-transform duration-700 ease-out origin-top ${isExpanded ? 'translate-y-0' : '-translate-y-full group-hover:translate-y-0'}`}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Lighter Gradient Overlay for text readability but clear image */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white/95" />
                                    </div>

                                    {/* Background gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon & Title - Always Visible */}
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                                                    <service.icon className={`w-5 h-5 md:w-6 md:h-6 ${service.iconColor}`} />
                                                </div>
                                                <h3 className="text-base md:text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Expand/Collapse Button - Mobile Only */}
                                            <button
                                                onClick={() => toggleCard(idx)}
                                                className="md:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center hover:scale-110 transition-transform shrink-0"
                                            >
                                                <ChevronDown
                                                    className={`w-4 h-4 text-blue-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                        </div>

                                        {/* Expandable Content */}
                                        <div className={`
                                            md:block transition-all duration-500
                                            ${isExpanded ? 'max-h-[400px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden md:max-h-none md:opacity-100 md:overflow-visible'}
                                        `}>
                                            {/* Description */}
                                            <p className="text-slate-600 mb-4 leading-relaxed text-xs md:text-sm">
                                                {service.description}
                                            </p>

                                            {/* Features List */}
                                            <div className="space-y-2 mb-5 md:mb-6">
                                                {service.features.map((feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-start gap-2 text-slate-700 animate-slide-in"
                                                        style={{ animationDelay: `${i * 50}ms` }}
                                                    >
                                                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                                                            <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white stroke-[3]" />
                                                        </div>
                                                        <span className="text-xs md:text-sm leading-tight">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Explore Button */}
                                            <a href={service.link} className="block w-full">
                                                <Button
                                                    variant="outline"
                                                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 border-0 text-white group/btn transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50 text-sm md:text-base py-2 md:py-2.5 animate-gradient-x"
                                                >
                                                    <span>Explore</span>
                                                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Shimmer effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CSS for custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }
                
                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-slide-in {
                    animation: slide-in 0.3s ease-out forwards;
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
