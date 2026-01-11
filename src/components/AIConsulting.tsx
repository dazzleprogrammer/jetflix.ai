"use client";

import { Rocket, Server, Database, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ icon: Icon, title, description }: any) => (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border hover:border-primary/50 transition-colors group">
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
            <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            {description}
        </p>
        <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
    </div>
);

export default function AIConsulting() {
    return (
        <section id="consulting" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-nohemi">
                        AI Consulting & Engineering
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We don't just build agents; we architect large-scale AI software solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        icon={Rocket}
                        title="Startup Consulting"
                        description="From Idea to Production. We help you validate, build, and scale your AI product with best practices."
                    />
                    <ServiceCard
                        icon={Server}
                        title="Cloud Architecture"
                        description="Expert AWS & Database Architecture designed for high-availability and massive scale."
                    />
                    <ServiceCard
                        icon={BrainCircuit}
                        title="LLM & RAG Integraions"
                        description="Build your company's in-house ChatGPT with Retrieval Augmented Generation (RAG) on your data."
                    />
                    <ServiceCard
                        icon={Database}
                        title="Large Scale Apps"
                        description="Experience in building complex, high-performance web applications and enterprise software."
                    />
                </div>
            </div>
        </section>
    );
}
