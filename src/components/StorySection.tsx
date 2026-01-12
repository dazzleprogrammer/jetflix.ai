"use client";

import { AlertTriangle, Search, Zap, XCircle, Clock, DollarSign } from "lucide-react";

export default function StorySection() {
    return (
        <section className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Connecting Line (Vertical) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 hidden md:block border-r border-dashed border-blue-300/50"></div>

                {/* 1. The Problem: "Are you facing this issue?" */}
                <div className="max-w-5xl mx-auto mb-32 relative">
                    <div className="text-center mb-16 space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold uppercase tracking-wider animate-fade-in shadow-sm">
                            <AlertTriangle className="w-4 h-4" />
                            <span>The Reality Check</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-nohemi text-slate-900 leading-[1.1] animate-slide-up">
                            Is your business <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                                hitting a wall?
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {/* Pain Point 1 */}
                        <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <XCircle className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Missed Calls</h3>
                            <p className="text-slate-600 leading-relaxed">
                                60% of customers hang up if not answered instantly. Every missed call is lost revenue.
                            </p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-1 md:mt-12">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Clock className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Slow Scaling</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Hiring and training takes months. You can't scale your support team overnight.
                            </p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1 md:mt-24">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <DollarSign className="w-7 h-7 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">High Costs</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Production costs for videos and marketing are skyrocketing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. The Search */}
                <div className="max-w-4xl mx-auto mb-32 text-center relative z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 animate-pulse-slow" />

                    <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-10 border-4 border-blue-50 relative animate-bounce">
                        <Search className="w-8 h-8 text-blue-600" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-nohemi text-slate-900 mb-8 animate-slide-up">
                        Are you looking for a way to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Clone Your Workforce?</span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Imagine a world where your best employee never sleeps, never misses a call, and speaks every language fluently.
                    </p>
                </div>

                {/* 3. The Solution */}
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-12 flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-500/30 hover:rotate-0 transition-all duration-500">
                        <Zap className="w-10 h-10 text-white fill-white" />
                    </div>

                    <h2 className="text-4xl md:text-7xl font-bold font-nohemi text-slate-900 mb-8">
                        We Have All The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600">AI Solutions</span> For You
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
                        From handling calls to generating viral video content, we build custom AI employees tailored to your specific needs.
                    </p>
                </div>

            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-100/50 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000" />
        </section>
    );
}
