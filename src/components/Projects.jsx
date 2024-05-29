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
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <section id="projects" className="w-full h-screen text-regular-white flex justify-center items-center snap-center">
      <motion.div
        className="max-w-[1240px] mx-auto flex flex-col gap-20 items-center"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div variants={variants}>
          <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
        </motion.div>

        <div className="flex justify-center items-center  2xl: gap-32">
          <motion.figure className="hidden 2xl:block border-4 border-regular-purple rounded-full" variants={variants}>
            <WorkingGirl />
          </motion.figure>
          <motion.div
            className="grid w-[60%] gap-8 xl:w-full xl:grid-cols-3 justify-center items-center 2xl:grid-cols-none"
            variants={variants}
          >
            {projectData.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
