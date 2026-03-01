"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
    alt: "Katiba Mfukoni Book",
  },
  {
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
    alt: "Katiba Made Familiar Book",
  },
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
    alt: "Constitution Book",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    alt: "Kenya Constitution",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Loading effect - simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Carousel auto-advance
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => prev + 1);
  }, []);

  // Loading spinner component
  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden">
        <div className="text-center z-10 relative">
          {/* Animated logo/text */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-white">
              <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>K</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>t</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>i</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>b</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>a</span>
            </h1>
            <p className="text-[#C8102E] text-xl mt-2 animate-pulse">Na Mia Mia</p>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-[#C8102E] to-[#006B3F] transition-all duration-300"
              style={{ 
                width: `${Math.min((imagesLoaded / carouselImages.length) * 100 + 20, 100)}%`,
              }}
            />
          </div>
          
          <p className="text-white/60 text-sm mt-4 animate-pulse">
            Loading Constitutional Education...
          </p>
        </div>

        {/* Background blur effect during loading */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#006B3F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-black text-[#FAF9F7]">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-30 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              onLoad={handleImageLoad}
              sizes="100vw"
            />
            {/* Grayscale overlay */}
            <div className="absolute inset-0 grayscale mix-blend-luminosity" />
          </div>
        ))}
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#C8102E]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#006B3F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? "bg-[#C8102E] w-12" 
                : "bg-white/30 hover:bg-white/50 w-8"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge with animation */}
          <div 
            className="inline-block px-6 py-2 bg-[#C8102E] text-white font-semibold text-sm tracking-widest uppercase mb-8 shadow-lg shadow-[#C8102E]/30"
            style={{ 
              animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            Civic Education Movement
          </div>

          {/* Title with animation */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            <span 
              className="block"
              style={{ 
                animation: isVisible ? 'slideInUp 0.8s ease-out 0.1s forwards' : 'none',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              Katiba
            </span>
            <span 
              className="block text-[#C8102E]"
              style={{ 
                animation: isVisible ? 'slideInUp 0.8s ease-out 0.3s forwards' : 'none',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              Na Mia Mia
            </span>
          </h1>

          {/* Subtitle with fade in */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl max-w-2xl mb-10 text-gray-200 leading-relaxed"
            style={{ 
              animation: isVisible ? 'fadeIn 0.8s ease-out 0.5s forwards' : 'none',
              opacity: 0
            }}
          >
            Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music. 
            A 47-week journey across all counties, every Wednesday to Friday.
          </p>

          {/* CTA Buttons with hover animations */}
          <div 
            className="flex flex-wrap gap-4"
            style={{ 
              animation: isVisible ? 'fadeIn 0.8s ease-out 0.7s forwards' : 'none',
              opacity: 0
            }}
          >
            <a
              href="#take-action"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C8102E] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#A00D25] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C8102E]/30 hover:scale-105"
            >
              <span>Take Action Now</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with bounce animation */}
      <div 
        className="absolute bottom-8 left-1/2 z-10"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer animate-bounce">
          <span className="text-sm">Scroll</span>
          <span className="text-xl">↓</span>
        </div>
      </div>
    </section>
  );
}
