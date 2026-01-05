export default function Location() {
  return (
    <section id="location" className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-orange rounded-[3rem] p-8 md:p-16 border-4 border-black shadow-pop relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow rounded-full border-4 border-black" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-pink rounded-full border-4 border-black" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-black shadow-pop transform -rotate-1">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-8">
              Come Hang Out! 👇
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-xl">The Spot</h3>
                  <p className="font-medium text-gray-600">
                    3041 Dougall Ave, Windsor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">⏰</span>
                <div>
                  <h3 className="font-bold text-xl">Open Late</h3>
                  <p className="font-medium text-gray-600">
                    3 PM - 1 AM (Everyday)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-bold text-xl">Call Us</h3>
                  <p className="font-medium text-gray-600">519-915-9999</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full py-4 bg-green text-black font-display font-bold text-xl rounded-xl border-2 border-black shadow-pop-hover transition-all">
              Get Directions 🗺️
            </button>
          </div>

          <div className="bg-blue h-64 md:h-full min-h-[300px] rounded-3xl border-2 border-black overflow-hidden relative shadow-pop transform rotate-1">
            <div className="absolute inset-0 flex items-center justify-center bg-blue-400">
              {/* Map Placeholder */}
              <span className="font-display font-black text-white text-4xl transform -rotate-12 opacity-50">
                MAP GOES HERE 🗺️
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
