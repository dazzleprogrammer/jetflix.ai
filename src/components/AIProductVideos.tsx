"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
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
    const [showControls, setShowControls] = useState(false);

    return (
        <div className="relative group min-w-[300px] md:min-w-[340px] snap-center">
            {/* Card Container */}
            <div className="relative p-2 bg-white/20 dark:bg-slate-900/20 backdrop-blur-md rounded-3xl border border-white/20 dark:border-slate-800 shadow-xl transition-all duration-500 hover:shadow-purple-500/10">
                {/* Video Content */}
                <div
                    className="relative overflow-hidden rounded-[1.5rem] bg-slate-950 group/video"
                    style={{ aspectRatio: '1/1' }}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                >
                    {video ? (
                        <video
                            ref={videoRef}
                            src={video}
                            className="w-full h-full object-contain bg-black"
                            loop
                            playsInline
                            controls={showControls}
                        />
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                    )}
                </div>

                {/* Text Content Below */}
                <div className="mt-6 text-center space-y-2 px-2 pb-2">
                    <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold bg-slate-900/50 inline-block px-3 py-1 rounded-full">{category}</p>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-nohemi tracking-tight leading-tight">{title}</h3>
                </div>
            </div>

            {/* Bullets Section */}
            {bullets && (
                <div className="mt-4 px-4 space-y-2">
                    {bullets.map((bullet, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                            <span>{bullet}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function AIProductVideos() {


    return (
        <section id="product-videos" className="py-6 md:py-8 bg-[#FAFAFB] relative overflow-hidden">
            {/* Design Ornaments */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-1">
                {/* Hero section */}
                <div className="max-w-4xl mx-auto text-center mb-2 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold font-nohemi text-slate-900 leading-tight">
                        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Product Videos</span>
                    </h1>
                    <div className="space-y-2">
                        <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                            Turn product photos, audio, or basic inputs into high-impact marketing videos using AI — no camera, no studio, no human crew.
                        </p>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Create glamorous showcase videos in multiple languages.
                        </p>
                    </div>
                </div>

                <div className="space-y-10">
                    {/* 🔹 Product Showcase Videos */}
                    <div className="space-y-8">
                        {/* Grid Layout - No Slider */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
