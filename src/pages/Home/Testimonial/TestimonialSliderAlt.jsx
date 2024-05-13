// import Swiper core and required modules
import { testimonialsData } from "@/data";
import { Navigation, Pagination, Autoplay ,Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlide from "./SingleSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const TestimonialSliderAlt = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{delay: 3000, disableOnInteraction: false}}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {testimonialsData.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <SingleSlide slide={slide}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSliderAlt;

{
}
