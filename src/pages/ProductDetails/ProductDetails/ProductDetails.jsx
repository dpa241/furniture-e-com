import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductTopDetails = () => {
  const [quantity,setQuantity] = useState(1)

  return (
    <div className="w-1/2 space-y-5">
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold">RADIANCE MODERN SOFA</h2>
        <div className="flex items-center gap-5">
          <div className="flex gap-1 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <Button variant="destructive" size="medium">
            On Sale
          </Button>
        </div>
      </div>
      <div className="text-muted-foreground flex gap-2 pb-6">
        <span>261 products sold</span> . <span>3.1k products watched</span>
      </div>
      <hr className="w-[50%]" />
      <div className="flex items-center gap-5">
        <div className="py-6">
          <Select>
            <SelectTrigger className="w-[150px] space-x-1 bg-secondary/80">
              <p>Type:</p>
              {/* <SelectItem value="light">Light</SelectItem> */}
              <SelectValue
                className="placeholder:font-bold"
                placeholder="Select"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-secondary flex items-center rounded border border-input ">
          <button 
            className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
            onClick={()=>setQuantity((prev)=> prev+1)}
            >
            +
          </button>
          <span className="text-sm">Number : {quantity}</span>
          <button 
            className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
            onClick={()=>setQuantity((prev)=> prev === 1 ? 1: prev-1)}
            >
            -
          </button>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-teal-700 cursor-pointer ring-teal-700 ring-offset-2 focus:ring-2"></button>
          <button className="w-8 h-8 bg-[#7BB5EB] cursor-pointer ring-[#7BB5EB] ring-offset-2 focus:ring-2"></button>
          <button className="w-8 h-8 bg-[#5D3B53] cursor-pointer ring-[#5D3B53] ring-offset-2 focus:ring-2"></button>
          <button className="w-8 h-8 bg-gray-400 cursor-pointer ring-gray-400 ring-offset-2 focus:ring-2"></button>
        </div>
      </div>
      <hr className="w-[70%]" />
      <div className="flex items-center gap-5 py-6">
        <p className="text-[32px] font-bold text-[#CE0000]">$2352.41</p>
        <div className="flex gap-2">
          <Button variant="default" size="medium">
            BUY NOW
          </Button>
          <Button variant="secondary" size="medium">
            ADD TO CART
          </Button>
          <Button variant="secondary" size="medium">
            <FaRegHeart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductTopDetails;
