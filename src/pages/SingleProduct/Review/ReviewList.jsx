import React from "react";
import { FaStar,FaRegStar } from "react-icons/fa6";
const ReviewList = () => {
  return (
    <section className="w-2/3 pl-14 pr-5 space-y-7">
      <div className="space-y-5">
        <div className="flex items-center">
          <div className="flex flex-1 gap-4">
            <img
              src="/Product detail/Image.png"
              alt=""
              className="object-cover"
            />
            <div>
              <h3 className="text-[16px] font-bold">Phoebe Kunis</h3>
              <span className="text-muted-foreground text-sm">
                July, 23 2020
              </span>
            </div>
          </div>
          <div className="flex gap-1 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div>
          <h3 className="text-[16px] font-bold">Great Product</h3>
          <p className="text-muted-foreground text-sm pt-2">
            I love my new Nova Lounge Sofa! The clean lines and premium
            upholstery make it a sleek addition to my living room, and the
            adjustable headrests add an extra touch of comfort. Highly
            recommend!
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex items-center">
          <div className="flex flex-1 gap-4">
            <img
              src="/Product detail/Image(1).png"
              alt=""
              className="object-cover"
            />
            <div>
              <h3 className="text-[16px] font-bold">Val Purvis</h3>
              <span className="text-muted-foreground text-sm">
                July, 23 2020
              </span>
            </div>
          </div>
          <div className="flex gap-1 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        </div>
        <div>
          <h3 className="text-[16px] font-bold">Great Product</h3>
          <p className="text-muted-foreground text-sm pt-2">
            I love my new Nova Lounge Sofa! The clean lines and premium
            upholstery make it a sleek addition to my living room, and the
            adjustable headrests add an extra touch of comfort. Highly
            recommend!
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex items-center">
          <div className="flex flex-1 gap-4">
            <img
              src="/Product detail/Image(2).png"
              alt=""
              className="object-cover"
            />
            <div>
              <h3 className="text-[16px] font-bold">Dianne Russell</h3>
              <span className="text-muted-foreground text-sm">
                July, 23 2020
              </span>
            </div>
          </div>
          <div className="flex gap-1 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div>
          <h3 className="text-[16px] font-bold">Great Product</h3>
          <p className="text-muted-foreground text-sm pt-2">
            I love my new Nova Lounge Sofa! The clean lines and premium
            upholstery make it a sleek addition to my living room, and the
            adjustable headrests add an extra touch of comfort. Highly
            recommend!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
