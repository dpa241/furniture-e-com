import  { useContext } from 'react'
import { CartContext } from "@/context/CartContext";
import { X } from "lucide-react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';

const CartDescriptions = () => {
  const { cart, clearCart, total,itemAmount } = useContext(CartContext);
  const { removeFromCart, increaseAmount, decreaseAmount,decreaseAmountNotZero } =
    useContext(CartContext);
  const tax = parseFloat(total * 0.15).toFixed(2);
  const discount = parseFloat(total * 0.1).toFixed(2);
  const maxTotal = total+tax-discount
  return (
    <div className="w-2/3 ">
          <h2 className="text-2xl uppercase font-medium">
            You have ({itemAmount}) items in your cart
          </h2>
          <ScrollArea className="h-[60vh] pr-8">
          {cart.map((item) => {
            const { id, title, images, amount, newPrice } = item;
            return (
              <div
                key={id}
                className="flex justify-between  border-b-[1px] py-7"
              >
                <div className="max-w-[600px]">
                  <div className="flex items-center gap-4">
                    <img
                      src={images?.mainImg}
                      alt=""
                      className="size-[120px] object-cover"
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
                          // onClick={() =>
                          //   setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                          // }
                          onClick={()=>decreaseAmountNotZero(id)}
                        >
                          <IoMdRemove />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-transparent cursor-default rounded-none"
                        >
                          {amount}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-l-0 rounded-none"
                          // onClick={() => setQuantity((prev) => prev + 1)}
                          onClick={()=>increaseAmount(id)}
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
          </ScrollArea>
          
      
          {/* <div className="flex justify-between  border-b-[1px] pb-5">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4">
                <img
                  src="./products/new3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-xl uppercase font-semibold">
                      MORDERN BLACK HANGING LIGHT
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                      Lacquer Finish | Color: Antique | Size: L550 X W770 X
                      SH455 X TH860
                    </p>
                  </div>
                  <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                    <button
                      className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">Number : {quantity}</span>
                    <button
                      className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <span className="self-end text-red-600 cursor-pointer">X</span>
              <span className="text-xl font-bold">$1723.21</span>
            </div>
          </div> */}
          {/* <div className="flex justify-between  border-b-[1px] py-5">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4">
                <img
                  src="./products/new3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-xl uppercase font-semibold">
                      MORDERN BLACK HANGING LIGHT
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                      Lacquer Finish | Color: Antique | Size: L550 X W770 X
                      SH455 X TH860
                    </p>
                  </div>
                  <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                    <button
                      className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">Number : {quantity}</span>
                    <button
                      className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <span className="self-end text-red-600 cursor-pointer">X</span>
              <span className="text-xl font-bold">$1723.21</span>
            </div>
          </div>
          <div className="flex justify-between  border-b-[1px] py-5">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4">
                <img
                  src="./products/new3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-xl uppercase font-semibold">
                      MORDERN BLACK HANGING LIGHT
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                      Lacquer Finish | Color: Antique | Size: L550 X W770 X
                      SH455 X TH860
                    </p>
                  </div>
                  <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                    <button
                      className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">Number : {quantity}</span>
                    <button
                      className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <span className="self-end text-red-600 cursor-pointer">X</span>
              <span className="text-xl font-bold">$1723.21</span>
            </div>
          </div> */}
        </div>
  )
}

export default CartDescriptions