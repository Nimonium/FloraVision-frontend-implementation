"use client";

import SectionTitle from "./SectionTitle";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";

export default function BestO2() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
      <div className="bg-[#1B241E] rounded-[4rem] flex flex-col lg:flex-row items-center relative overflow-visible min-h-[500px]">
        {/* Left Image Container - Plant breaking out */}
        <div className="w-full lg:w-[45%] relative flex items-center justify-center lg:justify-start z-20 h-full">
          <img 
            src="/featured-plant.png"
            alt="Best O2 Plant"
            className="w-full max-w-[580px] lg:absolute lg:-left-16 lg:top-1/2 lg:-translate-y-1/2 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Right Content Container */}
        <div className="w-full lg:w-[55%] p-12 md:p-20 lg:pl-10 lg:pr-24 space-y-8 z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            We Have Small And Best O2 Plants Collection&apos;s
          </h3>
          
          <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-[550px]">
            <p>
              Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p>
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>
          </div>
          
          <div className="flex items-center justify-between gap-8 pt-4">
            <button className="px-10 py-3 rounded-xl border border-white/30 text-white text-base font-medium hover:bg-white hover:text-black transition-all duration-300">
              Explore
            </button>
            
            <div className="flex items-center gap-6 text-sm font-semibold text-white/90">
              <button className="p-2 hover:bg-white/10 rounded-full transition-all">
                <LeftArrowIcon className="w-4 h-4 opacity-50" />
              </button>
              <span className="tracking-widest">01/04</span>
              <button className="p-2 hover:bg-white/10 rounded-full transition-all">
                <RightArrowIcon className="w-4 h-4 opacity-50" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
