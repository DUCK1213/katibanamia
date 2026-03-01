"use client";

import { useEffect, useRef, useState } from "react";

interface TeamMemberProps {
  initial: string;
  name: string;
  role: string;
  delay: number;
}

function TeamMember({ initial, name, role, delay }: TeamMemberProps) {
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
      className={`group p-8 bg-white/80 backdrop-blur-sm border-2 border-[#006B3F]/10 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white hover:border-[#006B3F]/30 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#006B3F]/10 to-transparent transition-all duration-400 group-hover:h-full -z-10" />

      {/* Initial Avatar */}
      <div className="w-20 h-20 mx-auto bg-[#006B3F] text-white flex items-center justify-center font-serif text-3xl font-extrabold mb-6 rounded-full transition-all duration-500 group-hover:bg-[#C8102E] group-hover:rotate-[360deg] group-hover:scale-110 shadow-lg shadow-[#006B3F]/30 group-hover:shadow-[#C8102E]/30">
        {initial}
      </div>

      <h3 className="font-serif text-xl font-bold mb-2 text-black transition-colors group-hover:text-[#006B3F]">
        {name}
      </h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}

export default function Team() {
  const teamMembers = [
    { initial: "N", name: "Ng'ang'a Muigai", role: "Founder & Lead Educator" },
    { initial: "M", name: "Moses Nduati", role: "Team Member" },
    { initial: "R", name: "Rafique Mohamed", role: "Team Member" },
    { initial: "A", name: "Athman Ngala", role: "Team Member" },
    { initial: "J", name: "Joy Kamande", role: "Team Member" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F5F3EF] to-[#FAF9F7] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            The People Behind<br />the Movement
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              initial={member.initial}
              name={member.name}
              role={member.role}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
