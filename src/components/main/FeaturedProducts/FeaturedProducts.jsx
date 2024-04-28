import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";
import { ProductContext } from "@/context/ProductContext";
const FeaturedProducts = () => {

  const {products} = useContext(ProductContext)
  
  const featuredData = products.filter(item=>{
    return (
      item.category === 'featured'
    )
  })

  return (
    <section className="container mx-auto -z-50">
      <div className="grid grid-cols-2 gap-y-8">
        {/* Product Heading And View All Button */}
        <div className="col-span-2 md:col-span-1  text-center md:text-left md:pl-5 lg:pl-0 ">
          <h2 className="text-3xl font-semibold uppercase">Featured Products</h2>
        </div>
        <div className="max-w-[100%] col-span-2 md:col-span-1 text-center md:text-right  order-2 md:order-none md:pr-5 lg:pr-0">
          <Button variant="link" className="">
            View All
          </Button>
        </div>
        {/* Products Card */}
        <div className="col-span-2 grid grid-cols-4 gap-5 ">
          {
            featuredData.map(item =>(
              <FeatureCard item={item} key={item.id}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
