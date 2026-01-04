'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/5 rounded-full blur-3xl" />
        
        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">☪️</span>
              <span className="text-white/90 text-sm font-medium">Your Complete Islamic Companion</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hidayah
              <span className="block text-accent-gold">Companion Pro</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Your all-in-one Islamic app featuring accurate prayer times, Quran, Qibla direction, 
              Hijri calendar, Azkar, and more. Stay connected to your faith.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {['Prayer Times', 'Quran', 'Qibla', 'Hijri Calendar', 'Azkar'].map((feature) => (
                <span
                  key={feature}
                  className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.islamiccalander.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-lg font-bold -mt-1">Google Play</div>
                </div>
              </a>
              
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent-gold/20 rounded-[60px] blur-3xl scale-90" />
              
              {/* Phone mockup */}
              <div className="relative phone-mockup animate-pulse-glow">
                <div className="phone-screen flex flex-col items-center justify-center p-6 text-center">
                  <div className="phone-notch" />
                  
                  {/* App icon */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl mb-6 mt-12">
                    <Image
                      src="/app-icon.png"
                      alt="Hidayah App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Mock content */}
                  <div className="text-white">
                    <h3 className="font-display font-bold text-xl mb-2">Hidayah Companion</h3>
                    <p className="text-white/70 text-sm mb-4">Islamic Calendar & Prayer Times</p>
                    
                    {/* Prayer time mock */}
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4">
                      <div className="text-accent-gold text-xs mb-1">Next Prayer</div>
                      <div className="text-2xl font-bold">Asr</div>
                      <div className="text-white/70 text-sm">4:30 PM</div>
                    </div>
                    
                    {/* Hijri date mock */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      <div className="text-accent-gold font-semibold">15 Jumada al-Awwal 1447</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
