import React, { useContext } from "react";
// import icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { SidebarContext } from "@/context/SidebarContext";

// const iconList = [
//   <MdOutlineFavoriteBorder />,
//   <FiShoppingCart />,
//   <FaRegUser />,
// ];

const NavIcon = () => {
  const {sidebarOpen,setSidebarOpen,handleCloseSidebar} = useContext(SidebarContext)
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
          <a href="#" className="text-xl"><MdOutlineFavoriteBorder /></a>
        </li>
        <li 
          className="list-none relative hover:text-primary transition-all"
          
          >
          <a href="#" className="text-xl"><FiShoppingCart onClick={()=>setSidebarOpen(!sidebarOpen)} /></a>
        </li>
        <li className="list-none relative hover:text-primary transition-all">
          <a href="#" className="text-xl"><FaRegUser /></a>
        </li>
      </ul>
  );
};

export default NavIcon;
