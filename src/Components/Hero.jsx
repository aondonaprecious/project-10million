/** @format */

// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image1 from "../assets/church.jpg"; // import your first image
import Image2 from "../assets/icplcsatge.jpg"; // import your second image
import Image3 from "../assets/9b7d65bc-ba87-4f46-a8ad-8b154ddbf0c4.jpg"; // import your third image

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2, Image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#01257D] overflow-hidden">
      {/* Reduced opacity overlay for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01257D]/60 to-[#001845]/80 z-10"></div>

      {/* Background image slider with enhanced visibility */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover brightness-110 contrast-105"
            />
            {/* Subtle vignette effect to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Project 20 <br />
              <span className="text-[#00FFFF] drop-shadow-md">Million</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Project 20 Million- we are building God a house, spreading the
              gospel on our campus. One block per time.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href="#projects">
                <motion.button
                  className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-[#00FFFF] hover:text-[#01257D] transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Optional Image Indicator */}
          <div className="hidden md:flex justify-center items-center">
            <div className="flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "bg-[#00FFFF] scale-125"
                      : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
