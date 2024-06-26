import React, { useState } from "react";
import productImg from "../../../assets/Product detail/Img.png";
import NewImg1 from "/products/new1.jpg";
import NewImg2 from "/products/new2.jpg";
import NewImg3 from "/products/new3.jpg";
const ProductImg = ({ selectedProduct }) => {
  const [selectedImg,setSelectedImg] = useState(selectedProduct.images.mainImg)
  return (
    <div className="w-1/2 flex flex-col items-center flex-1">
      <div className="relative flex items-center justify-center h-[350px] w-[350px] group">
        <div className="h-full w-full bg-[#F6F6F6]"></div>
        <img
          src={selectedImg}
          alt=""
          className="absolute h-[320px] w-[320px] object-cover group-hover:scale-110 transition duration-500 "
        />
      </div>
      <div className="flex gap-1 pt-10">
        <img
          src={selectedProduct.images.subImg1}
          alt=""
          className="w-[70px] h-[70px] bg-[#F6F6F6] object-cover cursor-pointer "
          onClick={() => setSelectedImg(selectedProduct.images.subImg1)}
        />
        <img
          src={selectedProduct.images.subImg2}
          alt=""
          className="w-[70px] h-[70px] bg-[#F6F6F6] object-cover cursor-pointer"
          onClick={() => setSelectedImg(selectedProduct.images.subImg1mg2)}
        />
        <img
          src={selectedProduct.images.subImg3}
          alt=""
          className="w-[70px] h-[70px] bg-[#F6F6F6] object-cover cursor-pointer"
          onClick={() => setSelectedImg(selectedProduct.images.subImg3)}
        />
      </div>
    </div>
  );
};

export default ProductImg;
