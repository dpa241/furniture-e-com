import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import ProductCard from "../Shared/CommonProduct/ProductCard";
import ShopSidebar from "./ShopSidebar";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-4 py-24">
      <div className="col-span-1 px-5 pr-16">
        <ShopSidebar/>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
