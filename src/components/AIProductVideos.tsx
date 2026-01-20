"use client";

import { Video, Shirt, ShoppingBag, Sparkles } from "lucide-react";
import PricingFlow from "./PricingFlow";
import { useEffect, useRef } from "react";

const VideoShowcase = ({ icon: Icon, title, category }: any) => (
    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-border">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 group-hover:scale-105 transition-transform duration-500">
            <Icon className="w-12 h-12 text-muted-foreground/30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">{category}</p>
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Video className="w-4 h-4 text-white" />
        </div>
    </div>
);

export default function AIProductVideos() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRefs.current.forEach(video => {
                            video?.play().catch(err => console.log("Video play interrupted:", err));
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const videoVolumeOptions = [
        "4 videos/month",
        "8 videos/month",
        "12 videos/month",
        "16+ videos/month"
    ];

    return (
        <section ref={sectionRef} id="product-videos" className="pb-16 md:pb-24 pt-0 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium">
                        <Video className="w-4 h-4" />
                        <span>AI Product Videos</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-nohemi">
                        Turn Photos into <br />
                        <span className="text-orange-600">Viral Videos</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Convert your product photos into glamorous marketing videos using AI Models.
                        Showcase jewellery, clothing, and FMCG products without expensive shoots.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                    {/* Shoes Brand AI Ad - Video 1 */}
                    <div className="group relative aspect-square rounded-2xl overflow-hidden bg-transparent border border-white/20 shadow-xl">
                        <video
                            ref={el => { if (el) videoRefs.current[0] = el; }}
                            src="https://cdn.vocallabs.ai/Blogs/7d25dd22-f056-4ede-96f0-423efdff6106.mp4"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                            <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">Social Media Ad</p>
                            <h3 className="text-xl font-bold">Shoes Brand AI Ad</h3>
                        </div>
                        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md">
                            <Video className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    {/* Body Care AI Ad - Video 2 */}
                    <div className="group relative aspect-square rounded-2xl overflow-hidden bg-transparent border border-white/20 shadow-xl">
                        <video
                            ref={el => { if (el) videoRefs.current[1] = el; }}
                            src="https://cdn.vocallabs.ai/Blogs/a1e29c51-c5f5-4502-aea5-d4ff6b3db6bb.mp4"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                            <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">Skincare</p>
                            <h3 className="text-xl font-bold">Body Care AI Ad</h3>
                        </div>
                        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md">
                            <Video className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="p-6 md:p-8 rounded-[2rem] bg-background border border-border shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-10">
                        <div className="flex-1 space-y-4 text-left">
                            <h3 className="text-2xl font-bold">Start Creating Content</h3>
                            <p className="text-muted-foreground">
                                Get AI-generated product videos at scale. Perfect for e-commerce, social media, and advertising.
                            </p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2">✓ No studio or crew needed</li>
                                <li className="flex items-center gap-2">✓ Models in any ethnicity/age</li>
                                <li className="flex items-center gap-2">✓ 4K Ultra HD Output</li>
                            </ul>
                        </div>

                        <div className="shrink-0">
                            <PricingFlow
                                serviceName="AI Product Videos"
                                volumeLabel="Monthly Video Volume"
                                volumeOptions={videoVolumeOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
