import { sliderDate } from "@/data";
import { Navigation, Pagination, Autoplay ,Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerSlide from "./BannerSlide";



// import { IoIosArrowRoundForward } from "react-icons/io";
// import { Button } from "@/components/ui/button";
// // import banner from '../../../assets/bannerImg.png'
// import banner2 from '/hero/file.png'
// import { motion } from "framer-motion";
// import { fadeIn,staggerContainer } from "@/variants";


const Banner = () => {
  return (
    <>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      slidesPerView={1}
      autoplay={{delay: 6000, disableOnInteraction: false}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderDate.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            {/* <SingleSlide slide={slide}/> */}
            <BannerSlide slide={slide}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
    {/* <section className="pt-[92px]">
      <div className="container mx-auto h-[65vh] ">
        <div className="flex justify-between gap-x-5 lg:px-10 ">
  
          <motion.div 
          variants={staggerContainer(0.3,1)}
          initial='hidden'
          whileInView={'show'}
          className="flex flex-1 flex-col max-w-[500px] justify-center mx-auto lg:mx-0 text-center lg:text-left py-12 lg:py-32 px-10 ">
            <motion.p 
            variants={fadeIn('right','tween',0.2,1.1)}
            className="text-sm">Welcome to chairy</motion.p>
            <motion.h1 
            variants={fadeIn('right','tween',0.4,1.1)}
            className="text-4xl lg:text-[42px] font-bold  leading-[60px] pb-8">
              Best Furniture Collection For Your Interior.
            </motion.h1>
            <motion.div 
            variants={fadeIn('right','tween',0.6,1.1)}
            className="self-center lg:self-start">
              <Button variant="default" className="flex items-center gap-2">
                <span>Shop Now </span>
                <IoIosArrowRoundForward size={25} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
          variants={staggerContainer(0.3,1)}
          initial='hidden'
          whileInView={'show'}
          className="hidden lg:flex flex-1 ">
            <motion.div 
              variants={fadeIn('down','tween',0.5,1.1)}
              className=" flex justify-center bg-hero_shape w-[550px] bg-contain bg-no-repeat">
              <motion.img 
              variants={fadeIn('left','tween',0.6,1.1)}
              src={banner2} alt="" className="w-80 mt-28 object-cover object-center " />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section> */}
    </>
    
  );
};

export default Banner;
