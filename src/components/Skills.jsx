import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Slider from "./Slider";
const Skills = () => {
  const [frontSkills, setFrontSkills] = useState(true);
  return (
    <div className="w-full p-4 my-12 text-regular-white ">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-20 items-center">
        <div>
          <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Skills
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="border border-regular-purple flex gap-4 p-2 rounded-lg">
            <button
              className={`py-4 px-8 rounded-lg ${frontSkills ? "bg-regular-white text-regular-purple" : ""}`}
              onClick={() => setFrontSkills(true)}
            >
              Front-end
            </button>
            <button
              className={`py-4 px-8 rounded-lg ${!frontSkills ? "bg-regular-white text-regular-purple" : ""}`}
              onClick={() => setFrontSkills(false)}
            >
              Back-end
            </button>
          </div>
          <div className="flex items-center">
            <Slider skills={frontSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
