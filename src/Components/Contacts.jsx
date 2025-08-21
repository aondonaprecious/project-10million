/** @format */

// src/components/ThemeFeatures.jsx
import { motion } from "framer-motion";

const Contacts = () => {
  const features = [
    {
      title: "Community Impact",
      description: "Creating spaces that serve and uplift our community",
    },
    {
      title: "Sustainable Design",
      description: "Environmentally conscious building practices",
    },
    {
      title: "Accessible Spaces",
      description: "Facilities open and welcoming to everyone",
    },
    {
      title: "Technology Integration",
      description: "Modern tech for worship and outreach",
    },
    {
      title: "Multi-Purpose Areas",
      description: "Flexible spaces for various community needs",
    },
    {
      title: "Prayer & Meditation",
      description: "Dedicated spaces for spiritual reflection",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#01257D] to-[#001845]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-[#00FFFF] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Project Features
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
            Innovative features that make this project transformative for our
            community
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#00FFFF] hover:shadow-lg hover:shadow-[#00FFFF]/30 transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#00FFFF] text-[#01257D] font-bold flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {feature.title}
              </h3>
              <p className="text-[#00FFFF]/90 pl-11">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
