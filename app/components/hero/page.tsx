"use client";

import Image from "next/image";

// Soft floating fruit component
const FloatingElement = ({
  emoji,
  size = "text-6xl",
  position,
  delay = "0s",
  rotate = "0deg",
}: {
  emoji: string;
  size?: string;
  position: string;
  delay?: string;
  rotate?: string;
}) => {
  return (
    <div
      className={`absolute ${position} ${size} select-none pointer-events-none opacity-80 filter drop-shadow-xl animate-float-slow`}
      style={{ animationDelay: delay, transform: `rotate(${rotate})` }}
    >
      {emoji}
    </div>
  );
};

export default function Hero() {
  const floatingElements = [
    { emoji: "🍦", position: "top-[20%] left-[10%]", delay: "0s", rotate: "-15deg" },
    { emoji: "🍓", position: "top-[30%] right-[15%]", delay: "2s", rotate: "20deg" },
    { emoji: "🍨", position: "bottom-[20%] left-[15%]", delay: "1s", rotate: "10deg" },
    { emoji: "🍪", position: "bottom-[30%] right-[10%]", delay: "3s", rotate: "-10deg" },
    { emoji: "🥛", position: "top-[15%] right-[30%]", delay: "1.5s", rotate: "5deg" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      
      {/* Soft Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-ice-strawberry opacity-20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-ice-mint opacity-20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-ice-vanilla opacity-40 rounded-full blur-[80px] animate-pulse-slow delay-500" />

      {/* Floating Elements */}
      {floatingElements.map((el, i) => (
        <FloatingElement key={i} {...el} />
      ))}

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="inline-block mb-6 animate-fade-in-up">
          <span className="px-6 py-2 rounded-full bg-white/50 border border-white/60 text-text-light font-bold text-sm tracking-wide shadow-sm backdrop-blur-md">
            ✨ Windsor's Dreamiest Scoops
          </span>
        </div>

        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-tight text-chocolate mb-6 drop-shadow-sm">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ice-strawberry to-purple-400 animate-gradient-x">
            Taste the
          </span>
          <span className="block relative">
            Magic
            <span className="absolute -top-6 -right-8 text-6xl animate-bounce-slow">✨</span>
          </span>
        </h1>

        <p className="font-sans text-xl md:text-2xl text-text-light max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Handcrafted flavors, creamy textures, and sprinkles of joy. 
          The sweetest escape in <span className="text-ice-strawberry font-bold">Windsor</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-chocolate text-white rounded-full font-display font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore Menu 🍦</span>
            <div className="absolute inset-0 bg-gradient-to-r from-ice-strawberry to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="px-10 py-5 bg-white text-chocolate rounded-full border-2 border-white font-display font-bold text-xl shadow-soft hover:shadow-lg hover:bg-ice-vanilla hover:border-ice-vanilla transition-all duration-300">
            Visit Us 📍
          </button>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-[calc(100%+1.3px)] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
