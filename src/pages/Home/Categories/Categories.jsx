// components
import { fadeIn, staggerContainer } from "@/variants";
import GridView from "./GridView";
import SideMenu from "./SideMenu";
// import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Categories = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      whileInView={"show"}
      className="container mx-auto space-y-8 overflow-hidden"
    >
      <motion.h2 
      variants={fadeIn('right','tween',0.5,1.1)}
      className="text-center lg:text-left text-3xl font-semibold uppercase">Top Categories</motion.h2>

      {/* This is Method - 1 */}

      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full gap-2 max-w-sm mx-auto md:max-w-none lg:mx-0">
        <div className="md:row-span-2">
          <Sidebar/>
        </div>
        <div className="relative flex justify-center overflow-hidden items-center group">
          <div className="absolute group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300"></div>
          <img
            src={Image}
            alt=""
            className="w-full group-hover:scale-125 transition-all duration-300 "
          />
          <div className="absolute flex items-center justify-center w-[90%] h-[90%] text-3xl z-50 text-center rounded-md text-transparent group-hover:text-white group-hover:border transition-all duration-300">
            <h3>Chair</h3>
          </div>
        </div>
        <div className="">
          <img src={Image} alt="" className="w-full" />
        </div>
        <div className="">
          <img src={Image} alt="" className="w-full" />
        </div>
        <div className="">
          <img src={Image} alt="" className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-2 h-[296px] w-full bg-green-100">
          <div className="h-full">
            <img src={Image} alt="" className="w-full h-full" />
          </div>
        </div>
      </div> */}

      {/* This is Method 2 */}

      <div className="flex justify-center gap-5">
        <motion.div 
        variants={fadeIn('right','tween',0.5,1.1)}
        className=" hidden lg:block w-1/4">
          <SideMenu />
        </motion.div>
        <motion.div 
        variants={fadeIn('left','tween',0.5,1.1)}
        className="w-3/4 ">
          <GridView />
        </motion.div>
      </div>
      <div className="text-center">
          <Link to={"/shop"} className=" lg:hidden">
            <Button className="w-[250px]">All Category</Button>
          </Link>
        </div>
    </motion.section>
  );
};

export default Categories;
