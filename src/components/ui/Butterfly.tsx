import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Butterfly = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            // Use requestAnimationFrame for smoother performance
            requestAnimationFrame(() => {
                setScrollPos(window.scrollY);
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Calculate position: base it on scroll but add a slight "follow" or "drifting" feel
    // The butterfly will stay roughly in the same vertical area of the viewport
    // but move slightly as if flying through the content.
    const yBase = 300; // base viewport height
    const driftX = Math.sin(scrollPos * 0.005) * 50;
    const driftY = Math.cos(scrollPos * 0.003) * 30;

    return (
        <div
            className="fixed z-[9999] pointer-events-none transition-transform duration-700 ease-out"
            style={{
                left: `calc(85% + ${driftX}px)`,
                top: `calc(${yBase}px + ${driftY}px)`,
                transform: `rotate(${driftX * 0.2}deg) scale(${1 + Math.sin(scrollPos * 0.01) * 0.1})`,
            }}
        >
            {/* Butterfly SVG */}
            <div className="relative w-16 h-16 group">

                {/* Glowing Trail/Glow */}
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl animate-pulse scale-150" />

                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Left Wing */}
                    <g className="animate-[butterfly-flap-left_0.4s_ease-in-out_infinite] origin-right">
                        <path
                            d="M50 50 C20 20, 0 40, 5 70 C10 90, 40 80, 50 50"
                            fill="url(#butterfly-grad)"
                            className="opacity-90"
                        />
                        <path
                            d="M50 50 C25 30, 15 45, 20 65"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeOpacity="0.5"
                        />
                    </g>

                    {/* Right Wing */}
                    <g className="animate-[butterfly-flap-right_0.4s_ease-in-out_infinite] origin-left">
                        <path
                            d="M50 50 C80 20, 100 40, 95 70 C90 90, 60 80, 50 50"
                            fill="url(#butterfly-grad)"
                            className="opacity-90"
                        />
                        <path
                            d="M50 50 C75 30, 85 45, 80 65"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeOpacity="0.5"
                        />
                    </g>

                    {/* Body */}
                    <ellipse cx="50" cy="55" rx="2" ry="15" fill="#1e3a8a" />
                    <path d="M48 45 L45 35" stroke="#1e3a8a" strokeWidth="1" />
                    <path d="M52 45 L55 35" stroke="#1e3a8a" strokeWidth="1" />

                    <defs>
                        <linearGradient id="butterfly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Sparkle Trail Particles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 40 - 20}px`,
                                top: `${Math.random() * 40 - 20}px`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '2s'
                            }}
                        />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes butterfly-flap-left {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(60deg); }
        }
        @keyframes butterfly-flap-right {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(-60deg); }
        }
      `}} />
        </div>
    );
};
