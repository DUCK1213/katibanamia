"use client";

import { useEffect, useRef, useState } from "react";

interface AgendaCardProps {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  delay: number;
}

function AgendaCard({ letter, title, subtitle, description, delay }: AgendaCardProps) {
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
      className={`group relative p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 border-l-[5px] border-l-[#C8102E] transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[#C8102E]/50 hover:shadow-2xl hover:shadow-[#C8102E]/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Shine effect */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#C8102E]/10 to-transparent transition-all duration-700 group-hover:left-full" />
      
      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#006B3F] transition-all duration-500 group-hover:w-full" />

      {/* Letter Icon */}
      <div className="w-20 h-20 bg-[#C8102E] text-white flex items-center justify-center font-serif text-4xl font-extrabold mb-6 transition-all duration-500 group-hover:rotate-[10deg] group-hover:bg-[#006B3F] group-hover:scale-110 shadow-lg shadow-[#C8102E]/30">
        {letter}
      </div>

      <div className="relative z-10">
        <span className="text-sm uppercase tracking-widest text-gray-400 mb-1 block">
          {subtitle}
        </span>
        <h3 className="font-serif text-2xl font-bold mb-4 text-white transition-colors group-hover:text-[#D4AF37]">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function KamauAgenda() {
  const agendaItems = [
    {
      letter: "K",
      title: "Katiba",
      subtitle: "Constitution",
      description:
        "Pushing for the Constitution of Kenya to be established as a full mandatory and examinable subject in the basic education curriculum. Constitutional literacy must start in the classroom.",
    },
    {
      letter: "A",
      title: "Masomo",
      subtitle: "Education",
      description:
        "Establishment of basic infrastructure standards for classrooms, administration blocks, libraries, dormitories, and teachers quarters in every public school in Kenya. Quality education requires quality infrastructure.",
    },
    {
      letter: "M",
      title: "Afya",
      subtitle: "Health",
      description:
        "Establishment of a chronic diseases fund separate from the health budget. Kenyans battling long-term illnesses deserve dedicated, sustainable support beyond general healthcare funding.",
    },
    {
      letter: "A",
      title: "Uchaguzi",
      subtitle: "Elections",
      description:
        "Limit the recall process of members of parliament to the High Court under the Elections Act. Ensuring accountability while maintaining judicial oversight and democratic integrity.",
    },
    {
      letter: "U",
      title: "Ugatuzi",
      subtitle: "Devolution",
      description:
        "Establish a devolution prototype to serve as the basic development standard for every county. Equal opportunities and resources for all Kenyans, regardless of geographic location.",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#006B3F]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            The KAMAU Agenda
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Why We Fight:<br />Five Pillars for Change
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            We are seeking transformative constitutional and policy changes that will reshape Kenya's future. 
            The KAMAU Agenda represents our commitment to systemic reform across five critical areas.
          </p>
        </div>

        {/* Agenda Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {agendaItems.map((item, index) => (
             <AgendaCard
               key={item.letter + index}
               letter={item.letter}
               title={item.title}
               subtitle={item.subtitle}
               description={item.description}
               delay={index * 100}
             />
           ))}
         </div>
      </div>
    </section>
  );
}
