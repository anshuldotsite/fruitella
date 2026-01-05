import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import Products from "./components/products/page";
import Location from "./components/location/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Location />
      <Footer />
    </main>
  );
}
