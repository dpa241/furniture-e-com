import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
// import banner from '../../../assets/bannerImg.png'

import { motion } from "framer-motion";
import { fadeIn,staggerContainer } from "@/variants";

const BannerSlide = ({slide}) => {
  return (
    <section className="pt-[92px]">
      <div className="container mx-auto h-[65vh] ">
        <div className="flex justify-between gap-x-5 lg:px-10 ">
  
          <motion.div 
          variants={staggerContainer(0.3,1)}
          initial='hidden'
          whileInView={'show'}
          className="flex flex-1 flex-col max-w-[500px] justify-center mx-auto lg:mx-0 text-center lg:text-left py-12 lg:py-32 px-10 ">
            <motion.p 
            variants={fadeIn('right','tween',0.2,1.1)}
            className="text-sm">{slide.text}</motion.p>
            <motion.h1 
            variants={fadeIn('right','tween',0.4,1.1)}
            className="text-4xl lg:text-[42px] font-bold  leading-[60px] pb-8">
              {slide.slogan}
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
              variants={fadeIn('left','tween',0.5,1.1)}
              className=" flex justify-center bg-hero_shape w-[550px] bg-contain bg-no-repeat">
              <motion.img 
              variants={fadeIn('left','tween',0.6,1.1)}
              src={slide.image} alt="" className="w-80 mt-28 object-cover object-center " />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BannerSlide