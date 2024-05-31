import { useState } from "react";
import Slider from "./Slider";
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
const Skills = () => {
  const [frontSkills, setFrontSkills] = useState(true);
  const [fade, setFade] = useState(false);

  const handleSwitch = (isFront) => {
    setFade(true);
    setFrontSkills(isFront);
    setTimeout(() => {
      setFade(false);
    }, 400);
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <section
      id="skills"
      className="w-full  h-auto py-12 text-regular-white flex justify-center items-center snap-center lg:h-screen"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center">
        <div>
          <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Skills
            </span>
          </h1>
        </div>
        <motion.div
          className="flex flex-col items-center gap-8"
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <motion.div className="border border-regular-purple flex gap-4 p-2 rounded-lg" variants={variants}>
            <button
              className={`py-4 px-8 rounded-lg transition delay-150 ${
                frontSkills ? "bg-regular-white text-regular-purple" : ""
              }`}
              onClick={() => handleSwitch(true)}
            >
              Front-end
            </button>
            <button
              className={`py-4 px-8 rounded-lg transition delay-150 ${
                !frontSkills ? "bg-regular-white text-regular-purple" : ""
              }`}
              onClick={() => handleSwitch(false)}
            >
              Back-end
            </button>
          </motion.div>
          <motion.div
            className={`flex items-center ${fade ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          >
            <Slider skills={frontSkills} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
