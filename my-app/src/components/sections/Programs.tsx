"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  { emoji: "🎪", title: "Katiba Festival", color: "from-[#C8102E] to-[#ff4757]" },
  { emoji: "🇰🇪", title: "Katiba Na Mia", color: "from-[#006B3F] to-[#2ed573]" },
  { emoji: "🎬", title: "Katiba Movie Nights", color: "from-[#1a1a1a] to-[#535c68]" },
  { emoji: "🚶", title: "Katiba Walks", color: "from-[#C8102E] to-[#ff6b81]" },
  { emoji: "🏃", title: "Katiba Marathon", color: "from-[#006B3F] to-[#7bed9f]" },
  { emoji: "🌳", title: "Katiba Tree Donations", color: "from-[#2d5016] to-[#7bed9f]" },
  { emoji: "📋", title: "Public Interest Petitions", color: "from-[#1a1a1a] to-[#70a1ff]" },
  { emoji: "📜", title: "Drafting Bills", color: "from-[#C8102E] to-[#ff6348]" },
  { emoji: "📑", title: "Drafting Policies", color: "from-[#006B3F] to-[#26de81]" },
  { emoji: "🗳️", title: "Drafting Manifestos", color: "from-[#1a1a1a] to-[#778ca3]" },
  { emoji: "👥", title: "Katiba Clubs", color: "from-[#C8102E] to-[#ff9f43]" },
  { emoji: "⭐", title: "Leadership Branding", color: "from-[#006B3F] to-[#20bf6b]" },
  { emoji: "🎵", title: "Katiba Music Playlists", color: "from-[#8b5cf6] to-[#ec4899]" },
  { emoji: "📹", title: "Documentaries", color: "from-[#1a1a1a] to-[#a4b0be]" },
];

export default function Programs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#FAF9F7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Our Programs
          </span>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Engaging Kenya<br />Through Action
              </h2>
              <p className="max-w-3xl text-lg text-gray-600">
                From festivals to marathons, policy drafting to music playlists, we engage Kenyans through 
                diverse programs that make constitutional education accessible, memorable, and actionable.
              </p>
            </div>
            
            {/* Scroll Buttons */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-[#C8102E] hover:text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-[#C8102E] hover:text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group flex-shrink-0 w-72 snap-start transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-96 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl mb-6 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {program.emoji}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-black mb-4">
                    {program.title}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${program.color} rounded-full transform origin-left transition-all duration-500 group-hover:w-full`} />
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-6 text-gray-400">
          <ChevronLeft className="w-5 h-5 animate-pulse" />
          <span className="text-sm">Swipe to explore</span>
          <ChevronRight className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
