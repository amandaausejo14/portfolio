import ProfilePic from "../assets/img-profile.png";

const Hero = () => {
  return (
    <div className="bg-regular-blue h-screen text-white flex items-center justify-center">
      <div className="flex  w-[70%] items-center ">
        <div>
          <div>
            <div className="text-5xl font-bold flex gap-2 flex-col">
              <h1>
                Hi! I’m Amanda a Jr <span className="text-regular-purple"> Web Developer!</span>
              </h1>
              <h2>
                Welcome to my <span className="text-regular-purple"> Portfolio!</span>
              </h2>
            </div>
            <div className="w-3/5 my-8">
              <p>
                Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <button className="p-4 border border-regular-white rounded-lg">Check my work</button>
            <button className="p-4 border border-regular-white text-regular-purple bg-regular-white rounded-lg">
              Get in touch
            </button>
          </div>
        </div>
        <figure className="w-[500px]">
          <img src={ProfilePic} alt="me" className="mx-auto w-full" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
