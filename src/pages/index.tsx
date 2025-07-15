import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  X as LucideX,
  PlayCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  // --- Testimonial slider logic ---
  const testimonials = [
    {
      stars: 5,
      text: '"TWC\'s platform made it so easy to launch industry solutions. The team\'s vision and support are unmatched."',
      author: '— Priya Sharma',
    },
    {
      stars: 5,
      text: '"We didn\'t just pick a tech — they became our growth partners. TWC\'s insights and agility helped us launch faster and scale smarter."',
      author: '— Akash Mehra',
    },
    {
      stars: 5,
      text: '"TWC\'s team is super responsive and always brings fresh ideas to the table. The results speak for themselves."',
      author: '— Rakesh Singh',
    },
    // Add more testimonials here if needed
  ];
  const visibleCount = 3;
  // Duplicate testimonials for seamless infinite scroll
  const sliderTestimonials = [...testimonials, ...testimonials];
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  useEffect(() => {
    let animationFrame: number | undefined;
    const speed = 0.5; // px per frame, adjust for faster/slower
    const animate = () => {
      setOffset((prev) => {
        // Each card is 100%/3 of the container width
        const cardWidth = sliderRef.current
          ? (sliderRef.current as HTMLDivElement).offsetWidth / visibleCount
          : 0;
        const totalWidth = cardWidth * testimonials.length;
        let next = prev + speed;
        if (next >= totalWidth) next = 0;
        return next;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame!);
  }, [testimonials.length]);

  // --- Industry video slider logic ---
  const industryVideos = [
    {
      src: '/videos/video1.mp4',
      thumbnail: '/images/company0.jpg',
      alt: 'Innovation in Aquaponics',
      title: 'Innovation in Aquaponics',
      date: 'May 2025 • 12m',
    },
    {
      src: '/videos/video1.mp4',
      thumbnail: '/images/company1.png',
      alt: 'Disrupting Traditional Farming',
      title: 'Disrupting Traditional Farming',
      date: 'March 2025 • 15m',
    },
    {
      src: '/videos/video1.mp4',
      thumbnail: '/images/company2.png',
      alt: 'Vertical Farming Solutions',
      title: 'Vertical Farming Solutions',
      date: 'June 2025 • 20m',
    },
    {
      src: '/videos/video1.mp4',
      thumbnail: '/images/company0.jpg',
      alt: 'Innovation in Aquaponics',
      title: 'Innovation in Aquaponics',
      date: 'May 2025 • 12m',
    },
    {
      src: '/videos/video1.mp4',
      thumbnail: '/images/company1.png',
      alt: 'Disrupting Traditional Farming',
      title: 'Disrupting Traditional Farming',
      date: 'March 2025 • 15m',
    },
    {
      src: '/videos/video1.mp4',
      thumbnail: '/images/company2.png',
      alt: 'Vertical Farming Solutions',
      title: 'Vertical Farming Solutions',
      date: 'June 2025 • 20m',
    },
  ];
  // --- New: Horizontal scroll/drag logic ---
  const industryScrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = industryScrollRef.current?.scrollLeft || 0;
    industryScrollRef.current?.classList.add('scrolling');
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const x = e.clientX;
    const walk = x - startX.current;
    if (industryScrollRef.current) {
      industryScrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    industryScrollRef.current?.classList.remove('scrolling');
  };

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!industryScrollRef.current) return;
    const card = industryScrollRef.current.querySelector('.industry-card');
    if (!card) return;
    const cardWidth = (card as HTMLElement).offsetWidth + 32; // 32px gap-8
    industryScrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen w-full font-body">
      {/* HERO BACKGROUND - fixed, visuals only */}
      <section className="sticky top-0 h-screen w-full bg-gradient-to-b from-black via-[#18111a] to-black z-0 overflow-hidden pointer-events-none select-none">
        {/* HERO VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* HERO BACKGROUND IMAGES */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none">
          <Image
            src="/images/herobackground.png"
            alt="Hero Background 1"
            fill
            className="object-cover opacity-80"
            priority
          />
          <Image
            src="/images/TWC.png"
            alt="TWC Logo Background Layer"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
          <span className="text-[16vw] font-extrabold font-serif-hero text-white/10 tracking-tighter select-none">
            TWC
          </span>
        </div>
        <div className="absolute inset-1 z-10 flex items-center justify-center">
          <Image
            src="/images/TWC.png"
            alt="TWC Logo Background"
            width={800}
            height={400}
            className="w-[60vw] max-w-3xl opacity-20 mx-auto"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 z-10">
          <div className="relative z-20 w-full">
            <h1 className="text-5xl md:text-7xl font-serif-hero text-[#F6E7B7] font-bold mb-2 leading-tight">
              India&apos;s Only Multinational
            </h1>
            <h2 className="text-2xl md:text-[2.7em] font-body font-semibold text-white mb-4 tracking-wide uppercase">
              TECHNOLOGY ANALYSEMENT COMPANY
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6 font-body max-w-4xl mx-auto">
              We are a multinational technology analysment company helping businesses, startups, and
              emerging markets unlock their full potential.
            </p>
            <Link
              href="/about"
              className="inline-block border border-white text-white px-8 py-3 rounded-lg underline text-lg font-semibold hover:bg-white hover:text-black transition mt-2"
            >
              Explore
            </Link>
          </div>
        </section>
      </section>
      {/* MAIN CONTENT (scrolls above hero background) */}
      <div className="relative z-10">
        <main className="flex-grow">
          {/* SOCIAL + TWC BAR - Overlapping section */}
          <section className="relative w-full py-6 md:py-8 bg-black/90 backdrop-blur-sm border border-white/10 z-20 -mt-32">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-2xl px-6">
              {/* Left: TWC, tagline, description */}
              <div className="flex-1 flex flex-col items-start justify-center text-left gap-2 min-w-[300px]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-serif-hero font-normal text-white font-orbitron">
                    TWC
                  </span>
                  <span className="text-base md:text-lg lg:text-2xl font-semibold text-[#F6E7B7] md:ml-2">
                    Where bold ideas meet powerful execution.
                  </span>
                </div>
                <div className="text-gray-300 text-sm md:text-base lg:text-lg italic font-body mt-2 w-full md:w-[65%]">
                  Across every industry, we make it possible to grow intelligently, scale
                  seamlessly, and innovate boldly, with technology, expertise, and collaboration at
                  the core.
                </div>
              </div>
              {/* Right: Social Links */}
              <div className="flex flex-col items-center md:items-start gap-3 mt-6 md:mt-0 min-w-[220px]">
                <span className="text-gray-200 text-lg md:text-xl font-body mb-1 font-semibold">
                  Social Links:
                </span>
                <div className="flex items-center gap-4 md:gap-6">
                  <a href="#" className="hover:scale-110 transition" aria-label="Instagram">
                    <span className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 md:p-3">
                      <Instagram
                        size={32}
                        strokeWidth={1.5}
                        className="text-white md:w-10 md:h-10"
                      />
                    </span>
                  </a>
                  <a href="#" className="hover:scale-110 transition" aria-label="Facebook">
                    <span className="inline-block rounded-full bg-[#1877F3] p-2 md:p-3">
                      <Facebook
                        size={32}
                        strokeWidth={1.5}
                        className="text-white md:w-10 md:h-10"
                      />
                    </span>
                  </a>
                  <a href="#" className="hover:scale-110 transition" aria-label="X">
                    <span className="inline-block rounded-full bg-black p-2 md:p-3">
                      <LucideX size={32} strokeWidth={1.5} className="text-white md:w-10 md:h-10" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* WHO ARE WE - Overlapping section */}
          <section className="relative w-full py-12 md:py-16 bg-black/95 backdrop-blur-sm border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Left: Heading and paragraphs */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-hero text-[#F6E7B7] font-normal mb-6 md:mb-8 text-left">
                  WHO ARE WE ?
                </h2>
                <p className="text-gray-200 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                  At TWC (Technology World Creater), we&apos;re more than just a company, we&apos;re
                  an ecosystem of innovation, strategy, and technology that transforms ideas into
                  impact.
                </p>
                <p className="text-gray-200 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                  We bring together diverse industries under one vision: to bridge gaps, spark
                  growth, and empower people and businesses through cutting-edge solutions. From
                  revolutionizing agriculture and property markets to advancing digital services,
                  education, and skill development, we create platforms that solve real-world
                  challenges and unlock new opportunities.
                </p>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  Our team combines global insight with local understanding, a startup mindset with
                  strategic foresight, and a people-first approach with future-ready tech. Together,
                  we don&apos;t just analyse trends, we create them, so you can thrive in an
                  ever-evolving world.
                </p>
              </div>
              {/* Right: Cards */}
              <div className="flex-1 flex flex-col gap-4 md:gap-6 w-full max-w-xl text-center">
                <div className="border border-[#F6E7B7] rounded-xl p-4 md:p-6 bg-black/50 backdrop-blur-sm">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-[#F6E7B7] mb-1">
                    5+ Innovative Verticals :
                  </div>
                  <div className="text-gray-200 text-sm md:text-base lg:text-lg">
                    Agriculture, Property, Services, Education, Skills
                  </div>
                </div>
                <div className="border border-[#F6E7B7] rounded-xl p-4 md:p-6 bg-black/50 backdrop-blur-sm">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-[#F6E7B7] mb-1">
                    Startup-Driven DNA:
                  </div>
                  <div className="text-gray-200 text-sm md:text-base lg:text-lg">
                    From concept to scale
                  </div>
                </div>
                <div className="border border-[#F6E7B7] rounded-xl p-4 md:p-6 bg-black/50 backdrop-blur-sm">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-[#F6E7B7] mb-1">
                    Data-Backed Decisions
                  </div>
                  <div className="text-gray-200 text-sm md:text-base lg:text-lg">
                    Technology, analysis, and strategy in every solution
                  </div>
                </div>
                <div className="border border-[#F6E7B7] rounded-xl p-4 md:p-6 bg-black/50 backdrop-blur-sm">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-[#F6E7B7] mb-1">
                    Impactful Partnerships
                  </div>
                  <div className="text-gray-200 text-sm md:text-base lg:text-lg">
                    Building value for communities and industries alike
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OUR COMPANIES - Overlapping section */}
          <section className="relative w-full py-12 bg-gradient-to-b from-black/90 via-[#18111a]/90 to-black/90 backdrop-blur-sm border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-5xl font-serif-hero text-[#F6E7B7] font-normal mb-12 text-center tracking-wider">
                OUR COMPANIES
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-6 w-full">
                {/* TAC */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-green-400 flex items-center justify-center px-4 py-4">
                  <Image
                    src="/images/logo1.png"
                    alt="TAC"
                    width={260}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* TSC */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-400 flex items-center justify-center px-4 py-4">
                  <Image
                    src="/images/logo2.png"
                    alt="TSC"
                    width={260}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* TPC */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-700 flex items-center justify-center px-4 py-4">
                  <Image
                    src="/images/logo3.png"
                    alt="TPC"
                    width={260}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* TSC Skills */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-yellow-400 flex items-center justify-center px-4 py-4">
                  <Image
                    src="/images/logo4.png"
                    alt="TSC Skills"
                    width={260}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* TEC */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-400 flex items-center justify-center px-4 py-4">
                  <Image
                    src="/images/logo5.png"
                    alt="TEC"
                    width={260}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/companies"
                  className="inline-block border border-white text-white px-8 py-3 rounded-lg underline text-lg font-semibold hover:bg-white/30 hover:text-white transition mt-2"
                >
                  Know More
                </Link>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US - Overlapping section */}
          <section className="relative w-full py-16 bg-black/95 backdrop-blur-sm border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-normal mb-8">
                WHY CHOOSE US?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="relative rounded-2xl overflow-hidden p-[2px]">
                  <div className="why-card-animate border-none rounded-2xl h-full w-full bg-[#18111a]/80 backdrop-blur-sm p-6">
                    <Image
                      src="/images/eye.png"
                      width={48}
                      height={48}
                      alt="Eye Icon"
                      className="mb-3"
                    />
                    <div className="text-lg md:text-xl font-bold text-[#F6E7B7] mb-1">
                      Multinational Vision, Local Execution
                    </div>
                    <div className="text-gray-300 text-base">
                      TWC operates with a global outlook but remains rooted in local realities. We
                      understand regional markets deeply, enabling us to deliver solutions that are
                      globally scalable yet locally relevant.
                    </div>
                  </div>
                  <span className="why-card-border-gradient why-delay-0"></span>
                </div>
                {/* Card 2 */}
                <div className="relative rounded-2xl overflow-hidden p-[2px]">
                  <div className="why-card-animate border-none rounded-2xl h-full w-full bg-[#18111a]/80 backdrop-blur-sm p-6 flex flex-col items-start">
                    <Image
                      src="/images/brain.png"
                      width={48}
                      height={48}
                      alt="Brain Icon"
                      className="mb-3"
                    />
                    <div className="text-lg md:text-xl font-bold text-[#F6E7B7] mb-1 text-start">
                      Data-Driven Strategic Intelligence
                    </div>
                    <div className="text-gray-300 text-base text-start">
                      Every decision we make is backed by deep data analysis and market insight. We
                      turn raw data into actionable strategies that help businesses stay ahead of
                      trends and competition.
                    </div>
                  </div>
                  <span className="why-card-border-gradient why-delay-1"></span>
                </div>
                {/* Card 3 */}
                <div className="relative rounded-2xl overflow-hidden p-[2px]">
                  <div className="why-card-animate border-none rounded-2xl h-full w-full bg-[#18111a]/80 backdrop-blur-sm p-6 flex flex-col items-start">
                    <Image
                      src="/images/roket.png"
                      width={48}
                      height={48}
                      alt="Rocket Icon"
                      className="mb-3"
                    />
                    <div className="text-lg md:text-xl font-bold text-[#F6E7B7] mb-1 text-start">
                      Startup Accelerator Mindset
                    </div>
                    <div className="text-gray-300 text-base text-start">
                      Unlike traditional consultancies, we work hands-on with early-stage startups
                      and business ideas—helping them evolve from concept to market with speed,
                      clarity, and innovation.
                    </div>
                  </div>
                  <span className="why-card-border-gradient why-delay-2"></span>
                </div>
                {/* Card 4 */}
                <div className="relative rounded-2xl overflow-hidden p-[2px]">
                  <div className="why-card-animate border-none rounded-2xl h-full w-full bg-[#18111a]/80 backdrop-blur-sm p-6 flex flex-col items-start">
                    <Image
                      src="/images/expert.png"
                      width={48}
                      height={48}
                      alt="Expert Icon"
                      className="mb-3"
                    />
                    <div className="text-lg md:text-xl font-bold text-[#F6E7B7] mb-1 text-start">
                      Cross-Industry Technological Expertise
                    </div>
                    <div className="text-gray-300 text-base text-start">
                      From Agri-Tech and FinTech to Edu-Tech and beyond, our team brings
                      domain-specific expertise and tech foresight to every challenge making us
                      versatile, adaptable, and forward-thinking.
                    </div>
                  </div>
                  <span className="why-card-border-gradient why-delay-3"></span>
                </div>
              </div>
              <style jsx>{`
                .why-card-border-gradient {
                  position: absolute;
                  inset: 0;
                  z-index: 1;
                  border-radius: 1rem;
                  pointer-events: none;
                  border: 2px solid transparent;
                  background: linear-gradient(
                    270deg,
                    rgba(34, 197, 94, 0.6),
                    rgba(253, 224, 71, 0.6),
                    rgba(209, 213, 219, 0.6),
                    rgba(34, 197, 94, 0.6)
                  );
                  background-size: 600% 600%;
                  animation: whyBorderMoveGradient 6s linear infinite;
                  opacity: 0.9;
                }
                .why-delay-0 {
                  animation-delay: 0s !important;
                }
                .why-delay-1 {
                  animation-delay: 1.5s !important;
                }
                .why-delay-2 {
                  animation-delay: 3s !important;
                }
                .why-delay-3 {
                  animation-delay: 4.5s !important;
                }
                @keyframes whyBorderMoveGradient {
                  0% {
                    background-position: 0% 50%;
                  }
                  100% {
                    background-position: 100% 50%;
                  }
                }
                .why-card-animate {
                  position: relative;
                  z-index: 2;
                }
              `}</style>
            </div>
          </section>

          {/* INSIDE INDUSTRY: EXPERT TALKS & STORIES - Overlapping section */}
          <section className="relative w-full py-16 bg-gradient-to-b from-black/90 via-[#18111a]/90 to-black/90 backdrop-blur-sm border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="w-full mx-auto py-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
                {/* Left: Heading */}
                <div
                  className="w-full md:w-auto text-left mb-2 md:mb-5"
                  style={{
                    width: '100%',
                    ...(typeof window !== 'undefined' && window.innerWidth >= 768
                      ? { width: '40%' }
                      : {}),
                  }}
                >
                  <h2 className="text-4xl md:text-4xl lg:text-5xl font-serif-hero font-normal text-white leading-tight">
                    INSIDE INDUSTRY:
                  </h2>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-serif-hero font-normal text-[#F6E7B7] mt-2">
                    EXPERT TALKS & STORIES
                  </div>
                </div>
                {/* Right: Description */}
                <div
                  className="w-full md:w-auto flex flex-col items-start md:items-start gap-2"
                  style={{
                    width: '100%',
                    ...(typeof window !== 'undefined' && window.innerWidth >= 768
                      ? { width: '60%' }
                      : {}),
                  }}
                >
                  <div className="text-sm md:text-base font-semibold text-[#F6E7B7]">
                    Explore powerful conversations, bold ideas, and industry-shaping
                    insights—straight from the minds of changemakers.
                  </div>
                  <div className="text-sm md:text-base text-white">
                    Through our exclusive video series, we bring you expert discussions, founder
                    journeys, and innovation stories that are redefining how industries think and
                    grow.
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-8">
                <div
                  ref={industryScrollRef}
                  className="flex gap-8 items-center overflow-x-auto scrollbar-hide cursor-grab select-none"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  {industryVideos.map((video, idx) => (
                    <div
                      key={idx}
                      className="industry-card bg-[#18111a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg w-[300px] md:w-[400px] flex-shrink-0 group relative flex flex-col border border-white/10"
                    >
                      <div className="relative w-full h-48">
                        {playingIndex === idx ? (
                          <video
                            src={video.src}
                            controls
                            autoPlay
                            className="w-full h-full object-cover bg-black rounded-t-xl"
                            onEnded={() => setPlayingIndex(null)}
                          />
                        ) : (
                          <>
                            <Image
                              src={video.thumbnail}
                              alt={video.alt}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover rounded-t-xl"
                            />
                            <button
                              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setPlayingIndex(idx)}
                              aria-label="Play video"
                            >
                              <PlayCircle size={64} className="text-white drop-shadow-lg mb-2" />
                              <span className="text-white text-lg font-bold">Play</span>
                            </button>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="font-bold text-lg text-white mb-1">{video.title}</div>
                        <div className="text-gray-400 text-sm">{video.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href="/companies"
                  className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white/30 hover:text-white transition font-semibold text-base"
                >
                  Explore all
                </Link>
                <div>
                  <button
                    onClick={() => scrollByCard('left')}
                    aria-label="Previous"
                    className="hover:scale-110 transition flex-shrink-0 mr-4"
                    style={{ height: '100%' }}
                  >
                    <ArrowLeftCircle size={48} className="text-white" />
                  </button>
                  <button
                    onClick={() => scrollByCard('right')}
                    aria-label="Next"
                    className="hover:scale-110 transition flex-shrink-0 ml-4"
                    style={{ height: '100%' }}
                  >
                    <ArrowRightCircle size={48} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SUCCESS STORIES - Overlapping section */}
          <section className="relative w-full py-16 bg-black/95 backdrop-blur-sm border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-normal mb-8 text-center">
                SUCCESS STORIES
              </h2>
              <div className="overflow-hidden" ref={sliderRef}>
                <div
                  className="flex gap-8 transition-none"
                  style={{
                    width: `${(sliderTestimonials.length / visibleCount) * 100}%`,
                    transform: `translateX(-${offset}px)`,
                  }}
                >
                  {sliderTestimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-[#18111a]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col gap-3 w-[300px] md:w-[400px] flex-shrink-0 border border-white/10"
                    >
                      <div className="flex gap-1 text-[#F6E7B7] text-xl">
                        {'★★★★★'.slice(0, t.stars)}
                      </div>
                      <div className="text-white font-semibold">{t.text}</div>
                      <div className="text-gray-400 text-sm">{t.author}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT ACTIONS SECTION */}
          <section className="w-full py-12 bg-gradient-to-b from-black/90 via-[#18111a]/90 to-black/90 backdrop-blur-sm border-t border-white/10 z-20 rounded-2xl">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-normal mb-4 text-center">
                HAVE A BOLD IDEA? <span className="text-white">LET’S MAKE IT REAL.</span>
              </h2>
              <p className="text-gray-200 text-lg md:text-xl mb-10 text-center max-w-5xl">
                Whether you&apos;re a startup looking for direction, a business seeking smarter
                strategy, or a partner ready to scale innovation, we&apos;re here to make it happen.
                Reach out and let&apos;s build something extraordinary together.
              </p>
              <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 mb-8">
                {/* Let's Talk Card */}
                <div className="flex-1 border border-white rounded-xl p-8 flex flex-col items-center bg-black/40">
                  <Image
                    src="/images/letstalk.png"
                    alt="Let's Talk"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <span className="text-2xl font-bold text-white mb-2">Let’s Talk</span>
                </div>
                {/* Schedule a Consultation Card */}
                <div className="flex-1 border border-white rounded-xl p-8 flex flex-col items-center bg-black/40">
                  <Image
                    src="/images/shedule.png"
                    alt="Schedule a Consultation"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <span className="text-2xl font-bold text-white mb-2">
                    Schedule a Consultation
                  </span>
                </div>
                {/* Partner With Us Card */}
                <div className="flex-1 border border-white rounded-xl p-8 flex flex-col items-center bg-black/40">
                  <Image
                    src="/images/partner.png"
                    alt="Partner With Us"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <span className="text-2xl font-bold text-white mb-2">Partner With Us</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA + SUBSCRIBE - Overlapping section */}
          <section className="relative w-full py-2 bg-gradient-to-b from-black/90 via-[#18111a]/90 to-black/90 backdrop-blur-sm border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-[340px] md:min-h-[420px]">
              {/* Left: Image */}
              <div className="flex-shrink-0 w-full md:w-auto md:basis-[35%] flex justify-center md:justify-start items-center">
                <div className="relative w-[420px] h-[420px] md:w-[440px] md:h-[420px] mx-auto md:mx-0">
                  <Image
                    src="/images/update.png"
                    alt="Subscribe Visual"
                    fill
                    className="object-cover rounded-lg w-full h-full transform scale-x-[-1]"
                    priority
                  />
                </div>
              </div>
              {/* Right: Content */}
              <div className="flex-1 basis-full md:basis-[70%] flex flex-col items-center md:items-start text-center md:text-left justify-center h-full">
                <h2 className="text-3xl md:text-4xl font-serif-hero text-white font-normal mb-4 tracking-wide uppercase">
                  SUBSCRIBE TO GET UPDATES
                </h2>
                <div className="text-lg md:text-xl text-[#F6E7B7] font-medium mb-6">
                  Get industry insights & updates in your inbox
                </div>
                <div className="w-full max-w-7xl flex items-center gap-10">
                  <form className="flex-1 flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
                    <span className="pl-4 pr-2 text-gray-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="lucide lucide-mail"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 6-8.97 6.66a2 2 0 0 1-2.06 0L2 6" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      placeholder="Ex. yourname@company.com"
                      className="flex-1 px-2 py-4 text-lg text-gray-700 bg-transparent focus:outline-none border-none"
                      style={{ minWidth: 0 }}
                    />
                  </form>
                  <button
                    type="submit"
                    className="bg-white border-4 text-black hover:text-white border-[#333] hover:bg-yellow-300 transition w-16 h-16 rounded-full flex items-center justify-center shadow-md -ml-4 z-10"
                    aria-label="Subscribe"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lucide lucide-arrow-right"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION - Final section */}
          <section className="relative w-full py-16 bg-black/95 backdrop-blur-sm border-t border-white/10 mb-0 z-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
                FAQS
              </h2>
              <div className="divide-y divide-gray-700 bg-[#18111a]/80 backdrop-blur-sm rounded-2xl border border-white/10">
                {[
                  {
                    q: 'What is Technology World Creater (TWC)?',
                    a: 'TWC is a multinational technology analysenment company helping businesses, startups, and emerging markets unlock their full potential.',
                  },
                  {
                    q: 'Which industries does TWC operate in?',
                    a: 'Agriculture, Property, Services, Education, Skills, and more.',
                  },
                  {
                    q: 'What makes TWC different from other tech companies?',
                    a: 'TWC combines deep analysis, local execution, and a global network to deliver real-world impact.',
                  },
                  {
                    q: 'What is Multinational Analysenment ?',
                    a: 'This is a sample answer for demonstration purposes.',
                  },
                  {
                    q: 'Is TWC open to investors or funding partnerships?',
                    a: 'Yes! We welcome bold partners who share our vision for innovation and impact.',
                  },
                  {
                    q: 'How can I join the TWC team or become a partner?',
                    a: 'This is a sample answer for demonstration purposes.',
                  },
                ].map((faq, i) => (
                  <details
                    key={i}
                    className="py-4 px-6 cursor-pointer group transition-all duration-300"
                  >
                    <summary className="font-bold text-lg text-[#F6E7B7] group-open:text-white transition flex items-center justify-between">
                      {faq.q}
                      <span className="ml-2 text-xl">+</span>
                    </summary>
                    <div className="text-gray-300 mt-2 text-base pl-2 transition-all duration-300 ease-in-out group-open:opacity-100 group-open:max-h-40 opacity-0 max-h-0 overflow-hidden">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
