import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram,
  Youtube,
  Linkedin,
  PlayCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  // --- Testimonial slider logic ---
  const testimonials: {
    stars: number;
    text: string;
    author: string;
    avatar: string;
    role: string;
  }[] = [
    {
      stars: 5,
      text: '"TWC\'s education platform made it so easy to learn industry-ready skills alongside my college degree. The mentors were supportive and the content practical!"',
      author: 'Nidhi Kulkarni',
      role: 'CEO, Bharat SmartTech',
      avatar: '/images/nidhi.png',
    },
    {
      stars: 5,
      text: '"TWC\'s team didn\'t just guide us — they became our growth partners. Their tech strategies helped us launch faster and scale across three states in just one year!"',
      author: 'Aditya Gahawar',
      role: 'Founder, ASC Architects',
      avatar: '/images/aditya.png',
    },
    {
      stars: 5,
      text: '"Joining TWC was a game-changer for my career. The real-world projects and personalized feedback helped me land my dream job in tech!"',
      author: 'Nikhil Singh',
      role: 'Software Engineer, Nagpur',
      avatar: '/images/nikhil.png',
    },
    {
      stars: 5,
      text: '"The networking opportunities at TWC opened doors I never imagined. I connected with industry leaders who guided my entrepreneurial journey."',
      author: 'Deepesh Agrawal',
      role: 'CEO, InnovateTech',
      avatar: '/images/Deepesh.png',
    },
    {
      stars: 5,
      text: '"TWC\'s hands-on workshops provided me with the confidence to tackle complex challenges in data science. I feel prepared for any role!"',
      author: 'Sneha Joshi',
      role: 'Data Scientist, Bangalore',
      avatar: '/images/Sneha.png',
    },
    {
      stars: 5,
      text: '"The curriculum at TWC is incredibly relevant to current market needs. I was able to apply what I learned directly to my business and see immediate results!"',
      author: 'Vikram Patel',
      role: 'Business Owner, Ahmedabad',
      avatar: '/images/Vikram.png',
    },
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
          <span className="text-[16vw] font-extrabold font-section-heading text-white/10 tracking-tighter select-none">
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
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-auto">
          <div className="relative z-20 w-full">
            <h1 className="text-5xl md:text-7xl font-section-heading text-[#F6E7B7] font-bold mb-2 leading-tight">
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
              className="inline-block border border-white text-white px-8 py-3 rounded-lg underline text-lg font-semibold hover:bg-white/30 hover:text-white transition mt-2"
            >
              Explore
            </Link>
          </div>
        </section>
      </section>
      {/* MAIN CONTENT (scrolls above hero background) */}
      <div className="relative z-10">
        {/* Main background image for all main content */}
        <Image
          src="/images/herobackground.png"
          alt="Main Content Background"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          style={{ objectFit: 'cover' }}
        />
        <main className="flex-grow relative z-10">
          {/* SOCIAL + TWC BAR - Overlapping section */}
          <section className="relative w-full py-6 md:py-8 border border-white/10 z-20 -mt-32">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-2xl px-6 relative z-10">
              {/* Left: TWC, tagline, description */}
              <div className="flex-1 flex flex-col items-start justify-center text-left gap-2 min-w-[300px]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-section-heading font-normal text-white font-orbitron">
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
                  <a
                    href="https://www.instagram.com/technology_world_creater/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                    aria-label="Instagram"
                  >
                    <span className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 md:p-3">
                      <Instagram
                        size={32}
                        strokeWidth={1.5}
                        className="text-white md:w-10 md:h-10"
                      />
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
                      <Linkedin
                        size={32}
                        strokeWidth={1.5}
                        className="text-white md:w-10 md:h-10"
                      />
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

          {/* WHO ARE WE - Overlapping section */}
          <section className="relative w-full py-12 md:py-16 border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
              {/* Left: Heading and paragraphs */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-section-heading text-[#F6E7B7] font-normal mb-6 md:mb-8 text-left">
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

          {/* Digital MH 2027 */}
          <section className="relative w-full py-12 md:py-16 border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
              {/* Left: Content */}
              <div className="flex-1 flex flex-col justify-center items-start">
                <h1 className="text-3xl font-bold text-white mb-2 text-left">
                  Mission <span className="text-[#F6E7B7]">Digital Maharashtra 2027</span>
                </h1>
                <p className="text-[#F6E7B7] text-lg md:text-xl mb-6 text-left">
                  India&apos;s digital Future begins here
                </p>
                <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed text-left">
                  Digital Maharashtra 2027 is a visionary mission to transform Maharashtra into a
                  digitally empowered, globally competitive, and innovation-driven state by the year
                  2027. Rooted in the values of progress, inclusivity, and technology-led growth,
                  the initiative aims to bridge the gap between citizens, businesses, government,
                  and global opportunities.
                </p>
                <Link
                  href={'https://digitalmh2027.technologyworldcreater.com/'}
                  target="_blank"
                  className="border flex items-center gap-2 border-white text-white px-8 py-3 rounded-lg underline text-lg font-semibold hover:bg-white/30 hover:text-white transition mt-2"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform -rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center items-center p-4">
                <div className="bg-white rounded-xl px-4 py-16 shadow-lg">
                  <Image
                    src="/images/MH.png"
                    width={500}
                    height={500}
                    alt="Digital Maharashtra 2027 Logo"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* OUR COMPANIES - Overlapping section */}
          <section className="relative w-full py-12 border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <h2 className="text-5xl font-section-heading text-[#F6E7B7] font-normal mb-12 text-center tracking-wider">
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
          <section className="relative w-full py-16 border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-5xl font-section-heading text-[#F6E7B7] font-normal mb-8">
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
          <section className="relative w-full py-16 border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="w-full mx-auto py-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
                {/* Left: Heading */}
                <div className="w-full md:w-auto text-left mb-2 md:mb-5 md:w-2/5">
                  <h2 className="text-4xl md:text-4xl lg:text-5xl font-section-heading font-normal text-white leading-tight">
                    INSIDE INDUSTRY:
                  </h2>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-section-heading font-normal text-[#F6E7B7] mt-2">
                    EXPERT TALKS & STORIES
                  </div>
                </div>
                {/* Right: Description */}
                <div className="w-full md:w-auto flex flex-col items-start md:items-start gap-2 md:w-3/5">
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
          <section className="relative w-full py-16 bg-black/30 border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-section-heading text-[#F6E7B7] font-normal mb-8 text-center">
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
                      className="bg-[#18111a]/80 backdrop-blur-sm rounded-tl-xl rounded-br-xl px-6 py-4 shadow-lg flex flex-col gap-3 w-[300px] md:w-[470px] flex-shrink-0 border border-white/10"
                    >
                      <div className="flex gap-1 text-[#F6E7B7] text-xl">
                        {'★★★★★'.slice(0, t.stars)}
                      </div>
                      <div className="text-white font-semibold">{t.text}</div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={t.avatar}
                          alt={t.author}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover border border-gray-300"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold text-white text-lg">{t.author}</span>
                          <span className="text-gray-400 text-base mt-1">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT ACTIONS SECTION */}
          <section className="w-full py-12 bg-black/20 border-t border-white/10 z-20 rounded-2xl">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-section-heading text-[#F6E7B7] font-normal mb-4 text-center">
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
          <section className="relative w-full py-2  border-t border-white/10 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-[340px] md:min-h-[420px] relative z-10">
              {/* Left: Image */}
              <div className="flex-shrink-0 w-full md:w-auto md:basis-[35%] hidden md:flex justify-center md:justify-start items-center">
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
                <h2 className="text-3xl md:text-4xl font-section-heading text-white font-normal mb-4 tracking-wide uppercase">
                  SUBSCRIBE TO GET UPDATES
                </h2>
                <div className="text-lg md:text-xl text-[#F6E7B7] font-medium mb-6">
                  Get industry insights & updates in your inbox
                </div>
                <div className="w-full max-w-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <form className="w-full flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
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
                    className="bg-white border-4 text-black hover:text-white border-[#333] hover:bg-yellow-300 transition w-16 h-16 rounded-full flex items-center justify-center shadow-md z-10"
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
          <section className="relative w-full py-16 bg-black/40 border-t border-white/10 mb-0 z-20">
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-section-heading text-[#F6E7B7] font-bold mb-8 text-center">
                FAQS
              </h2>
              <div className="divide-y divide-gray-700 bg-[#18111a]/80 backdrop-blur-sm rounded-2xl border border-white/10">
                {[
                  {
                    q: 'What is Technology World Creater (TWC)?',
                    a: 'Technology World Creater (TWC) is a pioneering multinational technology analysement company, transforming industries through strategic insights and advanced digital solutions. Our company specializes in analyzing global trends, evaluating emerging technologies, and delivering data-driven intelligence. We empower businesses and individuals to make smarter, future-ready decisions across multiple technology sectors.',
                  },
                  {
                    q: 'Which industries does TWC operate in?',
                    a: 'Technology Agriculture Creater or TAC in Agri-Tech\nTechnology Education Creater or TEC in Ed-Tech\nTechnology Service Creater or TSC in Service-Tech\nTechnology Skills Creater or TSC in Skill-Tech\nTechnology Property Creater or TPC in Property-Tech',
                  },
                  {
                    q: 'What makes TWC different from other tech companies?',
                    a: 'Technology World Creater (TWC) stands apart through its unique Analysement-based model that goes beyond traditional tech development. We focus on revolutionizing multiple technology sectors at a global level by deeply understanding challenges and crafting industry-specific solutions.',
                  },
                  {
                    q: 'What is Multinational Analysenment ?',
                    a: 'The concept of Analysement was founded by Sahil R. Vaidya, Founder & CEO of Technology World Creater (TWC). It is a transformative approach created to analyze and innovate across various global technology sectors with the goal of building scalable, high-impact digital solutions.',
                  },
                  {
                    q: 'Is TWC open to investors or funding partnerships?',
                    a: 'Yes. We are actively seeking strategic investors and funding partners who share our vision of creating sustainable, technology-driven ecosystems. To explore opportunities, please visit our Investor Relations page or contact us at Info@technologyworldcreater.com',
                  },
                  {
                    q: 'How can I join the TWC team or become a partner?',
                    a: "Careers: Visit our Careers section to view open roles—from R&D and development to content creation and operations. (Visit Careers page).\nInternships: We offer structured internships in research, tech, and marketing.\nPartnerships: Whether you're an NGO, corporate, or academic institution, reach out via our Partner With Us form to discuss collaboration opportunities.",
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
                    <div className="text-gray-300 mt-2 text-base pl-2 transition-all duration-300 ease-in-out group-open:opacity-100 group-open:max-h-40 opacity-0 max-h-0 overflow-hidden whitespace-pre-line">
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
