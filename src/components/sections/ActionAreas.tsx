"use client";

import { useEffect, useRef, useState } from "react";
import { Landmark, Sprout, GraduationCap, Bike, Wrench, School } from "lucide-react";

interface AreaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function AreaCard({ icon, title, description, delay }: AreaCardProps) {
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
      className={`group relative p-8 bg-white/80 backdrop-blur-sm border-t-4 border-[#006B3F] border-x border-b border-white/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#006B3F]/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Top border animation */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-[#C8102E] transition-all duration-500 group-hover:w-full" />
      
      {/* Icon */}
      <div className="w-16 h-16 bg-[#006B3F] text-white flex items-center justify-center mb-6 text-2xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-[#C8102E] group-hover:scale-110 shadow-lg">
        {icon}
      </div>

      <h4 className="font-serif text-xl font-bold mb-3 text-black transition-colors group-hover:text-[#006B3F] group-hover:translate-x-1">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ActionAreas() {
  const areas = [
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Bunge la Mwananchi",
      description: "Engaging with citizen forums and community discussions at People's Parliament gatherings across the nation.",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Farmers Markets",
      description: "Reaching agricultural communities and rural populations where they gather, bringing constitutional knowledge to the heart of Kenya's economy.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Higher Learning Institutions",
      description: "Conducting civic education tours in universities like Moi University, empowering the next generation of leaders.",
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Bodaboda Stages",
      description: "Connecting with transport workers and commuters at motorcycle taxi stages, reaching citizens in their daily routines.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Jua Kali Sectors",
      description: "Engaging with artisans and informal sector workers, ensuring constitutional knowledge reaches every working Kenyan.",
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "High Schools",
      description: "Reaching the youth where they learn, planting seeds of constitutional literacy in secondary schools across Kenya.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F5F3EF] to-[#FAF9F7] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Where We Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Six Action Areas<br />in Every County
          </h2>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <AreaCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
