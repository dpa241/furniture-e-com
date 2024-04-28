import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import NewCard from "./NewCard";
import { ProductContext } from "@/context/ProductContext";

const NewProducts = () => {

  const {products} = useContext(ProductContext)

  const trendingProducts = products.filter(item=>{
    return (
      item.category === "new"
    )
  })  


  return (
    <section className="">
        <div className="grid grid-cols-4 gap-5 ">
          {
            trendingProducts.map(item =>(
              <NewCard item={item} key={item.id}/>
            ))
          }
        </div>
    </section>
  );
};

export default NewProducts;