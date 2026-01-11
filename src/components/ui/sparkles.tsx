"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    particleColor = "#FFFFFF",
    speed = 1, // new prop for animation speed
}: {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    particleDensity?: number;
    particleColor?: string;
    speed?: number;
}) => {
    const [init, setInit] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setInit(true);
    }, []);

    useEffect(() => {
        if (!init) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Handle resize
        const resizeObserver = new ResizeObserver(() => {
            if (!canvas) return;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });
        resizeObserver.observe(document.body);

        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        const particleCount = (width * height) / (10000 / particleDensity); // Adjust density based on area

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            opacitySpeed: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * (maxSize - minSize) + minSize;
                this.speedX = (Math.random() - 0.5) * speed;
                this.speedY = (Math.random() - 0.5) * speed;
                this.opacity = Math.random();
                this.opacitySpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity += this.opacitySpeed;

                if (this.opacity <= 0 || this.opacity >= 1) {
                    this.opacitySpeed = -this.opacitySpeed;
                }

                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            resizeObserver.disconnect();
        };
    }, [init, maxSize, minSize, particleDensity, speed]);

    return (
        <div className={cn("pointer-events-none", className)}>
            <canvas
                ref={canvasRef}
                id={id}
                className="w-full h-full block"
                style={{
                    background: background,
                }}
            />
        </div>
    );
};
