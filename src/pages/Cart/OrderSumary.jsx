import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CartContext } from '@/context/CartContext'
import { Input } from "@/components/ui/input";
import { useContext } from 'react'

const OrderSumary = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const discount = parseFloat(total * 0.1).toFixed(2);
  const tax = parseFloat(((total -discount)* 0.15).toFixed(2));
  const maxTotal = total-discount+tax
  
  return (
    // <div className="w-1/3 space-y-8 px-16 ">
    //       <div className="space-y-5">
    //         <h2 className="text-2xl uppercase font-bold">Order Summary</h2>
    //         <p className="text-muted-foreground text-sm">
    //           Apply your monthly voucher to get more discount!
    //         </p>
    //       </div>
    //       <div className="space-y-5">
    //         <Input placeholder="Your voucher code" />
    //         <div className="space-y-5 text-muted-foreground">
    //           <div className="flex justify-between">
    //             <span>Price</span>
    //             <span className="text-lg font-bold text-[#2F302C]">
    //               $1721.21
    //             </span>
    //           </div>
    //           <div className="flex justify-between">
    //             <span>Discount 10%</span>
    //             <span className="text-lg font-bold text-[#2F302C]">$171</span>
    //           </div>
    //           <div className="flex justify-between">
    //             <span>Tax</span>
    //             <span className="text-lg font-bold text-[#2F302C]">$17</span>
    //           </div>
    //           <div className="flex justify-between border-t-[1px]">
    //             <span>Total Price</span>
    //             <span className="text-lg font-bold text-red-600">$1892.21</span>
    //           </div>
    //           <Textarea placeholder="Write notes here..." />
    //         </div>
    //         <Button className="w-full rounded-none">Proceed to Checkout</Button>
    //       </div>
    // </div>
    <>
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
    </>
  )
}

export default OrderSumary