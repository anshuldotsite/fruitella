"use client";

import Image from "next/image";

export default function Location() {
  return (
    <section id="location" className="relative py-40 overflow-hidden">
      {/* Immersive Background Map Effect */}
      <div className="absolute inset-0 z-0 bg-blue-50">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4d96ff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        {/* Decorative Roads */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M-10,30 Q40,60 110,40" stroke="#4d96ff" strokeWidth="2" fill="none" />
           <path d="M20,-10 Q50,50 40,110" stroke="#4d96ff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        
        {/* Floating Location Card */}
        <div className="bg-white/90 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-2xl max-w-lg w-full transform hover:scale-[1.02] transition-transform duration-500 border border-white/50 relative overflow-hidden group">
          
          {/* Top accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ice-strawberry via-purple-300 to-ice-mint" />
          
          <h2 className="font-display font-black text-5xl md:text-6xl text-chocolate mb-2 tracking-tight">
            Find Us
          </h2>
          <p className="text-text-light font-medium mb-10 text-lg">
            Follow the smell of fresh waffle cones.
          </p>

          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-5 group/item">
              <div className="w-14 h-14 rounded-2xl bg-ice-strawberry/20 flex items-center justify-center text-2xl text-strawberry group-hover/item:bg-ice-strawberry group-hover/item:text-white transition-all duration-300 shadow-sm">
                📍
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-chocolate mb-1">The Sweet Spot</h3>
                <p className="font-sans text-text-light text-lg leading-snug">
                  123 Avenue, Windsor, <br/>Ontario N9G 2K3
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group/item">
              <div className="w-14 h-14 rounded-2xl bg-ice-mint/20 flex items-center justify-center text-2xl text-green-600 group-hover/item:bg-ice-mint group-hover/item:text-green-800 transition-all duration-300 shadow-sm">
                ⏰
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-chocolate mb-1">Open Late</h3>
                <p className="font-sans text-text-light text-lg">
                  <span className="font-bold text-chocolate">Mon-Sun:</span> 3 PM - 1 AM
                </p>
                <p className="text-sm text-green-500 font-bold mt-1 animate-pulse">
                  ● We are currently OPEN
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group/item">
               <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl text-purple-600 group-hover/item:bg-purple-200 group-hover/item:text-purple-800 transition-all duration-300 shadow-sm">
                📞
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-chocolate mb-1">Ring Ring</h3>
                <p className="font-sans text-text-light text-lg">
                  519-915-9999
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-4 bg-chocolate text-white rounded-xl font-bold text-lg shadow-lg hover:bg-strawberry hover:-translate-y-1 transition-all duration-300">
              Get Directions
            </button>
            <button className="px-6 py-4 border-2 border-chocolate/20 text-chocolate rounded-xl font-bold text-lg hover:border-chocolate hover:bg-chocolate hover:text-white transition-all duration-300">
              UberEats
            </button>
          </div>
          
          {/* Decorative Blob */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-ice-vanilla rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
        </div>
        
        {/* Visual Element (Right Side) */}
        <div className="hidden lg:block relative z-10 w-full max-w-md h-[500px]">
           <div className="absolute inset-0 bg-gradient-to-tr from-ice-mint to-blue-200 rounded-[3rem] rotate-3 shadow-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
              <div className="text-center">
                 <div className="text-9xl mb-4 animate-bounce-slow filter drop-shadow-xl">🍦</div>
                 <div className="font-display font-black text-white text-4xl transform -rotate-6">
                    See you <br/>soon!
                 </div>
              </div>
              
              {/* Floating Clouds/Elements */}
              <div className="absolute top-10 left-10 text-4xl animate-float-slow delay-75">☁️</div>
              <div className="absolute bottom-20 right-10 text-5xl animate-float-slow delay-500">✨</div>
           </div>
        </div>

      </div>
      
      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
