"use client";

import Image from "next/image";

export default function Products() {
  const items = [
    {
      emoji: "🍦",
      title: "Vanilla Bean",
      desc: "Real Madagascar vanilla beans steeped in fresh cream.",
      bg: "bg-ice-vanilla",
      accent: "text-yellow-600",
      price: "$4.50",
    },
    {
      emoji: "🍫",
      title: "Choco Fudge",
      desc: "Dark chocolate ganache swirled into creamy richness.",
      bg: "bg-orange-50",
      accent: "text-chocolate",
      price: "$5.00",
    },
    {
      emoji: "🍓",
      title: "Strawberry",
      desc: "Fresh, locally sourced berries blended to perfection.",
      bg: "bg-ice-strawberry",
      accent: "text-red-500",
      price: "$4.75",
    },
    {
      emoji: "🌿",
      title: "Mint Chip",
      desc: "Cool peppermint with chunks of dark chocolate.",
      bg: "bg-ice-mint",
      accent: "text-green-600",
      price: "$5.00",
    },
    {
      emoji: "🫐",
      title: "Blueberry",
      desc: "Wild blueberries smashed into sweet cream.",
      bg: "bg-ice-blueberry",
      accent: "text-blue-600",
      price: "$4.75",
    },
    {
      emoji: "🍪",
      title: "Cookie Dough",
      desc: "Loaded with chunks of chewy cookie dough.",
      bg: "bg-yellow-50",
      accent: "text-yellow-800",
      price: "$5.50",
    },
  ];

  return (
    <section id="menu" className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-ice-mint/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-ice-strawberry/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-ice-vanilla text-yellow-800 font-bold text-xs uppercase tracking-widest shadow-sm">
            Our Flavors
          </span>
          <h2 className="font-display font-black text-6xl md:text-7xl text-chocolate mb-6 tracking-tight">
            Scoops of <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-strawberry to-purple-400">Happiness</span>
          </h2>
          <p className="font-sans text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
            Handcrafted daily using organic milk and the freshest ingredients we can find. <br/>
            Warning: <span className="text-ice-strawberry font-bold">Highly Addictive.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-50 flex flex-col h-full"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] bg-gradient-to-br from-white to-${item.bg.replace("bg-", "")}/30 pointer-events-none`} />
              
              <div className="relative mb-8 flex justify-center">
                <div className={`w-32 h-32 rounded-full ${item.bg} flex items-center justify-center text-7xl shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <span className="filter drop-shadow-md group-hover:animate-bounce-short">
                    {item.emoji}
                  </span>
                </div>
                <div className="absolute -top-4 -right-4 bg-chocolate text-white font-bold px-4 py-2 rounded-full text-sm shadow-md rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {item.price}
                </div>
              </div>

              <div className="flex-1 text-center">
                <h3 className={`font-display font-black text-3xl mb-3 ${item.accent}`}>
                  {item.title}
                </h3>
                <p className="font-sans text-text-light font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 border-2 border-chocolate/10 text-chocolate hover:bg-chocolate hover:text-white hover:border-chocolate group-hover:shadow-lg`}>
                Add to Cone +
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <p className="text-text-light font-medium italic mb-6">
                Want to see all 30+ flavors?
             </p>
             <button className="px-10 py-4 bg-white border-2 border-chocolate text-chocolate rounded-full font-bold text-lg hover:bg-chocolate hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                View Full Menu
             </button>
        </div>
      </div>
    </section>
  );
}
