import React, { useEffect } from 'react';

export default function CareersPage() {
  useEffect(() => {
    // Open the Google Forms link in a new tab
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdx0dZHL9GMrPh4BsQvQXvxbSU4_245ZHWYXuPWEqbeaTK9UQ/viewform?usp=header',
      '_blank',
    );
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-black text-white py-16 px-4">
      <div className="flex flex-col items-center gap-6">
        <span className="text-7xl md:text-8xl animate-bounce">💼</span>
        <h1 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold text-center mb-2">
          Redirecting to Careers Form...
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl">
          You are being redirected to our careers application form. If you are not redirected
          automatically, please click the link below.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdx0dZHL9GMrPh4BsQvQXvxbSU4_245ZHWYXuPWEqbeaTK9UQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-[#F6E7B7] text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Open Careers Form
        </a>
      </div>
    </div>
  );
}
