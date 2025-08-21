/** @format */

// src/components/OrganizationSection.jsx
import { motion } from "framer-motion";

const OrganizationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#D4AF37]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#4169E1] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Organized By
            </motion.h2>

            <motion.div
              className="w-32 h-1 bg-[#D4AF37] mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.h3
              className="text-2xl md:text-3xl font-bold text-[#4169E1] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              BELIEVERS LOVEWORLD JOSTUM
            </motion.h3>

            <motion.p
              className="text-xl text-[#666666]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              Joseph Sarwuan Tarkaa University
            </motion.p>

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
                  className="bg-[#4169E1] rounded-lg p-4 w-32 h-32 flex items-center justify-center"
                >
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-1">{i}</div>
                    <div className="text-xs uppercase">Project</div>
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
