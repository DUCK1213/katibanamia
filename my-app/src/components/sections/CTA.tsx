"use client";

import { FileText, BookOpen, Heart, ExternalLink, Phone } from "lucide-react";

interface CTACardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  isExternal?: boolean;
  iconBgColor: string;
}

function CTACard({ icon, title, description, buttonText, buttonHref, isExternal, iconBgColor }: CTACardProps) {
  return (
    <div className="group relative p-8 bg-white/5 backdrop-blur-sm border-2 border-white/15 transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 hover:border-[#C8102E]/50 hover:shadow-2xl">
      {/* Radial gradient background */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-[#C8102E]/15 via-[#006B3F]/15 to-transparent rounded-full rotate-0 transition-transform duration-1000 group-hover:rotate-180" />
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] to-[#006B3F] opacity-0 transition-opacity duration-500 group-hover:opacity-15 -z-10" />

      {/* Icon */}
      <div className={`relative z-10 w-20 h-20 ${iconBgColor} text-white flex items-center justify-center mb-6 text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-5 shadow-lg`}>
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className="font-serif text-2xl font-bold mb-4 text-white transition-all duration-300 group-hover:text-[#D4AF37] group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          {description}
        </p>
        <a
          href={buttonHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#C8102E] text-white font-semibold transition-all duration-300 hover:bg-[#A00D25] hover:shadow-lg hover:shadow-[#C8102E]/30"
        >
          <span>{buttonText}</span>
          {isExternal ? (
            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          ) : (
            <span className="transition-transform group-hover/btn:translate-x-1">→</span>
          )}
        </a>
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section id="take-action" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8102E]/10 to-transparent opacity-50"
          style={{
            backgroundSize: '200% 100%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#006B3F]/10 to-transparent opacity-50"
          style={{
            backgroundSize: '200% 100%',
            animation: 'gradientShift 15s ease infinite reverse',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Take Action Today
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Join thousands of Kenyans in the movement to make constitutional education accessible to all. 
            Every signature and every copy requested brings us closer to an informed nation.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <CTACard
            icon={<FileText className="w-8 h-8" />}
            title="Sign the Petition"
            description="Help us make the Constitution a mandatory, examinable subject in schools from primary through tertiary education. Support our Katiba Shuleni 2026 parliamentary petition."
            buttonText="Sign on Change.org"
            buttonHref="https://www.change.org/p/katiba-shuleni-2026"
            isExternal={true}
            iconBgColor="bg-[#C8102E]"
          />
          <CTACard
            icon={<BookOpen className="w-8 h-8" />}
            title="Get Katiba Made Familiar"
            description="Request your copy of 'Katiba Made Familiar' - the simplified version of Kenya's Constitution in English or Kiswahili. Constitutional knowledge made accessible."
            buttonText="Call 0759 318 855"
            buttonHref="tel:0759318855"
            iconBgColor="bg-[#006B3F]"
          />
          <CTACard
            icon={<Heart className="w-8 h-8" />}
            title="Support Our Movement"
            description="Your contribution powers civic education across 47 counties. Help us reach every Kenyan with constitutional knowledge. Every shilling counts in this movement."
            buttonText="M-Pesa: 0759 318 855"
            buttonHref="tel:0759318855"
            iconBgColor="bg-[#C8102E]"
          />
        </div>
      </div>
    </section>
  );
}
