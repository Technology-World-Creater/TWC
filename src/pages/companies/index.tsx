import React from 'react';
import HeroSection from '../../components/HeroSection';
import CompanyCard from '../../components/CompanyCard';
import Image from 'next/image';

const companies = [
  {
    logo: '/images/logo1.png',
    logoAlt: 'TAC Logo',
    title: 'Technology Agriculture Creater',
    subtitle: 'Grow | Connect | Sustain',
    description:
      'At TAC, from a deep understanding of the challenges in traditional farming economies, we’ll build a digital marketplace where transparency, fairness, and efficiency prevail.',
    image: '/images/company1.png',
    imageAlt: 'TAC Marketplace',
    ctaText: 'Visit',
    ctaHref: 'https://technologyagriculturecreater.com/',
  },
  {
    logo: '/images/logo2.png',
    logoAlt: 'TSC Logo',
    title: 'Technology Service Creater',
    subtitle: 'Serve | Solve | Scale',
    description:
      'TSC (Technology Service Creater) offers a complete suite of digital services — from IT solutions, software, e-commerce, web and app design, to cloud, development, and automation.',
    image: '/images/company2.png',
    imageAlt: 'TSC Digital Solutions',
    ctaText: 'Visit',
    ctaHref: '#',
  },
  {
    logo: '/images/logo3.png',
    logoAlt: 'TPC Logo',
    title: 'Technology Property Creater',
    subtitle: 'Search | Buy | Simplify',
    description:
      'Technology Property Creater is revolutionizing the property landscape with smarter, digital property solutions, virtual property listings, and virtual sales 24x7.',
    image: '/images/company3.png',
    imageAlt: 'TPC Property Tech',
    status: 'Coming soon',
  },
  {
    logo: '/images/logo4.png',
    logoAlt: 'TSC Skills Logo',
    title: 'Technology Skills Creater',
    subtitle: 'Learn | Lead | Launch',
    description:
      'Technology Skills Creater is dedicated to bridging the skill gap by offering practical, future-ready tech education, empowering students, job seekers, and professionals to thrive in the digital era.',
    image: '/images/company4.png',
    imageAlt: 'TSC Skills',
    status: 'Coming soon',
  },
  {
    logo: '/images/logo5.png',
    logoAlt: 'TEC Logo',
    title: 'Technology Education Creater',
    subtitle: 'Learn | Lead | Launch',
    description:
      'TEC is revolutionizing learning with the world’s first global education framework built on the Analysenment Concept: a model that focuses on personalized understanding, critical thinking, and real-world application.',
    image: '/images/company5.png',
    imageAlt: 'TEC Education',
    status: 'Coming soon',
  },
];

export default function CompaniesPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* HERO SECTION */}
      <HeroSection
        title="Our Companies"
        description="At Technology World Creater (TWC), we believe innovation has no limits. That’s why we’ve built a family of sector-specific companies that combine technology, insight, and local impact — each designed to solve real-world challenges in its own unique way."
      />

      {/* COMPANIES LIST */}
      <div className="max-w-7xl mx-auto px-4">
        {companies.map((company, idx) => (
          <CompanyCard key={company.title} {...company} index={idx} />
        ))}
      </div>

      {/* JOIN US SECTION */}
      <section className="w-full py-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-section-heading text-[#F6E7B7] font-bold mb-4 uppercase tracking-wide">
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
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 items-center bg-[#18111a] rounded-2xl shadow-lg p-6 md:p-10">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-section-heading text-[#F6E7B7] mb-6">LET’S CONNECT</h3>
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
          {/* Image or Visual */}
          <div className="w-full md:w-1/2 flex-col items-center justify-center gap-6 mt-10 md:mt-0 md:flex hidden h-[25em]">
            <Image
              src="/images/company0.jpg"
              alt="Let's Connect"
              width={600}
              height={900}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
