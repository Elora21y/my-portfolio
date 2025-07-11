import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "motion/react";

// icons
import html from "../assets/skills/html-icon.png";
import css from "../assets/skills/css-icon.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react-icon.png";
import daisyui from "../assets/skills/daisyui-icon.png";
import tailwind from "../assets/skills/tailwind-icon.png";
import mongodb from "../assets/skills/mongodb-icon.png";
import express from "../assets/skills/express.js-icon.png";
import nodejs from "../assets/skills/nodejs-icon.png";
import github from "../assets/skills/github-icon.png";
import figma from "../assets/skills/figma-icon.png";
import firebase from "../assets/skills/firebase-icon.png";

const skills = [
  {
    title: "HTML5",
    icon: html,
  },
  {
    title: "CSS3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "React.js",
    icon: react,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Express.js",
    icon: express,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "GitHub",
    icon: github,
  },
  {
    title: "TailwindCSS",
    icon: tailwind,
  },
  {
    title: "DaisyUI",
    icon: daisyui,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-6 my-10 md:my-14 lg:my-18 text-sm max-w-5xl mx-auto"
    >
      <SectionTitle title={"Skills"} />
      <div className="flex gap-5 flex-wrap  justify-center items-center">
        {skills.map((skill, index) => (
          <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            title={skill.title}
            className=" bg-gray-900/50 p-4 w-28 h-30 lg:w-36 lg:h-32 flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-600 hover:border-primary shadow-sm hover:shadow-primary hover:scale-101 duration-300 transition-all"
          >
            <img src={skill.icon} alt="" className="w-14" />
            <h3 className="font-semibold text-gray-400">{skill.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
