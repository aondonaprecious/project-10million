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
      {/* Spinning Loader */}
      <motion.div className="relative">
        {/* Outer spinning ring with gradient */}
        <motion.div
          className="w-20 h-20 border-4 border-t-transparent rounded-full"
          style={{
            borderImage: "linear-gradient(90deg, #01257D, #00FFFF) 1",
            borderStyle: "solid",
            borderWidth: "4px",
            borderTopColor: "transparent",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner rotating circle with gradient fill */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-12 h-12 rounded-full"
            style={{
              background: "linear-gradient(135deg, #01257D, #00FFFF)",
            }}
          ></div>
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{
            background: "linear-gradient(90deg, #01257D, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          Project 10 Million
        </motion.h1>

        <motion.p
          className="text-lg"
          style={{ color: "#01257D" }}
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
