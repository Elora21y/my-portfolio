import React from "react";
import bannerImg from "../assets/Profile.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react"; 
import ResumeBtn from "../shared/ResumeBtn";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    href: "https://www.linkedin.com/in/elora-yasmin",
    icon: FaLinkedin,
    size: 25,
  },
  {
    href: "https://www.facebook.com/elora.yasmin.21",
    icon: FaFacebook,
    size: 25,
  },
  {
    href: "https://github.com/Elora21y",
    icon: BsGithub,
    size: 25,
  },
];

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 md:gap-26 items-center rounded-lg p-2 py-16 sm:px-4 md:px-10  xl:px-15 ">
      {/* bg-linear-to-r from-gray-900/60 to-base-300 min-h-screen  */}
      {/* banner content */}
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center lg:text-left space-y-6 max-w-2xl"
      >
        {/* Main Title */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl  font-bold"
          >
            <span className="text-secondary ">Hello! Meet</span>
            <br />
            <span className="bg-gradient-to-r from-violet-500 via-violet-300 to-secondary bg-clip-text text-transparent sm:text-4xl md:text-5xl xl:text-6xl  my-1 md:my-2 lg:my-4 lg:ml-20 inline-block">
              Elora Yasmin
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-[26px] md:text-4xl font-semibold text-violet-300 h-12 lg:h-14 italic"
          >
            <Typewriter
              words={[
                "Web Developer",
                "React Developer",
                "MERN Stack Developer",
                "Frontend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 xl:pb-4"
        >
          I am a Frontend Developer who loves transforming ideas into clean, responsive, and user-focused web experiences. I enjoy crafting modern interfaces with React and the MERN stack. And also exploring Next.js
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
        >
          <a
            href="#projects"
            className="btn  border-violet-300 hover:border-violet-500/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-transparent hover:bg-violet-500/10 "
          >
            View Projects
            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <ResumeBtn />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-5 justify-center lg:justify-start "
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-300 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg
               shadow-violet-400/30`}
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}

          {/* <a
              href="#contacts"
              className="btn  hover:border-violet-300/50 border-violet-500/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-violet-500/10"
            >
              <HiOutlineMail size={20} />
              Contact Me
            </a> */}
        </motion.div>
      </motion.div>

      
      {/* banner  img */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-64 md:w-[420px] rounded-full relative shadow-md hover:shadow-lg duration-500 transition-all shadow-[#9383f1]"
      >
        {/* Animated Rings */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-full border-t-3  border-[#9483f16d] scale-118 p-1" />
          <div
              className="absolute inset-0 rounded-full border-b-3 border-b-[#9483f16d] scale-125"
            />
        </div>
        {/* glow effect */}
        <div className="absolute inset-0 bg-violet-400 rounded-full blur-3xl md:blur-2xl lg:blur-xl xl:blur-2xl opacity-10 animate-pulse -z-10" />
        <img
          src={bannerImg ||"https://i.ibb.co.com/yKJ4N7v/Profile.jpg " }
          alt="Elora"
          className="rounded-full  "
        />
        {/* Floating Badge */}
        <motion.a
          href="#contacts"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 btn lg:btn-lg border-0 bg-gradient-to-r from-violet-600 to-violet-500 rounded-full shadow-md shadow-violet-500/50 text-sm whitespace-nowrap  transition-all duration-300 flex items-center gap-2 text-secondary"
        >
          <HiOutlineMail size={16} />
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Banner;
