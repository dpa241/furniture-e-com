import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div
      className={`${
        product.isLarge ? "col-span-1 md:col-span-2 full w-full" : ""
      } relative flex justify-center h-[312px] overflow-hidden items-center group cursor-pointer`}
    >
      <div className="absolute group-hover:bg-black/70 w-[100%] h-[100%] z-40 transition-all duration-300"></div>
      <img
        src={product.catImg}
        alt=""
        className="w-full h-full group-hover:scale-125 transition-all duration-300 "
      />
      <div
        className={`${
          product.isLarge ? "w-[95%]" : "w-[90%]"
        } absolute flex items-center justify-center  h-[90%] text-3xl z-50 text-center rounded-md text-transparent group-hover:text-white group-hover:border transition-all duration-300`}
      >
        <Link
          to={`/category/${product.prodCat}`}
          className="flex justify-center items-center w-full h-full"
        >
          <h3>{product.name}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Product;
