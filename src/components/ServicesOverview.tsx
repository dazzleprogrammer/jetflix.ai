"use client";

import { ArrowRight } from "lucide-react";

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
            bgColor: "bg-blue-50/50",
            hoverBg: "hover:bg-blue-100/50",
            borderColor: "border-blue-100",
            bulletColor: "bg-blue-500",
            bulletShadow: "shadow-[0_0_8px_rgba(59,130,246,0.5)]"
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
            bgColor: "bg-emerald-50/50",
            hoverBg: "hover:bg-emerald-100/50",
            borderColor: "border-emerald-100",
            bulletColor: "bg-emerald-500",
            bulletShadow: "shadow-[0_0_8px_rgba(16,185,129,0.5)]"
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
            bgColor: "bg-purple-50/50",
            hoverBg: "hover:bg-purple-100/50",
            borderColor: "border-purple-100",
            bulletColor: "bg-purple-500",
            bulletShadow: "shadow-[0_0_8px_rgba(139,92,246,0.5)]"
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
            bgColor: "bg-orange-50/50",
            hoverBg: "hover:bg-orange-100/50",
            borderColor: "border-orange-100",
            bulletColor: "bg-orange-500",
            bulletShadow: "shadow-[0_0_8px_rgba(249,115,22,0.5)]"
        }
    ];

    return (
        <section className="py-24 bg-[#FAFAFB]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold font-nohemi text-slate-900 tracking-tight">
                        AI Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        World-class AI infrastructure built to scale your business operations and marketing.
                    </p>
                </div>

                {/* Grid Layout: 2 columns on laptop, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative h-auto md:aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden ${service.bgColor} border ${service.borderColor} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${service.hoverBg}`}
                        >
                            {/* Grid Background Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:30px_30px] opacity-100" />

                            <div className="relative h-full p-6 md:p-10 flex flex-col items-start text-left">
                                {/* Circular Image (Center Top) */}
                                <div className="self-center relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-700 mb-6 bg-white">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-500/5" />
                                </div>

                                {/* Logo / Badge (Left Aligned) */}
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 bg-white mb-3 shadow-sm">
                                    <span className="text-blue-600 font-black text-sm tracking-tighter">JETFLIX</span>
                                    <span className="text-amber-500 text-[9px] font-bold">.ai</span>
                                </div>

                                {/* Title (Left Aligned, Normal weight) */}
                                <h2 className="text-slate-900 text-xl md:text-3xl font-normal tracking-tight mb-3 w-full">
                                    {service.title}
                                </h2>

                                {/* Description (Left Aligned) */}
                                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mb-6 max-w-md">
                                    {service.description}
                                </p>

                                {/* Capabilities Box (Left Aligned content inside) */}
                                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-3 p-4 md:p-6 rounded-[1.25rem] md:rounded-[1.5rem] bg-white/80 border border-slate-100 backdrop-blur-md mb-6 shadow-sm">
                                    {service.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${service.bulletColor} ${service.bulletShadow}`} />
                                            <span className="text-[10px] md:text-xs font-bold text-slate-700">
                                                {bullet}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Explore Button (Center Aligned at bottom) */}
                                <div className="mt-auto w-full flex justify-center pb-2 md:pb-0">
                                    <button
                                        className="px-8 py-2.5 rounded-xl border border-slate-900 bg-slate-900 text-white font-bold text-xs tracking-wide transition-all duration-300 hover:bg-slate-800 hover:shadow-xl active:scale-95"
                                        onClick={() => window.location.href = service.href}
                                    >
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
