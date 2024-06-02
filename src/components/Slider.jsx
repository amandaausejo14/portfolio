import { FrontEndSkills, BackEndSkills } from "./SkillsData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Slider = ({ skills }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper max-w-[200px] md:max-w-[620px] lg:max-w-[900px] xl:max-w-[900px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {(skills ? FrontEndSkills : BackEndSkills).map((skill, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col mb-20 group relative  text-white rounded-xl overflow-hidden cursor-pointer justify-center items-center xl:h-[300px] xl:w-[260px] 2xl:w-full 2xl:h-full"
          >
            <div className="bg-regular-white w-full px-8 py-12 justify-center flex">
              <figure className=" flex items-center justify-center w-[150px] h-[150px] border-2 border-regular-purple px-4  rounded-full bg-gradient-to-r from-violet-600 to-indigo-600">
                <img src={skill.img} alt={skill.name} className="w-[75%]" />
              </figure>
            </div>

            <div className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600 w-full flex justify-center p-10">
              <p>{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
