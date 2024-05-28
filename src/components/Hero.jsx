import { animate, motion } from "framer-motion";
import ProfilePic from "../assets/img-profile.png";
import { HashLink as Link } from "react-router-hash-link";

const textVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// const imgVariants = {
//   initial: {
//     x: 300,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//     },
//   },
// };

const sliderVariants = {
  initial: {
    x: -500,
  },
  animate: {
    x: "-550%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 50,
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
            <motion.div className="flex flex-col gap-2 z-10 2xl:gap-4" variants={textVariants}>
              <motion.h1
                className="sm: text-2xl font-bold md:text-3xl xl:text-4xl 2xl:text-5xl"
                variants={textVariants}
              >
                Hi! I’m Amanda a Jr{" "}
                <motion.span
                  className="sm:text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text xl:text-4xl 2xl:text-5xl"
                  variants={textVariants}
                >
                  Web Developer!
                </motion.span>
              </motion.h1>
              <motion.h2
                className="sm: hidden lg:block lg:text-3xl font-bold xl:text-4xl 2xl:text-5xl"
                variants={textVariants}
              >
                Welcome to my{" "}
                <motion.span
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text  lg:text-3xl font-bold xl:text-4xl 2xl:text-5xl"
                  variants={textVariants}
                >
                  {" "}
                  Portfolio!
                </motion.span>
              </motion.h2>
            </motion.div>
            <motion.div
              className="sm: w-full text-xs md:w-9/12 my-8 md:text-sm lg:w-3/4 lg:text-base"
              variants={textVariants}
            >
              <motion.p variants={textVariants}>
                Step into my portfolio and explore the world of my skills and experiences. Here, you will find a curated
                collection of my work and passions, offering a glimpse into who I am and what I can bring to the table.
              </motion.p>
            </motion.div>
          </div>
          <motion.div className="flex gap-4 lg:gap-8" variants={textVariants}>
            <motion.button className="sm: p-2 text-xs md:p-4 cursor-pointer border border-regular-white rounded-lg transition delay-200 ease-in-out lg:text-sm lg:px-6 hover:scale-110 hover:duration-300">
              <Link to="#projects"> Check my work</Link>
            </motion.button>
            <motion.button className="sm: p-2 text-xs md:p-4 border cursor-pointer border-regular-white text-regular-purple bg-regular-white rounded-lg transition delay-200 ease-in-out lg:text-sm lg:px-6 hover:border hover:scale-110 hover:duration-300">
              <Link to="#contacts">Contact me</Link>
            </motion.button>
          </motion.div>
        </motion.div>

        <figure className="sm:min-w-[100px] md:min-w-[250px] lg:min-w-[360px] ">
          <img src={ProfilePic} alt="me" className="mx-auto w-full" />
        </figure>
      </motion.div>

      <motion.div
        className="absolute bottom-[20px] text-9xl z-0 whitespace-nowrap w-[40%] text-[40vh] text-slate-200  text-[rgba(255,255,255,0.06)]  md:w-[50%] md:text-[50vh] md:text-[rgba(255,255,255,0.04)]"
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
