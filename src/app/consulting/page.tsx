"use client";

import ConsultingSection from "@/components/ConsultingSection";

export default function ConsultingPage() {
    return (
        <div className="min-h-screen">
            <div className="pt-20">
                <ConsultingSection />
            </div>
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-nohemi">
                        Why Choose Our AI Consulting?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold mb-3">Expertise</h3>
                            <p className="text-slate-600">Our team has built and deployed AI solutions for top companies and startups worldwide.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold mb-3">Customization</h3>
                            <p className="text-slate-600">We don't believe in one-size-fits-all. Every AI strategy is tailored to your specific business needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
