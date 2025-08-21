/** @format */

// src/components/Hero.jsx
import { motion } from "framer-motion";
import Image from "../assets/image.png"; // import the downloaded image

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#01257D] overflow-hidden">
      {/* Deep navy overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01257D]/90 to-[#001845] z-0"></div>

      {/* Background church image */}
      <div
        className="absolute inset-0 bg-center bg-cover z-[-1] opacity-90"
        style={{ backgroundImage: `url("${Image}")` }}
      />

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
              A 21<sup>st</sup>-century logistics company delivering modern
              supply chain solutions and last-mile delivery capabilities in the
              retail, hi-tech, and logistics sectors. You can rely on us for all
              your delivery and transport requirements.
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
