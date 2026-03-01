"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // WhatsApp integration - pre-filled message
  const whatsappNumber = "254759318855";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in learning more about Katiba Na Mia and your constitutional education programs.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <blockquote className="font-serif text-2xl md:text-3xl italic mb-10 text-gray-200">
          &ldquo;Knowledge is power. Let's liberate our future generations from the shackles of ignorance.&rdquo;
        </blockquote>

        {/* Contact Card */}
        <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl max-w-lg mx-auto mb-10">
          <h3 className="text-lg font-semibold mb-6 text-[#D4AF37]">
            Get in Touch:
          </h3>
          <div className="space-y-4">
            {/* WhatsApp Integration */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg text-[#25D366] hover:bg-[#25D366]/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat on WhatsApp</span>
              <span className="text-sm opacity-70">(Fastest Response)</span>
            </a>
            
            <a 
              href="tel:0759318855" 
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>0759 318 855</span>
            </a>
            
            <a 
              href="mailto:katibangangamuigai@gmail.com" 
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>katibangangamuigai@gmail.com</span>
            </a>
            
            <a 
              href="mailto:katibanamiamia@gmail.com" 
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>katibanamiamia@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="/shop" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Shop</a>
          <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About</a>
          <a href="#take-action" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Take Action</a>
          <a href="https://www.change.org/p/katiba-shuleni-2026" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Sign Petition</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Katiba Na Mia. Constitutional Education for All Kenyans.
        </p>
      </div>
    </footer>
  );
}
