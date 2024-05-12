import ProductCard from "@/components/main/CommonProduct/ProductCard";
// import FeatureCard from "@/components/main/TrashCode/FeaturedProducts/FeatureCard";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const PopularPage = () => {
  const { products } = useContext(ProductContext);
  const {catName} = useParams()

  const categoryData = products.filter((item) => {
    return item.category === catName;
  });


  return (
    <div className="container mx-auto py-[150px]">
      <h2 className="text-3xl font-semibold uppercase text-center pb-10"><span>{catName}</span> Products</h2>
      <div className="col-span-2 grid grid-cols-4 gap-5 ">

        {categoryData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularPage;
