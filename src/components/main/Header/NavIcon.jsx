import React, { useContext } from "react";
// import icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { SidebarContext } from "@/context/SidebarContext";
import { CartContext } from "@/context/CartContext";

// const iconList = [
//   <MdOutlineFavoriteBorder />,
//   <FiShoppingCart />,
//   <FaRegUser />,
// ];

const NavIcon = () => {
  const { sidebarOpen, setSidebarOpen, handleCloseSidebar } =
    useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext)
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
    <ul className="hidden lg:flex gap-5">
      <li className="list-none relative hover:text-primary transition-all">
        <a href="#" className="text-xl">
          <MdOutlineFavoriteBorder />
        </a>
      </li>
      <li className="list-none relative hover:text-primary transition-all">
        <div className="relative cursor-pointer max-w-[50px]">
          <a href="#" className="text-xl">
            <FiShoppingCart onClick={() => setSidebarOpen(!sidebarOpen)} />
          </a>
          <div className="flex justify-center items-center w-4 h-4 bg-primary rounded-full absolute -top-2 -right-2 text-xs font-medium text-white">{itemAmount}</div>
        </div>
      </li>
      <li className="list-none relative hover:text-primary transition-all">
        <a href="#" className="text-xl">
          <FaRegUser />
        </a>
      </li>
    </ul>
  );
};

export default NavIcon;
