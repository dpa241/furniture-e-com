import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from 'postcss'
import React from 'react'

const OrderSumary = () => {
  return (
    <div className="w-1/3 space-y-8 px-16 ">
          <div className="space-y-5">
            <h2 className="text-2xl uppercase font-bold">Order Summary</h2>
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
                  $1721.21
                </span>
              </div>
              <div className="flex justify-between">
                <span>Discount 10%</span>
                <span className="text-lg font-bold text-[#2F302C]">$171</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-lg font-bold text-[#2F302C]">$17</span>
              </div>
              <div className="flex justify-between border-t-[1px]">
                <span>Total Price</span>
                <span className="text-lg font-bold text-red-600">$1892.21</span>
              </div>
              <Textarea placeholder="Write notes here..." />
            </div>
            <Button className="w-full rounded-none">Proceed to Checkout</Button>
          </div>
        </div>
  )
}

export default OrderSumary