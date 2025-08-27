/** @format */
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-[#01257D] py-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2301257d' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-center md:text-left">
          {/* Project Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-3 text-[#01257D]">
              Project 20 Million
            </h3>
            <p className="mb-3 text-sm max-w-xs">
              Covering church building, office renovation & ICPLC logistics
            </p>
            <p className="italic text-[#01257D]/80 text-sm max-w-xs">
              "For by thee I have run through a troop; and by my God have I
              leaped over a wall."
            </p>
            <p className="font-bold mt-2 text-[#00C6FF] text-sm">
              Psalm 18:29 (KJV)
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-3 text-[#01257D]">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Partner", id: "partnership" },
                { name: "Projects", id: "projects" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-[#00C6FF] transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-3 text-[#01257D]">
              Organization
            </h4>
            <ul className="space-y-1 text-[#01257D]/90 text-sm">
              <li className="py-1">Church Building Committee</li>
              <li className="py-1">Office Renovation Team</li>
              <li className="py-1">ICPLC Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-3 text-[#01257D]">
              Contact Us
            </h4>
            <p className="mb-2 text-sm max-w-xs">
              Multipurpose hall, South core. Benue state, Nigeria.
            </p>
            <div className="mb-2 text-sm">
              <p className="font-semibold">Phone:</p>
              <p>(+234) 706 283 2465</p>
              <p>(+234) 808 240 2564</p>
              <p>(+234) 911 658 5608</p>
            </div>
            <p className="mb-2 text-sm md:text-[18px]">
              Email:{" "}
              <a
                href="mailto:Blwuamsouthcore1@gmail.com"
                className="text-[#00C6FF] text-[15px] hover:underline ml-1"
              >
                Blwuamsouthcore1@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar - Tighter spacing */}
        <div className="pt-3 border-t border-[#01257D]/20 text-center">
          <p className="text-[#01257D] text-sm">
            &copy; {new Date().getFullYear()} Project 20 Million. All Rights
            Reserved.
          </p>
          <p className="text-[#01257D] font-medium text-xs mt-1">
            BELIEVERS LOVEWORLD JOSTUM - Joseph Sarwuan Tarkaa University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
