import {
    Type,
    Workflow,
    Mic2,
    Music,
    Layers,
    Eye,
    Monitor,
    Palette,
    FileText,
    Crop,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Feature Groups Data
const featureGroups = [
    {
        id: "story",
        title: "Shape the Story",
        theme: "purple", // Used for background tints
        features: [
            {
                title: "Fine-Tune Your Video Script",
                description: "Effortlessly add, remove, or tweak sentences and pronunciations to craft your ideal script.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 w-full max-w-sm relative overflow-hidden">
                            <p className="text-lg text-gray-700 font-medium">
                                You can edit the video script like thi<span className="animate-pulse text-purple-600">|</span>
                            </p>
                            <div className="absolute -bottom-4 -right-4 text-purple-50">
                                <Type className="w-24 h-24" />
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Customize Your Video Flow",
                description: "Quickly insert or delete video clips, images, or text slides for complete creative control.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="relative w-full max-w-sm flex items-center gap-2">
                            <div className="h-12 flex-1 bg-gray-100 rounded-lg border-2 border-dashed border-gray-200" />
                            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm border border-purple-200 z-10 hover:scale-110 transition-transform cursor-pointer">
                                <span className="text-2xl font-bold">+</span>
                            </div>
                            <div className="h-12 flex-1 bg-gray-100 rounded-lg border-2 border-dashed border-gray-200" />
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <div className="w-full h-0.5 bg-gray-200" />
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Smart Cut",
                description: "AI-driven trim that removes filler words and awkward silences instantly.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="flex gap-2 items-center">
                            <div className="w-16 h-8 bg-blue-100 rounded-md animate-pulse" />
                            <div className="w-2 h-8 bg-red-400 rounded-full animate-bounce" />
                            <div className="w-16 h-8 bg-blue-100 rounded-md animate-pulse" />
                        </div>
                    </div>
                )
            },
            {
                title: "Scene Transition",
                description: "Smooth, cinematic transitions between your clips automatically.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="relative w-20 h-20 bg-purple-50 rounded-full overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-mist-flow" />
                            <Workflow className="w-10 h-10 text-purple-600" />
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        id: "audio",
        title: "Enhance the Audio",
        theme: "blue",
        features: [
            {
                title: "Give Your Video a Professional Voice",
                description: "Select from dozens of natural-sounding AI voices with diverse accents, tones, and personalities.",
                visual: (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-3">
                        {[
                            { name: "Natasha", desc: "Husky voice from North England", color: "bg-blue-500" },
                            { name: "Arnold", desc: "Deep voice for news", color: "bg-indigo-500", active: true },
                            { name: "Viraj", desc: "Commanding yet soothing quality", color: "bg-sky-500" }
                        ].map((voice, i) => (
                            <div key={i} className={cn(
                                "flex items-center gap-3 p-3 rounded-xl w-full max-w-xs transition-all",
                                voice.active ? "bg-white shadow-md scale-105 border border-blue-100" : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                            )}>
                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", voice.color)}>
                                    <Mic2 className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-gray-800">{voice.name}</p>
                                    <p className="text-xs text-gray-500 truncate w-32">{voice.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            },
            {
                title: "Set the Perfect Mood with Music",
                description: "Select a soundtrack from our extensive library, or upload your own music to match your unique style.",
                visual: (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-2">
                        <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                            {["Upbeat", "Inspiring", "Cinematic", "Dramatic", "Mellow"].map((tag, i) => (
                                <span key={i} className={cn(
                                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-default",
                                    tag === "Cinematic"
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110"
                                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                )}>
                                    {tag === "Cinematic" && <Music className="w-3 h-3 inline mr-1" />}
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )
            },
            {
                title: "Audio Cleanup",
                description: "Remove background noise and hum with one click for studio-quality sound.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="flex items-center gap-1">
                            {[0.4, 0.7, 1.2, 0.8, 0.5, 0.9, 1.4, 0.6, 0.3].map((h, i) => (
                                <div
                                    key={i}
                                    className="w-1 bg-blue-500 rounded-full animate-pulse"
                                    style={{ height: `${h * 2}rem`, animationDelay: `${i * 0.1}s` }}
                                />
                            ))}
                        </div>
                    </div>
                )
            },
            {
                title: "Voice Cloning",
                description: "Clone your own voice to create consistent content without re-recording.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Mic2 className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        id: "visuals",
        title: "Polish the Visuals",
        theme: "pink",
        features: [
            {
                title: "Make It Pop",
                description: "Draw instant attention to any part of your video.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6 perspective-1000">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-pink-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="bg-white px-6 py-3 rounded-xl border-2 border-pink-100 shadow-xl transform transition-transform group-hover:-translate-y-2 group-hover:rotate-x-12">
                                <span className="font-bold text-gray-800">Design</span>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-pink-600 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                                Pop!
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Mask with Blurs",
                description: "Blur unwanted or sensitive details from your video.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-400 text-sm mb-2">Account Details</p>
                            <p className="text-gray-800 font-mono text-lg">
                                My balance is <span className="bg-gray-200 text-transparent blur-[4px] select-none rounded px-1">94,304.55</span>
                            </p>
                        </div>
                    </div>
                )
            },
            {
                title: "Resize for any Aspect Ratio",
                description: "Easily resize your videos for demos, shorts, laptops, or mobile screens.",
                visual: (
                    <div className="w-full h-full flex items-end justify-center p-6 gap-3">
                        <div className="w-24 h-16 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                            <Monitor className="text-gray-400 w-6 h-6" />
                        </div>
                        <div className="w-10 h-16 bg-white border-2 border-pink-200 shadow-md rounded-lg flex items-center justify-center transform -translate-y-2">
                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        </div>
                        <div className="w-16 h-16 bg-gray-50 border-2 border-gray-200 rounded-lg" />
                    </div>
                )
            },
            {
                title: "Brand-Aid",
                description: "Drop in your fonts, colors, and logos once, and every video stays perfectly on-brand.",
                visual: (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-4">
                        <div className="text-5xl font-serif text-gray-800">Aa</div>
                        <div className="flex gap-2">
                            {["bg-pink-500", "bg-purple-500", "bg-blue-500", "bg-gray-800"].map((c, i) => (
                                <div key={i} className={cn("w-6 h-6 rounded-full shadow-sm", c)} />
                            ))}
                            <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs">+</div>
                        </div>
                    </div>
                )
            },
            {
                title: "AI Auto-Captions",
                description: "Generate perfectly timed captions automatically in one click.",
                visual: (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-2">
                        <div className="w-[80%] h-1 bg-blue-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-1/2 animate-pulse" />
                        </div>
                        <div className="space-y-1 text-center">
                            <span className="block text-sm font-bold text-gray-800 animate-slide-up">Transforming raw</span>
                            <span className="block text-sm font-bold text-blue-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>screen recordings...</span>
                        </div>
                    </div>
                )
            },
            {
                title: "Smart Zoom",
                description: "Automatically zoom into important actions on your screen.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="relative group/zoom">
                            <div className="w-24 h-16 bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex items-center justify-center p-2">
                                <div className="w-full h-full bg-slate-50 rounded group-hover/zoom:scale-150 transition-transform duration-1000 origin-center" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Monitor className="w-8 h-8 text-blue-100 opacity-20" />
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        id: "docs",
        title: "Tweak the Documentation",
        theme: "green",
        features: [
            {
                title: "Articles Written Your Way",
                description: "Set your guidelines once, and Explaino generates articles exactly how you prefer.",
                visual: (
                    <div className="w-full h-full flex flex-col justify-center p-6 gap-2">
                        <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-2 rounded-lg text-xs opacity-50">
                            <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">×</span>
                            Avoid "click here"
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm shadow-sm border border-green-100">
                            <span className="w-4 h-4 rounded-full bg-green-200 flex items-center justify-center text-[10px]">✓</span>
                            Use "Select the option"
                        </div>
                    </div>
                )
            },
            {
                title: "Built-In Screenshot Editor",
                description: "Zoom, crop, blur, or annotate screenshots directly in your article.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="flex gap-2 bg-gray-800 p-2 rounded-full shadow-xl">
                            {[Crop, Eye, Layers].map((Icon, i) => (
                                <div key={i} className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-white transition-all hover:scale-110",
                                    i === 0 ? "bg-green-500 shadow-lg shadow-green-500/50" : "hover:bg-gray-700"
                                )}>
                                    <Icon className="w-4 h-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            },
            {
                title: "GIF It",
                description: "Convert any screenshot to an animated GIF with just a click.",
                visual: (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white">
                        <div className="w-full max-w-xs relative py-8">
                            <div className="h-0.5 bg-gray-100 w-full" />
                            <div className="flex justify-between mt-1 px-1">
                                {[5, 10, 15, 20, 25].map(t => (
                                    <span key={t} className="text-[10px] text-gray-300 font-mono">{t}s</span>
                                ))}
                            </div>
                            <div className="absolute top-0 left-1/4 w-1/4 h-16 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center shadow-sm -mt-2">
                                <span className="text-gray-400 font-bold tracking-widest text-lg">GIF</span>
                            </div>
                            <div className="absolute top-0 left-1/3 h-20 w-0.5 bg-blue-500 -mt-4 flex flex-col items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-sm rotate-45 -mt-1" />
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Article Co-pilot",
                description: "Give instructions via chat, and Explaino AI edits your article instantly.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="flex items-center gap-2 bg-gray-50 p-2 pl-4 rounded-xl border border-gray-100 shadow-sm w-full max-w-xs">
                            <div className="flex-1 text-xs text-gray-400">Ask AI to improve your article</div>
                            <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white shadow-md shadow-pink-500/30">
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Interactive Embeds",
                description: "Embed living, breathing demos directly into your documentation.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="w-full max-w-[180px] aspect-video bg-white border border-gray-100 rounded-lg shadow-lg flex flex-col">
                            <div className="h-3 border-b border-gray-50 bg-gray-50/50 rounded-t-lg" />
                            <div className="flex-1 flex items-center justify-center gap-1">
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white scale-75 animate-pulse">
                                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-1" />
                                </div>
                                <div className="space-y-1">
                                    <div className="w-12 h-1 bg-gray-100 rounded-full" />
                                    <div className="w-8 h-1 bg-gray-50 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Global Export",
                description: "One click to Notion, Zendesk, PDF, and more.",
                visual: (
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="relative">
                            <div className="w-12 h-16 bg-white border-2 border-green-500 rounded-lg shadow-xl shadow-green-500/10 flex items-center justify-center z-10 relative">
                                <FileText className="w-6 h-6 text-green-500" />
                            </div>
                            {[
                                { t: '-top-4 -left-4', s: 'scale-75' },
                                { t: '-bottom-4 -right-4', s: 'scale-90' },
                                { t: '-top-4 -right-4', s: 'scale-50' }
                            ].map((pos, i) => (
                                <div key={i} className={cn("absolute bg-white p-1 rounded border shadow-sm", pos.t, pos.s)}>
                                    <div className="w-4 h-4 bg-gray-100 rounded-sm" />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        ]
    }
];

const MoreFeaturesSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full animate-mist-flow" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full animate-mist-flow" style={{ animationDelay: '-5s' }} />

            {/* Gradients */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-20">
                <div className="text-center max-w-4xl mx-auto mb-20 relative px-6">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-500">
                        <span className="animate-gradient-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 bg-clip-text text-transparent bg-[length:200%_auto]">Still not convinced?</span>
                        <br className="hidden md:block" />
                        <div className="h-[1.2em] relative overflow-hidden mt-2">
                            <div className="flex flex-col animate-[vertical-steps_8s_infinite] text-blue-600">
                                <span className="h-[1.2em] flex items-center justify-center gradient-text">Shape the story.</span>
                                <span className="h-[1.2em] flex items-center justify-center gradient-text">Fine-tune audio.</span>
                                <span className="h-[1.2em] flex items-center justify-center gradient-text">Polish visuals.</span>
                                <span className="h-[1.2em] flex items-center justify-center gradient-text">Draft better docs.</span>
                                <span className="h-[1.2em] flex items-center justify-center gradient-text">Shape the story.</span>
                            </div>
                        </div>
                    </h2>
                </div>

                <div className="space-y-32">
                    {featureGroups.map((group) => (
                        <div key={group.id} className="space-y-10 group/group">
                            {/* Group Title */}
                            <div className="flex items-center gap-4 animate-fade-in px-2">
                                <div className={cn(
                                    "px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-all group-hover/group:scale-105",
                                    group.theme === "purple" && "bg-purple-600 text-white shadow-purple-200",
                                    group.theme === "blue" && "bg-blue-600 text-white shadow-blue-200",
                                    group.theme === "pink" && "bg-pink-600 text-white shadow-pink-200",
                                    group.theme === "green" && "bg-green-600 text-white shadow-green-200",
                                )}>
                                    {group.title}
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                            </div>

                            {/* Group Grid */}
                            <div className={cn(
                                "grid gap-8",
                                group.features.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
                            )}>
                                {group.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "group relative bg-white rounded-[2.5rem] border border-border/40 overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col",
                                            "hover:border-primary/20",
                                            group.features.length === 4 && idx < 2 ? "lg:col-span-2" : ""
                                        )}
                                    >
                                        {/* Spotlight Effect Overlay */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(59,130,246,0.08)_0%,transparent_50%)]" />

                                        {/* Visual Area */}
                                        <div className={cn(
                                            "h-64 w-full relative overflow-hidden transition-all duration-700",
                                            group.theme === "purple" && "bg-gradient-to-br from-purple-50/80 to-indigo-50/30",
                                            group.theme === "blue" && "bg-gradient-to-br from-blue-50/80 to-sky-50/30",
                                            group.theme === "pink" && "bg-gradient-to-br from-pink-50/80 to-rose-50/30",
                                            group.theme === "green" && "bg-gradient-to-br from-green-50/80 to-emerald-50/30",
                                        )}>
                                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                                {feature.visual}
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-10 flex-1 bg-white relative z-10 border-t border-border/20">
                                            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                                            <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default MoreFeaturesSection;
