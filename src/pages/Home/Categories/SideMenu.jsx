import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { sidebarData } from "@/data";
import { Link } from "react-router-dom";
import { ProductContext } from "@/context/ProductContext";
import { productData } from "@/data";
// import { Item } from '@radix-ui/react-select';

const uniqueItems = (arr) => {
  const uniqueVal = new Set();
  return arr.filter((item) => {
    const key = `${item.category}-${item.images.catIcon}`;
    if (uniqueVal.has(key)) {
      return false;
    } else {
      uniqueVal.add(key);
      return true;
    }
  });
};

const SideMenu = () => {
  // Repeated Category Filter
  // const groupByCategory = (productData) =>{
  //   return productData.reduce((acc,product)=>{
  //     if(!acc[product.category]){
  //       acc[product.category] = []
  //     }
  //     acc[product.category].push(product)
  //     return acc
  //   },{})
  // }
  // const groupedProducts = groupByCategory(productData)
  // =======================================================

  // Reapeated Category Filter with other object
  const uniqueItemList = uniqueItems(productData);
  console.log(uniqueItemList);

  return (
    <>
      <div className="h-full flex flex-col ">
        {/* Repeated Category Filter */}
        {/* {
            Object.keys(groupedProducts).map((category)=>(
              <div key={category.id} className=" bg-white cursor-pointer border-b p-3  font-medium hover:text-primary hover:bg-slate-200 transition-all duration-300">
                  <Link to={`category/${category}`}>
                    <span className='capitalize'>{category.split("-")[0]}</span>
                  </Link>
              </div>
              
            ))
          } */}

        {uniqueItemList.slice(0, 10).map((item, index) => {
          return (
            <Link
              to={`/category/${item.category}`}
              key={index}
              className=" group flex items-center gap-1 mb-3 shadow-md bg-white cursor-pointer border-b   font-medium hover:text-primary hover:bg-slate-200 transition-all duration-300"
            >
              <div className="w-2 h-full group-hover:bg-primary transition-all duration-300"></div>
              <div className="flex gap-3 p-3">
                <img src={item.images.catIcon} alt="" className="w-5 h-5.5" />
                <h2 className="">{item.name}</h2>
              </div>
            </Link>
          );
        })}
        <div className="w-full">
          <Link to={"/shop"} className="w-full">
            <Button className="w-full">All Category</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
