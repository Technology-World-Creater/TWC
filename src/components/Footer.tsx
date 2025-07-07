import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-8 py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-1 text-sm text-gray-400 mt-2">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Dighori, Nagpur Maharashtra - 440034</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>support@technologyworldcreater.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/companies" className="hover:underline">
              Companies
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <button className="border border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black transition">
            Back to Top
          </button>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="X" className="hover:text-yellow-300">
              ✕
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300">
              📷
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-300">
              in
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-300">
              ▶
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="text-center text-xs text-gray-400">
        @2025 TWC | NextGen Technology World Creater Private Limited
      </div>
    </footer>
  );
}
