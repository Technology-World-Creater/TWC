import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black text-white">
      <div className="flex items-center gap-2">
        {/* Logo SVG */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 30V10L20 20L30 10V30"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg">Technology</span>
          <span className="text-xs text-gray-300">World Creater</span>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <Link href="/" className="hover:text-yellow-300 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-300 transition">
          About
        </Link>
        <Link href="/companies" className="hover:text-yellow-300 transition">
          Our Companies
        </Link>
        <Link href="/blogs" className="hover:text-yellow-300 transition">
          Blogs
        </Link>
      </div>
      <Link
        href="/contact"
        className="bg-yellow-300 text-black font-semibold px-8 py-2 rounded-full hover:bg-yellow-400 transition"
      >
        Contact Us
      </Link>
    </nav>
  );
}
