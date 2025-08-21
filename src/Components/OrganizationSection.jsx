/** @format */

// src/components/OrganizationSection.jsx
import { motion } from "framer-motion";
import churchImg from "../assets/church.jpg"; // replace with actual church image in assets

const OrganizationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={churchImg}
            alt="Believers Loveworld JOSTUM"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#01257D] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Organized By
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-[#D4AF37] mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[#01257D] mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            BELIEVERS LOVEWORLD JOSTUM
          </motion.h3>

          <motion.p
            className="text-lg text-[#666666] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            Joseph Sarwuan Tarkaa University
          </motion.p>

          {/* Small Highlight Boxes */}
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            {["Worship", "Outreach", "Impact"].map((label, i) => (
              <div
                key={i}
                className="bg-[#01257D] text-white px-5 py-3 rounded-lg shadow-md text-sm font-semibold"
              >
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationSection;
