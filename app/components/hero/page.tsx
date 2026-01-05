"use client";

import Image from "next/image";

const BouncingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block hover:animate-bounce-short cursor-default transition-colors hover:text-orange"
          style={{ animationDuration: "0.5s" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Floating Fruit Component - supports both images and emojis
const FloatingFruit = ({
  fruit,
  size = "w-16 h-16",
}: {
  fruit: {
    emoji: string;
    image?: string; // Path to image in /public/fruits/
    size?: string;
    top: string;
    left?: string;
    right?: string;
    delay: string;
  };
  size?: string;
}) => {
  const finalSize = fruit.size || size;
  const useImage = fruit.image;

  return (
    <div
      className={`absolute ${fruit.top} ${
        fruit.left || fruit.right
      } ${finalSize} opacity-40 hover:opacity-70 hover:scale-125 transition-all animate-float hidden lg:block pointer-events-none`}
      style={{ animationDelay: fruit.delay }}
    >
      {useImage ? (
        <div className="relative w-full h-full">
          <Image
            src={`/fruits/${fruit.image}`}
            alt=""
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 64px, 96px"
          />
        </div>
      ) : (
        <span className="text-4xl">{fruit.emoji}</span>
      )}
    </div>
  );
};

export default function Hero() {
  // Floating fruits with different sizes and positions
  // Add image paths here when you have them: e.g. image: "strawberry.png"
  const floatingFruits = [
    {
      emoji: "🍊",
      // image: "orange.png", // Uncomment and add image to /public/fruits/ when ready
      size: "w-20 h-20",
      top: "top-[15%]",
      left: "left-[5%]",
      delay: "0s",
    },
    {
      emoji: "🍇",
      // image: "grapes.png",
      size: "w-24 h-24",
      top: "top-[25%]",
      right: "right-[8%]",
      delay: "1s",
    },
    {
      emoji: "🍉",
      // image: "watermelon.png",
      size: "w-16 h-16",
      top: "top-[60%]",
      left: "left-[8%]",
      delay: "2s",
    },
    {
      emoji: "🍌",
      // image: "banana.png",
      size: "w-20 h-20",
      top: "top-[70%]",
      right: "right-[12%]",
      delay: "3s",
    },
    {
      emoji: "🍑",
      // image: "peach.png",
      size: "w-16 h-16",
      top: "top-[45%]",
      left: "left-[3%]",
      delay: "1.5s",
    },
    {
      emoji: "🥝",
      // image: "kiwi.png",
      size: "w-20 h-20",
      top: "top-[50%]",
      right: "right-[5%]",
      delay: "2.5s",
    },
  ];

  // Fruits near title - also support images
  const titleFruits = [
    {
      emoji: "🍓",
      // image: "strawberry.png",
      position: "absolute -top-10 -left-10",
      delay: "0s",
    },
    {
      emoji: "🥭",
      // image: "mango.png",
      position: "absolute bottom-10 -right-10",
      delay: "1.5s",
    },
  ];

  // Decorative stickers/badges
  const stickers = [
    {
      text: "100% Halal",
      color: "bg-green",
      top: "top-[10%]",
      left: "left-[2%]",
      rotate: "-rotate-12",
    },
    {
      text: "Fresh Daily",
      color: "bg-blue",
      top: "top-[75%]",
      right: "right-[3%]",
      rotate: "rotate-12",
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float" />
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-pink rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Floating Fruits - Scattered Around */}
      {floatingFruits.map((fruit, index) => (
        <FloatingFruit key={index} fruit={fruit} />
      ))}

      {/* Decorative Stickers */}
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`absolute ${sticker.top} ${
            sticker.left || sticker.right
          } ${sticker.rotate} hidden xl:block pointer-events-none`}
        >
          <div
            className={`${sticker.color} px-4 py-2 rounded-full border-2 border-black shadow-pop text-white font-bold text-xs md:text-sm`}
          >
            {sticker.text}
          </div>
        </div>
      ))}

      {/* Playful Decorative Squiggles - Not Food Related */}
      <svg
        className="absolute top-[20%] right-[15%] w-20 h-20 opacity-30 animate-float hidden md:block pointer-events-none"
        style={{ animationDelay: "1s" }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,50 Q30,30 50,40 T80,30 T90,50"
          stroke="#FF6B9D"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <svg
        className="absolute bottom-[25%] left-[12%] w-16 h-16 opacity-40 animate-float hidden md:block pointer-events-none"
        style={{ animationDelay: "2.5s" }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="#FFD93D"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="15"
          stroke="#FFD93D"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute top-[55%] right-[18%] w-24 h-24 opacity-25 animate-float hidden lg:block pointer-events-none"
        style={{ animationDelay: "3.5s" }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,20 L50,80 L80,20"
          stroke="#4D96FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M30,50 L70,50"
          stroke="#4D96FF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block transform -rotate-6 mb-6 hover:rotate-0 transition-transform duration-300">
          <div className="bg-green text-white px-6 py-2 rounded-full border-2 border-black shadow-pop font-bold text-sm md:text-base animate-wiggle">
            👋 Windsor's Sweetest Spot!
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-black mb-8 relative select-none">
          <div className="block transform hover:-rotate-1 transition-transform duration-300">
            <BouncingText
              text="Cocktail"
              className="text-outline md:text-black"
            />
          </div>
          <div className="block text-pink transform hover:rotate-1 transition-transform duration-300">
            <BouncingText text="Fruittela" />
          </div>

          {/* Floating Fruits on Text */}
          {titleFruits.map((fruit, index) => (
            <span
              key={index}
              className={`${fruit.position} text-6xl animate-bounce-slow hidden md:block hover:scale-125 transition-transform cursor-pointer`}
              style={{ animationDelay: fruit.delay }}
            >
              {fruit.emoji}
              {/* To use images here, uncomment:
              <div className="relative w-16 h-16">
                <Image src={`/fruits/${fruit.image}`} alt="" fill className="object-contain" />
              </div>
              */}
            </span>
          ))}
        </h1>

        <p className="font-sans text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Serious flavor, zero boring. Layers of{" "}
          <span className="text-orange font-bold hover:underline decoration-wavy">
            fresh chunks
          </span>
          , creamy{" "}
          <span className="text-blue font-bold hover:underline decoration-wavy">
            ashta
          </span>
          , and pure happiness.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-orange text-white rounded-xl border-2 border-black shadow-pop hover:translate-y-1 hover:shadow-none font-display font-bold text-xl transition-all active:scale-95">
            See The Menu 🍦
          </button>
          <button className="px-8 py-4 bg-white text-black rounded-xl border-2 border-black shadow-pop hover:translate-y-1 hover:shadow-none font-display font-bold text-xl transition-all active:scale-95">
            Visit Us 📍
          </button>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white py-3 md:py-4 transform -rotate-1 scale-105 border-t-4 border-yellow hover:rotate-0 transition-transform duration-500">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-8 font-display font-black text-2xl md:text-4xl uppercase"
            >
              Ice Cream{" "}
              <span className="text-yellow mx-2 animate-pulse">★</span> Waffles{" "}
              <span className="text-pink mx-2 animate-pulse">★</span> Crepes{" "}
              <span className="text-green mx-2 animate-pulse">★</span> Shakes{" "}
              <span className="text-orange mx-2 animate-pulse">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
