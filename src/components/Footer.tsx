import Link from "next/link";
import { Twitter, Linkedin, Youtube, Github, Instagram, Sparkles, Zap, MessageSquare, Bot, Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground py-16 overflow-hidden">
      {/* Animated Background Elements - Floating Icons */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Floating elements similar to CTA for continuity */}
        <div className="absolute top-10 left-10 w-12 h-12 animate-float">
          <Sparkles className="w-full h-full text-blue-500/40" />
        </div>
        <div className="absolute top-20 right-20 w-10 h-10 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-full h-full text-indigo-500/40" />
        </div>
        <div className="absolute bottom-10 left-1/4 w-8 h-8 animate-float" style={{ animationDelay: '2s' }}>
          <MessageSquare className="w-full h-full text-sky-500/40" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-14 h-14 animate-float" style={{ animationDelay: '1.5s' }}>
          <Cloud className="w-full h-full text-blue-600/30" />
        </div>
        <div className="absolute bottom-20 right-10 w-12 h-12 animate-float" style={{ animationDelay: '0.5s' }}>
          <Bot className="w-full h-full text-indigo-600/30" />
        </div>

        {/* Gradient Orbs for depth */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top Section - Email & Tagline */}
        <div className="text-center mb-10 space-y-4">
          <a
            href="mailto:contact@jetflix.ai"
            className="text-blue-700 hover:text-blue-900 transition-colors text-sm md:text-base font-semibold inline-block"
          >
            contact@jetflix.ai
          </a>
          <p className="text-slate-800 text-lg md:text-xl font-bold tracking-tight">
            Automate your business with AI 🚀✨
          </p>
        </div>

        {/* Bottom Section - Copyright, Social, Made with */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          {/* Copyright */}
          <p className="text-slate-600 text-xs md:text-sm font-medium">
            © {new Date().getFullYear()} Jetflix.ai. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Youtube, href: "#" },
              { Icon: Github, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-blue-600 hover:scale-110 flex items-center justify-center transition-all duration-300 group border border-blue-200 shadow-sm hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <p className="text-slate-600 text-xs md:text-sm font-medium">
            Made with ❤️ for innovators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
