import Project from "./Project";
import projectData from "./ProjectData";
import WorkingGirl from "./icons/WorkingGirl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};
const Projects = () => {
  //animation
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <section
      id="projects"
      className="w-full h-auto py-12 bg-[#F5F5F5] text-regular-blue flex justify-center items-center snap-center xl:h-screen"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center xl:gap-8 lg:gap-20">
        <div>
          <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
        </div>

        <motion.div
          className="gap-10 flex flex-col justify-center items-center 2xl:gap-32"
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <motion.div className="block w-[70%] text-center text-sm" variants={variants}>
            <p>
              Here, you'll find a selection of the web development projects I've worked on, where i could elevate my
              skills in JavaScript, React, and Node.js and learn different frameworks and libraries. I had a lot of fun
              creating functional and user-friendly applications. Dive in to explore my projects!
            </p>
          </motion.div>
          <motion.div
            className="grid w-[50%] gap-8 z-10 md:w-[40%] xl:w-[80%] xl:grid-cols-3 justify-center items-center 2xl:w-full"
            variants={variants}
          >
            {projectData.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
