'use client';

import React from 'react';
import HeroSection from '../../components/HeroSection';
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '../../components/ContactForm';

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
              <div className="font-semibold font-body text-xl  text-white">
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
              <div className="font-semibold font-body text-xl  text-white">+91 9373133010</div>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-1 h-full items-center gap-3 bg-[#18111a] rounded-xl px-6 py-5 justify-start">
            <span className="bg-blue-600/20 p-2 rounded-full">
              <Mail className="text-blue-400" size={28} />
            </span>
            <div className="text-left break-all">
              <div className="font-semibold font-body text-xl  text-white">
                support@
                <wbr />
                technologyworldcreater.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JOIN US SECTION */}
      <section className="w-full py-14 mt-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-section-heading text-[#F6E7B7] font-bold mb-4 uppercase tracking-wide">
            JOIN US IN BUILDING THE FUTURE
          </h2>
          <p className="max-w-7xl mx-auto text-base md:text-lg font-body text-gray-200 font-normal tracking-wide mb-2">
            TEC is revolutionizing learning with the world&apos;s first global education framework
            built on the Analysenment Concept: a model that focuses on personalized understanding,
            critical thinking, and real-world application
          </p>
        </div>
      </section>

      {/* LET'S CONNECT SECTION */}
      <section className="w-full py-10 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center bg-[#18111a] rounded-2xl shadow-lg p-6 md:p-10">
          {/* Contact Form */}
          <ContactForm title="LET'S CONNECT" />
          {/* Logo and Socials */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 mt-10 md:mt-0">
            <Image src="/images/logo.png" alt="TWC Logo" width={480} height={80} className="mb-2" />

            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/technology_world_creater/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="Instagram"
              >
                <span className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 md:p-3">
                  <Instagram size={32} strokeWidth={1.5} className="text-white md:w-10 md:h-10" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/technology-world-creater/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <span className="inline-block rounded-full bg-[#1877F3] p-2 md:p-3">
                  <Linkedin size={32} strokeWidth={1.5} className="text-white md:w-10 md:h-10" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/@technologyworldcreater"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="YouTube"
              >
                <span className="inline-block rounded-full bg-red-600 p-2 md:p-3">
                  <Youtube size={32} strokeWidth={1.5} className="text-white md:w-10 md:h-10" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
