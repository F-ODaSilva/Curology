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

export default function App() {
  return (
    <BagProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Lineup />
        <Routine />
        <Shop />
        <Results />
        <How />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <BagDrawer />
    </BagProvider>
  );
}
