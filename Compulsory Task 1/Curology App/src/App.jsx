// COMPONENTS
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/AboutUs"
import Card from "./components/ProductCard"

function App() {  
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <div className="box-border container md:container-md columns-3 md:columns-1xs mx-auto gap-8 py-6 md:gap-6 md:mx-auto sm:columns-xs sm:py-0 sm:gap-6 lg:columns-md rounded-lg ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> 
      </div>
    </>
  )
}

export default App;
