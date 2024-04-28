import { useState } from "react";
// ---------Components-----------//
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Logo from "./Logo";
import NavIcon from "./NavIcon";

//-------------ui--------------//
import {Command,CommandInput} from "@/components/ui/command";

// icons
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <header className=" container mx-auto py-5 border">
      <div className="flex justify-between items-center">
        <Logo />
        <div>
          <Command>
            <CommandInput placeholder="search" />
          </Command>
        </div>
        <Nav/>
        <NavIcon/>
        <div className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
          <MobileNav/>
        </div>
        <button className="lg:hidden z-50" onClick={()=>setIsOpen(!isOpen)}>
            {
              isOpen ? <MdClose className="text-white text-lg" /> : <LuMenu className="text-lg"/>
            }
        </button>
      </div>
    </header>
  );
};

export default Header;
