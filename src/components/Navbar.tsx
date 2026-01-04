'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/app-icon.png"
                alt="Hidayah Companion Pro"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-display font-bold text-lg ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Hidayah Companion
              </h1>
              <p className={`text-xs ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Your Islamic Guide
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              Screenshots
            </Link>
            <Link
              href="#download"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              Download
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.islamiccalander.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Get the App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl p-6 mb-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-gray-700 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#screenshots"
                className="text-gray-700 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Screenshots
              </Link>
              <Link
                href="#download"
                className="text-gray-700 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.islamiccalander.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center mt-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Get the App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
