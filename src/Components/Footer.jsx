/** @format */

// src/components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-[#01257D] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#01257D]">
              Project 10 Million
            </h3>
            <p className="mb-4">
              Covering church building, office renovation & ICPLC logistics
            </p>
            <p className="italic text-[#01257D]/80">
              "For by thee I have run through a troop; and by my God have I
              leaped over a wall."
            </p>
            <p className="font-bold mt-2 text-[#00FFFF]">Psalm 18:29 (KJV)</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#01257D]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Donate", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#00FFFF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#01257D]">
              Organization
            </h4>
            <ul className="space-y-2 text-[#01257D]/90">
              <li>Church Building Committee</li>
              <li>Office Renovation Team</li>
              <li>ICPLC Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#01257D]">
              Contact Us
            </h4>
            <p className="mb-2">123 Church Street, City</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email:info@project10million.org</p>
            <div className="flex space-x-4">
              {[].map((i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#01257D] text-white flex items-center justify-center cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#00FFFF",
                    color: "#01257D",
                  }}
                >
                  {i}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#01257D]/30 text-center">
          <p className="text-[#01257D]">
            &copy; {new Date().getFullYear()} Project 10 Million. All Rights
            Reserved.
          </p>
          <p className="mt-2 text-[#01257D] font-medium">
            Organized by BELIEVERS LOVEWORLD JOSTUM - Joseph Sarwuan Tarkaa
            University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
