import React, { useContext } from 'react'
import { Button } from "@/components/ui/button";
import { sidebarData } from '@/data';
import { Link } from 'react-router-dom';
import { ProductContext } from '@/context/ProductContext';
import { productData } from '@/data'



const SideMenu = () => {
  const groupByCategory = (productData) =>{
    return productData.reduce((acc,product)=>{
      if(!acc[product.category]){
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },{})
  }
  


  const groupedProducts = groupByCategory(productData)

  console.log(groupedProducts);

  return (
    <>
        <div className="h-full flex flex-col pr-5">
          {
            Object.keys(groupedProducts).map((category)=>(
              <div key={category.id} className=" bg-white cursor-pointer border-b p-3  font-medium hover:text-primary hover:bg-slate-200 transition-all duration-300">
                  <Link to={`category/${category}`}>
                    <span className='capitalize'>{category.split("-")[0]}</span>
                  </Link>
              </div>
              
            ))
          }
          {/* <Button className="w-[200px]">All Category</Button> */}
          </div>
    </>
  )
}

export default SideMenu;