"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, MessageCircle, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:katibanamiamia@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // WhatsApp pre-filled message
  const whatsappLink = `https://wa.me/254759318855?text=${encodeURIComponent(
    "Hello! I'm interested in learning more about Katiba Na Mia."
  )}`;

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#FAF9F7] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-[#006B3F] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-black mb-2">
            Message Sent!
          </h2>
          <p className="text-gray-600 mb-6">
            Your email client should have opened. If not, you can reach us directly at katibanamiamia@gmail.com
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Back to Home
            </Link>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Send Another
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#C8102E] hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions about constitutional education, want to join our movement, 
              or interested in collaborating? We'd love to hear from you!
            </p>

            {/* Quick Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">WhatsApp</h3>
                  <p className="text-sm text-gray-600">Fastest response time</p>
                </div>
              </a>

              <a
                href="tel:0759318855"
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#C8102E] transition-colors"
              >
                <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-sm text-gray-600">0759 318 855</p>
                </div>
              </a>

              <a
                href="mailto:katibanamiamia@gmail.com"
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#C8102E] transition-colors"
              >
                <div className="w-12 h-12 bg-[#006B3F] rounded-full flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-sm text-gray-600">katibanamiamia@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Location</h3>
                  <p className="text-sm text-gray-600">47 Counties, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-black mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a subject...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Book Order">Book Order</option>
                  <option value="Partnership">Partnership</option>
                  <option value="County Tour">County Tour</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Media">Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-[#A00D25] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                This will open your email client with a pre-filled message
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
