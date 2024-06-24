import React from "react";

const menuList = ["home", "shop", "about", "contact"];
const MobileNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5 items-center pt-24 bg-primary h-screen text-white">
        {menuList.map((menuItem, index) => (
          <li key={index}>
            <a
              href="#"
              className="uppercase font-medium text-sm hover:text-gray-300"
            >
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
