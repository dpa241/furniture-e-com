// import React, { useContext } from "react";
// import { Button } from "@/components/ui/button";
// import NewCard from "./NewCard";
// import { ProductContext } from "@/context/ProductContext";

// const NewProducts = () => {

//   const {newData,viewAll} = useContext(ProductContext)

//   return (
//     <section className="">
//         <div className="grid grid-cols-4 gap-5 ">
//           {
//             newData?.slice(0,viewAll).map(item =>(
//               <NewCard item={item} key={item.id}/>
//             ))
//           }
//         </div>
//     </section>
//   );
// };

// export default NewProducts;