/** @format */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images - replace these with your actual image imports
import Image1 from "../assets/IMG-20250729-WA0141.jpg";
import Image2 from "../assets/IMG-20250822-WA0022.jpg";
import Image3 from "../assets/IMG-20250822-WA0023.jpg";
import Image4 from "../assets/IMG-20250822-WA0024.jpg";
import Image5 from "../assets/IMG-20250822-WA0025.jpg";
import Image6 from "../assets/IMG-20250822-WA0026.jpg";
import Image7 from "../assets/IMG-20250822-WA0027.jpg";
import Image8 from "../assets/IMG-20250822-WA0028.jpg";
import Image9 from "../assets/IMG-20250822-WA0029.jpg";
import Image10 from "../assets/IMG-20250822-WA0030.jpg";
import Image11 from "../assets/IMG-20250822-WA0031.jpg";
import Image12 from "../assets/IMG-20250822-WA0032.jpg";

const Gallery = () => {
  // Image data with imported images
  const images = [
    {
      id: 1,
      src: Image1,
      title: "Sunday service",
      description: "Highly Esteemed Pastor Jeremiah Ocheme ",
    },
    {
      id: 2,
      src: Image2,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 3,
      src: Image3,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 4,
      src: Image4,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 5,
      src: Image5,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 6,
      src: Image6,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },

    {
      id: 7,
      src: Image7,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 8,
      src: Image8,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 9,
      src: Image9,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 10,
      src: Image10,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 11,
      src: Image11,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
    {
      id: 12,
      src: Image12,
      title: "Sunday service",
      description: "BLW JOSTUM Brethren",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  // Animation variants for framer motion
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  // Thumbnail animation
  const thumbnailVariants = {
    active: {
      scale: 1.1,
      borderColor: "#00FFFF",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      borderColor: "transparent",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01257D] to-[#0050a3] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-[#00FFFF]">
          Image Gallery
        </h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Beautiful moments captured in JOSTUM BLW
        </p>

        {/* Main Gallery */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl mb-8 border-2 border-[#00FFFF]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="w-[80%] h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-2xl font-bold">
                  {images[currentIndex].title}
                </h2>
                <p className="text-gray-300">
                  {images[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#01257D] hover:bg-[#011c5f] border-2 border-[#00FFFF] rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-[#00FFFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#01257D] hover:bg-[#011c5f] border-2 border-[#00FFFF] rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-[#00FFFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Autoplay Toggle */}
          <button
            onClick={() => setAutoplay(!autoplay)}
            className="absolute top-4 right-4 bg-[#01257D] hover:bg-[#011c5f] border-2 border-[#00FFFF] rounded-full p-2 transition-all duration-300 shadow-lg"
            aria-label={autoplay ? "Pause slideshow" : "Play slideshow"}
          >
            {autoplay ? (
              <svg
                className="w-5 h-5 text-[#00FFFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-[#00FFFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>

          {/* Slide Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#00FFFF]" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
