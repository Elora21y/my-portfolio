import React from "react";
import { BsStars } from "react-icons/bs";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "motion/react";

const aboutData = [
  {
    title: "My Education",
    description:
      "I'm currently studying BBA in Accounting at National University, Bangladesh. My love for math and analytical thinking led me to choose this subject. During my Intermediate years, I also enjoyed studying ICT subject, where I deeply enjoyed exploring each chapter.  ",
    icon: <PiStudentBold size={25} />,
  },
  {
    title: "My Programming Journey",
    description:
      "My programming journey began after I got admitted to honors. Though I started as a fresher,I was lucky to have guidance from my brother, who not only inspired me became a developer but also he enrolled me in Programming Hero Level 1 (Batch 11). Since then, my journey of web development began.",
    icon: <MdComputer size={25} />,
  },
  {
    title: "Beyond Coding",
    description:
      "Outside of programming, I love painting and art — a passion I’ve had since childhood.  I also actively participated various sports in college events, and have even won prizes. These experiences help me grow as a person — combining creativity, collaboration, and communication.",
    icon: <IoColorPaletteSharp size={25} />,
  },
  {
    title: "Personality & Creativity",
    description:
      "I’m a loves building UI/UX from scratch and bringing designs to life . My strong math skills help me in problem solving,and artistic side enhances my design.I’m always learning, always building, and always striving to connect logic with creativity — whether it's through code.",
    icon: <BsStars size={25} />,
  },
];

const About = () => {
  return (
    <section id="about" className=" my-10 md:my-14 lg:my-18 text-sm py-6">
      <SectionTitle title={"About Me"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 px-4 ">
        {aboutData.map((data, index) => (
          <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          // viewport={{ once: true}}
          key={index}
            className="card bg-gray-900/80 shadow-sm p-5 md:p-6 border border-gray-500 hover:border-primary hover:scale-101 duration-500 transition-all shadow-primary hover:shadow-md text-[13px]"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-secondary-content flex gap-2 items-center">
              {data.icon} {data.title}
            </h3>
            <p>{data.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
