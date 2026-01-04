'use client';

const features = [
  {
    icon: '🕌',
    title: 'Accurate Prayer Times',
    description: 'Location-based prayer times with multiple calculation methods. Never miss a prayer with customizable notifications.',
    color: 'bg-teal-600/10',
    iconBg: 'bg-teal-600',
  },
  {
    icon: '📖',
    title: 'Holy Quran',
    description: 'Read the complete Quran with Arabic text, translations, and beautiful recitations. Track your reading progress.',
    color: 'bg-green-500/10',
    iconBg: 'bg-green-500',
  },
  {
    icon: '🧭',
    title: 'Qibla Direction',
    description: 'Find the accurate Qibla direction from anywhere in the world using your device\'s compass.',
    color: 'bg-blue-500/10',
    iconBg: 'bg-blue-500',
  },
  {
    icon: '🌙',
    title: 'Hijri Calendar',
    description: 'Complete Islamic calendar with Hijri-Gregorian conversion, Islamic events, and moon phases.',
    color: 'bg-purple-500/10',
    iconBg: 'bg-purple-500',
  },
  {
    icon: '📿',
    title: 'Tasbih Counter',
    description: 'Digital tasbeeh counter with haptic feedback. Track your dhikr and set daily goals.',
    color: 'bg-orange-500/10',
    iconBg: 'bg-orange-500',
  },
  {
    icon: '🤲',
    title: 'Azkar & Duas',
    description: 'Morning and evening adhkar, daily duas from Hisnul Muslim with audio recitations.',
    color: 'bg-pink-500/10',
    iconBg: 'bg-pink-500',
  },
  {
    icon: '📚',
    title: 'Hadith Collection',
    description: 'Access authentic hadiths from Sahih Bukhari, Muslim, and other major collections.',
    color: 'bg-yellow-500/10',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: '🌟',
    title: '99 Names of Allah',
    description: 'Learn the 99 beautiful names of Allah with meanings and benefits.',
    color: 'bg-cyan-500/10',
    iconBg: 'bg-cyan-500',
  },
  {
    icon: '🕋',
    title: 'Mosque Finder',
    description: 'Find nearby mosques with directions using OpenStreetMap integration.',
    color: 'bg-red-500/10',
    iconBg: 'bg-red-500',
  },
  {
    icon: '🌅',
    title: 'Ramadan Mode',
    description: 'Special Ramadan features: Suhoor & Iftar times, fasting tracker, and Ramadan calendar.',
    color: 'bg-indigo-500/10',
    iconBg: 'bg-indigo-500',
  },
  {
    icon: '✅',
    title: 'Salah Tracker',
    description: 'Track your daily prayers and build consistent praying habits with statistics.',
    color: 'bg-emerald-500/10',
    iconBg: 'bg-emerald-500',
  },
  {
    icon: '🔔',
    title: 'Adhan Notifications',
    description: 'Beautiful Adhan sounds for prayer notifications with full-screen alarm support.',
    color: 'bg-amber-500/10',
    iconBg: 'bg-amber-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Features
          </span>
          <h2 className="section-title text-gray-900">
            Everything You Need for
            <span className="text-gradient block">Your Spiritual Journey</span>
          </h2>
          <p className="section-subtitle mt-4">
            Hidayah Companion Pro brings together all essential Islamic tools in one beautifully designed app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Colored Header Strip */}
              <div className={`h-24 w-full ${feature.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                <span className="text-4xl drop-shadow-md filter">{feature.icon}</span>
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 bg-gradient-hidayah rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            And Much More...
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Including home screen widgets, dark mode, multiple languages support, 
            offline access, and regular updates with new features.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['🌐 Multi-language', '🌙 Dark Mode', '📱 Widgets', '📴 Offline'].map((item) => (
              <span key={item} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
