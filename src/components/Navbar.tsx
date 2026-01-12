"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, MessageSquare, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Jetflix.ai
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
              Services
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown - Centered relative to button */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-max">
              <div className="p-2 bg-background border border-border/50 rounded-xl shadow-xl w-[320px] backdrop-blur-3xl relative">
                {/* Little Triangle Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-background border-t border-l border-border/50 rotate-45 transform" />

                <div className="flex flex-col gap-1 relative z-10 bg-background/50 rounded-lg">
                  <Link href="/phone-agents" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-100 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Phone Agents</div>
                      <div className="text-xs text-muted-foreground">Inbound/Outbound Calls</div>
                    </div>
                  </Link>
                  <Link href="/whatsapp-agents" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-100 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">WhatsApp Agents</div>
                      <div className="text-xs text-muted-foreground">Automated Chat Support</div>
                    </div>
                  </Link>
                  <Link href="/human-clones" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 group-hover/item:bg-purple-100 transition-colors">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Human Clones</div>
                      <div className="text-xs text-muted-foreground">Digital Twins & Avatars</div>
                    </div>
                  </Link>
                  <Link href="/product-videos" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group/item">
                    <div className="p-2.5 rounded-lg bg-pink-50 text-pink-600 group-hover/item:bg-pink-100 transition-colors">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Product Videos</div>
                      <div className="text-xs text-muted-foreground">Viral Marketing Videos</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Career
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[101] p-2 -mr-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white dark:bg-slate-950 z-[100] md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="container mx-auto px-6 pt-24 pb-10 flex flex-col gap-8 h-full overflow-y-auto">
            {/* Mobile Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Services</h3>
              <div className="grid gap-3">
                <Link href="/phone-agents" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="p-2.5 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-foreground">Phone Agents</div>
                </Link>
                <Link href="/whatsapp-agents" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-foreground">WhatsApp Agents</div>
                </Link>
                <Link href="/human-clones" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="p-2.5 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-foreground">Human Clones</div>
                </Link>
                <Link href="/product-videos" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="p-2.5 rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-foreground">Product Videos</div>
                </Link>
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Company</h3>
              <Link href="#" className="block text-lg font-bold text-foreground hover:text-primary transition-colors px-2" onClick={() => setIsMobileMenuOpen(false)}>
                Career
              </Link>
              <Link href="#" className="block text-lg font-bold text-foreground hover:text-primary transition-colors px-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
