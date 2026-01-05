export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-cream text-center relative overflow-hidden">
      {/* Huge Background Text */}
      <h2 className="font-display font-black text-[15vw] leading-none text-black opacity-5 select-none pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
        FRUITTELA
      </h2>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          {[
            {
              name: "Instagram",
              url: "https://www.instagram.com/cocktail.fruittela/",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/Cocktail.Fruittela",
            },
            {
              name: "TikTok",
              url: "https://www.tiktok.com/@cocktail.fruittela",
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all font-bold text-sm"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="font-medium text-gray-500 text-sm">
          © {new Date().getFullYear()} Cocktail Fruittela | Website:{" "}
          <a
            href="https://www.instagram.com/crafted__by__ak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            crafted by ak
          </a>
        </p>
      </div>
    </footer>
  );
}
