import React, { useContext } from "react";
// import icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { SidebarContext } from "@/context/SidebarContext";
import { CartContext } from "@/context/CartContext";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "./MobileNav";
import Sidebar from "../Sidebar/Sidebar";
import { Menu, MoveRight, ShoppingCart, X } from "lucide-react";

// const iconList = [
//   <MdOutlineFavoriteBorder />,
//   <FiShoppingCart />,
//   <FaRegUser />,
// ];

const NavIcon = () => {
  const { sidebarOpen, setSidebarOpen, handleCloseSidebar } =
    useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // console.log(sidebarOpen);
  return (
    // <div className="hidden lg:flex gap-5">
    //   {
    //     iconList.map((item,index)=>(
    //         <li key={index} className="list-none relative hover:text-primary transition-all">
    //             <a href="#" className="text-xl">{item}</a>
    //         </li>
    //     ))
    //   }
    // </div>

    //=========================Navigation Icons=========================//
    <ul className="flex items-center gap-5 ">
      <li className="hidden lg:flex list-none relative hover:text-primary transition-all">
        <a href="#" className="text-xl">
          <MdOutlineFavoriteBorder />
        </a>
      </li>
      <li>
        <Sheet className="">
          <div className="relative cursor-pointer">
            <SheetTrigger asChild>
              <ShoppingCart className="" />
            </SheetTrigger>
            <div className=" flex justify-center items-center w-4 h-4 bg-primary rounded-full absolute -top-2 -right-2 text-xs font-medium text-white">
              {itemAmount}
            </div>
          </div>
          <SheetContent className="">
            <div className="flex items-center justify-between pb-5">
              <div className=" text-black  disabled:pointer-events-none data-[state=open]:bg-secondary uppercase font-semibold text-sm">
                Shopping Bag ({itemAmount})
              </div>
              <SheetClose
                asChild
                className=" text-black block disabled:pointer-events-none data-[state=open]:bg-secondary"
              >
                <MoveRight className="text-black" />
              </SheetClose>
            </div>
            <hr />
            <Sidebar />
          </SheetContent>
        </Sheet>
        {/* <div className="relative cursor-pointer max-w-[50px]">
          <a href="#" className="text-xl">
            <FiShoppingCart onClick={() => setSidebarOpen(!sidebarOpen)} />
          </a>
          <div className="flex justify-center items-center w-4 h-4 bg-primary rounded-full absolute -top-2 -right-2 text-xs font-medium text-white">
            {itemAmount}
          </div>
        </div> */}
      </li>
      <li className="hidden lg:flex list-none relative hover:text-primary transition-all">
        <Link to={"/profile"} className="text-xl">
          <FaRegUser />
        </Link>
      </li>
      <li>
        <Sheet className="">
          <SheetTrigger asChild className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetClose
              asChild
              className="absolute right-6 top-6  disabled:pointer-events-none data-[state=open]:bg-secondary"
            >
              <X className="text-white h-4 w-4" />
            </SheetClose>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </li>
    </ul>
  );
};

export default NavIcon;
