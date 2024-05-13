import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <nav className="flex justify-between py-4 px-8  text-regular-white items-center absolute w-full">
        <figure>
          <h1 className="font-bold ">AMANDA A.</h1>
        </figure>
        <ul className="sm: hidden md:flex gap-8 items-center">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <div className="bg-regular-white text-regular-blue p-2 rounded-lg">
            <li>Contact me!</li>
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
