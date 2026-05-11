"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIcon, ShoppingBagIcon, MenuIcon, CloseIcon, CartIcon, UserIcon } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-[#0A110D]/80 backdrop-blur-2xl py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-2xl group-hover:scale-110 transition-transform">🪴</div>
          <span className="text-white text-2xl font-bold tracking-tight">FloraVision.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-white text-sm font-medium hover:opacity-100 opacity-80 transition-opacity">Home</Link>
          <div className="relative group/menu">
            <button className="text-white text-sm font-medium opacity-60 group-hover/menu:opacity-100 transition-opacity flex items-center gap-1">
              Plants Type <span className="text-[10px]">▼</span>
            </button>
          </div>
          <Link href="#more" className="text-white text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">More</Link>
          <Link href="#contact" className="text-white text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-white/60 hover:text-white transition-all hover:scale-110"><SearchIcon className="w-5 h-5" /></button>
          <button className="text-white/60 hover:text-white transition-all hover:scale-110 relative">
            <ShoppingBagIcon className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-[#0A110D]" />
          </button>
          <button className="text-white/60 hover:text-white transition-all hover:scale-110"><MenuIcon className="w-6 h-6" /></button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 bg-[#0A110D]/95 backdrop-blur-3xl shadow-2xl p-8 rounded-[2rem] flex flex-col gap-6 mt-4 border border-white/10">
          <Link href="/" className="text-white font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#types" className="text-white/60 font-medium text-xl" onClick={() => setMobileMenuOpen(false)}>Plants Type</Link>
          <Link href="#more" className="text-white/60 font-medium text-xl" onClick={() => setMobileMenuOpen(false)}>More</Link>
          <Link href="#contact" className="text-white/60 font-medium text-xl" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className="flex gap-8 mt-4 pt-6 border-t border-white/10">
            <button className="text-white/60 hover:text-white"><SearchIcon className="w-6 h-6" /></button>
            <button className="text-white/60 hover:text-white"><CartIcon className="w-6 h-6" /></button>
            <button className="text-white/60 hover:text-white"><UserIcon className="w-6 h-6" /></button>
          </div>
        </div>
      )}
    </nav>
  );
}
