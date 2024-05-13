import { FrontEndSkills, BackEndSkills } from "./SkillsData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = (skills) => {
  console.log("skills:", skills);
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-[200px] md:max-w-[620px] lg:max-w-[900px] xl:max-w-[1000px]"
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
            className="bg-regular-purple flex flex-col gap-6 mb-20 group relative shadow-lg text-white border  rounded-xl px-6 py-8 lg:w-[350px] lg:h-[300px] overflow-hidden cursor-pointer justify-center items-center"
          >
            <figure className="w-[100px] h-[100px] flex items-center justify-center">
              <img src={skill.img} alt={skill.name} />
            </figure>
            <div className="text-lg">
              <p>{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
