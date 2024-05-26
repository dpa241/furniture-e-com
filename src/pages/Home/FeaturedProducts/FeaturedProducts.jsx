import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";
import ProductCard from "../../Shared/CommonProduct/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const { featuredData } = useContext(ProductContext);
  console.log(featuredData);
  return (
    <div className="container mx-auto relative">
      <div className="flex justify-center md:justify-start py-8">
        <h2 className="text-3xl font-semibold uppercase">Featured Products</h2>
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-5">
        {featuredData?.slice(0, 4).map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to={"/popular/featured"}>
          <Button
            onClick={""}
            variant="link"
            className="absolute md:top-10 md:right-9 lg:right-5"
          >
            View All
          </Button>
        </Link>
        {/* {featuredData?.slice(0, 1).map((item) => {
          return (
            <Link key={item.id} to={`/popular/${item.category}`}>
              <Button
                onClick={""}
                variant="link"
                className="absolute md:top-10 md:right-9 lg:right-5"
              >
                View All
              </Button>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
