"use client";

import { useState } from "react";
import { Plus, Globe, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is Explaino?",
        answer: "Explaino is a powerful AI tool that helps teams create high-quality product videos, documentation, and training content 20x faster using automation and voiceover synchronization.",
    },
    {
        question: "How does Explaino keep my data secure?",
        answer: "We take data security seriously. Explaino uses industry-standard encryption for data at rest and in transit. We are SOC 2 compliant and ensure your proprietary data never leaks into public training models.",
    },
    {
        question: "What export formats does Explaino support?",
        answer: "You can export your videos in high-quality MP4 formats, optimized for web, YouTube, or mobile. We also support direct publishing to various CMS and LMS platforms.",
    },
    {
        question: "Can I collaborate with my team on Explaino?",
        answer: "Yes! Our team plan allows you to invite members, share projects, and collaborate in real-time on scripts, visuals, and brand assets.",
    },
    {
        question: "Where can I see more customer reviews of Explaino?",
        answer: "Check out our testimonials section or visit major review platforms like G2 and Capterra to see why thousands of teams love Explaino.",
    },
    {
        question: "Can I try Explaino before purchasing?",
        answer: "Absolutely! We offer a free trial that lets you explore all the core features and create your first few videos without any commitment.",
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 priority email support for all users, plus dedicated success managers and onboarding sessions for our enterprise customers.",
    },
    {
        question: "Who is Explaino for?",
        answer: "Explaino is designed for Product Managers, Customer Success teams, Marketing professionals, and anyone who needs to create professional-grade video content efficiently.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 bg-background relative overflow-hidden">
            {/* Top transition mask to eliminate sharp ends */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20" />

            {/* Decorative Atmosphere */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full animate-mist-flow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full animate-mist-flow" style={{ animationDelay: '-3s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Heading (Sticky) */}
                    <div className="lg:w-2/5 lg:sticky lg:top-40 animate-slide-up">
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-6 px-1">
                            <HelpCircle className="w-5 h-5" />
                            Support Center
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] tracking-tighter mb-8 px-1">
                            <span className="block animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                Got <span className="text-blue-600 animate-gradient-text">Questions?</span>
                            </span>
                            <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                We got Answers.
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-sm leading-relaxed px-1">
                            Everything you need to know about Explaino. Can't find what you're looking for? Reach out to our team.
                        </p>
                    </div>

                    {/* Right Column: Glassmorphic Tiles (Scrollable) */}
                    <div className="lg:w-3/5 space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group rounded-[2rem] border transition-all duration-500 overflow-hidden",
                                    openIndex === index
                                        ? "bg-white border-blue-200 shadow-2xl shadow-blue-500/10 -translate-y-1"
                                        : "bg-white/50 border-border/50 hover:border-blue-200 hover:bg-white"
                                )}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center gap-6 p-8 text-left transition-opacity"
                                >
                                    <div className={cn(
                                        "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                                        openIndex === index
                                            ? "bg-blue-600 text-white rotate-45 shadow-lg shadow-blue-500/30"
                                            : "bg-slate-50 text-blue-500 group-hover:bg-blue-50"
                                    )}>
                                        <Plus className="w-6 h-6" />
                                    </div>
                                    <span className={cn(
                                        "text-xl md:text-2xl font-bold tracking-tight transition-colors",
                                        openIndex === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        {faq.question}
                                    </span>
                                </button>

                                <div className={cn(
                                    "overflow-hidden transition-all duration-500 ease-in-out px-8",
                                    openIndex === index ? "max-h-[500px] opacity-100 pb-10 mt-[-10px]" : "max-h-0 opacity-0"
                                )}>
                                    <div className="pl-18 border-l-2 border-blue-100/50">
                                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl ml-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom mask for flow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

export default FAQSection;
