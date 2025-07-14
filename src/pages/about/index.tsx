import Image from 'next/image';
import React from 'react';
import HeroSection from '../../components/HeroSection';
import Link from 'next/link';

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
          <div className="flex items-center flex-col md:flex-row gap-10 bg-[#131015] rounded-2xl shadow-lg p-6 md:p-10">
            <div className="w-full md:w-[40%] flex-shrink-0 flex items-center justify-center h-64 md:h-[420px]">
              <Image
                src="/images/about-1.jpg"
                alt="What We Do"
                width={800}
                height={420}
                className="rounded-xl object-cover w-full h-full opacity-70 shadow-lg border border-[#222]"
              />
            </div>
            <div className="w-full md:w-[60%] flex-1 flex flex-col justify-center">
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
                  <span className="">✅</span>{' '}
                  <span className="text-[#F6E7B7]">Technology Agriculture Creater</span>{' '}
                  <span className="text-gray-300">— powering fair, transparent agri-trade</span>
                </li>
                <li>
                  <span className="">✅</span>{' '}
                  <span className="text-[#F6E7B7]">Technology Service Creater</span>{' '}
                  <span className="text-gray-300">— delivering smart digital solutions</span>
                </li>
                <li>
                  <span className="">✅</span>{' '}
                  <span className="text-[#F6E7B7]">Technology Property Creater</span>{' '}
                  <span className="text-gray-300">— making property buying & selling seamless</span>
                </li>
                <li>
                  <span className="">✅</span>{' '}
                  <span className="text-[#F6E7B7]">Technology Education Creater</span>{' '}
                  <span className="text-gray-300">— shaping tomorrow’s learners</span>
                </li>
                <li>
                  <span className="">✅</span>{' '}
                  <span className="text-[#F6E7B7]">Technology Skills Creater</span>{' '}
                  <span className="text-gray-300">
                    — equipping people with practical, job-ready skills
                  </span>
                </li>
              </ul>
              <Link
                href="/companies"
                className="border border-[#F6E7B7] text-[#F6E7B7] px-7 py-2 rounded-lg font-body text-center text-lg font-medium hover:bg-[#F6E7B7] hover:text-black transition-all duration-200"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="w-full py-16 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-end gap-8">
          {/* Right Side Block (Title + Card) */}
          <div className="w-full md:w-full flex flex-col items-end gap-4">
            {/* Name, Logo, Title */}
            <div className="flex flex-col w-full">
              <h2 className="text-4xl md:text-7xl font-extrabold font-serif-hero tracking-wider text-white mb-2 text-center md:text-right uppercase leading-tight">
                SAHIL R. VAIDYA
                <div className="flex items-center justify-end gap-2 w-full mb-2 font-normal">
                  <Image
                    src="/images/logo1.svg"
                    alt="TWC Logo"
                    width={100}
                    height={60}
                    className="mx-auto md:mx-0"
                  />
                  <div className="text-xl md:text-4xl font-bold font-mono tracking-normal text-white text-end md:text-right leading-tight">
                    Founder & CEO,
                    <br />
                    <span className="text-[#F6E7B7] text-2xl font-mono tracking-normal capitalize">
                      Technology World Creater Org.
                    </span>
                  </div>
                </div>
              </h2>
            </div>

            {/* Gradient Card: Image + Description */}
            <div className="w-full">
              <div className="relative overflow-visible flex flex-col md:flex-row justify-between items-start bg-gradient-to-r from-[#21022E] via-[#230F3C] to-[#0E040B] rounded-t-[3em] shadow-lg p-6 md:p-8 border border-[#3a235a] w-full gap-6">
                {/* Image - on left, absolutely positioned on desktop, static on mobile */}
                <div className="md:hidden w-full flex justify-center mb-6">
                  <Image
                    src="/images/sahil.png"
                    alt="Sahil R. Vaidya"
                    width={220}
                    height={300}
                    className="rounded-xl object-cover shadow-2xl max-w-xs w-full h-auto"
                    priority
                  />
                </div>
                <div className="hidden md:block absolute -bottom-[0%] left-10 z-10">
                  <Image
                    src="/images/sahil.png"
                    alt="Sahil R. Vaidya"
                    width={740}
                    height={1040}
                    className="rounded-xl object-cover max-w-sm w-full h-[33em]"
                    priority
                  />
                </div>
                {/* Description - on right */}
                <div className="w-full md:ml-auto md:w-[65%] text-end z-20 flex items-center justify-center h-40">
                  <p className="text-white text-base md:text-xl text-center md:text-center leading-loose">
                    As CEO and Founder of TWC, I lead a multinational technology analysenment
                    company committed to{' '}
                    <span className="text-[#F6E7B7] font-semibold">bridging industries</span> and{' '}
                    <span className="text-[#F6E7B7] font-semibold">empowering innovation</span>{' '}
                    through <span className="text-[#F6E7B7] font-semibold">data</span>,{' '}
                    <span className="text-[#F6E7B7] font-semibold">technology</span>, and{' '}
                    <span className="text-[#F6E7B7] font-semibold">strategic insight</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="w-full py-16 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
          {/* Vision Row */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-4">
                OUR VISION
              </h2>
              <Image
                src="/images/ourvision.png"
                alt="Our Vision"
                width={80}
                height={80}
                className="mb-4"
              />
            </div>
            <hr className="w-full border-t border-gray-700 mb-6" />
            <p className="text-gray-200 font-body text-lg md:text-xl w-full">
              To lead the global technology revolution by delivering cutting-edge, sector-specific
              innovations that combine deep analysis with real-world solutions. Through our unique
              Analysenment Model, we aim to transform traditional industries, empowering businesses
              and communities to grow smarter, faster, and more sustainably.
            </p>
          </div>

          {/* Mission Row */}
          <div className="flex flex-col items-end">
            <div className="flex items-center justify-between w-full">
              <Image
                src="/images/ourmission.png"
                alt="Our Mission"
                width={80}
                height={80}
                className="mb-4"
              />
              <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-4">
                OUR MISSION
              </h2>
            </div>
            <hr className="w-full border-t border-gray-700 mb-6" />
            <p className="text-gray-200 font-body text-lg md:text-xl w-full">
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
      <section className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <h2 className="text-3xl md:text-4xl font-serif-hero text-[#F6E7B7] font-bold mb-2">
              Meet the Visionaries Behind TWC
            </h2>
            <p className="text-gray-200 font-body text-base md:text-lg max-w-xl mb-4 text-center md:text-left">
              A passionate group of innovators and strategists, driven to turn bold ideas into
              transformative tech solutions.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end gap-2">
            <h2 className="text-3xl md:text-7xl font-serif-hero text-white font-bold mb-2 text-center md:text-right">
              OUR TEAM
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/images/logo.png" alt="TWC Logo" width={300} height={60} />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/team.png"
              alt="Our Team"
              width={1200}
              height={300}
              className="object-contain w-full rounded-lg z-10"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-gradient-to-t from-yellow-200/80 to-transparent rounded-b-lg z-0"
              style={{ filter: 'blur(2px)' }}
            />
          </div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-serif-hero text-[#F6E7B7] font-bold mb-4">
            OUR PROMISE
          </h2>
          <p className="text-gray-200 py-6 text-base md:text-xl w-full text-center md:text-center">
            No matter who you are — a startup founder, a small farmer, a property buyer, a student,
            or an enterprise, we’re here to help you grow smarter, scale bigger, and innovate beyond
            limits.
          </p>
          <div className="text-xl md:text-3xl font-bold text-[#F6E7B7] mb-6">
            Together, let’s build what’s next.
          </div>
          <Link
            href="/companies"
            className="inline-block border border-[#F6E7B7] text-[#F6E7B7] px-8 py-3 rounded-full hover:bg-[#F6E7B7] hover:text-black transition font-semibold text-lg md:text-xl"
          >
            Explore Our companies
          </Link>
        </div>
      </section>
    </div>
  );
}
