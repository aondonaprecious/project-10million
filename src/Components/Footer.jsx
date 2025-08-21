/** @format */

// src/components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#392467] text-[#ffd1e3] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Project 10 Million
            </h3>
            <p className="mb-4">
              Covering church building, office renovation & ICPLC logistics
            </p>
            <p className="italic">
              "For by thee I have run through a troop; and by my God have I
              leaped over a wall."
            </p>
            <p className="font-bold mt-2">Psalm 18:29 (KJV)</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Projects",
                "Progress",
                "Donate",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Organization</h4>
            <ul className="space-y-2">
              <li>BELIEVERS LOVEWORLD JOSTUM</li>
              <li>Joseph Sarwuan Tarkaa University</li>
              <li>Church Building Committee</li>
              <li>Office Renovation Team</li>
              <li>ICPLC Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <p className="mb-2">123 Church Street, City</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: info@project10million.org</p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#5d3587] flex items-center justify-center cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#ffd1e3",
                    color: "#392467",
                  }}
                >
                  {i}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#5d3587] text-center">
          <p>
            &copy; {new Date().getFullYear()} Project 10 Million. All Rights
            Reserved.
          </p>
          <p className="mt-2 text-[#ffd1e3]">
            Organized by BELIEVERS LOVEWORLD JOSTUM - Joseph Sarwuan Tarkaa
            University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
