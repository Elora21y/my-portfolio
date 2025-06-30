import React from "react";
import bannerImg from "../assets/banner-img.jpg";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center bg-base-200 rounded-lg p-2 py-5 pb-8 sm:px-4 md:p-10 md:pb-15 lg:pb-10 xl:px-15 ">
      <div className=" text-center lg:text-left space-y-6 lg:space-y-8 lg:max-w-lg xl:max-w-2xl">
        {/* title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-secondary ">
          Hi! I’m{" "}
          <span className="font-medium  bg-linear-to-r from-primary to-secondary-content bg-clip-text text-transparent">
            {" "}
            Elora Yasmin
          </span>
          <br />
          —Frontend Web Developer
        </h1>
        <p>
          I specialize in building fast, responsive, and accessible web
          applications using React, TailwindCSS, and modern web technologies.
        </p>
        {/* social */}
        <div className="flex gap-5 social items-center justify-center lg:justify-start">
          <a
            // href="/email-task.pdf"
            download
            className="btn border-primary text-primary"
          >
            Resume <LuDownload />
          </a>
          <div className="flex gap-3 social ">
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
      </div>
      <div className="w-64 md:w-[320px] lg:w-[420px]">
        <img src={bannerImg} alt="Elora" />
      </div>
    </div>
  );
};

export default Banner;
