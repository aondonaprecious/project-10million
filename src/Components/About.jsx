/** @format */

// src/components/OrganizationSection.jsx
import { motion } from "framer-motion";

const OrganizationSection = () => {
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
              Organized By
            </motion.h2>

            {/* Accent line */}
            <motion.div
              className="w-32 h-1 bg-[#00FFFF] mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Organization Name */}
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-[#01257D] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              BELIEVERS LOVEWORLD JOSTUM
            </motion.h3>

            {/* Subtext */}
            <motion.p
              className="text-xl text-[#666666]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              Joseph Sarwuan Tarkaa University
            </motion.p>

            {/* Project Cards */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#01257D] rounded-lg p-4 w-32 h-32 flex items-center justify-center shadow-md"
                >
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-1">{i}</div>
                    <div className="text-xs uppercase text-[#00FFFF]">
                      Project
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationSection;
