import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  className = '',
  children,
}) => {
  return (
    <section
      className={`w-full py-20 bg-gradient-to-b from-black via-[#18111a] to-black ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-serif-hero text-[#F6E7B7] font-bold mb-6">
          {title}
        </h1>
        <p className="max-w-5xl mx-auto text-base md:text-lg font-body text-gray-200 font-normal tracking-wide">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
