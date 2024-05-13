import React, { useState } from "react";
import productImg from "../../../assets/Product detail/Img.png";
import NewImg1 from '/products/new1.jpg'
import NewImg2 from '/products/new2.jpg'
import NewImg3 from '/products/new3.jpg'
const ProductImg = () => {
  const [selectedImg,setSelectedImg] = useState(productImg)
  return (
    <div className="w-1/2 flex flex-col items-center">
      <div className="relative bg-product_shape w-[450px] h-[450px] bg-no-repeat">
        <img
          src={selectedImg}
          alt=""
          className="absolute left-10 top-28 w-[320px]"
        />
      </div>
      <div className="flex gap-1 pt-10">
        <img 
          src={NewImg1} 
          alt="" 
          className="w-[70px] h-[70px] object-cover cursor-pointer " 
          onClick={(e)=>setSelectedImg(NewImg1)}
          />
        <img src={NewImg2} alt="" className="w-[70px] h-[70px] object-cover cursor-pointer" onClick={(e)=>setSelectedImg(NewImg2)}  />
        <img src={NewImg3} alt="" className="w-[70px] h-[70px] object-cover cursor-pointer" onClick={(e)=>setSelectedImg(NewImg3)} />
      </div>
    </div>
  );
};

export default ProductImg;
