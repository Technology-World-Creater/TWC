import Image from 'next/image';
import React from 'react';
import HeroSection from '../../components/HeroSection';

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* HERO SECTION */}
      <HeroSection
        title="About Us"
        description="At TWC, we don’t just analyze trends we create them. We believe that when technology, data, and human insight come together, businesses scale smarter, industries grow faster, and people’s lives truly improve."
      />

      {/* WHAT WE DO SECTION */}
      <section className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 bg-[#131015] rounded-2xl shadow-lg p-6 md:p-10">
            <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center h-64 md:h-[420px]">
              <Image
                src="/images/about-1.jpg"
                alt="What We Do"
                width={800}
                height={420}
                className="rounded-xl object-cover w-full h-full shadow-lg border border-[#222]"
              />
            </div>
            <div className="w-full md:w-1/2 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-section-heading text-[#F6E7B7] mb-4">
                WHAT WE DO
              </h2>
              <p className="text-gray-200 font-body text-base md:text-lg mb-3">
                From revolutionizing how farmers sell their produce, to building digital solutions,
                property platforms, education hubs, and skill development programs — every TWC
                venture is designed to bridge gaps, create opportunities, and unlock growth.
              </p>
              <p className="text-gray-200 font-body text-base md:text-lg mb-3 font-semibold">
                Today, our family of companies includes:
              </p>
              <ul className="mb-6 space-y-1 text-sm md:text-base">
                <li>
                  <span className="text-green-400">✔</span>{' '}
                  <span className="text-[#F6E7B7] font-semibold">
                    Technology Agriculture Creater
                  </span>{' '}
                  <span className="text-gray-300">— powering fair, transparent agri-trade</span>
                </li>
                <li>
                  <span className="text-green-400">✔</span>{' '}
                  <span className="text-[#F6E7B7] font-semibold">Technology Service Creater</span>{' '}
                  <span className="text-gray-300">— delivering smart digital solutions</span>
                </li>
                <li>
                  <span className="text-green-400">✔</span>{' '}
                  <span className="text-[#F6E7B7] font-semibold">Technology Property Creater</span>{' '}
                  <span className="text-gray-300">— making property buying & selling seamless</span>
                </li>
                <li>
                  <span className="text-green-400">✔</span>{' '}
                  <span className="text-[#F6E7B7] font-semibold">Technology Education Creater</span>{' '}
                  <span className="text-gray-300">— shaping tomorrow’s learners</span>
                </li>
                <li>
                  <span className="text-green-400">✔</span>{' '}
                  <span className="text-[#F6E7B7] font-semibold">Technology Skills Creater</span>{' '}
                  <span className="text-gray-300">
                    — equipping people with practical, job-ready skills
                  </span>
                </li>
              </ul>
              <button className="border border-[#F6E7B7] text-[#F6E7B7] px-7 py-2 rounded-lg font-body text-lg font-medium hover:bg-[#F6E7B7] hover:text-black transition-all duration-200">
                Know more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="w-full py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-end md:items-center gap-8 relative">
          {/* Founder Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-[400px] z-10">
            <Image
              src="/images/sahil.png"
              alt="Sahil R. Vaidya"
              width={340}
              height={440}
              className="rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>
          {/* Name, Logo, Title */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pl-8">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider text-white mb-2 text-center md:text-left uppercase leading-tight">
              SAHIL R. VAIDYA
            </h2>
            <div className="flex flex-col items-center md:items-start w-full mb-2">
              <Image
                src="/images/logo1.svg"
                alt="TWC Logo"
                width={60}
                height={60}
                className="mx-auto md:mx-0 mb-2"
              />
              <div className="text-2xl md:text-3xl font-bold text-white text-center md:text-left leading-tight">
                Founder & CEO,
              </div>
              <div className="text-xl md:text-2xl font-semibold text-[#e6c96c] text-center md:text-left leading-tight">
                Technology World Creater Org.
              </div>
            </div>
          </div>
        </div>
        {/* Gradient Card with Description */}
        <div className="max-w-5xl mx-auto px-4 mt-[-40px] md:mt-[-60px] relative z-0">
          <div className="bg-gradient-to-r from-[#2a183a] to-[#18111a] rounded-[2rem] md:rounded-[2.5rem] shadow-lg p-8 md:p-12 border border-[#3a235a]">
            <p className="text-white text-lg md:text-2xl text-center leading-relaxed">
              As CEO and Founder of TWC, I lead a multinational technology analysenment company
              committed to
              <span className="text-[#e6c96c] font-semibold"> bridging industries</span> and
              <span className="text-[#e6c96c] font-semibold"> empowering innovation</span> through
              <span className="text-[#e6c96c] font-semibold"> data</span>,
              <span className="text-[#e6c96c] font-semibold"> technology</span>, and
              <span className="text-[#e6c96c] font-semibold"> strategic insight</span>.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-[#18111a] rounded-2xl p-6 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span>🌞</span> OUR VISION
            </h3>
            <p className="text-gray-200 text-center md:text-left">
              To lead the global technology revolution by delivering cutting-edge, sector-specific
              innovations that combine deep analysis with real-world solutions. Through our unique
              Analysenment Model, we aim to transform traditional industries, empowering businesses
              and communities to grow smarter, faster, and more sustainably.
            </p>
          </div>
          <div className="bg-[#18111a] rounded-2xl p-6 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span>⛰️</span> OUR MISSION
            </h3>
            <p className="text-gray-200 text-center md:text-left">
              Founded on 2nd February 2020, Technology World Creater (TWC) is dedicated to building
              innovative, analysis-driven platforms that create meaningful impact across diverse
              sectors. From core tech research to agriculture, education, skills, services, and
              property tech, our mission is to revolutionize how industries operate through
              technology and insight by 2027.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 text-center md:text-left">
            Meet the Visionaries Behind TWC
          </h2>
          <div className="bg-[#18111a] rounded-2xl p-6 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <div className="w-full flex justify-center">
                <Image
                  src="/images/team.png"
                  alt="Our Team"
                  width={600}
                  height={250}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
            <div className="mt-4 text-gray-200 text-center">
              A passionate group of innovators and strategists, driven to turn bold ideas into
              transformative tech solutions.
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <section className="w-full py-12">
        <div className="max-w-3xl mx-auto px-4 bg-[#18111a] rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">OUR PROMISE</h2>
          <p className="text-gray-200 mb-4">
            No matter who you are—a startup founder, a small farmer, a property buyer, a student, or
            an enterprise, we’re here to help you grow smarter, scale bigger, and innovate beyond
            limits.
          </p>
          <div className="text-xl font-bold text-yellow-300 mb-4">
            Together, let’s build what’s next.
          </div>
          <button className="border border-yellow-300 text-yellow-300 px-6 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition">
            Explore Our Companies
          </button>
        </div>
      </section>
    </div>
  );
}
