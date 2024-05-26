import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TestFeatureCard from "./TestFeatureCard";
import { chairData } from "@/chairData";
import { useState } from "react";
const TestFeaturedProducts = () => {

const [chairProd,setChairProd] = useState(chairData);

  return (
    <section className="container mx-auto -z-50">
      <div className="grid grid-cols-2 gap-y-8">
        {/* Product Heading And View All Button */}
        <div className="col-span-2 md:col-span-1  text-center md:text-left md:pl-5 lg:pl-0 ">
          <h2 className="text-3xl font-semibold uppercase">Featured Products</h2>
        </div>
        <div className="max-w-[100%] col-span-2 md:col-span-1 text-center md:text-right  order-2 md:order-none md:pr-5 lg:pr-0">
          {
            chairProd?.slice(0,1).map(item=>{
              return <Link key={item.id} to={`/popular/${item.category}`}><Button onClick={""} variant="link" className="">
              View All
            </Button></Link>
            })
          }
        </div>
        {/* Products Card */}
        <div className="col-span-2 grid grid-cols-4 gap-5 ">
          {
            chairProd?.slice(0,5).map(item =>{
             return  item.new && <TestFeatureCard item={item} key={item.id}/>
              })
          }
        </div>
      </div>
    </section>
  );
};

export default TestFeaturedProducts;
