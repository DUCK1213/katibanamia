"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Film, Shirt, Heart, ArrowRight } from "lucide-react";

interface RevenueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  delay: number;
}

function RevenueCard({ icon, title, description, linkText, linkHref, delay }: RevenueCardProps) {
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
      className={`group p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-[#C8102E]/50 hover:shadow-2xl hover:shadow-[#C8102E]/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Icon */}
      <div className="w-20 h-20 mx-auto bg-[#C8102E]/20 backdrop-blur-sm text-white flex items-center justify-center text-3xl mb-6 rounded-full transition-all duration-400 group-hover:bg-[#C8102E] group-hover:scale-110 group-hover:rotate-10 shadow-lg">
        {icon}
      </div>

      <h3 className="font-serif text-2xl font-bold mb-4 text-white">
        {title}
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      <a
        href={linkHref}
        className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold transition-all duration-300 hover:text-white hover:translate-x-2"
      >
        {linkText}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function Revenue() {
  const revenueItems = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Get Our Book",
      description: "Katiba Made Familiar - the Constitution simplified in English and Kiswahili",
      linkText: "Order Now",
      linkHref: "tel:0759318855",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Katiba Movie Nights",
      description: "Join us for Katiba Classic Movie Night and Storytelling events",
      linkText: "Learn More",
      linkHref: "tel:0759318855",
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Branded Merch",
      description: "T-shirts, hoodies, and sweatshirts - wear the movement",
      linkText: "Shop Now",
      linkHref: "tel:0759318855",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Make a Donation",
      description: "Send M-Pesa to 0759 318 855 - every contribution fuels civic education",
      linkText: "Donate Now",
      linkHref: "tel:0759318855",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#1a1a1a] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#006B3F]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Support the Movement
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Multiple Ways<br />to Get Involved
          </h2>
        </div>

        {/* Revenue Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {revenueItems.map((item, index) => (
            <RevenueCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              linkText={item.linkText}
              linkHref={item.linkHref}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
