import React, { useContext } from "react";

import ProductImg from "./ProductDetails/ProductImg";
import ProductTopDetails from "./ProductDetails/ProductTopDetails";
import ProductDescription from "./ProductDescription/ProductDescription";
import Review from "./Review/Review";
import { useParams } from "react-router-dom";
import { ProductContext } from "@/context/ProductContext";
import { CartContext } from "@/context/CartContext";

const ProductDetails = () => {
  const {id} = useParams()
  console.log(id);
  const {products} = useContext(ProductContext)
  // const {addToCart} = useContext(CartContext)

  const product = products.find(item => {
    return item.id = id
  })

  if(!product){
    <div>Loading.......</div>
  }
  console.log(id);
  return (
    <section className="container mx-auto pt-[92px]">
      <div className="flex items-center py-10">
        <ProductImg product={product}/>
        <ProductTopDetails product={product}/>
      </div>
      <ProductDescription product={product}/>
      <Review product={product}/>
    </section>
  );
};

export default ProductDetails;
