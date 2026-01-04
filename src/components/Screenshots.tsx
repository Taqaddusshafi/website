'use client';

import { useState } from 'react';

const screenshots = [
  {
    id: 1,
    title: 'Home Screen',
    description: 'Beautiful dashboard with prayer times and Hijri date',
    gradient: 'from-primary to-primary-dark',
  },
  {
    id: 2,
    title: 'Prayer Times',
    description: 'Accurate prayer times with notifications',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 3,
    title: 'Hijri Calendar',
    description: 'Islamic calendar with events',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Qibla Direction',
    description: 'Compass pointing to Mecca',
    gradient: 'from-green-500 to-green-700',
  },
  {
    id: 5,
    title: 'Quran Reader',
    description: 'Read Quran with translations',
    gradient: 'from-accent-orange to-amber-600',
  },
];

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="screenshots" className="section bg-gray-50 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📱 App Preview
          </span>
          <h2 className="section-title text-gray-900">
            Beautiful & Intuitive
            <span className="text-gradient block">User Interface</span>
          </h2>
          <p className="section-subtitle mt-4">
            Designed with care to provide the best experience for your daily Islamic practices.
          </p>
        </div>

        {/* Screenshots Carousel */}
        <div className="relative">
          {/* Main display */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-[50px] blur-3xl scale-90" />
              
              {/* Phone frame */}
              <div className="relative w-[280px] h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[45px] p-3 shadow-2xl">
                <div className={`w-full h-full bg-gradient-to-b ${screenshots[activeIndex].gradient} rounded-[35px] overflow-hidden relative`}>
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                  
                  {/* Content */}
                  <div className="h-full flex flex-col items-center justify-center p-6 text-white text-center">
                    <div className="text-6xl mb-6">
                      {activeIndex === 0 && '🕌'}
                      {activeIndex === 1 && '⏰'}
                      {activeIndex === 2 && '🌙'}
                      {activeIndex === 3 && '🧭'}
                      {activeIndex === 4 && '📖'}
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2">
                      {screenshots[activeIndex].title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {screenshots[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-4 flex-wrap">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-xl transition-all ${
                  activeIndex === index
                    ? 'ring-4 ring-primary ring-offset-2 scale-110'
                    : 'opacity-60 hover:opacity-100'
                } bg-gradient-to-br ${screenshot.gradient} flex items-center justify-center text-2xl`}
              >
                {index === 0 && '🕌'}
                {index === 1 && '⏰'}
                {index === 2 && '🌙'}
                {index === 3 && '🧭'}
                {index === 4 && '📖'}
              </button>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))}
            className="absolute left-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors hidden md:flex"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors hidden md:flex"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
