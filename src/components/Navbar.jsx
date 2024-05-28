import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <motion.nav
        className="flex justify-between py-6 px-10 z-10 text-regular-white items-center absolute w-full xl:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <figure>
          <h1 className="font-bold ">AMANDA A.</h1>
        </figure>
        <ul className="sm: hidden md:flex gap-8 items-center">
          <li className="text-regular-white transition  delay-200 hover:text-regular-purple hover:underline underline-offset-8">
            <Link to="#about-me">About Me</Link>
          </li>
          <li className="text-regular-white transition  delay-200 hover:text-regular-purple hover:underline underline-offset-8">
            <Link to="#skills">Skills</Link>
          </li>
          <li className="text-regular-white transition  delay-200 hover:text-regular-purple hover:underline underline-offset-8">
            <Link to="#projects">Projects</Link>
          </li>
          <div className=" text-regular-white p-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-xl hover:shadow-regular-purple/50 transition ease-in-out delay-150 hover:scale-110 hover:duration-300">
            <li>
              <Link to="#contacts">Contact Me!</Link>
            </li>
          </div>
        </ul>
        <div className="block md:hidden" onClick={() => setSideBar(true)}>
          <AiOutlineMenu size={22} className="color text-white" />
        </div>
      </motion.nav>
      {/* mobile menu */}
      <AnimatePresence>
        {sideBar && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="flex flex-col absolute w-full h-screen right-0  bg-gradient-to-r from-violet-600 to-indigo-600 text-regular-white z-30 p-8 gap-32"
          >
            <div className="flex justify-end" onClick={() => setSideBar(false)}>
              <AiOutlineClose size={20} />
            </div>
            <nav className="flex justify-center">
              <motion.ul className="flex flex-col gap-8 items-center text-2xl">
                <motion.li variants={itemVariants} onClick={() => setSideBar(false)}>
                  <Link to="#about-me">About Me</Link>
                </motion.li>
                <motion.li variants={itemVariants} onClick={() => setSideBar(false)}>
                  <Link to="#skills">Skills</Link>
                </motion.li>
                <motion.li variants={itemVariants} onClick={() => setSideBar(false)}>
                  <Link to="#projects">Projects</Link>
                </motion.li>
                <motion.li variants={itemVariants} onClick={() => setSideBar(false)}>
                  <Link to="#contacts">Contact Me!</Link>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
