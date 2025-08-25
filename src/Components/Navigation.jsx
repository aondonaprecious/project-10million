/** @format */

// src/components/Header.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/blw_logo.png"; // make sure the logo is saved in src/assets as blw_logo.png

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contacts"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="BLW Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-[25px] md:text-1xl font-bold text-[#0a2a66] tracking-wide">
              BELIEVERS LOVEWORLD JOSTUM
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href="#"
                className="text-[#0a2a66] hover:text-[#FFD700] font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="bg-[#0a2a66] text-white px-4 py-2 rounded-lg hover:bg-[#FFD700] hover:text-[#0a2a66] transition-colors text-[15px] font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PARTNER TODAY
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0a2a66]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-[#0a2a66] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0a2a66] mb-1.5"></div>
            <div className="w-4 h-0.5 bg-[#0a2a66]"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[#0a2a66] hover:text-[#FFD700] font-medium px-4 py-2"
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-[#0a2a66] text-white px-4 py-2 rounded-lg w-full mx-4 font-bold hover:bg-[#FFD700] hover:text-[#0a2a66]">
                  PARTNER TODAY
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
