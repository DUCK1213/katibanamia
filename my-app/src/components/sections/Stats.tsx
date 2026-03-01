"use client";

import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

function StatItem({ number, label, delay }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-700 hover:scale-105 hover:bg-white/15 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <span className="block text-5xl md:text-6xl font-serif font-extrabold mb-2 transition-colors hover:text-[#D4AF37]">
        {number}
      </span>
      <span className="text-sm uppercase tracking-widest opacity-90">{label}</span>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { number: "47", label: "Weeks • Counties" },
    { number: "6", label: "Action Areas" },
    { number: "3", label: "Days Weekly (Wed-Fri)" },
    { number: "∞", label: "Impact" },
  ];

  return (
    <section className="bg-[#006B3F] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              number={stat.number}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
