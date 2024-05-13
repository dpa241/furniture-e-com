import React from "react";

const menuList = ['home','shop','about','contact'];

const Nav = () => {
  return (
    <nav>
      <ul className="hidden lg:flex gap-x-6">
        {menuList.map((menuItem,index) => (
          <li key={index}>
            <a href="#" className="uppercase font-medium text-sm relative hover:text-primary transition-all">{menuItem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
