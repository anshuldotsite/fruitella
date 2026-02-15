"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative group z-50 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl animate-bounce-slow">🍦</span>
              <span className="font-display font-black text-2xl tracking-tight text-chocolate">
                The Ice Cream <span className="text-strawberry">Shop</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Menu", "Location", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold text-sm text-text-light hover:text-strawberry transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strawberry transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <button className="px-6 py-2.5 bg-chocolate text-white rounded-full font-bold text-sm shadow-lg hover:bg-strawberry hover:shadow-strawberry/30 hover:-translate-y-0.5 transition-all duration-300">
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
          >
            <span
              className={`block w-6 h-0.5 bg-chocolate transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-chocolate transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-chocolate transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {["Menu", "Location", "About"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="font-display font-black text-4xl text-chocolate hover:text-strawberry transition-colors"
          >
            {item}
          </Link>
        ))}
        <button className="mt-4 px-10 py-4 bg-chocolate text-white rounded-full font-bold text-xl shadow-xl">
          Order Now
        </button>
      </div>
    </>
  );
}
