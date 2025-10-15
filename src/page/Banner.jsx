import React from "react";
// import bannerImg from "../assets/profile1.png";
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
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 items-center rounded-lg p-2 py-16 sm:px-4 md:px-10  xl:px-15 ">
      {/* bg-linear-to-r from-gray-900/60 to-base-300 min-h-screen  */}
      {/* banner content */}
      {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-6 max-w-2xl"
        >

          {/* Main Title */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="text-secondary ">Hello! I'm</span>
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-violet-300 to-secondary bg-clip-text text-transparent lg:text-5xl xl:text-6xl  my-1 lg:my-4 lg:ml-20 inline-block">
                Elora Yasmin
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-violet-300 h-12 lg:h-14 italic"
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
            className="text-gray-400 text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Passionate about crafting seamless digital experiences. I transform ideas into 
            interactive, accessible, and performant web applications using modern technologies.
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
              className="btn  border-violet-300 hover:border-violet-500/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:bg-violet-500/10 "
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
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20`}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
            
            <a
              href="#contacts"
              className="btn  hover:border-violet-300/50 border-violet-500/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-violet-500/10"
            >
              <HiOutlineMail size={20} />
              Contact Me
            </a>
          </motion.div>

        </motion.div>
      {/* banner  img */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-64 md:w-[320px] lg:w-[420px] border-e-3 border-[#9383f1] rounded-full "
      >
        <img
          src="https://i.ibb.co.com/yKJ4N7v/Profile.jpg"
          alt="Elora"
          className="rounded-full shadow-md animate-pulse-shadow hover:shadow-lg duration-500 transition-all shadow-[#9383f1] "
        />
      </motion.div>
      
    </div>
  );
};

export default Banner;
