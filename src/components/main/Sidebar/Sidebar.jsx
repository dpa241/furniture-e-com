import { CartContext } from '@/context/CartContext'
import { SidebarContext } from '@/context/SidebarContext'
import React, { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import CartItem from '../CartItem/CartItem'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
    const {sidebarOpen,handleCloseSidebar} = useContext(SidebarContext)
    const {cart,clearCart,total} = useContext(CartContext)
    // console.log(total);
  return (
    <div className={`${sidebarOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}>
        <div className='flex justify-between items-center py-6 border-b'>
          <div className='uppercase font-semibold text-sm'>Shopping Bag (0)</div>
          <div onClick={handleCloseSidebar} className='w-8 h-8 flex items-center justify-center cursor-pointer'><IoMdArrowForward className='text-2xl'/></div>
        </div>
        <div>
          {
            cart.map(item=>{
              return <CartItem key={item.id} item={item}/>
            })
          }
        </div>
        <div className='space-y-5'>
          <Button variant='outline' className='w-full rounded-none' >$ {parseFloat(total).toFixed(2)}</Button>
          <Button onClick={clearCart} variant='destructive' className='w-full rounded-none'>Clear Cart</Button>
        </div>
    </div>
  )
}

export default Sidebar