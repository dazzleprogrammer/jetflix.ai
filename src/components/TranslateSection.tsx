"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play, FileText, Globe, Check } from "lucide-react";

interface Language {
  id: string;
  name: string;
  flag: string;
  greeting: string;
  videoTitle: string;
  docTitle: string;
  docContent: string;
  buttonText: string;
}

const languages: Language[] = [
  {
    id: "en",
    name: "English",
    flag: "🇺🇸",
    greeting: "Hello.",
    videoTitle: "How to Book an Airbnb",
    docTitle: "Booking Guide",
    docContent: "Follow these simple steps to find and book your perfect stay.",
    buttonText: "Reserve Now",
  },
  {
    id: "es",
    name: "Spanish",
    flag: "🇪🇸",
    greeting: "Hola.",
    videoTitle: "Cómo reservar en Airbnb",
    docTitle: "Guía de Reserva",
    docContent: "Siga estos sencillos pasos para encontrar y reservar su estancia perfecta.",
    buttonText: "Reservar ahora",
  },
  {
    id: "de",
    name: "German",
    flag: "🇩🇪",
    greeting: "Hallo.",
    videoTitle: "So buchen Sie ein Airbnb",
    docTitle: "Buchungsleitfaden",
    docContent: "Folgen Sie diesen einfachen Schritten, um Ihren perfekten Aufenthalt zu finden.",
    buttonText: "Jetzt reservieren",
  },
  {
    id: "ja",
    name: "Japanese",
    flag: "🇯🇵",
    greeting: "こんにちは。",
    videoTitle: "Airbnbの予約方法",
    docTitle: "予約ガイド",
    docContent: "理想の宿泊先を見つけて予約するための簡単なステップをご紹介します。",
    buttonText: "今すぐ予約",
  },
  {
    id: "hi",
    name: "Hindi",
    flag: "🇮🇳",
    greeting: "नमस्ते।",
    videoTitle: "Airbnb कैसे बुक करें",
    docTitle: "बुकिंग गाइड",
    docContent: "अपना सही प्रवास खोजने और बुक करने के लिए इन सरल चरणों का पालन करें।",
    buttonText: "अभी बुक करें",
  },
  {
    id: "ar",
    name: "Arabic",
    flag: "🇸🇦",
    greeting: "مرحباً.",
    videoTitle: "كيفية حجز Airbnb",
    docTitle: "دليل الحجز",
    docContent: "اتبع هذه الخطوات البسيطة للعثور على إقامتك المثالية وحجزها.",
    buttonText: "احجز الآن",
  },
];

const TranslateSection = () => {
  const [activeLang, setActiveLang] = useState<Language>(languages[0]);

  return (
    <section id="translate" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 animate-slide-up">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            <Globe className="w-4 h-4" />
            Translate
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-500 flex flex-wrap gap-x-4">
            {languages.map((l, i) => (
              <span
                key={l.id}
                className={cn(
                  "transition-all duration-500",
                  activeLang.id === l.id ? "text-blue-600 opacity-100" : "text-foreground opacity-30 blur-[1px] text-2xl md:text-3xl"
                )}
              >
                {l.greeting}
              </span>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Make the world your audience. Translate your voiceover, captions, and documentation in one click.
          </p>
        </div>

        {/* Language Selection */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setActiveLang(lang)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 font-medium text-sm",
                activeLang.id === lang.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20 scale-105"
                  : "bg-white border-border text-foreground hover:border-blue-300 hover:bg-blue-50/50"
              )}
            >
              <span className="text-lg">{lang.flag}</span>
              {lang.name}
              {activeLang.id === lang.id && <Check className="w-3.5 h-3.5 ml-1" />}
            </button>
          ))}
          <button className="px-5 py-2.5 rounded-full border border-dashed border-border text-muted-foreground text-sm hover:border-blue-400 hover:text-blue-600 transition-colors">
            +31 More Languages
          </button>
        </div>

        {/* Interactive Mockup Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Video Mockup */}
          <div className="group relative bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-video flex flex-col group/video">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/video:scale-110 transition-transform duration-[2s]"
              alt="Beach Resort"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="relative mt-auto p-10 text-white">
              <div key={activeLang.id} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                    Voiceover: {activeLang.name}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 drop-shadow-xl max-w-md">
                  {activeLang.videoTitle}
                </h3>
                <div className="flex items-center gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 active:scale-95">
                    {activeLang.buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* Video Timeline UI */}
            <div className="absolute top-10 right-10 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <div className="text-[10px] font-mono text-white/60 tracking-widest">LIVE TRANSLATION</div>
            </div>

            <div className="absolute bottom-5 left-10 right-10 flex items-center gap-4 group-hover/video:translate-y-[-5px] transition-transform duration-500">
              <div className="text-[10px] font-mono text-white/80">01:24</div>
              <div className="flex-1 h-1 bg-white/20 rounded-full relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-blue-500 w-[65%]" />
              </div>
              <div className="text-[10px] font-mono text-white/80">04:12</div>
            </div>
          </div>

          {/* Doc Mockup */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-2xl p-8 md:p-14 relative overflow-hidden group/doc">
            {/* Browser-like dots */}
            <div className="flex gap-2 mb-10">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>

            <div key={activeLang.id} className="animate-fade-in space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-blue-100 rounded-full w-24 mb-2" />
                  <h4 className="text-3xl font-heading font-bold text-foreground">
                    {activeLang.docTitle}
                  </h4>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-2xl text-foreground font-medium leading-normal">
                  {activeLang.docContent}
                </p>

                <div className="space-y-3 opacity-20">
                  <div className="h-4 bg-slate-100 rounded-full w-full" />
                  <div className="h-4 bg-slate-100 rounded-full w-[94%]" />
                  <div className="h-4 bg-slate-100 rounded-full w-[97%]" />
                  <div className="h-4 bg-slate-100 rounded-full w-[85%]" />
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover/doc:bg-blue-500/10 transition-all duration-700" />
          </div>
        </div>
      </div>

      {/* Bottom fade for section flow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default TranslateSection;
