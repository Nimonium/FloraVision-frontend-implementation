"use client";

import { StarIcon } from "./Icons";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  avatar: string;
}

export default function ReviewCard({ name, rating, review, avatar }: ReviewCardProps) {
  return (
    <div className="bg-[#242C24] border border-white/5 rounded-[3rem] p-10 pt-12 relative hover:-translate-y-1 transition-all duration-500 group shadow-2xl h-full flex flex-col">
      {/* Quote/Badge Icon */}
      <div className="absolute top-8 right-10 opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-[#343c34] flex items-center justify-center border border-white/10">
          <div className="w-4 h-4 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="flex items-center gap-6 mb-10">
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-white/10 relative z-10"
          />
        </div>
        
        <div>
          <h4 className="text-white font-bold text-2xl tracking-tight mb-1">{name}</h4>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-white/70 text-[15px] leading-[1.8] font-light">
        {review}
      </p>
    </div>
  );
}
