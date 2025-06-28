import React from "react";
import bannerImg from "../assets/banner-img.jpg";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center text-accent bg-base-200 rounded-lg p-2 py-5 sm:px-4 md:p-10 md:pb-15 lg:pb-10 xl:px-15 text-sm md:text-base">
      <div className=" text-center lg:text-left space-y-5 lg:max-w-lg xl:max-w-2xl">
        {/* title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-secondary ">
          Hi! I’m  <span className="font-medium  bg-linear-to-r from-primary to-[#E5E0FF] bg-clip-text text-transparent"> Elora Yasmin</span>
          <br />—Frontend Web Developer
        </h1>
        <p>
          I specialize in building fast, responsive, and accessible web
          applications using React, TailwindCSS, and modern web technologies.
        </p>
        {/* social */}
        <div className="flex gap-3 social items-center justify-center lg:justify-start">
            <a href="https://www.facebook.com/elora.yasmin.21" target="_blank">
              <FaFacebook size={25} />
            </a>
            <a href="https://github.com/Elora21y" target="_blank">
              <BsGithub size={25} />
            </a>
            <a href="https://www.youtube.com/@elora256" target="_blank">
              <IoLogoYoutube size={25} />
            </a>
          </div>
      </div>
      <div className="w-64 md:w-[320px] lg:w-[420px]">
        <img src={bannerImg} alt="Elora"  />
      </div>
    </div>
  );
};

export default Banner;
