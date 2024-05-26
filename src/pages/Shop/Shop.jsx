import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import ProductCard from "../Shared/CommonProduct/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-4 py-24">
      <div className="col-span-1"></div>
      <div className="col-span-3 grid grid-cols-3 gap-2">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
