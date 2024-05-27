import Project from "./Project";
import projectData from "./ProjectData";
import WorkingGirl from "./icons/WorkingGirl";
const Projects = () => {
  return (
    <section id="projects" className="w-full h-screen text-regular-white flex justify-center items-center snap-center">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-20 items-center">
        <div>
          <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center  2xl: gap-32">
          <figure className="hidden 2xl:block border-4 border-regular-purple rounded-full">
            <WorkingGirl />
          </figure>
          <div className="grid w-[60%] gap-8 xl:w-full xl:grid-cols-3 justify-center items-center 2xl:grid-cols-none">
            {projectData.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
