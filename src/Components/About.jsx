/** @format */

// src/components/InnerPages.jsx
import { motion } from "framer-motion";

const About = () => {
  const pages = [
    {
      title: "Project Timeline",
      description: "Our journey from vision to reality",
    },
    {
      title: "Donation Progress",
      description: "See how your contributions are making an impact",
    },
    {
      title: "Volunteer Opportunities",
      description: "Join us in building something meaningful",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#4169E1] to-[#2c4fbf]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Project Details
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#D4AF37] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-white max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Explore the details of our ambitious 10 million dollar project
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-[#D4AF37] shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6">
                <div className="text-[#4169E1] text-4xl mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4169E1] mb-2">
                  {page.title}
                </h3>
                <p className="text-gray-600 mb-6">{page.description}</p>
                <button className="text-[#4169E1] border border-[#4169E1] px-4 py-2 rounded-lg hover:bg-[#4169E1] hover:text-white transition-colors">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
