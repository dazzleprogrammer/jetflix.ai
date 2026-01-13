"use client";

import { Phone, MessageSquare, User, Video, Tv, Brain, Zap, Sparkles, Check, Mic, Image as ImageIcon, CreditCard, PlayCircle, Layers, Cloud, Rocket, Bot } from "lucide-react";
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative"
                        >
                            <div className={`relative p-6 md:p-8 rounded-3xl bg-white/90 backdrop-blur-2xl border-2 ${service.borderColor} transition-all duration-500 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50 group/card`}>

                                {/* Background Image Overlay on Hover */}
                                {/* Background Image Overlay on Hover */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-all duration-700 scale-110 group-hover/card:scale-100">
                                    <img src={service.image} className="w-full h-full object-cover" alt="" />
                                    {/* Dark Gradient Overlay for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/40 to-slate-950/80" />
                                </div>

                                <div className="relative z-10 transition-colors duration-500">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500`}>
                                            <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover/card:text-white transition-colors duration-500">{service.title}</h3>
                                    </div>

                                    <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base group-hover/card:text-slate-200 transition-colors duration-500">
                                        {service.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        {/* Capabilities */}
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 group-hover/card:text-white transition-colors duration-500">
                                                <Zap className="w-4 h-4 text-blue-600 group-hover/card:text-blue-400" /> Capabilities
                                            </h4>
                                            <ul className="space-y-3">
                                                {service.capabilities.map((cap, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 group-hover/card:text-slate-300 transition-colors duration-500">
                                                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                        {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Samples */}
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 group-hover/card:text-white transition-colors duration-500">
                                                <Sparkles className="w-4 h-4 text-purple-600 group-hover/card:text-purple-400" /> Samples & Showcase
                                            </h4>
                                            <div className="space-y-3">
                                                {service.samples.map((sample, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all cursor-pointer group/sample group-hover/card:bg-white/10 group-hover/card:border-white/20">
                                                        <sample.icon className="w-4 h-4 text-slate-400 group-hover/sample:text-blue-500 group-hover/card:text-blue-400 transition-colors" />
                                                        <span className="text-xs font-medium text-slate-700 group-hover/card:text-slate-200">{sample.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <PricingFlow {...service.pricingProps} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
