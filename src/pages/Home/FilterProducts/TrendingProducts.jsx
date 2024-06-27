import React, { useContext, useState } from "react";
import ProductCard from "../../Shared/CommonProduct/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ProductContext } from "@/context/ProductContext";

const TrendingProducts = () => {
  const { trendingData } = useContext(ProductContext);
  return (
    <>
      <div className="col-span-2 grid grid-cols-4 gap-5">
        {trendingData?.slice(0, 4).map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>

      <div className="flex justify-center ">
        <Link to={`/popular/trending`}>
          <Button
            onClick={""}
            variant="link"
            className="pt-5 md:pt-0 md:absolute  md:top-0 md:right-9 lg:right-5"
          >
            View All
          </Button>
        </Link>

        {/* {trendingData?.slice(0, 1).map((item) => {
          return (
            <Link key={item.id} to={`/popular/${item.category}`}>
              <Button
                onClick={""}
                variant="link"
                className="absolute md:top-0 md:right-9 lg:right-5"
              >
                View All
              </Button>
            </Link>
          );
        })} */}
      </div>
    </>
  );
};

export default TrendingProducts;
