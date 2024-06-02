import ProductCard from "@/pages/Shared/CommonProduct/ProductCard";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { products } = useContext(ProductContext);
  const { catName } = useParams();
  console.log(catName);

  const catProducts = products.filter((item) => {
    return item.category === catName;
  });


  console.log(catProducts);
  return (
    <div className="container mx-auto py-[92px]">
      <div className="bg-bg_highlight h-[300px] bg-cover bg-no-repeat bg-center relative">
        <h2 className="absolute right-32 top-32  text-5xl font-medium uppercase text-center pb-10">
          <span>{catName.split("-")[0]} Chair </span>
        </h2>
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-5 pt-5 ">
        {catProducts.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
    // <div className="grid grid-cols-4 py-24 h-screen">
    //   <div className='col-span-1'></div>
    //   <div className='col-span-3 grid grid-cols-3'>
    //     {
    //       catProducts?.map(item=> <ProductCard key={item.id} item={item}/>)
    //     }
    //   </div>

    // </div>
  );
};

export default Category;
