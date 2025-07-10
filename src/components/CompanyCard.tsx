import React from 'react';
import Image from 'next/image';

interface CompanyCardProps {
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  status?: string;
  index?: number;
  centered?: boolean;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  logo,
  logoAlt,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  ctaText,
  ctaHref,
  status,
  index = 0,
  centered = false,
}) => {
  // Alternate left/right for desktop if not centered
  const isReverse = !centered && index % 2 === 1;
  return (
    <div
      className={`flex flex-col md:flex-row ${isReverse ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 py-20 w-full justify-center`}
    >
      {/* Logo and Text */}
      <div className="flex-1 flex flex-col gap-4 items-center md:items-start text-center md:text-left max-w-full md:max-w-md w-full px-2 md:px-0">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center md:justify-start w-full">
            <div className="bg-white rounded-lg p-2 shadow w-[200px] h-[58px] md:w-[200px] md:h-[56px] flex items-center justify-center mx-auto md:mx-0">
              <Image
                src={logo}
                alt={logoAlt}
                width={200}
                height={44}
                className="object-contain w-full h-auto max-h-10 md:max-h-12"
              />
            </div>
          </div>
          <span className="font-bold text-base md:text-lg text-white block mt-2 text-center md:text-left">
            {title}
          </span>
          <div className="text-[#F6E7B7] font-bold text-base md:text-xl mt-2 text-center md:text-left">
            {subtitle}
          </div>
        </div>
        <div className="text-gray-200 font-body text-sm md:text-base mb-2">{description}</div>
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-[#F6E7B7] text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition w-max mx-auto md:mx-0 text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaText} <span className="text-lg md:text-xl">→</span>
          </a>
        )}
        {status && (
          <div className="text-green-400 font-semibold text-base md:text-lg mt-2">{status}</div>
        )}
      </div>
      {/* Image */}
      <div className="flex-1 flex justify-center items-stretch w-full max-w-full md:max-w-xl px-2 md:px-0 mt-6 md:mt-0 h-full">
        <div className="rounded-2xl shadow-lg p-1 md:p-2 w-full h-full flex items-stretch">
          <Image
            src={image}
            alt={imageAlt}
            width={600}
            height={340}
            className="rounded-xl object-cover w-full h-full min-h-[200px] md:min-h-[340px]"
            style={{ minHeight: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
