"use client";

import { ArrowRight, Sparkles, Check } from "lucide-react";
import Image from "next/image";

export default function ServicesOverview() {
    const services = [
        {
            title: "AI Phone Call Agents",
            description: "Smart Phone agents that can reach out or handle customer calls, reminders, and collect payments just like a real person.",
            bullets: [
                "24/7 Availability",
                "Upto 1 Lakh Calls/Day",
                "Speaks in 12+ languages",
                "Send Whatsapp/SMS"
            ],
            image: "https://cdn.vocallabs.ai/Blogs/85b3fde9-7f5a-40be-9c6a-3134d8da6dd6.png",
            href: "/phone-agents",
            accentColor: "blue"
        },
        {
            title: "AI WhatsApp Agents",
            description: "Increase conversions with AI agents that reply instantly, update your CRM automatically, and support customers in 12+ languages.",
            bullets: [
                "Auto-Collect Lead Data",
                "Listens to Voice Notes",
                "Updates CRM Records",
                "Analyses Product Image"
            ],
            image: "https://i.pinimg.com/1200x/42/49/34/424934965bff64129d45456311b6bc95.jpg",
            href: "/whatsapp-agents",
            accentColor: "emerald"
        },
        {
            title: "AI Human Clones",
            description: "A digital AI twin of you or non-existing human that speaks in your voice for marketing videos or customer support.",
            bullets: [
                "Text to Talking Video",
                "Instagram Reels",
                "Speaks in 12+ languages",
                "No Shoot required"
            ],
            image: "https://i.pinimg.com/1200x/c4/fa/ab/c4faab263802b0780ce242b0147a5a4d.jpg",
            href: "/human-clones",
            accentColor: "purple"
        },
        {
            title: "AI Product Videos",
            description: "A very high quality videos for TV Commercials using AI without camera, without studio, without human crew.",
            bullets: [
                "Image to Brand Ads",
                "TV/OTT Quality Videos",
                "Multi-Language",
                "No Shoot required"
            ],
            image: "https://cdn.vocallabs.ai/Blogs/85b34331-e1d9-4554-8d67-9e413cfb7a1a.avif",
            href: "/product-videos",
            accentColor: "orange"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold font-nohemi text-slate-900 tracking-tight">
                        AI Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        We don't just build AI systems, we architect revenue engines. We help brands scale faster and smarter with AI.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden hover:-translate-y-1 cursor-pointer"
                            onClick={() => window.location.href = service.href}
                        >
                            {/* Subtle colored glow on hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${service.accentColor}-500`} />

                            <div className="relative p-6 md:p-8 flex flex-col h-full">
                                {/* Image Section - Top & Wide */}
                                <div className="relative w-full h-48 md:h-56 mb-6 rounded-2xl overflow-hidden shadow-sm border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500 bg-slate-50">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                </div>

                                {/* Title & Badge */}
                                <div className="space-y-3 mb-4">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${service.accentColor}-50 text-${service.accentColor}-600 text-xs font-bold uppercase tracking-wider w-fit`}>
                                        <Sparkles className="w-3 h-3" />
                                        AI Power
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-nohemi text-slate-900 leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 text-base leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Feature Bullets */}
                                <div className="space-y-3 mb-8">
                                    {service.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full bg-${service.accentColor}-50 flex items-center justify-center shrink-0`}>
                                                <Check className={`w-3 h-3 text-${service.accentColor}-500`} />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">
                                                {bullet}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Action */}
                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group/btn">
                                    <span className={`text-sm font-semibold text-${service.accentColor}-600`}>
                                        Learn more
                                    </span>
                                    <div className={`w-10 h-10 rounded-full bg-${service.accentColor}-50 flex items-center justify-center group-hover/btn:bg-${service.accentColor}-500 transition-colors duration-300`}>
                                        <ArrowRight className={`w-5 h-5 text-${service.accentColor}-600 group-hover/btn:text-white transition-colors duration-300`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
