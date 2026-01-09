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
            <p className="text-gray-400 mb-8 max-w-md">
              Complete Islamic companion app featuring Prayer Times, Quran, Qibla Direction, 
              Hijri Calendar, Azkar, and more. Stay connected to your faith.
            </p>

            <div className="space-y-4 pt-2">
              <a 
                href="mailto:support@hidayahcompanion.pro" 
                className="group flex items-start gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-0.5">App Support</div>
                  <div className="text-gray-400 text-xs break-all group-hover:text-primary/90 transition-colors">
                    support@hidayahcompanion.pro
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@hidayahcompanion.pro" 
                className="group flex items-start gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-0.5">Suggestions</div>
                  <div className="text-gray-400 text-xs break-all group-hover:text-blue-400 transition-colors">
                    info@hidayahcompanion.pro
                  </div>
                </div>
              </a>

              <div className="pt-2">
                 <a
                  href="https://play.google.com/store/apps/developer?id=Taqaddus+Shafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors pl-1"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  More Apps by Developer
                </a>
              </div>
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
                  href="mailto:support@hidayahcompanion.pro"
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
