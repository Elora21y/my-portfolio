import React from 'react';
import { motion } from "framer-motion";
import { LuDownload } from 'react-icons/lu';

const ResumeBtn = () => {
    return (
            <motion.a
              href="/Elora_Yasmin_Resume.pdf"
              download
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 btn border-violet-400 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-400 hover:to-violet-600 text-secondary rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-violet-500/50 transition-all duration-500"
            >
              Resume
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <LuDownload className="text-lg" />
              </motion.div>
            </motion.a>
    );
};

export default ResumeBtn;