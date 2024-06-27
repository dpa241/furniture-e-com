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
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [activeHeader,setActiveHeader] = useState(false)

  // event listener
  window.addEventListener('scroll', ()=>{
    window.scrollY > 60 ? setActiveHeader(true) : setActiveHeader(false)
  })
  return (
    <header className={`${activeHeader? "bg-white py-4 shadow-md ": "bg-none py-6"} fixed z-50 top-0  w-full border transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"><Logo /></Link>
        <div>
          <Command>
            <CommandInput placeholder="search" />
          </Command>
        </div>
        <Nav/>
        <NavIcon/>

        {/* Manual Navbar */}
        {/* <div className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
          <MobileNav/>
        </div>
        <button className="lg:hidden z-50" onClick={()=>setIsOpen(!isOpen)}>
            {
              isOpen ? <MdClose className="text-white text-lg" /> : <LuMenu className="text-lg"/>
            }
        </button> */}
      </div>
    </header>
  );
};

export default Header;
