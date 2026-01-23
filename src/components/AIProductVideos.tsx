"use client";

import { Video, ShoppingBag, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useRef } from "react";
import PricingFlow from "./PricingFlow";
import { Button } from "@/components/ui/button";

const ShowcaseCard = ({
    title,
    category,
    image,
    video,
    bullets
}: {
    title: string,
    category: string,
    image?: string,
    video?: string,
    bullets?: string[]
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                {video ? (
                    <video
                        ref={videoRef}
                        src={video}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">{category}</p>
                    <h4 className="text-white font-bold text-xl leading-tight">{title}</h4>
                </div>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video className="w-4 h-4 text-white" />
                </div>
            </div>

            <div className="p-8 space-y-6">
                {bullets && (
                    <div className="grid grid-cols-1 gap-3">
                        {bullets.map((bullet, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                                <span className="text-sm font-semibold text-slate-600">{bullet}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default function AIProductVideos() {
    const videoVolumeOptions = [
        "4 videos / month",
        "8 videos / month",
        "12 videos / month",
        "16+ videos / month"
    ];

    return (
        <section id="product-videos" className="py-24 bg-[#FAFAFB] relative overflow-hidden">
            {/* Design Ornaments */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                {/* Hero section */}
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black uppercase tracking-[0.25em] animate-fade-in shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        Next-Gen Video Production
                    </div> */}
                    <h1 className="text-4xl md:text-7xl font-bold font-nohemi text-slate-900 leading-tight">
                        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Product Videos</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-lg md:text-2xl text-slate-700 font-medium leading-relaxed">
                            Turn product photos, audio, or basic inputs into high-impact marketing videos using AI — no camera, no studio, no human crew.
                        </p>
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                            Create glamorous showcase videos in multiple languages.
                        </p>
                    </div>
                </div>

                <div className="space-y-20">
                    {/* 🔹 Product Showcase Videos */}
                    <div className="space-y-12">
                        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>AI Product Showcase</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Product Showcase Videos</h3>
                                <p className="text-slate-500 font-medium">Perfect for E-commerce & Social Media</p>
                            </div>
                            <div className="hidden md:flex gap-2 text-xs font-bold text-slate-400">
                                <span>Instagram</span> • <span>Amazon</span> • <span>Flipkart</span>
                            </div>
                        </div> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                            <ShowcaseCard
                                title="Shoes Brand AI Ad"
                                category="Sports & Lifestyle"
                                video="https://cdn.vocallabs.ai/Blogs/7d25dd22-f056-4ede-96f0-423efdff6106.mp4"
                                bullets={["Cinematic Slow Motion", "Any Ethnicity Models", "Global Distribution Ready"]}
                            />

                            <ShowcaseCard
                                title="AI Model Jewellery Showcase"
                                category="Jewellery"
                                image="https://cdn.vocallabs.ai/Blogs/85b34331-e1d9-4554-8d67-9e413cfb7a1a.avif"
                                bullets={[
                                    "Fashion Walk for Clothing",
                                    "FMCG Product Promo Videos",
                                    "Multi-language support",
                                    "Ideal for Instagram & Ads"
                                ]}
                            />

                            <ShowcaseCard
                                title="Body Care AI Ad"
                                category="Skincare & FMCG"
                                video="https://cdn.vocallabs.ai/Blogs/a1e29c51-c5f5-4502-aea5-d4ff6b3db6bb.mp4"
                                bullets={["FMCG Product Promos", "Natural Lighting Simulation", "4K Ultra HD Export"]}
                            />
                        </div>

                        {/* Request Pricing Button - Standalone */}
                        <div className="flex justify-center pt-8">
                            <PricingFlow
                                serviceName="AI Product Videos"
                                tiers={[
                                    { name: "Trial Pack", price: "INR 15,000", details: "1 High-Impact AI Video" },
                                    { name: "Starter", price: "INR 45,000", details: "4 Videos / Month" },
                                    { name: "Growth", price: "INR 80,000", details: "8 Videos / Month" },
                                    { name: "Scale", price: "Custom", details: "16+ Videos / Month" }
                                ]}
                                trigger={
                                    <Button size="xl" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-12 h-14 rounded-2xl shadow-2xl shadow-slate-200 group/btn">
                                        Request Pricing
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
