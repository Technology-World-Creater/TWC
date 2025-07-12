import React from 'react';
import HeroSection from '../../components/HeroSection';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* HERO SECTION */}
      <HeroSection
        title="Contact Us"
        description="Have a question, an idea, or a collaboration in mind? We're here to listen and help you get started. Reach out to us anytime — we're just a message away."
      />
      {/* Contact Info Cards */}
      <div className="w-full flex justify-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl items-stretch">
          {/* Address */}
          <div className="flex flex-1 h-full items-center gap-3 bg-[#18111a] rounded-xl px-6 py-5 justify-start">
            <span className="bg-red-600/20 p-2 rounded-full">
              <MapPin className="text-red-400" size={28} />
            </span>
            <div className="text-left">
              <div className="font-bold font-body text-lg text-white">
                NARENDRA NAGAR, NAGPUR-MH
              </div>
            </div>
          </div>
          {/* Phone */}
          <div className="flex flex-1 h-full items-center gap-3 bg-[#18111a] rounded-xl px-6 py-5 justify-start">
            <span className="bg-green-600/20 p-2 rounded-full">
              <Phone className="text-green-400" size={28} />
            </span>
            <div className="text-left">
              <div className="font-bold font-body text-lg text-white">+91 9373133010</div>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-1 h-full items-center gap-3 bg-[#18111a] rounded-xl px-6 py-5 justify-start">
            <span className="bg-blue-600/20 p-2 rounded-full">
              <Mail className="text-blue-400" size={28} />
            </span>
            <div className="text-left break-all">
              <div className="font-bold font-body text-lg text-white">
                support@
                <wbr />
                technologyworldcreater.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JOIN US SECTION */}
      <section className="w-full py-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-4 uppercase tracking-wide">
            JOIN US IN BUILDING THE FUTURE
          </h2>
          <p className="max-w-7xl mx-auto text-base md:text-lg font-body text-gray-200 font-normal tracking-wide mb-2">
            TEC is revolutionizing learning with the world’s first global education framework built
            on the Analysenment Concept: a model that focuses on personalized understanding,
            critical thinking, and real-world application
          </p>
        </div>
      </section>

      {/* LET'S CONNECT SECTION */}
      <section className="w-full py-10 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center bg-[#18111a] rounded-2xl shadow-lg p-6 md:p-10">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-serif-hero text-[#F6E7B7] mb-6">LET’S CONNECT</h3>
            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300 w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300 w-full"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300 resize-none w-full"
              />
              <button
                type="submit"
                className="bg-[#F6E7B7] text-black font-semibold py-2 rounded mt-2 hover:bg-yellow-300 transition w-full"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Logo and Socials */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 mt-10 md:mt-0">
            <Image src="/images/logo.png" alt="TWC Logo" width={480} height={80} className="mb-2" />

            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-pink-400">
                <Instagram size={32} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-400">
                <Facebook size={32} />
              </a>
              <a href="#" aria-label="X" className="hover:text-green-400">
                <Twitter size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
