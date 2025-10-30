import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "../shared/NavLogo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import ResumeBtn from "../shared/ResumeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#", icon: AiFillHome, label: "Home" },
    { href: "#about", icon: FaUserAlt, label: "About" },
    { href: "#skills", icon: GiSkills, label: "Skills" },
    { href: "#projects", icon: MdWork, label: "Projects" },
    { href: "#contacts", icon: BiEnvelope, label: "Contacts" },
  ];

const handleNavClick = ( href) => {
  setActiveSection(href);
  setTimeout(() => {
    setIsOpen(false);
  }, 700);
};

  return (
    <motion.nav
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.3 }}
      className={`transition-all duration-300 ${
        scrolled
          ? "bg-violet-500/30 backdrop-blur-2xl shadow-lg shadow-violet-500/10"
          : "bg-violet-400/20 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 transition-all"
          >
            <NavLogo />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 group ${
                    activeSection === item.href
                      ? "text-white"
                      : "text-violet-200 hover:text-white"
                  }`}
                >
                  <Icon className=" group-hover:rotate-10 transition-transform duration-300" />
                  <span className="font-medium text-xs">{item.label}</span>
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-violet-500/40 rounded-lg -z-10"
                      // transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Resume Button */}
            <ResumeBtn/>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg cursor-pointer text-violet-200 hover:text-white hover:bg-violet-500/30 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoClose size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiOutlineMenuAlt3 size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden  bg-violet-950/20 backdrop-blur-3xl border-t border-violet-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 * index }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.href
                        ? "bg-violet-600/50 text-white"
                        : "text-violet-200 hover:bg-violet-600/30 hover:text-white"
                    }`}
                  >
                    <Icon  />
                    <span className="font-medium text-sm">{item.label}</span>
                    
                  </motion.a>
                );
              })}
{/* resume */}
              <ResumeBtn/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;