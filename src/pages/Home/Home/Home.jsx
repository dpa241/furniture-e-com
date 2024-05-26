import Banner from "@/pages/Home/Banner/Banner";

// UI COmponents
import Categories from "@/pages/Home/Categories/Categories";
import FilterProducts from "@/pages/Home/FilterProducts/FilterProducts";
import Testimonial from "@/pages/Home/Testimonial/Testimonial";
import GetInTouch from "@/pages/Home/GetInTouch/GetInTouch";
import Client from "@/pages/Home/Client/Client";
import FeaturedProducts from "@/pages/Home/FeaturedProducts/FeaturedProducts";
import TestFeaturedProducts from "@/components/testCode/FeaturedProducts/TestFeaturedProducts";

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
