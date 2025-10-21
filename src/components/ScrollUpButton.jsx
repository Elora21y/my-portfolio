import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowUp } from "react-icons/io5";

 const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed right-6 bottom-6 z-50"
        >
          <button
            onClick={scrollToTop}
            className="relative p-[10px] sm:p-3 xl:p-4 bg-gradient-to-r from-violet-600 to-violet-400 text-white rounded-full shadow-xl shadow-violet-500/50 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {/* Progress circle */}
            <svg className="absolute inset-0 -rotate-90" width="100%" height="100%">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <IoArrowUp size={20} className="relative z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUpButton