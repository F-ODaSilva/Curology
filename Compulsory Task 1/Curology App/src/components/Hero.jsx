// Images 
import cardOne from "../assets/hydrateSkin.jpg";
import cardTwo from "../assets/menHappy.png"
import cardThree from "../assets/productHands-4.png"
import cardFour from "../assets/clearSkin.jpg"
import cardFive from "../assets/regrowHair.jpg"
import cardSix from "../assets/personHero.png"
import cardSeven from "../assets/womanSmile-2.png"
import cardEight from "../assets/productHands.png"

// Gradient Background Component
import GradientBackRPY from "./GradientBack";

const Hero = () => {
  return (
    <div className="flex min-h-screen" id="hero">
     {/* Background Circle Gradient */}
     <GradientBackRPY />
      {/* Left Side: 35% of the screen */}
      <div className="left-side w-1/3 p-8 flex flex-col z-10">
        <h1 className="text-left text-5xl font-bold mb-1">
        Timeless Skin<span className="text-red-500">.</span> Lush Hair<span className="text-yellow-300">.</span> Beautifully You<span className="text-white">.</span>
        </h1>
        <h2 className="text-gray-700 text-xl text-justify mb-5">
        Transform your skincare and hair care routine with advanced solutions for anti-aging, acne, dark spots, and hair growth. Because your confidence deserves the best care
        </h2>
        <h3 className="text-xl font-bold mb-2 ps-2 text-gray-900 text-left">Start Your Journey</h3>
        <input
          type="text"
          placeholder="Enter your username"
          className="p-3 mb-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-3 mb-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="py-2 px-4 bg-gradient-to-r from-sky-600 to-indigo-900 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-700 text-white rounded-md transition duration-300 font-medium">
          Sign In
        </button>
      </div>

      {/* Right Side: 65% of the screen (Bento grid) */}
      <div className="w-2/3 p-8 z-1">
        <div className="grid grid-cols-4 gap-3 mt-8 relative">
          {/* First Row: 4 cards */}
          <div className="bg-gray-300 h-40 rounded-md transform transition-all duration-500 rotate-2 hover:rotate-6 scale-110 hover:scale-115 tilt-card z-20 border-4 border-yellow-300">
            <img src={cardFour} alt="" className="object-cover w-full h-full rounded-sm bg-indigo-300" />
          </div>
          <div className="bg-gray-300 h-40 rounded-md transform transition-all duration-500 -rotate-6 hover:rotate-3 scale-105 hover:scale-125 tilt-card border-4 border-emerald-300 hover:z-50">
          <img src={cardThree} alt="" className="object-cover w-full h-full rounded-sm" />
          </div>
          <div className="bg-gray-300 h-40 rounded-md transform transition-all duration-500 rotate-2 hover:rotate-6 scale-110 hover:scale-105 tilt-card z-auto border-4 border-red-300">
            <img src={cardSix} alt="" className="object-cover w-full h-full rounded-sm" />
          </div>
          <div className="bg-gray-300 h-40 rounded-md transform transition-all duration-500 -rotate-3 hover:rotate-6 scale-105 hover:scale-110 tilt-card z-auto border-4 border-purple-400">
            <img src={cardSeven} alt="" className="object-cover w-full h-full rounded-sm" />
          </div>

          {/* Second Row: Large vertical card and 2 smaller cards */}
          <div className="col-span-1 row-span-2 bg-gray-300 h-full rounded-md transform transition-all duration-500 -rotate-6 hover:rotate-6 scale-110 tilt-card z-auto hover:z-50 border-4 border-pink-700">
          <img src={cardOne} alt="" className="object-cover w-full h-full bg-pink-400" />
          </div>
          <div className="col-span-2 bg-gray-300 h-40 rounded-md transform transition-all duration-500 rotate-3 hover:-rotate-6 scale-110 hover:scale-100 tilt-card z-auto border-4 border-cyan-500">
            <img src={cardTwo} alt="" className="object-cover w-full h-full rounded-md saturate-150" />
          </div>
          <div className="col-span-1 row-span-2 bg-gray-300 h-full rounded-md transform transition-all duration-500 rotate-6 hover:rotate-3 scale-100 hover:scale-105 tilt-card z-auto hover:z-50 border-4 border-yellow-600">
            <img src={cardFive} alt="" className="object-cover w-full h-full rounded-sm" />
          </div>
          <div className="col-span-2 bg-gray-300 h-40 rounded-md transform transition-all duration-500 -rotate-3 hover:rotate-3 scale-110 hover:scale-105 tilt-card z-auto border-4 border-purple-600">
            <img src={cardEight} alt="" className="object-cover w-full h-full rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
