"use client";

import SectionTitle from "./SectionTitle";
import { ShoppingBagIcon } from "./Icons";

/**
 * TrendyPlants Section
 * Displays a list of featured 'Trendy' plants with alternating image positions.
 * Note: The imageFirst property controls which side the plant image appears on.
 */
export default function TrendyPlants() {
  const featuredProducts = [
    {
      id: "product_01",
      title: "For Your Desks Decorations",
      tagline: "A splash of green for your workspace",
      description: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: "Rs. 599/-",
      image: "/trendy-plant-1.png",
      imageOnLeft: true,
    },
    {
      id: "product_02",
      title: "For Your Desks Decorations",
      tagline: "Serenity in every leaf",
      description: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
      price: "Rs. 399/-",
      image: "/agave-blue-pot.png",
      imageOnLeft: false,
    }
  ];

  return (
    <section id="trendy-types" className="relative py-40 overflow-hidden bg-[#050A06]">
      {/* Visual background element - lowered opacity for better readability */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <img 
          src="/bg-plant.png" 
          alt="" 
          className="w-full max-w-[1200px] h-auto object-contain opacity-20 blur-[3px] translate-y-32 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A06] via-transparent to-[#050A06]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Section Heading */}
        <div className="mb-32 flex justify-center">
          <SectionTitle title="Our Trendy plants" />
        </div>
        
        <div className="flex flex-col gap-48">
          {featuredProducts.map((item) => (
            <div 
              key={item.id}
              className={`relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-24 flex flex-col items-center justify-center transition-all duration-700 hover:bg-white/[0.04] group shadow-2xl ${item.imageOnLeft ? 'md:items-end md:pl-[45%]' : 'md:items-start md:pr-[45%]'}`}
            >
              {/* Product Visual - Handles the large, floating plant assets */}
              <div 
                className={`absolute transition-all duration-700 group-hover:scale-105 z-20 pointer-events-none
                  ${item.imageOnLeft 
                    ? '-left-16 -top-24 -bottom-24 w-[55%] h-[calc(100%+12rem)]' 
                    : '-right-16 -top-24 -bottom-24 w-[55%] h-[calc(100%+12rem)]'
                  }
                `}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
                />
              </div>
              
              {/* Product Info Content */}
              <div className="w-full md:w-[95%] space-y-8 z-10 relative">
                <div className="space-y-2">
                   <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">{item.title}</h3>
                   {item.tagline && <p className="text-white/40 text-sm font-semibold tracking-widest uppercase">{item.tagline}</p>}
                </div>
                
                <p className="text-[#a0b0a5] text-lg md:text-xl font-medium leading-relaxed max-w-xl opacity-70">
                  {item.description}
                </p>
                
                <p className="text-4xl md:text-5xl font-bold text-white pt-4 tracking-tighter">{item.price}</p>
                
                <div className="flex items-center gap-8 pt-10">
                  <button className="px-14 py-5 rounded-2xl border border-white/10 bg-white/5 text-white text-xl font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-2xl">
                    View Details
                  </button>
                  <button className="flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-500 shadow-2xl group/btn">
                    <ShoppingBagIcon className="w-8 h-8 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
