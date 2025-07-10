import React from 'react';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-black text-white py-16 px-4">
      <div className="flex flex-col items-center gap-6">
        <span className="text-7xl md:text-8xl animate-bounce">👨‍💻</span>
        {/* If you have a developer illustration, you can use it here instead of the emoji: */}
        {/* <Image src="/images/developer-working.png" alt="Developer Working" width={220} height={180} /> */}
        <h1 className="text-4xl md:text-5xl font-serif-hero text-[#F6E7B7] font-bold text-center mb-2">
          Blog Coming Soon!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl">
          Our team is working hard to bring you insightful articles, updates, and stories. Stay
          tuned for something awesome!
        </p>
        <div className="mt-4 text-base text-gray-400 italic">— TWC Dev Team 🚀</div>
      </div>
    </div>
  );
}
