"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for subscribing! 🍦");
    setEmail("");
  };

  return (
    <footer className="relative bg-chocolate text-white overflow-hidden pt-32 pb-10">
      {/* Melting Top Effect */}
      <div
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 20%, 95% 40%, 90% 20%, 85% 60%, 80% 30%, 75% 50%, 70% 20%, 65% 40%, 60% 10%, 55% 50%, 50% 30%, 45% 60%, 40% 20%, 35% 50%, 30% 10%, 25% 40%, 20% 20%, 15% 50%, 10% 20%, 5% 40%, 0% 20%)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-20 bg-ice-strawberry/30"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 30%, 92% 50%, 84% 30%, 76% 60%, 68% 40%, 60% 70%, 52% 40%, 44% 60%, 36% 30%, 28% 50%, 20% 30%, 12% 60%, 4% 40%, 0% 30%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-display font-black text-3xl tracking-tight">
              The Ice Cream <span className="text-strawberry">Shop</span>
            </h2>
            <p className="text-white/80 font-medium leading-relaxed">
              Serving smiles and scoops since 2024. Come taste the magic in
              every bite.
            </p>
            <div className="flex gap-4">
              {["Instagram", "TikTok", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-strawberry flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-lg">✨</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-ice-vanilla">
              Explore
            </h3>
            <ul className="space-y-4">
              {["Menu", "Locations", "Our Story", "Catering", "Gift Cards"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-strawberry rounded-full"></span>
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-ice-vanilla">
              Contact
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>123 Avenue, Windsor, ON</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📞</span>
                <span>226-787-8376</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📧</span>
                <span>hello@icecreamshop.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="font-display font-bold text-xl mb-2 text-ice-vanilla">
              Sweet Updates 🍦
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Get 10% off your first scoop when you join our list!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-strawberry text-white rounded-xl font-bold hover:bg-white hover:text-strawberry transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-medium">
          <p>
            © {new Date().getFullYear()} The Ice Cream Shop. All rights
            reserved.
            <p>
              Website by{" "}
              <a
                href="https://www.instagram.com/crafted__by__ak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crafted by AK
              </a>
            </p>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
