"use client";

import { ShoppingBagIcon } from "./Icons";

interface PlantCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function TopSellingCard({ title, description, price, image }: PlantCardProps) {
  return (
    <div className="bg-gradient-to-b from-[#25392A]/90 to-[#162319]/90 backdrop-blur-md border border-white/5 border-t-white/20 rounded-t-[50%] rounded-b-[2.5rem] p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20 group flex flex-col h-full relative mt-16">
      {/* Plant Image breaking out of top */}
      <div className="h-48 relative flex justify-center items-center -mt-20 mb-4">
        <img 
          src={image}
          alt={title}
          className="absolute w-56 h-56 max-w-none object-contain object-bottom group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
        />
      </div>
      
      <div className="flex-grow flex flex-col mt-4">
        <h3 className="text-xl font-medium text-[#E5E7EB] mb-2">{title}</h3>
        <p className="text-[#a0b0a5] text-xs line-clamp-4 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-semibold text-white">{price}</p>
          <button className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <ShoppingBagIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
