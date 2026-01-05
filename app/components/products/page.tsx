"use client";

import { useEffect, useRef } from "react";

export default function Products() {
  const items = [
    {
      emoji: "🥤",
      title: "Shakes",
      desc: "Layered fruit madness with ashta & nuts.",
      bg: "bg-pink",
      rotate: "rotate-1",
    },
    {
      emoji: "🥞",
      title: "Crepes",
      desc: "Stuffed with goodies & drenched in choc.",
      bg: "bg-yellow",
      rotate: "-rotate-1",
    },
    {
      emoji: "🧇",
      title: "Waffles",
      desc: "Crispy, golden, and totally loaded.",
      bg: "bg-blue",
      rotate: "rotate-2",
    },
    {
      emoji: "🍫",
      title: "Dubai Chocolate Cup",
      desc: "That viral pistachio crunch bar.",
      bg: "bg-green",
      rotate: "-rotate-2",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // Max 10deg rotation
    const rotateY = ((centerX - x) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section id="menu" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-5xl md:text-6xl text-black mb-4">
            Pick Your{" "}
            <span className="text-orange underline decoration-wavy decoration-4">
              Poison
            </span>
          </h2>
          <p className="font-sans text-xl text-gray-500">
            Warning: Highly Addictive 🚨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`${item.bg} p-6 rounded-3xl border-2 border-black shadow-pop transition-all duration-200 ease-out cursor-pointer transform ${item.rotate} hover:z-10 hover:shadow-pop-hover`}
            >
              <div className="bg-white w-20 h-20 rounded-2xl border-2 border-black flex items-center justify-center text-4xl mb-6 shadow-sm pointer-events-none">
                {item.emoji}
              </div>
              <h3 className="font-display font-black text-2xl mb-2 text-black pointer-events-none">
                {item.title}
              </h3>
              <p className="font-sans font-medium text-black/80 mb-6 leading-snug pointer-events-none">
                {item.desc}
              </p>
              <button className="w-full py-3 bg-white rounded-xl border-2 border-black font-bold text-sm hover:bg-black hover:text-white transition-colors pointer-events-none">
                Gimme! →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
