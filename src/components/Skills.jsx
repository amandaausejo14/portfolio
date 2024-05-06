import Javascript from "../assets/skills/javascript.png";
import React from "../assets/skills/react.png";
import TailwindCss from "../assets/skills/tailwind.png";
import Bootstrap from "../assets/skills/bootstrap.png";
const Skills = () => {
  const FrontEndSkils = [
    {
      name: "Javascript",
      img: Javascript,
    },
    {
      name: "React",
      img: React,
    },
    {
      name: "Tailwind CSS",
      img: TailwindCss,
    },
    {
      name: "BootStrap",
      img: Bootstrap,
    },
  ];
  return (
    <div className="w-full bg-regular-blue py-16 px-4 text-regular-white ">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-20 items-center">
        <div>
          <h1 className="text-5xl font-bold">
            My <span className="text-regular-purple">Skills</span>
          </h1>
        </div>
        <div>
          <div className="border border-regular-purple flex gap-4 p-2 rounded-lg">
            <button className="py-4 px-8 rounded-lg hover:bg-regular-white hover:text-regular-purple">Front-end</button>
            <button className="py-4 px-8 rounded-lg hover:bg-regular-white hover:text-regular-purple">Back-end</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
