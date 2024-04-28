import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import TrendingCard from "./TrendingCard";
import { ProductContext } from "@/context/ProductContext";

const TrendingProducts = () => {
  const { products } = useContext(ProductContext);

  const trendingProducts = products.filter((item) => {
    return item.category === "trending";
  });

  return (
    <section className="">
        {/* Products Card */}
        <div className="grid grid-cols-4 gap-5 ">
          {trendingProducts.map((item) => (
            <TrendingCard item={item} key={item.id} />
          ))}
        </div>
    </section>
  );
};

export default TrendingProducts;
