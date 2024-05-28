
// components
import GridView from "./GridView";
import SideMenu from "./SideMenu";
// import { Separator } from "@/components/ui/separator";


const Categories = () => {
  return (
    <section className="container mx-auto space-y-8">
      <h2 className="text-3xl font-semibold uppercase">Top Categories</h2>

      {/* This is Method - 1 */}

      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full gap-2 max-w-sm mx-auto md:max-w-none lg:mx-0">
        <div className="md:row-span-2">
          <Sidebar/>
        </div>
        <div className="relative flex justify-center overflow-hidden items-center group">
          <div className="absolute group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300"></div>
          <img
            src={Image}
            alt=""
            className="w-full group-hover:scale-125 transition-all duration-300 "
          />
          <div className="absolute flex items-center justify-center w-[90%] h-[90%] text-3xl z-50 text-center rounded-md text-transparent group-hover:text-white group-hover:border transition-all duration-300">
            <h3>Chair</h3>
          </div>
        </div>
        <div className="">
          <img src={Image} alt="" className="w-full" />
        </div>
        <div className="">
          <img src={Image} alt="" className="w-full" />
        </div>
        <div className="">
          <img src={Image} alt="" className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-2 h-[296px] w-full bg-green-100">
          <div className="h-full">
            <img src={Image} alt="" className="w-full h-full" />
          </div>
        </div>
      </div> */}

      {/* This is Method 2 */}
      
      <div className="flex">
        <div className="w-1/4 pr-10">
          <SideMenu/>
        </div>
        <div className="w-3/4">
          <GridView/>
        </div>
      </div>
    </section>
  );
};

export default Categories;
