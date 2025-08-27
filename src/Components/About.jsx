/** @format */
import React from "react";
import { motion } from "framer-motion";
import pastorimg from "../assets/pastor jerry.png";
import jostumpix from "../assets/jostum main.jpg";

const About = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#01257D] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Our Church
          </motion.h2>
          <motion.div
            className="w-24 h-2 bg-gradient-to-r from-[#D4AF37] to-[#FFDF7B] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Church Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          {/* Church Image */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#D4AF37]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={jostumpix}
              alt="Believers Loveworld JOSTUM Church"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Church Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#01257D] mb-4">
              Believers Loveworld JOSTUM
            </h2>

            <div className="w-20 h-1 bg-[#D4AF37] mb-6 rounded-full" />

            <h3 className="text-2xl md:text-3xl font-bold text-[#01257D] mb-2">
              Campus Ministry at Joseph Sarwuan Tarkaa University
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Believers Loveworld JOSTUM is a vibrant campus ministry of Christ
              Embassy dedicated to raising leaders, shaping destinies, and
              influencing the campus community with the message of God's love
              and grace. We are committed to the development of spirit, soul,
              and body through the teaching of God's Word.
            </p>

            {/* Church Values */}
            <div className="mt-6 flex flex-wrap gap-4">
              {["Worship", "Discipleship", "Fellowship", "Evangelism"].map(
                (label, i) => (
                  <div
                    key={i}
                    className="bg-[#01257D] text-white px-5 py-3 rounded-lg shadow-md text-sm font-semibold"
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Pastor Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Pastor Description */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#01257D] mb-4">
              Our Campus Pastor
            </h2>

            <div className="w-20 h-1 bg-[#D4AF37] mb-6 rounded-full" />

            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-2">
              Highly Esteemed Pastor Jeremiah Ocheme
            </h3>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pastor Jeremiah Ocheme is a dynamic, spirit-filled minister of the
              gospel with a passion for raising young leaders and impacting
              campuses with the message of God's love. With over a decade of
              ministry experience, he has been instrumental in the growth and
              development of Believers Loveworld JOSTUM. He is also known for his
              practical approach to Scripture and his ability to connect with
              students at their point of need.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#01257D]">
              <p className="text-lg italic text-[#01257D]">
                "Our mission is to raise champions and showcase God's excellence
                in every sphere of life on campus."
              </p>
              <p className="mt-2 font-semibold text-[#01257D]">
                - Pastor Jeremiah Ocheme
              </p>
            </div>
          </motion.div>

          {/* Pastor Image - Responsive Adjustments */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="relative w-[70%] md:w-80 mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={pastorimg}
                  alt="Highly Esteemed Pastor Jeremiah Ocheme"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#FFDF7B] w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl">”</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Times Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-[#01257D] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Join Us For Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-[#01257D]">
                Sunday Service
              </h3>
              <p className="text-xl text-[#01257D]">8:00 AM - 10:00 AM</p>
              <p className="mt-2 text-[#01257D]">Multipurpose Hall</p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-[#01257D]">
                Bible Study
              </h3>
              <p className="text-xl text-[#01257D]">Wednesdays, 5:00 PM</p>
              <p className="mt-2 text-[#01257D]">Multipurpose Hall</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
