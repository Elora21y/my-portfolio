import React from "react";
import bannerImg from "../assets/banner-img.jpg";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center bg-linear-to-r from-gray-900/60 to-base-300 min-h-screen rounded-lg p-2 py-5 pb-8 sm:px-4 md:p-10 md:pb-15  xl:px-15 ">
      {/* banner content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className=" text-center lg:text-left space-y-5 md:space-y-6 lg:space-y-8 max-w-md lg:max-w-lg xl:max-w-2xl"
      >
        {/* title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-secondary ">
          Hello! I’m <br />
          <span className="font-semibold  bg-linear-to-r from-[#9383f1] to-secondary bg-clip-text text-transparent md:my-2 lg:my-4 lg:ml-25 inline-block ">
            Elora Yasmin
          </span>
          <br />
          -
          <Typewriter
            cursorColor="#9383f1"
            words={["Web Developer", "React Developer", "Frontend Developer"]}
            loop={3}
            cursor
            cursorStyle={false}
            typeSpeed={70}
            // deleteSpeed={20}
            // delaySpeed={3000}
          />
        </h1>
        <p>
          I specialize in building fast, responsive, and accessible web
          applications using React, TailwindCSS, and modern web technologies.
        </p>
        {/* social */}
        <div className="flex gap-5 items-center justify-center lg:justify-start">
          <a
            href="/Elora_Yasmin_Resume.pdf"
            download
            className="btn border-primary text-primary bg-transparent hover:shadow shadow-primary duration-500 transition-all"
          >
            Resume <LuDownload />
          </a>
          <div className="flex gap-3 social text-secondary-content ">
            <a href="https://www.facebook.com/elora.yasmin.21" target="_blank">
              <FaFacebook size={25} className=""/>
            </a>
            <a href="https://github.com/Elora21y" target="_blank">
              <BsGithub size={25} />
            </a>
            <a href="https://www.youtube.com/@elora256" target="_blank">
              <IoLogoYoutube size={25} />
            </a>
          </div>
        </div>
      </motion.div>
      {/* banner  img */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-64 md:w-[320px] lg:w-[420px] border-e-3 border-[#9383f1] rounded-full"
      >
        <img src={bannerImg} alt="Elora" className="rounded-full shadow-md animate-pulse-shadow hover:shadow-lg duration-500 transition-all shadow-[#9383f1] " />
      </motion.div>
    </div>
  );
};

export default Banner;
