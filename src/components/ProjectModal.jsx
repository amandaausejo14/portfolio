import { IoIosCloseCircle } from "react-icons/io";
import { RiShareForward2Fill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const ProjectModal = ({ open, setOpenModal, project }) => {
  console.log("open " + open);
  if (!open) {
    return null;
  }
  return (
    <div className="z-50 transition duration-300 bg-regular-blue/90 overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-center items-center ">
      <div className="max-w-[80%] bg-regular-white flex flex-col justify-center items-center gap-6 rounded-xl overflow-hidden text-center pb-4 md:text-start md:max-w-[50%] md:pb-8 xl:md:max-w-[40%]">
        <div>
          <figure className="md:max-h-[250px] overflow-hidden border-b-4 border-regular-purple">
            <img src={project.img} alt={project.name} />
          </figure>
          <IoIosCloseCircle
            className="absolute right-5 top-20 md:top-5"
            onClick={() => setOpenModal(false)}
            size={30}
          />
        </div>
        <div className="flex gap-8">
          <button className="flex items-center gap-2 bg-regular-blue text-regular-white font-semibold p-1 rounded-md md:p-3">
            Live Site <RiShareForward2Fill />
          </button>
          <button className="flex items-center gap-2 bg-regular-purple text-regular-white font-semibold p-1 rounded-md md:p-3">
            Github <IoLogoGithub />
          </button>
        </div>
        <section className="flex flex-col items-center gap-3 md:flex-row w-[90%] text-regular-blue md:gap-20 md:items-start">
          <div className=" max-w-[90%] flex flex-col gap-2 ">
            <h1 className="font-bold text-lg md:text-2xl">{project.title}</h1>
            <p className="text-xs font-light md:text-base md:font-normal">{project.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold md:text-lg ">Languages</h2>
              <div className="flex gap-2">
                {project.languages.map((language, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <GoDotFill color="#8546F0" />
                    <p className="text-xs font-semibold md:text-base">{language}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold md:text-lg">Status</h2>
              <p className="text-xs font-semibold md:text-base">{project.status}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectModal;
