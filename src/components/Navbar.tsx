'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/companies', label: 'Our Companies' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link key={link.href} href={link.href} className="hover:text-yellow-300 transition">
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="bg-yellow-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition ml-4"
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
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-4 gap-4 md:hidden z-30 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-yellow-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
