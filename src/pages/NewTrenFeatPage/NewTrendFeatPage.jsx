import ProductCard from "@/pages/Shared/CommonProduct/ProductCard";
// import FeatureCard from "@/components/main/TrashCode/FeaturedProducts/FeatureCard";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const NewTrendFeatPage = () => {
  const { products } = useContext(ProductContext);
  const {catName} = useParams()
  console.log(catName);

  const categoryData = products.filter((item) => {
    return item.highlited === catName;
  });
console.log(categoryData);

  return (
    <div 
    className="container mx-auto py-[92px]">
      <div className="bg-bg_highlight h-[300px] bg-cover bg-no-repeat bg-center relative">
      <h2 className="absolute right-32 top-32  text-5xl font-medium uppercase text-center pb-10"><span>{catName}</span> Products</h2>
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-5 pt-5 ">

        {categoryData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default NewTrendFeatPage;
