"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const partners = [
  { name: "Kenya National Commission on Human Rights", logo: "KNCHR" },
  { name: "The Constitution of Kenya", logo: "COK" },
  { name: "Kenya Law Reform Commission", logo: "KLRC" },
  { name: "National Cohesion and Integration Commission", logo: "NCIC" },
  { name: "United Nations Development Programme", logo: "UNDP" },
  { name: "Ford Foundation", logo: "Ford" },
  { name: "Open Society Foundations", logo: "OSF" },
  { name: "Hivos International", logo: "Hivos" },
];

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 
          className={`text-center text-gray-400 text-sm uppercase tracking-widest transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Proudly Partnered With
        </h2>
      </div>

      {/* Scrolling Banner */}
      <div className="relative">
        <div className="flex animate-scroll-x">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 mx-8 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/10 hover:border-[#C8102E]/30 hover:scale-105 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${(index % partners.length) * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C8102E] to-[#006B3F] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {partner.logo.slice(0, 2)}
                </div>
                <span className="text-white font-medium whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
        
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
