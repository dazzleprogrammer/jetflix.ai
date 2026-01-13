"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppFAB() {
    return (
        <div className="fixed bottom-8 right-8 z-[100] animate-bounce-subtle">
            <Button
                size="xl"
                className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-400 text-white shadow-[0_10px_40px_rgba(22,163,74,0.4)] hover:shadow-[0_20px_50px_rgba(22,163,74,0.6)] hover:scale-110 transition-all duration-500 group border-none p-0 flex items-center justify-center"
                onClick={() => window.open('https://wa.me/919833219195?text=hey%20i%20want%20to%20know%20more%20about%20your%20services!', '_blank')}
            >
                <div className="relative">
                    <MessageSquare className="w-8 h-8 fill-white/20 transition-transform group-hover:rotate-12" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                </div>

                {/* Tooltip on hover */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900/90 text-white text-sm font-bold rounded-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                    Chat with an expert! 🤖
                </div>
            </Button>
        </div>
    );
}
