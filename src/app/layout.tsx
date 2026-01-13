import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jetflix.ai",
  description: "jetflix.ai - Your AI Service Platform",
  authors: [{ name: "jetflix.ai Team" }],
  openGraph: {
    title: "jetflix.ai",
    description: "jetflix.ai - Your AI Service Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SparklesCore } from "@/components/ui/sparkles";
import { MouseTrace } from "@/components/ui/mouse-trace";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen flex flex-col`}>
        <Providers>
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
          <div className="relative flex-1">
            <FloatingIcons />
            <main className="relative z-10">
              {children}
            </main>
          </div>
          <Footer />
          <WhatsAppFAB />
        </Providers>
      </body>
    </html>
  );
}
