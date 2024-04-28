import React from "react";
// import Image from "/products/featureprod3.png";
import { categoryData } from "@/data";
import Product from "../Categories/Product";
const GridView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-5 max-w-sm mx-auto md:max-w-none lg:mx-0">
      {categoryData.map((product, index) => (
        <Product key={index} product={product} isLarge={product.isLarge}/>
      ))}

      {/* =================================== */}
      {/* <div className="relative flex justify-center overflow-hidden items-center group">
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
      </div> */}
    </div>
  );
};

export default GridView;
