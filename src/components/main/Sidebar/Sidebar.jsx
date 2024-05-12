import { CartContext } from "@/context/CartContext";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "../CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarOpen, handleCloseSidebar } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  // console.log(total);
  return (
    <div
      className={`${
        sidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-screen shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase font-semibold text-sm">Shopping Bag (0)</div>
        <div
          onClick={handleCloseSidebar}
          className="w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="h-[90%] flex flex-col justify-between">
        <div>
          {cart.map((item) => {
            return (
              <div key={item.id} className="">
                <CartItem item={item} className="" />
              </div>
            );
          })}
        </div>
        <div className="space-y-5">
          <Button variant="outline" className="w-full rounded-none font-semibold border-0 border-t-2 hover:bg-transparent">
            $ {parseFloat(total).toFixed(2)}
          </Button>
          <div className="flex gap-2">
            <div className=" w-full rounded-none">
              <Link to={"/cartpage"}>
                <Button className="w-full">View Cart</Button>
              </Link>
            </div>
            <div className=" w-full rounded-none">
              <Link to={"/cartpage"}>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className=" w-full rounded-none border-2 hover:border-primary transition-all duration-200 "
                >
                  Clear Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
