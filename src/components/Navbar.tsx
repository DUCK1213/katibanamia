"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/#about", label: "About" },
      { href: "/#take-action", label: "Take Action" },
      { href: "/shop", label: "Shop" },
      { href: "/#contributions", label: "Contributions" },
      { href: "/contact", label: "Contact" },
    ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-white tracking-tight">
            <span className="text-[#C8102E]">Katiba</span> Na Mia Mia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/shop"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#C8102E] text-white rounded-full hover:bg-[#A00D25] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#C8102E]/20"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Shop</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Larger tap target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-4 pt-2 pb-8 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-4 text-lg font-medium border-b border-white/5 active:bg-white/5 px-2 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-3 px-6 py-4 bg-[#C8102E] text-white rounded-xl text-lg font-bold shadow-lg shadow-[#C8102E]/20"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Visit Shop</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
