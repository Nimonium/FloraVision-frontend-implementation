"use client";

import { PlayIcon, StarIcon } from "./Icons";

/**
 * HeroBanner Component
 * Main landing section for FloraVision.
 * Note: Positioning of the floating review card is critical for the design layout.
 * Make sure background plant asset stays behind content.
 */
export default function HeroBanner() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden bg-[#0A110D]">
      {/* Background Decor - Massive Bush sitting behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img 
          src="/bg-plant.png" 
          alt="" 
          className="w-[80%] md:w-[60%] h-auto object-contain opacity-40 drop-shadow-[0_0_100px_rgba(34,197,94,0.2)] blur-[1px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Main Messaging Area */}
          <div className="relative z-10 w-full lg:w-[85%] text-left pt-20">
            <h1 className="text-7xl md:text-[8rem] font-bold text-[#D1D1D1] leading-none mb-6 drop-shadow-2xl">
              Earth&apos;s Exhale
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-lg">
              &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-8 mb-20">
              <button className="px-12 py-4 border-2 border-white/80 bg-transparent text-white font-bold text-xl rounded-xl hover:bg-white/10 transition-all duration-300 shadow-lg">
                Buy Now
              </button>
              
              <button className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-md">
                  <PlayIcon className="w-6 h-6 text-white group-hover:text-black transition-colors fill-white" />
                </div>
                <span className="text-white font-dancing text-2xl group-hover:text-gray-300 transition-colors pt-2">Live Demo...</span>
              </button>
            </div>

            {/* Testimonial Feature - Floating Ronnie Hamill Card */}
            <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[3rem] p-8 shadow-2xl w-[420px] relative z-20 transition-transform hover:scale-[1.02] duration-300">
              <div className="flex items-start gap-6 mb-2">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0">
                  <img src="/avatars/ronnie.png" className="w-full h-full object-cover" alt="Reviewer Ronnie" />
                </div>
                
                <div className="pt-1">
                  <h5 className="text-white text-2xl font-bold mb-1">Ronnie Hamill</h5>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-yellow-400/50'}`} />
                    ))}
                  </div>
                  
                  {/* Social Proof Avatars */}
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-[#1a231a] flex items-center justify-center text-xs font-black z-30 text-white shadow-sm">S</div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a231a] overflow-hidden z-20 shadow-sm">
                      <img src="/avatars/shelly.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a231a] overflow-hidden z-10 shadow-sm">
                      <img src="/avatars/lula.png" className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed font-medium mt-6 italic">
                &quot;I can&apos;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.&quot;
              </p>
            </div>
          </div>

          {/* Featured Product Sidebar */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl flex flex-col group mt-40 hover:bg-white/[0.08] transition-colors duration-500">
              
              {/* Plant Image - Needs to 'break' the top of the card */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[240px] h-[240px] drop-shadow-2xl transition-transform duration-700 group-hover:scale-110">
                <img 
                  src="/featured-plant.png" 
                  alt="Aglaonema" 
                  className="w-full h-full object-contain filter drop-shadow-2xl" 
                />
              </div>

              <div className="mt-32 space-y-4">
                <div>
                  <span className="text-lg text-white/50 font-light mb-2 block">Indoor Plant</span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-4xl font-light text-white tracking-wide leading-tight">Aglaonema &nbsp; plant</h4>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="px-10 py-3 rounded-2xl border border-white/80 text-white text-xl font-medium hover:bg-white hover:text-black transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
