import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Technology World Creater',
  description:
    'Technology World Creater (TWC) is a pioneering multinational technology company, providing advanced solutions across industries through strategic insights and innovation.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Technology World Creater',
    description:
      'Innovative technology company delivering future-ready solutions across industries.',
    url: 'https://technologyworldcreater.com',
    siteName: 'Technology World Creater',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Technology World Creater',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
