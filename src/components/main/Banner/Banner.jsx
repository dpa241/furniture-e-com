import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import banner from '../../../assets/bannerImg.png'

const Banner = () => {
  return (
    <section className="h-[60vh]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-5 lg:px-10 ">
          {/* Text */}
          <div className="flex flex-col max-w-[600px] justify-center mx-auto lg:mx-0 text-center lg:text-left py-12 lg:py-32 px-10 ">
            <p className="text-sm">Welcome to chairy</p>
            <h1 className="text-4xl lg:text-[42px] font-bold  leading-[60px] pb-8">
              Best Furniture Collection For Your Interior.
            </h1>
            <div className="self-center lg:self-start">
              <Button variant="default" className="flex items-center gap-2">
                <span>Shop Now </span>
                <IoIosArrowRoundForward size={25} />
              </Button>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:flex ">
            <div className=" flex justify-center bg-hero_shape w-[550px] bg-contain bg-no-repeat">
              <img src={banner} alt="" className="w-72 mt-28 object-cover object-center " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
