import { animate, motion } from "framer-motion";
import ProfilePic from "../assets/img-profile.png";
import { HashLink as Link } from "react-router-hash-link";

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "-200%",
    transition: {
      delay: 1,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <section className="bg-regular-blue h-screen text-white flex items-center justify-center snap-center relative overflow-hidden">
      <motion.div
        className="sm:max-w-[1240px] z-10 mx-auto flex flex-col-reverse gap-8 md:flex-row items-center md:w-[80%]"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="sm: w-[80%] flex flex-col justify-center text-center items-center md:items-start md:text-left"
          variants={textVariants}
        >
          <div>
            <motion.div className="flex flex-col gap-2 z-10 2xl:gap-4">
              <motion.h1 className="sm:text-3xl font-bold xl:text-4xl 2xl:text-5xl">
                Hi! I’m Amanda a Jr{" "}
                <span className="sm:text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text xl:text-4xl 2xl:text-5xl">
                  Web Developer!
                </span>
              </motion.h1>
              <motion.h2 className="sm: hidden lg:block lg:text-3xl font-bold xl:text-4xl 2xl:text-5xl">
                Welcome to my{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text  lg:text-3xl font-bold xl:text-4xl 2xl:text-5xl">
                  Portfolio!
                </span>
              </motion.h2>
            </motion.div>
            <motion.div className="text-xs sm:text-base w-full md:w-9/12 my-8 lg:w-3/4">
              <motion.p>
                I'm a dedicated web developer with a bit less then a year of experience, specializing in JavaScript,
                React and Node.js. Dive into my portfolio to explore my work and get to know the creative and technical
                skills I can bring to each project.
              </motion.p>
            </motion.div>
          </div>
          <motion.div className="flex gap-4 lg:gap-8">
            <motion.button className="text-xs sm:text-base p-2  md:p-4 cursor-pointer border border-regular-white rounded-lg transition delay-200 ease-in-out lg:text-sm lg:px-6 hover:scale-110 hover:duration-300">
              <Link to="#projects"> Check my work</Link>
            </motion.button>
            <motion.button className="text-xs sm:text-base p-2  md:p-4 border cursor-pointer border-regular-white text-regular-purple bg-regular-white rounded-lg transition delay-200 ease-in-out lg:text-sm lg:px-6 hover:border hover:scale-110 hover:duration-300">
              <Link to="#contacts">Contact me</Link>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.figure className="sm:min-w-[100px] md:min-w-[250px] lg:min-w-[360px] " variants={textVariants}>
          <img src={ProfilePic} alt="me" className="mx-auto w-full" />
        </motion.figure>
      </motion.div>

      <motion.div
        className="absolute bottom-[20px] text-9xl z-0 whitespace-nowrap w-[40%] text-[40vh] text-[rgba(255,255,255,0.06)]  md:w-[50%] md:text-[50vh] md:text-[rgba(255,255,255,0.04)]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Html•Css•Javascript•React•Node
      </motion.div>
    </section>
  );
};

export default Hero;
