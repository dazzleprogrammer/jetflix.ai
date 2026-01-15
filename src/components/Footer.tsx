import Link from "next/link";
import { Twitter, Linkedin, Youtube, Github, Instagram, Sparkles, Zap, MessageSquare, Bot, Cloud, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground pt-24 pb-16 overflow-hidden">
      {/* Wave Separator - Multicolored waves for a premium transition */}
      <div className="absolute -top-[98px] left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* Layer 1: Light Blue wave */}
          <path
            className="animate-wave-slow fill-blue-100 opacity-60"
            d="M0,120V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120Z"
          />
          {/* Layer 2: Light Pink wave */}
          <path
            className="animate-wave fill-rose-100 opacity-50"
            style={{ animationDelay: '-1s', animationDuration: '6s' }}
            d="M0,120V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,9.41,104.73,20.18,49.4,15.74,101.37,20.85,153.75,12.62,52.08-8.19,98.83-24.53,150.75-30.47,44.76-5.12,93,3.26,135,18.92,32.91,12.3,61.39,31,90.62,49.2V120Z"
          />
          {/* Layer 3: Light Purple wave (Bottom-most for base blend) */}
          <path
            className="animate-wave-fast fill-indigo-100"
            style={{ animationDelay: '-3s', animationDuration: '4s' }}
            d="M0,120V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,82.93,36.2,167,45.34,250.7,23.35,75.93-20,157.47-48.92,180.3-125.13V120Z"
          />
        </svg>
      </div>

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
        <div className="flex flex-col items-center mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-blue-100 shadow-sm animate-fade-in">
            <a
              href="mailto:helpdesk@jetflix.ai"
              className="flex items-center gap-2.5 text-blue-700 hover:text-blue-900 transition-all duration-300 font-semibold group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm md:text-base">helpdesk@jetflix.ai</span>
            </a>

            <div className="hidden md:block w-px h-6 bg-blue-200/50" />

            <div className="flex items-center gap-6">
              <a
                href="tel:+919833219195"
                className="flex items-center gap-2.5 text-blue-700 hover:text-blue-900 transition-all duration-300 font-semibold group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm md:text-base">+91 98332 19195</span>
              </a>

              <a
                href="https://wa.me/919833219195"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-600 hover:text-emerald-700 transition-all duration-300 font-semibold group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-sm md:text-base">WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-slate-800 text-xl md:text-2xl font-black tracking-tight font-nohemi drop-shadow-sm text-center">
            AI Expert For Your Business <span className="inline-block animate-bounce-slow">🚀</span><span className="inline-block animate-pulse">✨</span>
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
