import { CartContext } from "@/context/CartContext";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "../CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  const { sidebarOpen, handleCloseSidebar } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  // console.log(total);
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="h-[80%]">
        <ScrollArea className="h-full">
          {cart.map((item) => {
            return (
              <div key={item.id} className="">
                <CartItem item={item} className="" />
              </div>
            );
          })}
        </ScrollArea>
      </div>
      <div className="flex flex-col justify-between pb-10 ">
        <div className="space-y-5">
          <Button
            variant="outline"
            className="w-full rounded-none font-semibold border-0 border-t-2 hover:bg-transparent"
          >
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





    // <div
    //   className={`${
    //     sidebarOpen ? "right-0" : "-right-full"
    //   } w-full bg-white fixed top-0 h-screen flex flex-col justify-between shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 py-4 lg:px-[35px]`}
    // >
    //   <div className="h-[90%]">
    //     <div className=" flex justify-between items-center py-3 border-b">
    //       <div className="uppercase font-semibold text-sm">
    //         Shopping Bag ({itemAmount})
    //       </div>
    //       <div
    //         onClick={handleCloseSidebar}
    //         className="w-8 h-8 flex items-center justify-center cursor-pointer"
    //       >
    //         <IoMdArrowForward className="text-2xl" />
    //       </div>
    //     </div>
    //     <ScrollArea className="h-[90%] pb-5 pr-5">
    //      {cart.map((item) => {
    //         return (
    //           <div key={item.id} className="">
    //             <CartItem item={item} className="" />
    //           </div>
    //         );
    //       })}
    //     </ScrollArea>
    //   </div>
    //   <div className="flex flex-col justify-between">
    //     <div className="space-y-5">
    //       <Button
    //         variant="outline"
    //         className="w-full rounded-none font-semibold border-0 border-t-2 hover:bg-transparent"
    //       >
    //         $ {parseFloat(total).toFixed(2)}
    //       </Button>
    //       <div className="flex gap-2">
    //         <div className=" w-full rounded-none">
    //           <Link to={"/cartpage"}>
    //             <Button className="w-full">View Cart</Button>
    //           </Link>
    //         </div>
    //         <div className=" w-full rounded-none">
    //           <Link to={"/cartpage"}>
    //             <Button
    //               onClick={clearCart}
    //               variant="outline"
    //               className=" w-full rounded-none border-2 hover:border-primary transition-all duration-200 "
    //             >
    //               Clear Cart
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
