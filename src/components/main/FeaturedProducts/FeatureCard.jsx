import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CartContext } from "@/context/CartContext";
import { Link, useParams } from "react-router-dom";

const FeatureCard = ({ item }) => {
  // const {id} = useParams()
  const {addToCart} = useContext(CartContext)
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 max-w-sm mx-auto md:max-w-none lg:mx-0 group overflow-hidden">
      <div className="relative ">
        <div className="overflow-hidden relative w-[312px] h-[312px]">
          {item.isNew && <span className="absolute top-2 left-2 py-[3px] px-[8px] z-30 bg-primary text-white  text-sm">New</span>}
          {item.isOnSale && <span className="absolute top-2 left-2 py-[3px] px-[8px] z-30 bg-orange-500 text-white  text-sm">Sale</span>}
          <Link to={`/product/${item.id}`}>
          <img src={item.img} alt="" className="absolute object-cover" />
          <img src={item.imgAlt} alt="" className="absolute opacity-0 hover:opacity-100 object-cover" />
          </Link>
        </div>
        <div className="flex justify-between items-center pt-3">
          <div>
            <h2 className="text-primary ">{item.title}</h2>
            <span className="text-[18px] font-semibold">${item.newPrice}</span>
          </div>
          <div>
            <Button
              onClick={()=>addToCart(item,item.id)}
              variant="cartBtn"
              className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
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

export default FeatureCard;