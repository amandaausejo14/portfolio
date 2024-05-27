import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Slider from "./Slider";
const Skills = () => {
  const [frontSkills, setFrontSkills] = useState(true);
  const [fade, setFade] = useState(false);

  const handleSwitch = (isFront) => {
    setFade(true);
    setFrontSkills(isFront);
    setTimeout(() => {
      setFade(false);
    }, 400);
  };
  return (
    <section id="skills" className="w-full text-regular-white h-screen  flex justify-center items-center snap-center">
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
              className={`py-4 px-8 rounded-lg transition delay-150 ${
                frontSkills ? "bg-regular-white text-regular-purple" : ""
              }`}
              onClick={() => handleSwitch(true)}
            >
              Front-end
            </button>
            <button
              className={`py-4 px-8 rounded-lg transition delay-150 ${
                !frontSkills ? "bg-regular-white text-regular-purple" : ""
              }`}
              onClick={() => handleSwitch(false)}
            >
              Back-end
            </button>
          </div>
          <div className={`flex items-center ${fade ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
            <Slider skills={frontSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
