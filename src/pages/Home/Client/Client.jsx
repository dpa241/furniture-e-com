import React from "react";
import { ClientImg } from "@/data";

// import { sliderDate } from "@/data";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import BannerSlide from "./BannerSlide";

const Client = () => {
  return (
    <div>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        slidesPerView={6}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {ClientImg.map((image, index) => {
          return (
            <SwiperSlide key={index} className="flex flex-wrap justify-between items-center px-10 pb-[80px]" >
              <div className="" key={index}>
                <img src={image.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <div className="flex flex-wrap justify-between items-center px-10 pb-[80px]">
        {ClientImg.map((image, index) => (
          <div className="" key={index}>
            <img src={image.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
