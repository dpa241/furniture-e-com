import React from "react";

import ProductImg from "./ProductDetails/ProductImg";
import ProductTopDetails from "./ProductDetails/ProductDetails";
import ProductDescription from "./ProductDescription/ProductDescription";
import Review from "./Review/Review";

const ProductDetails = () => {
  return (
    <section className="container mx-auto">
      <div className="flex py-10">
        <ProductImg/>
        <ProductTopDetails/>
      </div>
      <ProductDescription/>
      <Review/>
    </section>
  );
};

export default ProductDetails;
