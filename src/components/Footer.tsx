import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube, X as LucideX } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 md:px-8 py-10 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
          <Link
            href="/"
            className="flex items-center justify-center h-20 w-full md:h-16 md:w-60 p-1 md:p-0 mb-2"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="object-contain h-full w-auto md:h-16 md:w-full"
              priority
            />
          </Link>
          <div className="flex flex-col gap-1 text-sm text-gray-400 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span>📍</span>
              <span>Dighori, Nagpur Maharashtra - 440034</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span>✉️</span>
              <span>support@technologyworldcreater.com</span>
            </div>
          </div>
        </div>
        <div className="flex items-start sm:flex-row gap-8 md:gap-16 w-full md:w-auto justify-center md:justify-start md:items-start">
          <div className="flex items-start flex-col gap-2 md:items-start">
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
          <div className="flex flex-col gap-2 items-start md:items-start">
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto mt-6 md:mt-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black transition w-max md:w-auto"
          >
            Back to Top
          </button>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="X" className="hover:text-[#F6E7B7]">
              <LucideX size={22} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#F6E7B7]">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F6E7B7]">
              <Linkedin size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#F6E7B7]">
              <Youtube size={22} />
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
