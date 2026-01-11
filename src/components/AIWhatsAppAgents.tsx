"use client";

import { MessageSquare, Mic, Image as ImageIcon, CreditCard, Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingFlow from "./PricingFlow";

export default function AIWhatsAppAgents() {
    const demos = [
        {
            icon: Mic,
            title: "Voice Note Analysis",
            description: "AI instantly transcribes and understands voice notes to respond accurately.",
            gradient: "from-green-400 to-emerald-500"
        },
        {
            icon: ImageIcon,
            title: "Image Recognition",
            description: "Send product images and let AI identify issues or answer queries.",
            gradient: "from-emerald-400 to-teal-500"
        },
        {
            icon: CreditCard,
            title: "Payment Flows",
            description: "Collect payments securely within the chat interface.",
            gradient: "from-teal-400 to-cyan-500",
            badge: "COMING SOON"
        },
        {
            icon: Shield,
            title: "KYC Automation",
            description: "Automate document collection and verification.",
            gradient: "from-green-500 to-emerald-600"
        }
    ];

    return (
        <section id="whatsapp" className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                {/* Floating WhatsApp Icons */}
                <div className="absolute top-20 left-10 w-16 h-16 animate-float">
                    <MessageSquare className="w-full h-full text-green-500/30" />
                </div>
                <div className="absolute bottom-32 right-20 w-20 h-20 animate-float" style={{ animationDelay: '1s' }}>
                    <MessageSquare className="w-full h-full text-emerald-500/30" />
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium animate-fade-in border border-green-200">
                        <MessageSquare className="w-4 h-4" />
                        AI WhatsApp Agents
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-nohemi animate-slide-up">
                        Automate Support on <br />
                        <span className="text-green-600 animate-gradient-text">WhatsApp</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Increase conversions with AI agents that reply instantly to text, voice notes, and images.
                        Seamlessly integrated with your CRM.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left: Feature Cards */}
                    <div className="space-y-6">
                        {demos.map((demo, idx) => (
                            <div
                                key={idx}
                                className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${demo.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                                <div className="relative flex gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                                        <demo.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-bold text-lg text-slate-900">{demo.title}</h3>
                                            {demo.badge && (
                                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                                                    {demo.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">{demo.description}</p>
                                    </div>
                                </div>

                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Pricing Card */}
                    <div className="md:sticky md:top-24 h-fit">
                        <div className="p-8 rounded-3xl bg-white border-2 border-green-200 shadow-2xl relative overflow-hidden animate-scale-in" style={{ animationDelay: '0.4s' }}>
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-full"></div>

                            <div className="relative space-y-6">
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                        <Sparkles className="w-3 h-3" />
                                        Most Popular
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Start Automating Today</h3>
                                    <p className="text-sm text-slate-600">Fill in your details to get a custom quote based on your message volume.</p>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        "Auto-Collect Lead Data",
                                        "Analyses Product Images",
                                        "Listens to Voice Notes",
                                        "Updates CRM Records"
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group/feature">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center group-hover/feature:bg-green-200 transition-colors">
                                                <CheckCircle2 className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <PricingFlow
                                    serviceName="AI WhatsApp Agents"
                                    volumeLabel="Monthly Messages"
                                    volumeOptions={["<10K", "10K-50K", "50K-100K", "100K+"]}
                                />

                                <p className="text-xs text-center text-slate-500">
                                    Setup costs start at ₹25k
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
