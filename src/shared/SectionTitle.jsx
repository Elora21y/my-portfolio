import React from "react";
import { motion } from "motion/react";

const SectionTitle = ({ title }) => {
  return (
   <div className="">
     <motion.h2
      initial={{ opacity: 0.05, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ amount: 0.6}}
      className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-center  text-secondary"
    >
      {title}
    </motion.h2>
    {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount : 0.5}}
        className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto mt-4"
      />
   </div>
  );
};

export default SectionTitle;
