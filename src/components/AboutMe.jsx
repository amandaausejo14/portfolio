import AboutMeImg from "../assets/about-me-img.jpg";
import Pin from "../assets/pin.png";
import CV from "../assets/CV-eng.pdf";
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
const AboutMe = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <section
      id="about-me"
      className="w-full h-auto py-12 bg-[#F5F5F5] text-regular-blue flex justify-center items-center snap-center xl:h-screen"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center md:w-[85%]">
        <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
            Me
          </span>
        </h1>

        <motion.div
          className="sm: gap-8 flex flex-col justify-center items-center md:flex-row"
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <motion.figure className="rounded-md overflow-hidden relative max-w-[70%]" variants={variants}>
            <img src={AboutMeImg} alt="me-profile" className="object-fit m-w-4/5 xl:max-h-[400px] 2xl:max-h-[500px]" />
          </motion.figure>
          <motion.div
            className=" text-regular-blue  sm: max-w-[90%] p-4 flex flex-col items-center text-center text-sm gap-4 sm:text-base md:text-left md:items-start lg:text-base lg:max-w-[40%] xl:gap-8  xl:p-6"
            variants={variants}
          >
            <div className="flex items-center">
              <img src={Pin} />
              <p className="text-lg">Milan, Italy</p>
            </div>
            <p className="text-sm sm:text-base">
              A year and a half ago, I began my journey into web development as a hobby, teaching myself HTML and CSS.
              My passion grew as I connected with web developer communities, which inspired me to dedicate myself fully
              to coding. I enrolled in a bootcamp, where I mastered JavaScript, React, and Node.js, and brought my first
              project to life. Now, I'm eager to gain more experience and knowledge in a professional setting. Feel free
              to download my CV!
            </p>
            <a
              href={CV}
              download
              className="sm: min-w-[20%] max-w-[90%] md: p-4  text-regular-white rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-xl hover:shadow-regular-purple/50 transition ease-in-out delay-150 hover:scale-110 hover:duration-300"
            >
              Download my CV!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
