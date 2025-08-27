/** @format */

import React from "react";

const Partnership = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-[#01257D]">
          <div className="text-center">
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#01257D] mb-4 md:mb-6">
              Become A Partner With Us
            </h2>

            {/* Accent line */}
            <div className="w-24 sm:w-32 h-1 bg-[#00FFFF] mx-auto mb-6 md:mb-8 rounded-full"></div>

            {/* Partnership Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#666666] mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in our mission to build God a house, renovate our
              facilities, and sponsor students for the ICPLC with Pastor Chris
              at Loveworld City ASEESE, Lagos state. Your partnership makes a
              lasting impact.
            </p>

            {/* Account Details */}
            <div className="mt-6 md:mt-8 bg-[#01257D] rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-white max-w-xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                Partnership Account Details
              </h3>
              <div className="text-left space-y-2 sm:space-y-3 text-sm sm:text-base">
                <div className="flex flex-col xs:flex-row xs:justify-between">
                  <span className="font-medium">Bank Name:</span>
                  <span className="mt-1 xs:mt-0">OPAY Microfinance Bank</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between">
                  <span className="font-medium">Account Name:</span>
                  <span className="mt-1 xs:mt-0 ">
                    BELIEVERS LOVEWORLD JOSTUM (Roseline Nwafor)
                  </span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between">
                  <span className="font-medium">Account Number:</span>
                  <span className="text-[#00FFFF] font-bold mt-1 xs:mt-0">
                    8148599366
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6 md:mt-8">
              <p className="text-base md:text-lg text-[#666666] mb-4">
                Thank you for partnering with us to advance God's kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
