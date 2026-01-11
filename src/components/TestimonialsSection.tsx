"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Explaino has empowered our product team to create high-quality videos and training content 20x faster.",
    author: "Sean O'Donnell",
    role: "Director of Product Management",
    company: "Phenom",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    quote:
      "We're now producing 30+ professional-grade product videos every month. What used to take hours can now be done in just 15 minutes.",
    author: "Krish Ramineni",
    role: "Co-founder & CEO",
    company: "Fireflies.ai",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Explaino cut our product education and support videos production time from two days to just two hours.",
    author: "Janice Weintraub",
    role: "Associate Director, Customer Education",
    company: "Samsara",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    quote:
      "With Explaino, we created and launched 8 training courses for our new editor in just one quarter.",
    author: "Cyrus Dorosti",
    role: "VP of Customer Success",
    company: "Duda",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Explaino has transformed the way we create learning content. Over 100 employees across 20+ departments have adopted it.",
    author: "Chaitanya Deepak",
    role: "Associate Director - Learning",
    company: "Darwinbox",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Smooth fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Unique Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float opacity-60" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-slide-up">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Loved by teams{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              everywhere
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of creators who trust Explaino for their video content.
          </p>
        </div>

        {/* Testimonial Glass Carousel */}
        <div className="max-w-6xl mx-auto relative group/carousel">

          <div className="relative">
            {/* Main Glass Card (Split Layout) */}
            <div className="bg-card/60 backdrop-blur-xl rounded-[2rem] border border-white/40 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-200/50">
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid md:grid-cols-5 min-h-[450px]">
                {/* Left: Image Side (2 cols) */}
                <div className="md:col-span-2 relative min-h-[300px] md:min-h-full overflow-hidden">
                  <div className="absolute inset-0">
                    {testimonials.map((t, idx) => (
                      <img
                        key={idx}
                        src={t.image}
                        alt={t.author}
                        className={cn(
                          "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out",
                          idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                        )}
                      />
                    ))}
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                  </div>
                </div>

                {/* Right: Content Side (3 cols) */}
                <div className="md:col-span-3 p-8 md:p-14 flex flex-col justify-center relative">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100/50 -rotate-12 animate-pulse-slow pointer-events-none" />

                  {/* Animated Text Content */}
                  <div key={currentIndex} className="animate-fade-in relative z-10">
                    <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-10">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="space-y-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                      <p className="font-heading text-xl font-bold text-foreground">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-muted-foreground font-medium text-base text-blue-600">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows (Floating Outside) */}
            <div className="absolute -left-4 md:-left-12 -right-4 md:-right-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={goPrev}
                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:scale-110 hover:border-blue-200 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:scale-110 hover:border-blue-200 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:-translate-x-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-blue-600 shadow-md shadow-blue-500/30"
                    : "w-2 bg-blue-200 hover:bg-blue-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Smooth fade to next section (Footer usually) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;
