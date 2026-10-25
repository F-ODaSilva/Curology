import { BagProvider } from "./bag.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Lineup from "./components/Lineup.jsx";
import Routine from "./components/Routine.jsx";
import Shop from "./components/Shop.jsx";
import Results from "./components/Results.jsx";
import How from "./components/How.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import BagDrawer from "./components/BagDrawer.jsx";
import Spotlight from "./components/Spotlight.jsx";
import StickyCta from "./components/StickyCta.jsx";
import { useEffect } from "react";

export default function App() {
  // Soft reveal for section heads and cards as they enter the viewport.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = document.querySelectorAll(".band .head, .about-row, .ocard, .rev, .how-steps li, .faq-list > *, .about-commit, .cta-band");
    const io = new IntersectionObserver((list) => list.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el, k) => { el.classList.add("reveal"); el.style.setProperty("--d", `${(k % 4) * 70}ms`); io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <BagProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Lineup />
        <Routine />
        <Spotlight />
        <Shop />
        <Results />
        <How />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <BagDrawer />
      <StickyCta />
    </BagProvider>
  );
}
