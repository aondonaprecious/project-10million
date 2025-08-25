/** @format */

// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image1 from "../assets/church-image.jpg"; // import your first image
import Image2 from "../assets/church.jpg"; // import your second image
import Image3 from "../assets/churchim.jpg"; // import your third image

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
      {/* Deep navy overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01257D]/90 to-[#001845] z-0"></div>

      {/* Background image slider */}
      <div className="absolute inset-0 z-[-1]">
        {images.map((Images, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${Images})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Project 10 <br />
              <span className="text-[#00FFFF]">Million</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Project - 10 Million we are building God a house, spreading the
              gospel on our campus. one block per time.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="bg-[#00FFFF] text-[#01257D] px-8 py-3 rounded-lg text-lg font-bold hover:bg-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-[#00FFFF] hover:text-[#01257D] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side: Optional Decorative Imagery */}
          {/* You can add other visuals here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
