import React from "react";
// import bannerImg from "../assets/profile1.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import ResumeBtn from "../shared/ResumeBtn";

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
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        // viewport={{ once: true }}
        className=" text-center lg:text-left space-y-5 md:space-y-6 lg:space-y-8 max-w-md lg:max-w-lg xl:max-w-xl"
      >
        {/* title */}
        <h1 className=" font-semibold text-secondary text-xl md:text-3xl lg:text-4xl xl:text-[44px]">
          <span className="text-2xl md:text-3xl lg:text-5xl">Hello! I’m</span>{" "}
          <br />
          <span className="font-semibold  bg-linear-to-r from-[#9383f1] to-secondary bg-clip-text text-transparent md:my-2 lg:my-4 lg:ml-25 inline-block text-3xl md:text-[40px] lg:text-5xl xl:text-6xl">
            Elora Yasmin
          </span>
          <br />
          <span className="italic text-[#aca1eb]">
            -
            <Typewriter
              cursorColor="#9383f1"
              words={[
                "Web Developer",
                "React Developer",
                "MERN Stack Developer",
                "Frontend Developer",
              ]}
              loop={2}
              cursor
              cursorStyle={false}
              typeSpeed={60}
              // deleteSpeed={20}
              // delaySpeed={3000}
            />
          </span>
        </h1>
        <p>
         I enjoy building user-friendly and responsive websites.
          I specialize in building responsive, and accessible web
          applications using React, JavaScript and modern web technologies.
        </p>
        {/* social */}
        <div className="flex gap-5 items-center justify-center lg:justify-start">
          {/* resume */}
          <ResumeBtn />
          {/*links */}
          <div className="flex gap-3 social text-secondary-content ">
            {socials.map((social, index) => {
              return (
                <a key={index} href={social.href} target="_blank">
                  <social.icon size={social.size} />
                </a>
              );
            })}
          </div>
        </div>
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
