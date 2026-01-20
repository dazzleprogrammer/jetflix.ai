"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Loader2, ArrowRight } from "lucide-react";

interface PricingFlowProps {
    serviceName: string;
    volumeLabel: string;
    volumeOptions: string[];
    showVoiceType?: boolean;
    showTeamSize?: boolean;
    setupFee?: string;
    redirectPath?: string;
    trigger?: React.ReactNode;
}

type Step = "idle" | "form" | "brochure" | "interested";

export default function PricingFlow({
    serviceName,
    volumeLabel,
    volumeOptions,
    showVoiceType = false,
    showTeamSize = true,
    setupFee = "INR 25,000",
    redirectPath,
    trigger,
}: PricingFlowProps) {
    const router = useRouter();
    const [step, setStep] = useState<Step>("idle");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        industry: "",
        useCase: "",
        languages: "",
        voiceTypes: "",
        teamSize: "Less than 15",
        volume: volumeOptions[0],
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

    return (
        <div className="w-full">
            <Dialog open={step !== "idle"} onOpenChange={(open) => !open && resetFlow()}>
                <DialogTrigger asChild>
                    {trigger ? trigger : (
                        <Button
                            size="lg"
                            className="w-full text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 text-white shadow-[0_10px_30px_-5px_rgba(30,58,138,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(30,58,138,0.5)] transition-all duration-500 group/btn rounded-[2rem] h-14 border border-white/10"
                            onClick={() => {
                                if (redirectPath) {
                                    router.push(redirectPath);
                                } else {
                                    setStep("form");
                                }
                            }}
                        >
                            <span className="relative z-10">Request Pricing</span>
                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300 relative z-10" />
                        </Button>
                    )}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto p-0">
                    <DialogHeader className="px-6 pt-6 pb-4">
                        <DialogTitle className="text-xl font-bold text-center">
                            {step === "form" && `Get Pricing for ${serviceName}`}
                            {step === "brochure" && "Pricing Brochure"}
                            {step === "interested" && "Schedule a Demo"}
                        </DialogTitle>
                    </DialogHeader>

                    {step === "form" && (
                        <form onSubmit={handleSubmit} className="space-y-3 px-6 pb-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <Label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</Label>
                                    <Input
                                        id="name"
                                        required
                                        className="h-9 text-sm"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="businessName" className="text-xs font-medium text-muted-foreground">Business Name</Label>
                                    <Input
                                        id="businessName"
                                        required
                                        className="h-9 text-sm"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        className="h-9 text-sm"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="phone" className="text-xs font-medium text-muted-foreground">Phone</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        className="h-9 text-sm"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <Label htmlFor="industry" className="text-xs font-medium text-muted-foreground">Industry</Label>
                                    <Input
                                        id="industry"
                                        required
                                        className="h-9 text-sm"
                                        value={formData.industry}
                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="volume" className="text-xs font-medium text-muted-foreground">{volumeLabel}</Label>
                                    <Select
                                        value={formData.volume}
                                        onValueChange={(val) => setFormData({ ...formData, volume: val })}
                                    >
                                        <SelectTrigger className="h-9 text-sm">
                                            <SelectValue placeholder="Select volume" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {volumeOptions.map((opt) => (
                                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {showTeamSize && (
                                <div className="space-y-1.5">
                                    <Label htmlFor="teamSize" className="text-xs font-medium text-muted-foreground">Sales & Support Team Size</Label>
                                    <Select
                                        value={formData.teamSize}
                                        onValueChange={(val) => setFormData({ ...formData, teamSize: val })}
                                    >
                                        <SelectTrigger className="h-9 text-sm">
                                            <SelectValue placeholder="Select size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Less than 15">Less than 15</SelectItem>
                                            <SelectItem value="15–50">15–50</SelectItem>
                                            <SelectItem value="50–100">50–100</SelectItem>
                                            <SelectItem value="100+">100+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            <div className="space-y-1.5">
                                <Label htmlFor="useCase" className="text-xs font-medium text-muted-foreground">Use Case</Label>
                                <Input
                                    id="useCase"
                                    placeholder="e.g. Appointment Booking, Lead Qual..."
                                    required
                                    className="h-9 text-sm"
                                    value={formData.useCase}
                                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="languages" className="text-xs font-medium text-muted-foreground">Languages</Label>
                                <Input
                                    id="languages"
                                    placeholder="e.g. English, Hindi..."
                                    required
                                    className="h-9 text-sm"
                                    value={formData.languages}
                                    onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                                />
                            </div>

                            {showVoiceType && (
                                <div className="space-y-1.5">
                                    <Label htmlFor="voiceTypes" className="text-xs font-medium text-muted-foreground">Preferred Voice Types</Label>
                                    <Input
                                        id="voiceTypes"
                                        placeholder="e.g. Male Professional, Female Cheerful..."
                                        className="h-9 text-sm"
                                        value={formData.voiceTypes}
                                        onChange={(e) => setFormData({ ...formData, voiceTypes: e.target.value })}
                                    />
                                </div>
                            )}

                            <Button type="submit" className="w-full h-10 mt-4" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Getting Best Price...
                                    </>
                                ) : (
                                    "Show Me Pricing"
                                )}
                            </Button>
                        </form>
                    )}

                    {step === "brochure" && (
                        <div className="space-y-5 px-6 pb-6 animate-in slide-in-from-right-10 fade-in duration-300">
                            <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 text-center space-y-1.5">
                                <h4 className="font-semibold text-blue-900 text-base">Estimated Pricing Tier</h4>
                                <p className="text-2xl font-bold text-blue-600">{formData.volume}</p>
                                {showTeamSize && <p className="text-xs text-blue-500">Based on your team size of {formData.teamSize}</p>}
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold px-1 text-sm">Pricing Brochure Details</h4>
                                <div className="grid gap-2">
                                    <div className="p-2.5 rounded-lg border border-slate-100 flex justify-between items-center bg-slate-50">
                                        <span className="text-xs font-medium text-slate-600">Setup Fee</span>
                                        <span className="font-bold text-slate-900 text-sm">from {setupFee}</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg border border-slate-100 flex justify-between items-center bg-slate-50">
                                        <span className="text-xs font-medium text-slate-600">Rate Card</span>
                                        <span className="font-bold text-slate-900 text-sm">Dynamic/Volume-based</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg border border-slate-100 flex justify-between items-center bg-slate-50">
                                        <span className="text-xs font-medium text-slate-600">Support</span>
                                        <span className="font-bold text-slate-900 text-sm">24/7 Priority</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 flex gap-2.5">
                                <Button variant="outline" className="flex-1 h-9 text-sm" onClick={() => setStep("form")}>
                                    Back
                                </Button>
                                <Button className="flex-1 bg-green-600 hover:bg-green-700 h-9 text-sm" onClick={handleInterested}>
                                    Interested
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === "interested" && (
                        <div className="text-center space-y-6 px-6 pb-6 animate-in zoom-in-95 duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>

                            <div className="space-y-1.5">
                                <h3 className="text-xl font-bold text-slate-900">Great Selection!</h3>
                                <p className="text-slate-600 text-sm max-w-xs mx-auto">
                                    We have received your interest. Let's schedule a deep-dive demo.
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="w-full max-w-sm mx-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all h-10 text-sm"
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
