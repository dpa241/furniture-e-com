import Banner from "@/components/main/Banner/Banner";

// UI COmponents
import Categories from "@/components/main/Categories/Categories";
import FilterProducts from "@/components/main/FilterProducts/FilterProducts";
import Testimonial from "@/components/main/Testimonial/Testimonial";
import GetInTouch from "@/components/main/GetInTouch/GetInTouch";
import Client from "@/components/main/Client/Client";
import FeaturedProducts from "@/components/main/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="space-y-[80px]">
      <Banner />
      <FeaturedProducts/>
      <Categories/>
      <FilterProducts/>
      <Testimonial/>
      <GetInTouch/>
      {/* <CommonProduct/> */}
      <Client/>
    </div>
  );
};

export default Home;
