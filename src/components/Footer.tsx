import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-32 pb-16 bg-[#050A06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <span className="text-4xl">🪴</span>
              <span className="text-white text-3xl font-black tracking-tighter">FloraVision.</span>
            </Link>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-sm font-medium">
              &quot;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-xl tracking-tight">Quick Link&apos;s</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white font-medium text-lg hover:text-green-500 transition-all border-b border-transparent hover:border-green-500 w-fit underline">Home</Link>
              <Link href="#types" className="text-white font-medium text-lg hover:text-green-500 transition-all border-b border-transparent hover:border-green-500 w-fit underline">Type&apos;s Of plant&apos;s</Link>
              <Link href="#contact" className="text-white font-medium text-lg hover:text-green-500 transition-all border-b border-transparent hover:border-green-500 w-fit underline">Contact</Link>
              <Link href="#" className="text-white font-medium text-lg hover:text-green-500 transition-all border-b border-transparent hover:border-green-500 w-fit underline">Privacy</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-xl tracking-tight">For Every Update.</h4>
            <div className="flex items-center border border-white p-1 rounded-lg bg-white/5">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full bg-transparent py-3 px-5 text-white placeholder-white/40 focus:outline-none"
              />
              <button className="bg-white text-black text-xs font-black py-3 px-6 rounded-md hover:bg-gray-200 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-10">
          <div className="flex items-center gap-10">
            <Link href="#" className="text-xl text-white hover:text-green-500 transition-colors font-black">FB</Link>
            <Link href="#" className="text-xl text-white hover:text-green-500 transition-colors font-black">TW</Link>
            <Link href="#" className="text-xl text-white hover:text-green-500 transition-colors font-black">LI</Link>
          </div>
          <p className="text-white text-base font-medium tracking-wide">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
}
