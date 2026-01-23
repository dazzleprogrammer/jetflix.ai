"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Loader2, ArrowRight } from "lucide-react";

interface PricingTier {
    name: string;
    price: string;
    details: string;
}

interface PricingFlowProps {
    serviceName: string;
    setupFee?: string;
    redirectPath?: string;
    trigger?: React.ReactNode;
    tiers?: PricingTier[];
    // Keeping these for backward compatibility
    volumeLabel?: string;
    volumeOptions?: string[];
}

type Step = "idle" | "form" | "brochure" | "interested";

export default function PricingFlow({
    serviceName,
    setupFee = "INR 25,000",
    redirectPath,
    trigger,
    tiers
}: PricingFlowProps) {
    const router = useRouter();
    const [step, setStep] = useState<Step>("idle");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        businessName: "",
        email: "",
        phone: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep("brochure");
        }, 1500);
    };

    const handleInterested = () => {
        setStep("interested");
    };

    const resetFlow = () => {
        setStep("idle");
    };

    // Default tiers if none provided
    const displayTiers = tiers || [
        { name: "Starter", price: "Flexible", details: "Perfect for trials" },
        { name: "Standard", price: "Volume-Based", details: "Most popular choice" },
        { name: "Pro/Enterprise", price: "Custom", details: "Scale your production" }
    ];

    return (
        <div className="w-full">
            <Dialog
                open={step !== "idle"}
                onOpenChange={(open) => {
                    if (open) {
                        setStep("form");
                    } else {
                        resetFlow();
                    }
                }}
            >
                <DialogTrigger asChild>
                    {trigger ? trigger : (
                        <Button
                            size="lg"
                            className="w-full text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 text-white shadow-[0_10px_30px_-5px_rgba(30,58,138,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(30,58,138,0.5)] transition-all duration-500 group/btn rounded-[2rem] h-14 border border-white/10"
                            onClick={() => {
                                if (redirectPath) {
                                    router.push(redirectPath);
                                }
                            }}
                        >
                            <span className="relative z-10">Request Pricing</span>
                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300 relative z-10" />
                        </Button>
                    )}
                </DialogTrigger>
                <DialogContent className="w-[92vw] sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-0 border-none bg-white rounded-[2.5rem]">
                    <DialogHeader className="px-6 pt-6 pb-4">
                        <DialogTitle className="text-xl font-bold text-center">
                            {step === "form" && `Get Pricing for ${serviceName}`}
                            {step === "brochure" && `${serviceName} Pricing`}
                            {step === "interested" && "Schedule a Demo"}
                        </DialogTitle>
                    </DialogHeader>

                    {step === "form" && (
                        <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6">
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="name" className="text-xs font-semibold text-slate-500">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your full name"
                                        required
                                        className="h-11 text-sm bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="businessName" className="text-xs font-semibold text-slate-500">Business Name</Label>
                                    <Input
                                        id="businessName"
                                        placeholder="Enter your company name"
                                        required
                                        className="h-11 text-sm bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-xs font-semibold text-slate-500">Work Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        required
                                        className="h-11 text-sm bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="phone" className="text-xs font-semibold text-slate-500">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        required
                                        className="h-11 text-sm bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Preparing Brochure...
                                    </>
                                ) : (
                                    "Show Me Pricing"
                                )}
                            </Button>
                        </form>
                    )}

                    {step === "brochure" && (
                        <div className="space-y-6 px-6 pb-6 animate-in slide-in-from-right-10 fade-in duration-300">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-3">
                                <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wider text-center">Available Pricing Tiers</h4>
                                <div className="grid gap-4">
                                    {displayTiers.map((tier, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white border border-blue-100 shadow-sm">
                                            <div className="space-y-0.5">
                                                <div className="font-bold text-slate-900">{tier.name}</div>
                                                <div className="text-[10px] text-slate-500 font-medium">{tier.details}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-black text-blue-600">{tier.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-blue-500 font-medium text-center pt-2 italic">Custom plans tailored for {formData.businessName}</p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-900 text-sm px-1">Implementation Details</h4>
                                <div className="grid gap-3">
                                    {[
                                        { label: "Setup Fee", value: `from ${setupFee}` },
                                        { label: "Production", value: "AI-Powered Automation" },
                                        { label: "Support", value: "24/7 Priority Support" },
                                        { label: "Delivery", value: "Within 48 Hours" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-3 rounded-xl border border-slate-100 flex justify-between items-center bg-slate-50/50">
                                            <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                                            <span className="font-bold text-slate-900 text-sm">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <Button variant="outline" className="flex-1 h-11 text-sm font-bold border-2 rounded-xl" onClick={() => setStep("form")}>
                                    Back
                                </Button>
                                <Button className="flex-1 bg-green-600 hover:bg-green-700 h-11 text-sm font-bold rounded-xl" onClick={handleInterested}>
                                    Interested
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === "interested" && (
                        <div className="text-center space-y-6 px-6 pb-6 animate-in zoom-in-95 duration-300">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    Thanks {formData.name}, we've received your interest for {formData.businessName}. Let's schedule a deep-dive call.
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl shadow-lg transition-all"
                                onClick={() => window.open('https://calendly.com', '_blank')}
                            >
                                Schedule Demo Call
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
