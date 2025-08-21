/** @format */

// src/components/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        opacity: { delay: 2, duration: 1 },
      }}
    >
      <motion.div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-[#392467] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-12 h-12 rounded-full bg-[#5d3587]"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#392467] mb-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          Project 10 Million
        </motion.h1>
        <motion.p
          className="text-[#5d3587] text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Covering the church building project, office renovation and ICPLC
          logistics.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
