import React from "react";
import { Link } from "react-router-dom";
import { navigationData } from "@/data";

// const menuList = ['home','shop','about','contact'];

const Nav = () => {
  return (
    <nav>
      <ul className="hidden lg:flex gap-x-6">
        {navigationData.map((menuItem,index) => (
            <Link key={index} to={menuItem.href} className="uppercase font-medium text-sm relative hover:text-primary transition-all">{menuItem.name}
            </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
