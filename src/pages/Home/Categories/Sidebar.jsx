import React from 'react'
import { Button } from "@/components/ui/button";
import { sidebarData } from '@/data';
const Sidebar = () => {
  return (
    <>
        <ul className="h-full flex flex-col justify-between px-2">
          {
            sidebarData.map((item,index)=>(
              <li key={index} className=" bg-white cursor-pointer hover:text-primary transition-all duration-300"><a href={item.href}>{item.name}</a></li>
            ))
          }
          <Button className="w-[200px]">All Category</Button>
          </ul>
    </>
  )
}

export default Sidebar