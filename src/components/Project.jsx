import { useState } from "react";
import ProjectModal from "./ProjectModal.jsx";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Project = ({ project }) => {
  // const [isClick, setisClicked] = useState(false);
  const smallScreen = window.innerWidth <= 768;
  console.log(smallScreen);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className={`group relative ${
        !openModal ? " transition hover:-translate-y-1  hover:scale-110 duration-300 ..." : ""
      }`}
      onClick={() => {
        if (smallScreen) {
          setOpenModal(true);
        } else {
          return null;
        }
      }}
    >
      <figure
        className={`cursor-pointer relative z-[-2] ${
          !openModal ? "transition duration shadow-xl sm:group-hover:opacity-0 delay-300" : ""
        }`}
      >
        <img
          src={project.img}
          alt={project.name}
          className="rounded-lg border relative z-[-2] border-regular-purple cursor-pointer transition duration shadow-xl sm:group-hover:opacity-0 delay-300"
        />
      </figure>
      <div
        className={`opacity-0 absolute top-0 invisible transition duration-200 z-100  sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:translate-y-[-2vw]  group-hover:opacity-100`}
      >
        <figure>
          <img
            src={project.img}
            alt={project.name}
            className="cursor-pointer transition duration shadow-xl rounded-t-md w-full"
          />
        </figure>
        <div className="z-10 bg-[#15213C] p-2 gap-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-bold line-clamp-1">{project.title}</h1>
            <IoIosArrowDropdownCircle size={30} color="#8546F0" onClick={() => setOpenModal(true)} />
          </div>
          <div className="w-[90%]">
            <p className="text-sm font-light line-clamp-3">{project.description}</p>
          </div>
          <div className="flex gap-4">
            {project.languages.slice(0, 2).map((language, i) => (
              <div key={i} className="flex gap-2 items-center">
                <GoDotFill color="#8546F0" />
                <p className="text-sm font-semibold">{language}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal open={openModal} setOpenModal={setOpenModal} project={project} />
    </div>
  );
};

export default Project;
