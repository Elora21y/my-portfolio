import React from "react";
import { motion } from "motion/react";

const SectionTitle = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-center mb-8 md:mb-10 lg:mb-12 text-secondary"
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
