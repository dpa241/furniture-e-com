import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { IoCartOutline } from "react-icons/io5";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CartContext } from "@/context/CartContext";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { quantity,addToCart } = useContext(CartContext);
  return (
    <div className="relative col-span-4 md:col-span-2 lg:col-span-1 max-w-sm mx-auto md:max-w-none lg:mx-0 group overflow-hidden bg-[#F6F6F6]">
      <div className="">
        <div className="overflow-hidden flex justify-center items-center w-[312px]  h-[312px] ">
          <div className="absolute top-2 left-2 z-30">
            {item.isNew && (
              <span className="py-[3px] px-[8px]  bg-primary text-white  text-sm">
                New
              </span>
            )}
            {item.isOnSale && (
              <span className="py-[3px] px-[8px] z-30 bg-orange-500 text-white  text-sm">
                Sale
              </span>
            )}
          </div>
          <div className="w-full h-full">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.images?.mainImg}
                alt=""
                className="object-cover h-full w-full"
              />
              <img
                src={item.images?.imgAlt}
                alt=""
                className=" object-cover bg-white opacity-0 hover:opacity-100 "
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center py-3 px-2 ">
          <div>
            <div className="flex gap-1 text-sm ">
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
              <FaRegStar size={12} />
            </div>
            <h2 className="text-primary ">{item.title}</h2>
            <span className="text-[18px] font-semibold">${item.newPrice}</span>
          </div>
          <div>
            <Button
              onClick={() => addToCart(item, item.id,quantity)}
              variant="cartBtn"
              className="group-hover:bg-primary group-hover:text-white"
            >
              <IoCartOutline size={25} />
            </Button>
          </div>
        </div>
        <div className="absolute -right-11 top-2 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
          <Button size="icon" variant="outline">
            <MdOutlineFavoriteBorder size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
