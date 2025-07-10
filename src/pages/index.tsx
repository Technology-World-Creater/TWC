import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, X as LucideX, Eye, Brain, Rocket, Layers3 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  // --- Testimonial slider logic ---
  const testimonials = [
    {
      stars: 5,
      text: '“TWC’s platform made it so easy to launch industry solutions. The team’s vision and support are unmatched.”',
      author: '— Priya Sharma',
    },
    {
      stars: 5,
      text: '“We didn’t just pick a tech — they became our growth partners. TWC’s insights and agility helped us launch faster and scale smarter.”',
      author: '— Akash Mehra',
    },
    {
      stars: 5,
      text: '“TWC’s team is super responsive and always brings fresh ideas to the table. The results speak for themselves.”',
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
      src: '/images/company0.jpg',
      alt: 'Innovation in Aquaponics',
      title: 'Innovation in Aquaponics',
      date: 'May 2024 • 5min',
    },
    {
      src: '/images/company1.png',
      alt: 'Disrupting Traditional Farming',
      title: 'Disrupting Traditional Farming',
      date: 'May 2024 • 6min',
    },
    {
      src: '/images/company2.png',
      alt: 'Vertical Farming Solutions',
      title: 'Vertical Farming Solutions',
      date: 'May 2024 • 4min',
    },
    // Add more video boxes as needed
  ];
  const industryVisibleCount = 3;
  const industrySliderVideos = [...industryVideos, ...industryVideos];
  const [industryOffset, setIndustryOffset] = useState(0);
  const industrySliderRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let animationFrame: number | undefined;
    const speed = 0.5; // px per frame
    const animate = () => {
      setIndustryOffset((prev) => {
        const cardWidth = industrySliderRef.current
          ? industrySliderRef.current.offsetWidth / industryVisibleCount
          : 0;
        const totalWidth = cardWidth * industryVideos.length;
        let next = prev + speed;
        if (next >= totalWidth) next = 0;
        return next;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame!);
  }, [industryVideos.length]);

  return (
    <div className="bg-black text-white min-h-screen w-full font-body">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 bg-gradient-to-b from-black via-[#18111a] to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="text-[16vw] font-extrabold font-serif-hero text-white/10 tracking-tighter select-none">
            TWC
          </span>
        </div>
        {/* TWC.png background image */}
        <div className="absolute inset-1 z-10 flex items-center justify-center pointer-events-none select-none">
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
        <div className="relative z-20 w-full">
          <h1 className="text-5xl md:text-7xl font-serif-hero text-[#F6E7B7] font-bold mb-2 leading-tight">
            India’s Only Multinational
          </h1>
          <h2 className="text-2xl md:text-3xl font-body font-semibold text-white mb-4 tracking-wide uppercase">
            TECHNOLOGY ANALYSEMENT COMPANY
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-6 font-body max-w-3xl mx-auto">
            We are a multinational technology analysment company helping businesses, startups, and
            emerging markets unlock their full potential.
          </p>
          <a
            href="#"
            className="inline-block border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition mt-2"
          >
            Explore
          </a>
        </div>
      </section>

      {/* SOCIAL + TWC BAR */}
      <section className="w-full bg-[#18111a] py-6 flex flex-col md:flex-row  items-center md:items-center justify-between max-w-7xl mx-auto rounded-2xl px-10">
        <div className="flex-1 flex-col md:flex-row items-center">
          <div className="flex items-baseline gap-2 flex-col md:flex-row text-center">
            <span className="text-3xl md:text-4xl font-serif-hero font-normal text-white text-center w-full flex justify-center">
              TWC
            </span>
            <span className="text-base md:text-lg font-semibold text-[#F6E7B7] md:ml-2">
              Where bold ideas meet powerful execution.
            </span>
          </div>
          <div className="text-gray-300 text-sm md:text-base text-center mt-1 font-body max-w-2xl">
            Across every industry, we make it possible to grow intelligently, scale seamlessly, and
            innovate boldly, with technology, expertise, and collaboration at the co
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2 mt-4 md:mt-0 min-w-[180px]">
          <span className="text-gray-200 text-base font-body mb-1">Social Links:</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:scale-110 transition" aria-label="Instagram">
              <Instagram size={32} strokeWidth={1.5} className="text-white" />
            </a>
            <a href="#" className="hover:scale-110 transition" aria-label="Facebook">
              <Facebook size={32} strokeWidth={1.5} className="text-white" />
            </a>
            <a href="#" className="hover:scale-110 transition" aria-label="X">
              <LucideX size={32} strokeWidth={1.5} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* WHO ARE WE */}
      <section className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
            WHO ARE WE ?
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 text-gray-200 text-base md:text-lg flex flex-col gap-4">
              <p>
                At TWC (Technology World Creater), we’re more than just a company, we’re an
                ecosystem of innovation, strategy, and technology that transforms ideas into impact.
              </p>
              <p>
                We bring together diverse industries under one vision: to bridge gaps, spark growth,
                and empower people and businesses through cutting-edge solutions. From
                revolutionizing agriculture and property markets to advancing digital services,
                education, and skill development, we create platforms that solve real-world
                challenges and unlock new opportunities.
              </p>
              <p>
                Our team combines global insight with local understanding, a startup mindset with
                strategic foresight, and a people-first approach with future-ready tech. Together,
                we don’t just analyse trends , we create them, so you can thrive in an ever-evolving
                world.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-[#18111a] rounded-xl p-4 text-white text-base font-semibold mb-2">
                5+ Innovative Verticals:
                <br />
                <span className="text-[#F6E7B7]">
                  Agriculture, Property, Services, Education, Skills
                </span>
              </div>
              <div className="bg-[#18111a] rounded-xl p-4 text-white text-base font-semibold mb-2">
                Data-Driven Growth DNA
              </div>
              <div className="bg-[#18111a] rounded-xl p-4 text-white text-base font-semibold mb-2">
                Digital-Enabled Operations
              </div>
              <div className="bg-[#18111a] rounded-xl p-4 text-white text-base font-semibold mb-2">
                Impactful Partnerships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMPANIES */}
      <section className="w-full py-12 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-6">
            OUR COMPANIES
          </h2>
          <div className="flex flex-wrap justify-center gap-6 items-center mb-6">
            <Image src="/images/logo1.png" alt="TAC" width={180} height={40} />
            <Image src="/images/logo2.png" alt="TSC" width={180} height={40} />
            <Image src="/images/logo3.png" alt="TPC" width={180} height={40} />
            <Image src="/images/logo4.png" alt="TSC Skills" width={180} height={40} />
            <Image src="/images/logo5.png" alt="TEC" width={180} height={40} />
          </div>
          <Link
            href="/companies"
            className="inline-block border border-[#F6E7B7] text-[#F6E7B7] px-8 py-2 rounded-full hover:bg-[#F6E7B7] hover:text-black transition font-semibold text-lg"
          >
            Know more
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
            WHY CHOOSE US?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#18111a] rounded-xl p-6 border-2 border-green-400/60">
              <div className="flex items-center gap-3 mb-2">
                <Eye size={28} className="text-green-400" />
                <span className="text-lg md:text-xl font-bold text-white">
                  Multinational Vision, <span className="text-[#F6E7B7]">Local Execution</span>
                </span>
              </div>
              <div className="text-gray-300 text-base">
                TWC operates with a global outlook but remains rooted in local realities. We
                understand regional markets deeply, enabling us to deliver solutions that are
                globally scalable yet locally relevant.
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#18111a] rounded-xl p-6 border-2 border-yellow-300/60">
              <div className="flex items-center gap-3 mb-2">
                <Brain size={28} className="text-yellow-300" />
                <span className="text-lg md:text-xl font-bold text-white">
                  Data-Driven <span className="text-[#F6E7B7]">Strategic Intelligence</span>
                </span>
              </div>
              <div className="text-gray-300 text-base">
                Every decision we make is backed by deep data analysis and market insight. We turn
                raw data into actionable strategies that help businesses stay ahead of trends and
                competition.
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#18111a] rounded-xl p-6 border-2 border-yellow-300/60">
              <div className="flex items-center gap-3 mb-2">
                <Rocket size={28} className="text-yellow-300" />
                <span className="text-lg md:text-xl font-bold text-white">
                  Startup <span className="text-[#F6E7B7]">Accelerator Mindset</span>
                </span>
              </div>
              <div className="text-gray-300 text-base">
                Unlike traditional consultancies, we work hands-on with early-stage startups and
                business ideas—helping them evolve from concept to market with speed, clarity, and
                innovation.
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#18111a] rounded-xl p-6 border-2 border-green-400/60">
              <div className="flex items-center gap-3 mb-2">
                <Layers3 size={28} className="text-green-400" />
                <span className="text-lg md:text-xl font-bold text-white">
                  Cross-Industry <span className="text-[#F6E7B7]">Technological Expertise</span>
                </span>
              </div>
              <div className="text-gray-300 text-base">
                From Agri-Tech and FinTech to Edu-Tech and beyond, our team brings domain-specific
                expertise and tech foresight to every challenge making us versatile, adaptable, and
                forward-thinking.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE INDUSTRY: EXPERT TALKS & STORIES */}
      <section className="w-full py-16 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-4 text-center">
            INSIDE INDUSTRY: <span className="text-white">EXPERT TALKS & STORIES</span>
          </h2>
          <p className="text-gray-200 text-lg text-center mb-8 max-w-7xl mx-auto">
            Explore powerful conversations, bold ideas, and industry-shaping insights—straight from
            the minds of changemakers. Through our exclusive video series, we bring you expert
            discussions, founder journeys, and innovation stories that are redefining how industries
            think and grow.
          </p>
          <div className="overflow-hidden" ref={industrySliderRef}>
            <div
              className="flex gap-8 transition-none"
              style={{
                width: `${(industrySliderVideos.length / industryVisibleCount) * 100}%`,
                transform: `translateX(-${industryOffset}px)`,
              }}
            >
              {industrySliderVideos.map((video, idx) => (
                <div
                  key={idx}
                  className="bg-[#18111a] rounded-xl overflow-hidden shadow-lg w-[300px] md:w-[400px] flex-shrink-0"
                >
                  <Image
                    src={video.src}
                    alt={video.alt}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
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
              href="#"
              className="border border-[#F6E7B7] text-[#F6E7B7] px-6 py-2 rounded-full hover:bg-[#F6E7B7] hover:text-black transition font-semibold text-base"
            >
              Explore all
            </Link>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
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
                  className="bg-[#18111a] rounded-xl p-6 shadow-lg flex flex-col gap-3 w-[300px] md:w-[400px] flex-shrink-0"
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

      {/* CTA + SUBSCRIBE */}
      <section className="w-full py-16 bg-gradient-to-b from-black via-[#18111a] to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
            HAVE A BOLD IDEA? LET’S MAKE IT REAL.
          </h2>
          <p className="text-gray-200 text-lg text-center mb-8 max-w-7xl mx-auto">
            Whether you’re a startup looking for direction, a business seeking a winning strategy,
            or a market ready for transformation, we’re here to make it happen. Reach out and let’s
            build something extraordinary together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 py-10">
            <div className="bg-[#18111a] rounded-xl p-6 flex flex-col items-center gap-2">
              <span className="text-4xl">💬</span>
              <div className="font-bold text-white text-lg">Let’s Talk</div>
            </div>
            <div className="bg-[#18111a] rounded-xl p-6 flex flex-col items-center gap-2">
              <span className="text-4xl">📅</span>
              <div className="font-bold text-white text-lg">Schedule a Consultation</div>
            </div>
            <div className="bg-[#18111a] rounded-xl p-6 flex flex-col items-center gap-2">
              <span className="text-4xl">🤝</span>
              <div className="font-bold text-white text-lg">Partner With Us</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-10 bg-[#18111a] rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <Image
                src="/images/update.png"
                alt="Subscribe"
                width={520}
                height={780}
                className="rounded-xl object-cover transform scale-x-[-1] mb-4 md:mb-0"
              />
            </div>
            <div>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
                  Subscribe to get updates
                </h2>
                <p className="text-gray-200 text-lg text-center mb-8 max-w-7xl mx-auto">
                  Get industry insights & updates in your inbox
                </p>
              </div>
              <form className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
                <input
                  type="email"
                  placeholder="e.g. yourname@company.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-[#F6E7B7] w-full"
                />
                <button
                  type="submit"
                  className="bg-[#F6E7B7] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#F6E7B7] transition w-full md:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold mb-8 text-center">
            FAQS
          </h2>
          <div className="divide-y divide-gray-700 bg-[#18111a] rounded-2xl">
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
    </div>
  );
}
