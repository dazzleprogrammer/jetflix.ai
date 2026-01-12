import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIPhoneAgents from "@/components/AIPhoneAgents";
import { SparklesCore } from "@/components/ui/sparkles";
import { MouseTrace } from "@/components/ui/mouse-trace";

export default function PhoneAgentsPage() {
    return (
        <div className="min-h-screen bg-background relative selection:bg-primary/20">
            {/* Global Sparkles */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#3b82f6"
                    speed={0.5}
                />
            </div>

            <MouseTrace />

            <Navbar />
            <main className="relative z-10 pt-20">
                <AIPhoneAgents />
            </main>
            <Footer />
        </div>
    );
}
