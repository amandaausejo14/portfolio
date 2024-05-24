import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <nav className="flex justify-between py-6 px-12  text-regular-white items-center absolute w-full xl:text-xl">
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
          <AiOutlineMenu size={30} className="color text-white" />
        </div>
      </nav>
      {/* mobile menu */}
      {sideBar ? (
        <>
          <div className="flex flex-col absolute w-full h-screen right-0 bg-regular-white text-regular-blue z-30 p-4 gap-4">
            <div className="flex justify-end" onClick={() => setSideBar(false)}>
              <AiOutlineClose size={20} />
            </div>
            <nav className="flex justify-center">
              <ul className="flex flex-col gap-8 items-center">
                <li onClick={() => setSideBar(false)}>About Me</li>
                <li onClick={() => setSideBar(false)}>Skills</li>
                <li onClick={() => setSideBar(false)}>Projects</li>
                <li onClick={() => setSideBar(false)}>Contact me!</li>
              </ul>
            </nav>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
