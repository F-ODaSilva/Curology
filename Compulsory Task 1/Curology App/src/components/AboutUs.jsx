import about1 from "../assets/curology-products.jpg";
import about2 from "../assets/clearSkin-2.jpg";
import about3 from "../assets/hairLoss.png";
import about4 from "../assets/hairLoss-2.png";
import about5 from "../assets/testimonial-2.png";


// Gradient Background Component
import GradientBack from "./GradientBack";

import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24" id="about">
      <GradientBack />
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Row 1: Left Text, Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-50">
          <div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Skincare for Every Glow
            </h3>
            <p className="text-slate-200 leading-relaxed text-justify tracking-tight me-6 font-medium">
              Our skincare solutions are crafted to tackle everything from anti-aging to 
              dark spots, helping you achieve radiant, healthy skin. We combine nature and 
              science for results you can trust.
            </p>
          </div>
          <div>
            <img
              src={about1}
              alt="Skincare"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Row 2: Right Image (Deck of Cards), Left Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-50 mt-5" id="cardStack">
          <div className="flex justify-center md:order-2">
          <div className="relative w-40 h-40">
            {[about4, about3, about5, about1, about1].map((image, index) => (
                <div
                key={index}
                className="absolute w-40 h-40 rounded-lg shadow-md transform scale-125 transition duration-300 overflow-hidden card"
                style={{
                    top: `${index * 15}px`,
                    left: `${index * 15}px`,
                    zIndex: 5 - index,
                }}
                >
                <img
                    src={image}  // Reference the imported image here
                    alt={`Card ${index + 1}`}
                    className="w-full h-full object-cover"
                />
                </div>
            ))}
            </div>
          </div>
          <div className="md:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Haircare to Thrive
            </h3>
            <p className="text-slate-200 leading-relaxed font-medium text-justify">
              Our innovative hair growth products nourish and strengthen your hair, giving it 
              the care it deserves. Whether you're tackling thinning or looking to boost shine, 
              we’ve got you covered.
            </p>
          </div>
        </div>

        {/* Row 3: Text on Top, Image Below */}
        <div className="text-center mt-20 single-card ">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 z-40">
              Your Beauty, Our Commitment
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed font-medium z-40">
              At <span className="brand">Curology</span>, we’re dedicated to providing premium skincare and 
              haircare solutions that enhance your natural beauty. Discover the perfect 
              blend of science and care with products that are made for you.
            </p>
          </div>
          <GradientBack className="lg:hidden z-30"/>
          <div className="mt-8 image">
            <img
              src={about2}
              alt="Skincare and Haircare"
              className="w-full max-w-4xl mx-auto h-80 rounded-lg shadow-lg object-cover saturate-0 hover:saturate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
