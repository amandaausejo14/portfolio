import AboutMeImg from "../assets/about-me-img.png";
const AboutMe = () => {
  return (
    <div className="w-full p-4 my-12 text-regular-white">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center md:w-[85%]">
        <h1 className="sm: text-3xl md:text-4xl font-bold lg:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
            Me
          </span>
        </h1>

        <div className="sm: gap-12 flex flex-col justify-center items-center md:flex-row">
          <figure className="sm: max-w-[200px] md:min-w-[250px]">
            <img src={AboutMeImg} alt="me-profile" />
          </figure>
          <div className="sm: max-w-[85%] p-4 flex flex-col items-center text-center bg-regular-white text-regular-blue text-sm rounded-lg gap-4 md:text-left md:items-end lg:text-base lg:max-w-[55%] xl:gap-4 xl:p-6">
            <p>
              A year ago, I started exploring web development as a hobby, immersing myself in HTML and CSS. Driven by a
              growing passion, I pursued further education through an intensive bootcamp. There, I mastered JavaScript,
              React, and Node.js, enhancing my ability to create dynamic web applications. If you d like to learn more
              about my journey and skills, feel free to download my CV.
            </p>
            <button className="sm: min-w-[20%] max-w-[90%] md: p-4  bg-regular-purple text-regular-white rounded-lg ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
