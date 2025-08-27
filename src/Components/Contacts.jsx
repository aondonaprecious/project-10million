/** @format */

// src/components/ThemeFeatures.jsx
import { motion } from "framer-motion";

const Contacts = () => {
  const features = [
    {
      title: "Land Purchase",
      description: "Purchase of 2plots of land for building commencement",
    },
    {
      title: "Building Materials Acquisition",
      description: "Purchase of building materials suitable for construction",
    },
    {
      title: "Building Commencement",
      description: "The erection of Gods house proper",
    },
    {
      title: "Church Equipment Purchase",
      description: "Purchasing the needed church Equipments",
    },
    {
      title: "Office Renovation",
      description:
        "Revamping our office to inspire innovation and teamwork after our fire outbreak",
    },
    {
      title: "ICPLC Mobilisation",
      description:
        "Sponsor students delegates to attend ICPLC in Lagos with Pastor Chris",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#01257D] to-[#001845]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#00FFFF] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Project Features
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-[#00FFFF] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-[#00FFFF] max-w-2xl mx-auto mt-4 md:mt-6 px-2 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Innovative features that make this project transformative for our
            community
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#00FFFF] hover:shadow-lg hover:shadow-[#00FFFF]/30 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-start sm:items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00FFFF] text-[#01257D] font-bold flex items-center justify-center mr-3 text-xs sm:text-base flex-shrink-0 mt-1 sm:mt-0">
                  {index + 1}
                </span>
                {feature.title}
              </h3>
              <p className="text-[#00FFFF]/90 text-sm sm:text-base pl-0 sm:pl-11 mt-2 sm:mt-0">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
