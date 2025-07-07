import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-5xl font-bold text-yellow-300 mb-4">About Us</h1>
        <p className="text-lg mb-12 max-w-3xl">
          At TWC, we don’t just analyze trends we create them. We believe that when technology,
          data, and human insight come together, businesses scale smarter, industries grow faster,
          and people’s lives truly improve.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/about-1.jpg"
              alt="What We Do"
              width={600}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">WHAT WE DO</h2>
            <p className="mb-2 text-gray-200">
              From revolutionizing how farmers sell their produce, to building digital solutions,
              property platforms, education hubs, and skill development programs—every TWC venture
              is designed to bridge gaps, create opportunities, and unlock growth.
            </p>
            <ul className="mb-4 space-y-1 text-green-400">
              <li>✔ Technology Agriculture Creater — powering fast, transparent agri-trade</li>
              <li>✔ Technology Service Creater — delivering smart digital solutions</li>
              <li>✔ Technology Property Creater — making property buying & selling seamless</li>
              <li>✔ Technology Education Creater — shaping tomorrow’s learners</li>
              <li>
                ✔ Technology Skills Creater — equipping people with practical, job-ready skills
              </li>
            </ul>
            <button className="border border-yellow-300 text-yellow-300 px-6 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition w-max">
              Know more
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold">SAHIL R. VAIDYA</h2>
            <div className="text-yellow-300 font-semibold mb-2">
              Founder & CEO, Technology World Creater Org.
            </div>
            <p className="bg-[#2a183a] rounded-lg p-4 text-gray-200">
              As CEO and Founder of TWC, I lead a multinational technology analysenment company
              committed to{' '}
              <span className="text-yellow-300">
                bridging industries and empowering innovation through data, technology, and
                strategic insight.
              </span>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/sahil.png"
              alt="Sahil R. Vaidya"
              width={300}
              height={400}
              className="rounded-lg object-contain max-h-96"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">
              OUR VISION <span>🌞</span>
            </h2>
            <p className="text-gray-200">
              To lead the global technology revolution by delivering cutting-edge, sector-specific
              innovations that combine deep analysis with real-world solutions. Through our unique
              Analysenment Model, we aim to transform traditional industries, empowering businesses
              and communities to grow smarter, faster, and more sustainably.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">
              OUR MISSION <span>⛰️</span>
            </h2>
            <p className="text-gray-200">
              Founded on 2nd February 2020, Technology World Creater (TWC) is dedicated to building
              innovative, analysis-driven platforms that create meaningful impact across diverse
              sectors. From core tech research to agriculture, education, skills, services, and
              property tech, our mission is to revolutionize how industries operate through
              technology and insight by 2027.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Meet the Visionaries Behind TWC
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/team.png"
                alt="Our Team"
                width={600}
                height={250}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">OUR TEAM</h3>
              <div className="mb-2">
                <Image src="/logo.svg" alt="TWC Logo" width={120} height={40} className="mb-2" />
              </div>
              <p className="text-gray-200">
                A passionate group of innovators and strategists, driven to turn bold ideas into
                transformative tech solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">OUR PROMISE</h2>
          <p className="text-gray-200 mb-4 max-w-2xl mx-auto">
            No matter who you are—a startup founder, a small farmer, a property buyer, a student, or
            an enterprise, we’re here to help you grow smarter, scale bigger, and innovate beyond
            limits.
          </p>
          <div className="text-xl font-semibold text-yellow-300 mb-4">
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
