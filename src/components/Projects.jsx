import Project from "./Project";
import projectData from "./ProjectData";
const Projects = () => {
  return (
    <div id="projects" className="w-full p-4 my-12 text-regular-white ">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-20 items-center">
        <div>
          <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
        </div>

        <div className="grid w-[80%] gap-8 xl:w-full xl:grid-cols-3 justify-center items-center">
          {projectData.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
