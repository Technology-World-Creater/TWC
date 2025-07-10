'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/companies', label: 'Our Companies' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <nav className="w-full bg-black text-white px-4 md:px-8 py-3 flex items-center justify-between relative z-20">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center justify-center h-20 w-1/2 md:h-16 md:w-60 p-1 md:p-0"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain h-8 w-auto md:h-16 md:w-full"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[#F6E7B7] transition ${isActive(link.href) ? 'text-[#F6E7B7] font-bold' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`bg-yellow-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition ml-4 ${router.pathname.startsWith('/contact') ? 'ring-2 ring-yellow-300' : ''}`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center p-2"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{
          background: menuOpen ? 'rgba(0,0,0,0.4)' : 'transparent',
          backdropFilter: menuOpen ? 'blur(2px)' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute top-0 left-0 w-full bg-black/95 border-b border-gray-800 flex flex-col items-center py-8 gap-6 shadow-2xl rounded-b-2xl transition-all duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'}`}
          style={{ minHeight: '60vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Prominent X button */}
          <button
            className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90 transition border border-gray-700 shadow-lg"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <X size={32} className="text-white" />
          </button>
          {/* Nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl font-semibold hover:text-[#F6E7B7] transition ${isActive(link.href) ? 'text-[#F6E7B7] font-bold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition text-lg ${router.pathname.startsWith('/contact') ? 'ring-2 ring-yellow-300' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
