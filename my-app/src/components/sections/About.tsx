"use client";

import { useEffect, useRef, useState } from "react";

interface AboutCardProps {
  title: string;
  content: string;
  delay: number;
}

function AboutCard({ title, content, delay }: AboutCardProps) {
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
      className={`group relative p-8 bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white/90 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left border accent */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#C8102E] transition-all duration-500 group-hover:h-full" />
      
      <h3 className="font-serif text-2xl font-bold mb-4 text-black transition-colors group-hover:text-[#C8102E]">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed transition-colors group-hover:text-gray-800">
        {content}
      </p>
    </div>
  );
}

export default function About() {
  const aboutCards = [
    {
      title: "Who We Are",
      content:
        "Katiba Na Mia is a civic education movement led by Ng'ang'a Muigai. We simplify Kenya's Constitution for citizens in both Kiswahili and English, committed to taking constitutional knowledge directly to the people at the grassroots level.",
    },
    {
      title: "What We Do",
      content:
        "We conduct civic education and public engagement on constitutional matters across Kenya. Our mission is to make the Constitution accessible and empower citizens with knowledge of their rights and responsibilities through community engagement.",
    },
    {
      title: "When We Act",
      content:
        "As a 47 weeks project, we conduct civic education on a weekly basis in every county from Wednesdays to Fridays. One county, one week at a time, until every Kenyan has access to constitutional knowledge.",
    },
    {
      title: "How We Engage",
      content:
        "We engage and teach through interactive debates, katiba literacy tests, and use music performances for mobilization. Our approach makes constitutional education dynamic, memorable, and accessible to all.",
    },
    {
      title: "Why We Exist",
      content:
        "We are pushing for transformative changes through the KAMAU AGENDA: making the Constitution a mandatory subject in schools, establishing education infrastructure standards, creating a chronic diseases fund, reforming elections, and standardizing devolution.",
    },
    {
      title: "Our Impact",
      content:
        "Through petitions, policy drafting, bill creation, and grassroots education, we're liberating future generations from the shackles of ignorance. Knowledge is power, and constitutional literacy is the foundation of democratic participation.",
    },
  ];

  return (
    <section id="about" className="bg-[#FAF9F7] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            About Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Constitutional Education<br />at the Grassroots
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={card.title}
              title={card.title}
              content={card.content}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
