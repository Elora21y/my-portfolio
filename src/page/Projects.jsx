import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTh, FaList } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import project1 from "../assets/projects/active-club.jpg";
import project2 from "../assets/projects/food-mockup.jpg";
import project3 from "../assets/projects/job_nest-mockup.png";
import project4 from "../assets/projects/green_hub-mockup.png";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router";

// Mock data
const projects = [
  {
    image: project1,
    name: "Active Club",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed through announcements. Admins can manage courts, bookings, users, and important updates all in one place.",
    live_link: "https://active-club-cb1de.web.app/",
    github_link: "https://github.com/Elora21y/active-club",
    technologies: ["React", "TailwindCSS", "React-router", "Express.js", "MongoDB", "Firebase"],
  },
  {
    image: project2,
    name: "Fresh Alert",
    description:
      "FreshAlert is a food sharing and management platform designed to reduce food waste by helping users post, find, and claim fresh and nearly expired food items.",
    live_link: "https://food-expiry-tracker-2b052.web.app/",
    github_link: "https://github.com/Elora21y/food-expiry-client",
    technologies: ["React", "TailwindCSS", "Vite", "Express.js", "MongoDB", "Firebase"],
  },
  {
    image: project3,
    name: "Job Nest",
    description:
      "JobNest is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.",
    live_link: "https://jobnest-web.netlify.app/",
    github_link: "https://github.com/Elora21y/job-nest",
    technologies: ["React", "TailwindCSS", "Firebase", "Vite"],
  },
  {
    image: project4,
    name: "Green Hub",
    description:
      "The goal of GreenHub is to connect gardening enthusiasts, promote sustainable green practices, and create a space where people can learn from each other and grow their own mini green world — whether on a rooftop, balcony, or backyard.",
    live_link: "https://green-hub-21ye.netlify.app/",
    github_link: "https://github.com/Elora21y/green-hub",
    technologies: ["React", "TailwindCSS", "Vite", "Express.js", "MongoDB", "Firebase"],
  },
];


const ProjectsWithToggle = ({ showAll = true }) => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const displayedProjects = showAll ? projects : projects.slice(0,3)

  return (
    <div id="projects" className="px-4 py-12 md:py-16 lg:pb-24 rounded-xl ">
      {/* Header with Toggle */}
      <div className=" mb-12">
       <SectionTitle title={showAll ? 'All Projects' : ' Featured Projects'}/>

        {/* View Toggle Buttons */}
        <div className="flex justify-center gap-3 my-8">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode("grid")}
            className={`cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              viewMode === "grid"
                ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/50"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
            }`}
          >
            <FaTh size={16} />
            Grid View
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode("list")}
            className={`cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              viewMode === "list"
                ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/50"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
            }`}
          >
            <FaList size={16} />
            List View
          </motion.button>
        </div>
      </div>

      {/* Projects Display */}
      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            viewport={{amount : 0.3}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`grid-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.16  }}
                 viewport={{amount : 0.3}}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-primary/70 transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />

                  {/* Overlay on hover for lg device*/}
                  <div className="hidden lg:flex">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4 gap-5">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-violet-600 rounded-full hover:bg-violet-500 transition-colors transform hover:scale-110"
                      title="View GitHub"
                    >
                      <FaGithub size={20} className="text-white" />
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-violet-600 rounded-full hover:bg-violet-500 transition-colors transform hover:scale-110"
                      title="View Live"
                    >
                      <FaExternalLinkAlt size={18} className="text-white" />
                    </a>
                  </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700/50 text-gray-300 px-3 py-2 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                    {/* Action Buttons */}
                  <div className="flex lg:hidden gap-4 pt-4">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-violet-500 text-white flex items-center gap-2 transition-all duration-300"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="btn bg-gradient-to-r from-violet-600 to-violet-500 border-0 text-white hover:shadow-lg hover:shadow-violet-500/50 flex items-center gap-2 transition-all duration-300"
                    >
                      View Project
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight size={16} />
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            viewport={{amount : 0.3}}
            className="flex flex-col gap-16 md:gap-20 max-w-7xl mx-auto"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`list-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 && "md:flex-row-reverse"
                } gap-8 lg:gap-12 items-center group`}
              >
                {/* Image Section */}
                <div className="flex-1 relative">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-gray-700 group-hover:border-primary/70 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-5">
                  {/* Title with icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center">
                      <HiOutlineCode className="text-violet-400 text-2xl" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 hover:border-violet-500 hover:text-violet-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-violet-500 text-white flex items-center gap-2 transition-all duration-300"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="btn bg-gradient-to-r from-violet-600 to-violet-500 border-0 text-white hover:shadow-lg hover:shadow-violet-500/50 flex items-center gap-2 transition-all duration-300"
                    >
                      View Project
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight size={16} />
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {!showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount : 0.4 }}
          className="flex justify-center mt-12 relative"
        >
          <Link to="/projects">
          {/* <motion.div
          animate={{rotate : 360}}
          viewport={{amount : Infinity}}
           className="absolute border border-primary w-12 "/> */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-wide bg-gradient-to-r from-violet-700 to-violet-500 border-0 text-white hover:shadow-lg shadow-violet-500/50 transition-all duration-500 flex items-center gap-2 rounded-tl-2xl rounded-br-2xl shadow-md md:py-6"
            >
              View All Projects
              <FaArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsWithToggle;