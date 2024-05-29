import AboutMeImg from "../assets/about-me-img.jpg";
import Pin from "../assets/pin.png";
import CV from "../assets/CV-eng.pdf";
import Icon from "../assets/icon.png";
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
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="about-me" className="w-full text-regular-white h-screen flex justify-center items-center snap-center">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center md:w-[85%]">
        <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
            Me
          </span>
        </h1>

        <motion.div
          className="sm: gap-12 flex flex-col justify-center items-center md:flex-row w-[80%]"
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <motion.figure className="rounded-md overflow-hidden relative" variants={variants}>
            <img src={AboutMeImg} alt="me-profile" className="object-fit" />
            {/* <div className="absolute bottom-0 right-0 items-center justify-center border-2 border-regular-purple px-4 rounded-full bg-regular-white text-regular-blue">
              {/* <p>Hello, i'm a full stack developer</p> 
              <img src={Icon} className="W-full" />
            </div> */}
          </motion.figure>
          <motion.div
            className="sm: max-w-[90%] p-4 flex flex-col items-center text-center text-regular-white text-sm gap-4 md:text-left md:items-start lg:text-base lg:max-w-[55%] xl:gap-8  xl:p-6"
            variants={variants}
          >
            <div className="flex items-center">
              <img src={Pin} />
              <p className="text-lg">Milan, Italy</p>
            </div>
            <p>
              A year ago, I started exploring web development as a hobby, immersing myself in HTML and CSS. Driven by a
              growing passion, I pursued further education through an intensive bootcamp. There, I mastered JavaScript,
              React, and Node.js, enhancing my ability to create dynamic web applications. If you d like to learn more
              about my journey and skills, feel free to download my CV.
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
