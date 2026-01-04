'use client';

export default function Download() {
  return (
    <section id="download" className="section bg-gradient-hidayah relative overflow-hidden pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur rounded-2xl mb-8">
            <span className="text-5xl">📲</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Download Now &
            <span className="block text-accent-gold">Start Your Journey</span>
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of Muslims worldwide who use Hidayah Companion Pro 
            to strengthen their connection with Islam every day.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mb-12">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">10K+</div>
              <div className="text-white/70 text-sm">Downloads</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">4.8★</div>
              <div className="text-white/70 text-sm">Rating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">12+</div>
              <div className="text-white/70 text-sm">Features</div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.islamiccalander.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70 uppercase tracking-wider">Get it on</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Coming soon badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <span className="text-lg">🍎</span>
            <span className="text-white/80 text-sm">iOS version coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
