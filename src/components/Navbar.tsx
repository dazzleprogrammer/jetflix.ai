"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, MessageSquare, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 backdrop-blur-xl border-b border-white/20 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <img
            src="https://cdn.vocallabs.ai/Blogs/c9254213-42c9-426e-997f-702060dccb03.png"
            alt="Jetflix.ai"
            className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-bold text-white/90 hover:text-white transition-all duration-300 py-2 relative">
              Services
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

            {/* Dropdown - Centered relative to button */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-max">
              <div className="p-2 bg-white border border-blue-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-[320px] relative">
                {/* Little Triangle Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-blue-100 rotate-45 transform" />

                <div className="flex flex-col gap-1 relative z-10">
                  <Link href="/phone-agents" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 group-hover/item:bg-blue-500/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Phone Agents</div>
                      <div className="text-xs text-slate-500">Inbound/Outbound Calls</div>
                    </div>
                  </Link>
                  <Link href="/whatsapp-agents" className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 group-hover/item:bg-emerald-500/20 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">WhatsApp Agents</div>
                      <div className="text-xs text-slate-500">Automated Chat Support</div>
                    </div>
                  </Link>
                  <Link href="/human-clones" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 group-hover/item:bg-purple-500/20 transition-colors">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Human Clones</div>
                      <div className="text-xs text-slate-500">Digital Twins & Avatars</div>
                    </div>
                  </Link>
                  <Link href="/product-videos" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-600 group-hover/item:bg-pink-500/20 transition-colors">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Product Videos</div>
                      <div className="text-xs text-slate-500">Viral Marketing Videos</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="#" className="text-sm font-bold text-white/90 hover:text-white transition-all duration-300 py-2 relative group/link">
            Career
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
          <Link href="#" className="text-sm font-bold text-white/90 hover:text-white transition-all duration-300 py-2 relative group/link">
            Contact Us
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[101] p-2 -mr-2 text-white/90 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full right-6 w-[280px] mt-4 bg-white/95 backdrop-blur-2xl border border-blue-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:hidden transition-all duration-300 ease-in-out origin-top-right z-[100] ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
          <div className="p-4 flex flex-col gap-6">
            {/* Mobile Services */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 px-2">AI Solutions</h3>
              <div className="grid gap-1">
                {[
                  { href: "/phone-agents", icon: Phone, label: "Phone Agents", color: "text-blue-600", bg: "bg-blue-50" },
                  { href: "/whatsapp-agents", icon: MessageSquare, label: "WhatsApp Agents", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { href: "/human-clones", icon: Users, label: "Human Clones", color: "text-purple-600", bg: "bg-purple-50" },
                  { href: "/product-videos", icon: Video, label: "Product Videos", color: "text-pink-600", bg: "bg-pink-50" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${item.bg} ${item.color} group-hover/item:scale-110 transition-transform`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-sm text-slate-900">{item.label}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-3 border-t border-slate-100 pt-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 px-2">Explore</h3>
              <div className="grid gap-1">
                <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
                  Career
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
