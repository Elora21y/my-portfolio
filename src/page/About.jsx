import React from "react";
import { BsStars } from "react-icons/bs";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "motion/react";
import bannerImg from "../assets/Profile.jpg";
import { LuDownload } from "react-icons/lu";

// const aboutData = [
//   {
//     title: "My Education",
//     description:
//       "I'm currently studying BBA in Accounting at National University, Bangladesh. My love for math and analytical thinking led me to choose this subject. During my Intermediate years, I also enjoyed studying ICT subject, where I deeply enjoyed exploring each chapter.  ",
//     icon: <PiStudentBold size={25} />,
//   },
//   {
//     title: "My Programming Journey",
//     description:
//       "My programming journey began after I got admitted to honors. Though I started as a fresher,I was lucky to have guidance from my brother, who not only inspired me became a developer but also he enrolled me in Programming Hero Level 1 (Batch 11). Since then, my journey of web development began.",
//     icon: <MdComputer size={25} />,
//   },
//   {
//     title: "Beyond Coding",
//     description:
//       "Outside of programming, I love painting and art — a passion I’ve had since childhood.  I also actively participated various sports in college events, and have even won prizes. These experiences help me grow as a person — combining creativity, collaboration, and communication.",
//     icon: <IoColorPaletteSharp size={25} />,
//   },
//   {
//     title: "Personality & Creativity",
//     description:
//       "I’m a loves building UI/UX from scratch and bringing designs to life . My strong math skills help me in problem solving,and artistic side enhances my design.I’m always learning, always building, and always striving to connect logic with creativity — whether it's through code.",
//     icon: <BsStars size={25} />,
//   },
// ];

const aboutData = [
  {
    title: "Programming Journey",
    description:
      "My programming journey began after I got admitted to honors. Though I started as a fresher, I was lucky to have guidance from my brother. What started as curiosity soon became passion, I enjoy crafting clean UI and learning something new.",
    icon: <MdComputer size={25} />,
  },
  {
    title: "Education & Creativity",
    description:
      "I’m studying BBA in Accounting at National University of Bangladesh. Alongside studies, I have always loved design, teamwork, sports, arts and crafts. These combine my analytical side with my imagination.",
    icon: <PiStudentBold size={25} />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="  my-10 md:my-14 lg:my-24 text-sm py-6 max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-[480px_1fr] items-center gap-12">
        {/*   img */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ amount: 0.6 }}
          className="w-[430px] hidden lg:flex relative"
        >
          {/* cv button */}
          <motion.a
            href="Elora_Yasmin_CV.pdf"
            download
            animate={{ y: [5, -20, 5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 -right-5 btn btn-lg border-0 bg-gradient-to-r from-violet-400 to-violet-600 rounded-full shadow-md shadow-violet-500/50 text-sm whitespace-nowrap  transition-all duration-300 flex items-center gap-2 text-secondary"
          >
            My CV
            <LuDownload className="text-lg" />
          </motion.a>
          {/* <div className="bg-violet-400 rounded-4xl " > */}
          <div className=" bg-gray-700 rounded-4xl rounded-tl-[80px] p-3 shadow-lg shadow-primary">
            <img
              src={bannerImg || "https://i.ibb.co.com/yKJ4N7v/Profile.jpg "}
              alt="Elora"
              className="rounded-4xl rounded-tl-[100px] "
            />
            {/* </div> */}
          </div>
        </motion.div>

        {/* content */}
        <div className="space-y-8">
          <SectionTitle title={"About Me"} />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0.05, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-300 md:text-base leading-relaxed px-3 lg:px-0"
          >
            {/* Hi, I'm Elora — a frontend developer who enjoys blending creativity
            and code to build meaningful web experiences. I love working with
            React and modern JavaScript tools to design interfaces that are not
            only responsive but also intuitive and engaging. */}
            I’m a Frontend Developer who loves turning ideas into clean,
            responsive, and user-focused web experiences. I specialize in
            crafting modern interfaces using React and the MERN stack, and I’m
            also exploring Next.js to enhance performance and scalability.
          </motion.p>

          <div className="lg:hidden flex xl:flex flex-col md:flex-row gap-4 px-4 lg:px-0">
            {aboutData.map((data, index) => (
              <motion.div
                initial={{ opacity: 0.05, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ amount: 0.5 }}
                key={index}
                className="card bg-gray-900/80 shadow p-5  border-gray-500 hover:border-primary hover:scale-101 duration-500 transition-all shadow-primary hover:shadow-md text-[13px] border-l-8 border-l-primary lg:border-l-1"
              >
                <div className="text-primary">{data.icon}</div>
                <h3 className="text-lg md:text-xl  font-semibold mb-3 text-secondary-content flex gap-2 items-center">
                  {data.title}
                </h3>
                <p>{data.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            {/* cv button */}
            <motion.a
              href="Elora_Yasmin_CV.pdf"
              download
              initial={{ y: 30, opacity: 0.05 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ amount: 0.4 }}
              // animate={{ y: [5, -20, 5] }}
              // transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className=" lg:hidden -top-1 -right-5 btn btn-lg border-0 bg-gradient-to-r from-violet-400 to-violet-600 rounded-full shadow-md shadow-violet-500/50 text-sm whitespace-nowrap  transition-all duration-300 flex items-center gap-2 text-secondary"
            >
              My CV
              <LuDownload className="text-lg" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
