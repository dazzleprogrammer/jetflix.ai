"use client";

import { Phone, MessageSquare, User, Video, Tv, Brain, Zap, Sparkles, Check, Mic, Image as ImageIcon, CreditCard, PlayCircle, Layers, Cloud, Rocket, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PricingFlow from "./PricingFlow";

export default function ServicesOverview() {
    const services = [
        {
            icon: Phone,
            title: "AI Phone Call Agents",
            description: "Smart AI phone agents that can make outbound calls or handle inbound customer calls, reminders, and payment collection—just like a real human.",
            capabilities: [
                "Inbound & outbound calls",
                "Multi-language support",
                "Human-like voice interactions",
                "Automated reminders & follow-ups",
                "Payment reminders & collections"
            ],
            samples: [
                { label: "Car Service Reminder", icon: Mic },
                { label: "Real Estate Calls", icon: Mic },
                { label: "Payment Dues", icon: Mic }
            ],
            borderColor: "border-blue-500/20",
            iconBg: "from-blue-100 to-indigo-100",
            iconColor: "text-blue-600",
            image: "https://i.pinimg.com/736x/21/2a/fc/212afce47eebb7d34ae69a480263e70f.jpg",
            href: "/phone-agents",
            pricingProps: {
                serviceName: "AI Phone Call Agents",
                volumeLabel: "Monthly Call Volumes",
                volumeOptions: ["Less than 15K call minutes", "15K–50K call minutes", "50K–1L call minutes", "1L+ call minutes"],
                showVoiceType: true,
                showTeamSize: true,
                setupFee: "INR 25,000",
                redirectPath: "/phone-agents"
            }
        },
        {
            icon: MessageSquare,
            title: "AI WhatsApp Agents",
            description: "Automated WhatsApp AI agents that instantly manage customer messages, updates, FAQs, and promotions.",
            capabilities: [
                "Instant auto-reply to messages",
                "Auto-read voice notes and respond",
                "Image analysis and smart replies",
                "CRM updates and integrations",
                "Multi-language support"
            ],
            samples: [
                { label: "Voice Note Response", icon: Mic },
                { label: "Product Image Reading", icon: ImageIcon },
                { label: "Payment Flow", icon: CreditCard }
            ],
            borderColor: "border-emerald-500/20",
            iconBg: "from-emerald-100 to-teal-100",
            iconColor: "text-emerald-600",
            image: "https://i.pinimg.com/1200x/42/49/34/424934965bff64129d45456311b6bc95.jpg",
            href: "/whatsapp-agents",
            pricingProps: {
                serviceName: "AI WhatsApp Agents",
                volumeLabel: "Monthly Message Volumes",
                volumeOptions: ["Less than 15K messages", "15K–50K messages", "50K–1L messages", "1L+ messages"],
                showTeamSize: true,
                setupFee: "INR 25,000",
                redirectPath: "/whatsapp-agents"
            }
        },
        {
            icon: User,
            title: "AI Human Clones",
            description: "A digital AI twin of you—or an unreal AI persona—that speaks in your voice for marketing videos or customer support.",
            capabilities: [
                "AI Twins of Real Humans",
                "Unreal AI Avatars",
                "Interactive Demo",
                "Talk to your AI Twin",
                "Instant real-time answers"
            ],
            samples: [
                { label: "Real Human AI Twins", icon: User },
                { label: "Unreal AI Avatars", icon: Bot },
                { label: "Interactive Demo", icon: PlayCircle }
            ],
            borderColor: "border-purple-500/20",
            iconBg: "from-purple-100 to-violet-100",
            iconColor: "text-purple-600",
            image: "https://i.pinimg.com/1200x/c4/fa/ab/c4faab263802b0780ce242b0147a5a4d.jpg",
            href: "/human-clones",
            pricingProps: {
                serviceName: "AI Human Clones",
                volumeLabel: "Videos per Month",
                volumeOptions: ["4", "8", "12", "16+"],
                showVoiceType: true,
                showTeamSize: false,
                setupFee: "INR 25,000",
                redirectPath: "/human-clones"
            }
        },
        {
            icon: Video,
            title: "AI Product Videos",
            description: "Convert your product photos into glamorous AI-generated marketing videos using AI models.",
            capabilities: [
                "Convert Photos to Viral Videos",
                "Jewellery AI Model Showcase",
                "Fashion Walk for Clothing",
                "FMCG Product Showcase",
                "Multiple Language Support"
            ],
            samples: [
                { label: "Jewellery Showcase", icon: Video },
                { label: "Fashion Walk", icon: Video },
                { label: "FMCG Showcase", icon: Video }
            ],
            borderColor: "border-pink-500/20",
            iconBg: "from-pink-100 to-fuchsia-100",
            iconColor: "text-pink-600",
            image: "https://i.pinimg.com/736x/c8/a7/de/c8a7de18b04321ad1d75c14fb4386adc.jpg",
            href: "/product-videos",
            pricingProps: {
                serviceName: "AI Product Videos",
                volumeLabel: "Videos per Month",
                volumeOptions: ["4", "8", "12", "16+"],
                showTeamSize: false,
                setupFee: "INR 25,000",
                redirectPath: "/product-videos"
            }
        }
    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold font-nohemi text-slate-900 mb-6 tracking-tight">
                        AI Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Cutting-edge AI solutions designed to transform your business operations and marketing.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative"
                        >
                            <div
                                className={`relative h-auto md:h-[450px] rounded-[2.5rem] bg-white border-2 ${service.borderColor} transition-all duration-700 flex flex-col md:flex-row overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50 group/card cursor-pointer shadow-sm`}
                                onClick={() => window.location.href = service.href}
                            >
                                {/* Left Content Section */}
                                <div className="flex-1 p-8 md:p-12 flex flex-col z-10 relative bg-white h-full">
                                    <div className="flex items-center gap-4 w-full shrink-0">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center shadow-md group-hover/card:scale-110 transition-all duration-500 shrink-0`}>
                                            <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-nohemi leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Centered Button in vacant space */}
                                    <div className="flex-1 flex items-center justify-start w-full">
                                        <Button
                                            size="lg"
                                            className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 text-white shadow-[0_10px_30px_-5px_rgba(30,58,138,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(30,58,138,0.6)] transition-all duration-500 group/btn rounded-full h-14 px-10 border border-white/10"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.location.href = service.href;
                                            }}
                                        >
                                            <span className="relative z-10">Explore</span>
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300 relative z-10" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Image Section */}
                                <div className="w-full md:w-3/5 h-[350px] md:h-full relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                                        alt={service.title}
                                    />
                                    {/* Subtle shadow on the left edge of the image to blend with content */}
                                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent hidden md:block" />
                                    {/* Inner ring for a premium feel */}
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
