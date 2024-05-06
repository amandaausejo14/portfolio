import AboutMeImg from "../assets/about-me-img.png";
const AboutMe = () => {
  return (
    <div className="w-full bg-regular-blue py-16 px-4 text-regular-white ">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-20 items-center">
        <div>
          <h1 className="text-5xl font-bold">
            About <span className="text-regular-purple">Me</span>
          </h1>
        </div>

        <div className="flex justify-center items-center gap-20">
          <figure className="">
            <img src={AboutMeImg} alt="me-profile" />
          </figure>
          <div className="flex flex-col gap-2 bg-regular-white text-regular-blue rounded-lg p-6 w-3/5 items-end">
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed. It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed.
            </p>
            <button className="p-4 border bg-regular-purple text-regular-white rounded-lg w-1/4">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
