// import React, { useState } from "react";
import productImg from "../../assets/Product detail/Img.png";
import NewImg1 from "/products/new1.jpg";
import NewImg2 from "/products/new2.jpg";
import NewImg3 from "/products/new3.jpg";
import { Button } from "@/components/ui/button";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { CartContext } from "@/context/CartContext";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import ProductImg from "./ProductTop/ProductImg";
import ProductTopDetails from "./ProductTop/ProductTopDetails";
import ProductDescription from "./ProductDescription/ProductDescription";
import Review from "./Review/Review";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  console.log(id);

  const selectedProduct = products.find((item) => {
    return item.id == parseInt(id);
  });
  if (!selectedProduct) {
    <div>Loading.......</div>;
  }
  return (
    <div className="py-24 container mx-auto">
      <div className="flex items-center">
        <ProductImg selectedProduct={selectedProduct} />
        <ProductTopDetails selectedProduct={selectedProduct} id={id} />
      </div>
      <ProductDescription />
      <Review />
    </div>
  );
};

export default ProductDetails;
