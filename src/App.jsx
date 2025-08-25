/** @format */

// src/App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader";
import Header from "./Components/Navigation";
import Hero from "./Components/Hero";
import Home from "./Components/Projects";
// import Partnership from "./Components/Partnership";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
// import OrganizationSection from "./Components/";
import About from './Components/About';
import './App.css';
import Gallery from "./Components/Gallery";
import Projects from "./Components/Projects";
import Partnership from "./Components/Partnership";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);

    document.body.style.overflow = "hidden";

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffd1e3] to-white">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Hero />
          <About />
          <Gallery />
          <Projects />
          <Partnership />
          <Contacts />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;