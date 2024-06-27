import { Button } from "@/components/ui/button";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, fadeInOut, fadeOut, staggerContainer } from "@/variants";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Eye, Star } from "lucide-react";
const ProductCardAlt = ({ item }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      animate="initial"
      variants={{
        initial: {},
        hovered: {},
      }}
      className="relative h-[400px] rounded-md group col-span-4 md:col-span-2 lg:col-span-1 max-w-sm mx-auto md:max-w-none lg:mx-0 group overflow-hidden bg-[#F6F6F6]"
    >
      <div className="h-[300px] bg-[#222222]/5 ">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[275px] flex justify-center items-center mx-auto ">
            <img
              src="/hero/file.png"
              alt=""
              className="max-h-[300px] group-hover:scale-110 transition duration-500 "
            />
          </div>
        </div>
      </div>
      <div className=" flex  h-[100px]">
        <div className=" flex flex-col items-center justify-center  space-y-2 w-full">
          <motion.div
            variants={{
              initial: { opacity: 1, y: 10 },
              hovered: { opacity: 0, y: -20, transition: { duration: 0.5 } },
            }}
            className="flex gap-1 text-sm"
          >
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaRegStar size={12} />
          </motion.div>
          <motion.h2
            variants={{
              initial: { opacity: 1, y: 10 },
              hovered: { opacity: 1, y: -10, transition: { duration: 0.5 } },
            }}
            clas
            className="text-primary leading-tight "
          >
            {item.title}
          </motion.h2>
          <motion.span
            // variants={}
            variants={{
              initial: { opacity: 1, y: -10 },
              hovered: { opacity: 0, y: -50, transition: { duration: 0.5 } },
            }}
            className="text-[18px] font-semibold pt-3 "
          >
            ${item.newPrice}
          </motion.span>
          <motion.div
            variants={{
              initial: { opacity: 0, y: 10 },
              hovered: { opacity: 1, y: -20, transition: { duration: 0.5 } },
            }}
            // variants={fadeIn('up','tween',0.2,1.1)}
            className="absolute -bottom-5 w-full"
          >
            <Button
              // onClick={() => addToCart(item, item.id)}
              variant="outline"
              className="hover:bg-[#0a5d5d] text-[#0a5d5d] hover:text-white border border-[#0a5d5d] transition-all duration-1000 w-full h-12 "
            >
              <span className=" ">Add To Cart</span>
              {/* <IoCartOutline clas size={25} /> */}
            </Button>
          </motion.div>
          <motion.div
            variants={{
              initial: { opacity: 0, x: 10 },
              hovered: { opacity: 1, x: -20, transition: { duration: 0.5 } },
            }}
            className="absolute top-0 right-0 "
          >
            <div className="space-y-2 flex flex-col ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center size-8 rounded-full bg-transparent hover:bg-[#0a5d5d] text-[#0a5d5d] hover:text-white transition duration-500 cursor-pointer">
                      <Star size={16} strokeWidth={1.5} />
                    </div>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Add to Favourite</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center size-8 rounded-full bg-transparent hover:bg-[#0a5d5d] text-[#0a5d5d] hover:text-white transition duration-500 cursor-pointer">
                      <Eye size={16} strokeWidth={1.5} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Quick View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCardAlt;
