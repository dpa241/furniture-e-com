// import React, { useContext, useState } from "react";
// import { Button } from "@/components/ui/button";
// import FeatureCard from "./FeatureCard";
// import { ProductContext } from "@/context/ProductContext";
// import { Link } from "react-router-dom";
// const FeaturedProducts = () => {
//   const {featuredData,viewAll,viweBtn} = useContext(ProductContext)
  
//   // const featuredData = products.filter(item=>{
//   //   return (
//   //     item.category === 'featured'
//   //   )
//   // })
//   // console.log(featuredData);

//   // const handleViewAll = () =>{
//   //   setViewAll(prev => prev + 1)
//   // }

//   return (
//     <section className="container mx-auto -z-50">
//       <div className="grid grid-cols-2 gap-y-8">
//         {/* Product Heading And View All Button */}
//         <div className="col-span-2 md:col-span-1  text-center md:text-left md:pl-5 lg:pl-0 ">
//           <h2 className="text-3xl font-semibold uppercase">Featured Products</h2>
//         </div>
//         <div className="max-w-[100%] col-span-2 md:col-span-1 text-center md:text-right  order-2 md:order-none md:pr-5 lg:pr-0">
//           {
//             featuredData?.slice(0,viweBtn).map(item=>{
//               return <Link key={item.id} to={`/popular/${item.category}`}><Button onClick={""} variant="link" className="">
//               View All
//             </Button></Link>
//             })
//           }
//         </div>
//         {/* Products Card */}
//         <div className="col-span-2 grid grid-cols-4 gap-5 ">
//           {
//             featuredData?.slice(0,viewAll).map(item =>(
//               <FeatureCard item={item} key={item.id}/>
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;
