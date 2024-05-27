import ProfilePic from "../assets/img-profile.png";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="bg-regular-blue h-screen text-white flex items-center justify-center snap-center">
      <div className="sm:max-w-[1240px] mx-auto flex flex-col-reverse gap-8 md:flex-row items-center md:w-[80%]">
        <div className="sm: w-[80%] flex flex-col justify-center text-center items-center md:items-start md:text-left">
          <div>
            <div className="flex flex-col gap-2 2xl:gap-4">
              <h1 className="sm: text-2xl font-bold md:text-3xl xl:text-4xl 2xl:text-5xl">
                Hi! I’m Amanda a Jr{" "}
                <span className="sm:text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text xl:text-4xl 2xl:text-5xl">
                  Web Developer!
                </span>
              </h1>
              <h2 className="sm: hidden lg:block lg:text-3xl font-bold xl:text-4xl 2xl:text-5xl">
                Welcome to my{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text  lg:text-3xl font-bold xl:text-4xl 2xl:text-5xl">
                  {" "}
                  Portfolio!
                </span>
              </h2>
            </div>
            <div className="sm: w-full text-xs md:w-9/12 my-8 md:text-sm lg:w-3/4 lg:text-base">
              <p>
                Step into my portfolio and explore the world of my skills and experiences. Here, you will find a curated
                collection of my work and passions, offering a glimpse into who I am and what I can bring to the table.
              </p>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-8">
            <button className="sm: p-2 text-xs md:p-4 border border-regular-white rounded-lg transition delay-200 ease-in-out lg:text-sm lg:px-6 hover:scale-110 hover:duration-300">
              <Link to="#projects"> Check my work</Link>
            </button>
            <button className="sm: p-2 text-xs md:p-4 border border-regular-white text-regular-purple bg-regular-white rounded-lg transition delay-200 ease-in-out lg:text-sm lg:px-6 hover:border hover:scale-110 hover:duration-300">
              <Link to="#contacts"> Check my work</Link>
            </button>
          </div>
        </div>
        <figure className="sm:min-w-[100px] md:min-w-[250px] lg:min-w-[360px] ">
          <img src={ProfilePic} alt="me" className="mx-auto w-full" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
