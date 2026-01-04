'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/app-icon.png"
                  alt="Hidayah Companion Pro"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Hidayah Companion</h3>
                <p className="text-gray-400 text-sm">Your Islamic Guide</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Complete Islamic companion app featuring Prayer Times, Quran, Qibla Direction, 
              Hijri Calendar, Azkar, and more. Stay connected to your faith.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:taqaddusshafi9103@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/developer?id=Taqaddus+Shafi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                  Screenshots
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-gray-400 hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.islamiccalander.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Play Store
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://docs.google.com/document/d/1-fEWDXp-5nBOW0P87xsYnMtqwiAScX-8c97n7IOq4Sk/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:taqaddusshafi9103@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Hidayah Companion Pro. Made with ❤️ by{' '}
            <a
              href="https://play.google.com/store/apps/developer?id=Taqaddus+Shafi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Taqaddus Shafi
            </a>
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span>☪️</span>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </div>
    </footer>
  );
}
