import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import project1 from "../assets/projects/food-mockup.jpg";
import project2 from "../assets/projects/job_nest-mockup.png";
import project3 from "../assets/projects/green_hub-mockup.png";
import { motion } from "motion/react";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

const projects = [
  {
    image: project1,
    name: "Fresh Alert",
    description:
      "FreshAlert is a food sharing and management platform designed to reduce food waste by helping users post, find, and claim fresh and nearly expired food items.",
    live_link: "https://food-expiry-tracker-2b052.web.app/",
    github_link: "https://github.com/Elora21y/food-expiry-client",
    technologies: ["React", "CSS", "Vite", "Express.js", "MongoDB", "Firebase"],
  },
  {
    image: project2,
    name: "Job Nest",
    description:
      "JobNest is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.",
    live_link: "https://jobnest-web.netlify.app/",
    github_link: "https://github.com/Elora21y/job-nest",
    technologies: ["React", "CSS", "Firebase", "Vite"],
  },
  {
    image: project3,
    name: "Green Hub",
    description:
      "The goal of GreenHub is to connect gardening enthusiasts, promote sustainable green practices, and create a space where people can learn from each other and grow their own mini green world — whether on a rooftop, balcony, or backyard.",
    live_link: "https://green-hub-21ye.netlify.app/",
    github_link: "https://github.com/Elora21y/green-hub",
    technologies: ["React", "CSS", "Vite", "Express.js", "MongoDB", "Firebase"],
  },
];

const Projects = () => {
    const [isHover , setIsHover] = useState(false)
  return (
    <div id="projects" className="bg-gray-900 shadow-4xl px-4 py-6 md:py-10 ;g:py-12 rounded-xl">
      <SectionTitle title={" My Projects"} />
      <div className=" flex flex-col gap-20 md:gap-10 lg:gap-12 xl:gap-16 py-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true , amount : 0.1}}
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 && "lg:flex-row-reverse"
            } gap-5 justify-between items-center`}
          >
            <div className="max-w-xl">
              <img src={project.image} alt={project.name} className="rounded-lg  max-h-90" />
            </div>
            {/* content */}
            <div className="flex gap-4 flex-col max-w-xl text-[13px]">
              {/* name */}
              <h3 className="text-2xl md:text-3xl xl:text-4xl text-secondary-content font-semibold">
                {project.name}
              </h3>
              {/* technologies */}
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech , index) => (
                  <button key={index} className="text-xs md:text-sm bg-gray-700 rounded-full px-4 py-1">
                    {tech}
                  </button>
                ))}
              </div>
              <p>{project.description}</p>
              {/* link */}
              <div className="flex gap-5 xl:mt-5">
                <a className="btn purple-btn"
                href={project.github_link} target="_blank">
                  View Github
                </a>
                <a 
                className="hover:underline flex items-center gap-1 text-primary transition-all duration-500"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                href={project.live_link}
                 target="_blank">
                  View Project {!isHover ? <FaArrowRight /> :<FaArrowRightLong size={20}/>}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
