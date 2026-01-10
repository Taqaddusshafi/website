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
          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
            {/* Google Play - Active */}
            <a
              href="https://play.google.com/store/apps/details?id=com.islamiccalander.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition-all hover:scale-105 shadow-xl w-64 justify-start"
            >
              <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L14.847 12l2.851-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-70 uppercase tracking-wider leading-none mb-1">Get it on</div>
                <div className="text-lg font-bold leading-none">Google Play</div>
              </div>
            </a>

            {/* App Store - Coming Soon */}
            <div className="relative group">
              <button 
                disabled
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white/50 px-6 py-3 rounded-2xl cursor-not-allowed w-64 justify-start grayscale"
              >
                <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.65 19.57c-1.28.88-2.58 1.8-4.5 1.78-1.55-.02-3.08-.94-3.86-.94-.78 0-2.07.9-3.66.96-2.53.1-4.7-2.6-6.1-5.7-1.74-3.88-.33-8.4 2.76-8.54 1.48-.06 2.65.9 3.68.9 1 0 2.34-.94 3.76-.94 1.42 0 4.14.7 5.17 3.06-.06.04-3.06 1.64-3.06 4.96 0 3.76 3.4 5.2 3.46 5.22-.02.04-.52 1.84-1.6 3.24zm-4.78-13.84c.66-.78 1.1-1.84 1-2.9-1 .04-2.18.66-2.86 1.48-.6.7-1.12 1.8-1.02 2.82 1.1.08 2.2-.6 2.88-1.4z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70 uppercase tracking-wider leading-none mb-1">Coming Soon to</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
              {/* Badge */}
              <div className="absolute -top-3 -right-2 bg-accent-gold text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-lg transform rotate-6 border border-white/20">
                SOON
              </div>
            </div>

            {/* Huawei App Gallery - Coming Soon */}
            <div className="relative group">
              <button 
                disabled
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white/50 px-6 py-3 rounded-2xl cursor-not-allowed w-64 justify-start grayscale"
              >
                <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.135 15.328a2.532 2.532 0 0 0 1.957-.93 2.535 2.535 0 0 0 0-3.23 2.529 2.529 0 0 0-1.956-.93 2.54 2.54 0 0 0-1.959.93 2.545 2.545 0 0 0 0 3.23 2.562 2.562 0 0 0 1.958.93zm5.674 0a2.532 2.532 0 0 0 1.957-.93 2.535 2.535 0 0 0 0-3.23 2.529 2.529 0 0 0-1.957-.93 2.54 2.54 0 0 0-1.959.93 2.545 2.545 0 0 0 0 3.23 2.562 2.562 0 0 0 1.959.93zM12.022 4.088a2.637 2.637 0 0 0-1.97.892 2.639 2.639 0 0 0 .012 3.678 2.656 2.656 0 0 0 1.958.847 2.66 2.66 0 0 0 1.97-.847 2.639 2.639 0 0 0 .012-3.678 2.637 2.637 0 0 0-1.982-.892zm0 15.824a2.64 2.64 0 0 0-1.97-.892 2.66 2.66 0 0 0-1.97.846 2.637 2.637 0 0 0 .012 3.677 2.66 2.66 0 0 0 3.928 0 2.637 2.637 0 0 0 .012-3.677 2.64 2.64 0 0 0-1.983-.846zM15.488 7.5a2.583 2.583 0 0 0-1.802-.732 2.592 2.592 0 0 0-1.85 4.41l.036.035a2.586 2.586 0 0 0 3.615-.034l.036-.036a2.593 2.593 0 0 0-.036-3.642zm-6.9 0a2.585 2.585 0 0 0-1.801.733 2.592 2.592 0 0 0-.037 3.642l.036.035a2.586 2.586 0 0 0 3.615.035l.036-.036a2.592 2.592 0 0 0-1.85-4.409z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70 uppercase tracking-wider leading-none mb-1">Coming Soon to</div>
                  <div className="text-lg font-bold leading-none">AppGallery</div>
                </div>
              </button>
               {/* Badge */}
               <div className="absolute -top-3 -right-2 bg-accent-gold text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-lg transform rotate-6 border border-white/20">
                SOON
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
