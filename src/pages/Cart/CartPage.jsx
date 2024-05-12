import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext, useState } from "react";
// import { useState } from "react";
import OrderSumary from "./OrderSumary";
import { CartContext } from "@/context/CartContext";
import { X } from "lucide-react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { cart, clearCart, total } = useContext(CartContext);
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const tax = parseFloat(total * 0.15).toFixed(2);
  console.log(typeof(tax));
  
  const discount = parseFloat(total * 0.1).toFixed(2);
  console.log(typeof(discount));
  const maxTotal = total+tax+discount
  
  return (
    <section className="container mx-auto pt-[92px]">
      <div className="flex py-12 gap-10">
        <div className="w-2/3 overflow-hiden scroll-y h-[80vh] ">
          <h2 className="text-2xl uppercase font-medium">
            You have (2) items in your cart
          </h2>
          {cart.map((item) => {
            const { id, title, img, amount, newPrice } = item;
            return (
              <div
                key={id}
                className="flex justify-between  border-b-[1px] py-7"
              >
                <div className="max-w-[600px]">
                  <div className="flex items-center gap-4">
                    <img
                      src={img}
                      alt=""
                      className="w-[120px] h-[120px] object-cover"
                    />
                    <div className="space-y-2">
                      <div className="space-y-2">
                        <h3 className="text-lg uppercase font-medium">
                          {title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                          Lacquer Finish | Color: Antique | Size: L550 X W770 X
                          SH455 X TH860
                        </p>
                      </div>
                      {/* <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                        <button
                          className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                          onClick={() => increaseAmount(id)}
                        >
                          +
                        </button>
                        <span className="text-sm">Number : {amount}</span>
                        <button
                          className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                          onClick={() =>decreaseAmount(id)}
                        >
                          -
                        </button>
                      </div> */}
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-r-0 rounded-none"
                          onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                          }
                        >
                          <IoMdRemove />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-transparent cursor-default rounded-none"
                        >
                          1
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-l-0 rounded-none"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          <IoMdAdd />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between py-1">
                  <span
                    onClick={() => removeFromCart(id)}
                    className="self-end cursor-pointer"
                  >
                    <X className="hover:text-red-600 transition-all duration-300" />
                  </span>
                  <span className="text-xl font-bold">
                    ${newPrice * amount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right-Side-Price-Calculation */}
        {/* <OrderSumary/> */}
        <div className="w-1/3 space-y-8 px-16 ">
          <div>
            <div className="space-y-2 pb-5">
              <h2 className="text-2xl uppercase font-medium">Order Summary</h2>
              <p className="text-muted-foreground text-sm">
                Apply your monthly voucher to get more discount!
              </p>
            </div>
            <div className="space-y-5">
              <Input placeholder="Your voucher code" />
              <div className="space-y-5 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Price</span>
                  <span className="text-lg font-bold text-[#2F302C]">
                    ${total}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Discount 10%</span>
                  <span className="text-lg font-bold text-[#2F302C]">
                    ${discount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="text-lg font-bold text-[#2F302C]">
                    ${tax}
                  </span>
                </div>
                <div className="flex justify-between border-t-[1px]">
                  <span>Total Price</span>
                  <span className="text-lg font-bold text-red-600">
                    ${parseFloat(maxTotal).toFixed(2)}
                  </span>
                </div>
                <Textarea placeholder="Write notes here..." />
              </div>
              <Button className="w-full rounded-none">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
