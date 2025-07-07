import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Technology World Creater</h1>
      <div className="flex flex-wrap gap-4">
        <Link href="/about" className="underline text-blue-400">
          About
        </Link>
        <Link href="/companies" className="underline text-blue-400">
          Companies
        </Link>
        <Link href="/blog" className="underline text-blue-400">
          Blog
        </Link>
        <Link href="/contact" className="underline text-blue-400">
          Contact Us
        </Link>
        <Link href="/careers" className="underline text-blue-400">
          Careers
        </Link>
      </div>
    </main>
  );
}
