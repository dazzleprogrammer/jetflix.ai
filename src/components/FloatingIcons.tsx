"use client";

import { Brain, Bot, Zap, MessageSquare, Video, Phone, Code, Sparkles, Cloud, Cpu, Globe, MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingIcons() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const icons = [
        { Icon: Brain, color: "text-blue-400/20", size: "w-16 h-16", top: "5%", left: "5%", delay: "0s", duration: "12s" },
        { Icon: Bot, color: "text-purple-400/20", size: "w-12 h-12", top: "15%", right: "10%", delay: "2s", duration: "14s" },
        { Icon: Zap, color: "text-yellow-400/20", size: "w-10 h-10", top: "25%", left: "20%", delay: "1s", duration: "10s" },
        { Icon: MessageSquare, color: "text-emerald-400/20", size: "w-14 h-14", top: "35%", right: "15%", delay: "3s", duration: "16s" },
        { Icon: Video, color: "text-pink-400/20", size: "w-12 h-12", top: "45%", left: "10%", delay: "4s", duration: "13s" },
        { Icon: Phone, color: "text-indigo-400/20", size: "w-10 h-10", top: "55%", right: "8%", delay: "1.5s", duration: "15s" },
        { Icon: Code, color: "text-cyan-400/20", size: "w-16 h-16", top: "65%", left: "25%", delay: "2.5s", duration: "18s" },
        { Icon: Sparkles, color: "text-amber-400/20", size: "w-8 h-8", top: "75%", right: "20%", delay: "0.5s", duration: "9s" },
        { Icon: Cloud, color: "text-sky-400/20", size: "w-20 h-20", top: "85%", left: "15%", delay: "3.5s", duration: "20s" },
        { Icon: Cpu, color: "text-red-400/10", size: "w-24 h-24", top: "95%", right: "10%", delay: "1s", duration: "25s" },
        { Icon: Globe, color: "text-blue-500/10", size: "w-20 h-20", top: "40%", left: "55%", delay: "4.5s", duration: "22s" },
        { Icon: Zap, color: "text-blue-300/10", size: "w-32 h-32", top: "10%", left: "45%", delay: "5s", duration: "30s" },
        { Icon: MousePointer2, color: "text-indigo-400/10", size: "w-20 h-20", top: "70%", right: "45%", delay: "6s", duration: "28s" },
        { Icon: Code, color: "text-purple-500/10", size: "w-24 h-24", top: "20%", left: "75%", delay: "2s", duration: "24s" },
    ];

    const clouds = [
        { color: "bg-blue-400/5", size: "w-[600px] h-[600px]", top: "10%", left: "-10%", delay: "0s", duration: "25s" },
        { color: "bg-indigo-400/5", size: "w-[800px] h-[800px]", top: "40%", right: "-15%", delay: "2s", duration: "30s" },
        { color: "bg-sky-400/5", size: "w-[700px] h-[700px]", top: "70%", left: "10%", delay: "4s", duration: "28s" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className={`absolute animate-float ${item.color} group-hover:scale-110 transition-transform duration-1000`}
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        animationDelay: item.delay,
                        animationDuration: item.duration,
                    }}
                >
                    <item.Icon className={`${item.size} opacity-40`} />
                </div>
            ))}

            {/* Cloudy Gradient Orbs */}
            {clouds.map((cloud, index) => (
                <div
                    key={`cloud-${index}`}
                    className={`absolute rounded-full blur-[120px] animate-float ${cloud.color} ${cloud.size}`}
                    style={{
                        top: cloud.top,
                        left: cloud.left,
                        right: cloud.right,
                        animationDelay: cloud.delay,
                        animationDuration: cloud.duration,
                    }}
                />
            ))}
        </div>
    );
}
