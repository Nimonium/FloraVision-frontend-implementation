export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative inline-block px-16 py-6">
        {/* Left Golden Bracket */}
        <div className="absolute left-0 top-0 bottom-0 w-8 border-l-2 border-y-2 border-[#D4AF37] rounded-l-2xl" />
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide text-center">
          {title}
        </h2>

        {/* Right Golden Bracket */}
        <div className="absolute right-0 top-0 bottom-0 w-8 border-r-2 border-y-2 border-[#D4AF37] rounded-r-2xl" />
      </div>
    </div>
  );
}
