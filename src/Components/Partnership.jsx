/** @format */

// src/components/PartnershipSection.jsx
import { motion } from "framer-motion";

const Partnership = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#01257D]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            {/* Section Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#01257D] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Become A Partner
            </motion.h2>

            {/* Accent line */}
            <motion.div
              className="w-32 h-1 bg-[#00FFFF] mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Partnership Description */}
            <motion.p
              className="text-lg md:text-xl text-[#666666] mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Join us in our mission to build God a house, renovate our
              facilities, and sponsor students for the ICPLC program. Your
              partnership makes a lasting impact.
            </motion.p>

            {/* Account Details */}
            <motion.div
              className="mt-8 bg-[#01257D] rounded-lg p-6 text-white max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4">
                Partnership Account Details
              </h3>
              <div className="text-left space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Bank Name:</span>
                  <span>Your Bank Name</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Account Name:</span>
                  <span>BELIEVERS LOVEWORLD JOSTUM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Account Number:</span>
                  <span className="text-[#00FFFF] font-bold">0123456789</span>
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg text-[#666666] mb-4">
                Thank you for partnering with us to advance God's kingdom.
              </p>
              <button className="bg-[#01257D] hover:bg-[#001a5c] text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Confirm Your Partnership
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
