/** @format */

import { motion } from "framer-motion";

const Home = () => {
  const homeVariants = [
    {
      title: "Church Building",
      description: "Modern sanctuary design with community spaces",
    },
    {
      title: "Office Renovation",
      description: "Functional workspace for ministry operations",
    },
    {
      title: "ICPLC Logistics",
      description: "Efficient systems for community outreach",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#01257D] to-[#023190] overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 text-white/20 bg-dots pointer-events-none"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-[#00FFFF] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#00FFFF] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-[#00FFFF] max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Three key initiatives transforming our community and enabling
            ministry growth
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeVariants.map((home, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#00FFFF] flex flex-col shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-64 bg-gradient-to-br from-[#01257D] to-[#023190] flex items-center justify-center text-[#00FFFF]">
                <div className="text-8xl font-bold opacity-40">{index + 1}</div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {home.title}
                </h3>
                <p className="text-[#00FFFF] mb-4">{home.description}</p>
              </div>
              <div className="p-4 bg-[#01257D]">
                <button className="w-full bg-[#00FFFF] text-[#01257D] py-2 rounded-lg font-bold hover:bg-white hover:text-[#01257D] transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
