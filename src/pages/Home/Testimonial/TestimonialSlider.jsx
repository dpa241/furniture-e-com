import React from "react";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../slider.css";
import { testimonialsData } from "@/data";

const TestimonialSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      //   className='mySwiper'
    >
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide className=" flex items-center justify-center" key={index}>
            <div className="flex flex-col items-center justify-center">
              <img src={image} alt="" className="w-[100px] h-[100px]" />
              <div className="py-10 text-center max-w-[650px] ">
                <p>{message}</p>
                <h4 className="pt-6 italic">{name}</h4>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
