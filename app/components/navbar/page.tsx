"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <Link
          href="/"
          className="bg-white px-6 py-3 rounded-full border-2 border-black shadow-pop transform hover:scale-105 transition-transform"
        >
          <span className="font-display font-black text-xl md:text-2xl tracking-tight text-pink">
            Frui<span className="text-orange">ttela</span>
            <span className="text-black ml-1">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-white px-2 py-2 rounded-full border-2 border-black shadow-pop items-center gap-2">
          {["Menu", "Location", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="px-6 py-2 bg-pink text-white rounded-full font-bold text-sm border-2 border-transparent hover:border-black transition-all">
            Order Now 🍦
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-12 h-12 bg-yellow rounded-full border-2 border-black shadow-pop flex items-center justify-center text-xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
