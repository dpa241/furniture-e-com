import React from "react";
import { ClientImg } from "@/data";

const Client = () => {
  return (
    <div className="flex flex-wrap justify-between items-center px-10 pb-[80px]">
      {ClientImg.map((image, index) => (
        <div className="" key={index}>
            <img src={image.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Client;
