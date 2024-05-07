import React, { useContext, useState } from 'react'
import NewProducts from "@/components/main/NewProducts/NewProducts";
import TrendingProducts from "@/components/main/TrendingProducts/TrendingProducts";

// UI COmponents
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ProductContext } from '@/context/ProductContext';
import { Link } from 'react-router-dom';

const FilterProducts = () => {
  const [viweBtn,setViewBtn] = useState(1)
  const {trendingData,newData} = useContext(ProductContext)
  console.log(trendingData);
  return (
    <>
        <Tabs
        defaultValue="trending"
        className="relative container mx-auto space-y-8"
      >
        <TabsList className="flex justify-center md:justify-start">
          <TabsTrigger value="trending" className="">
            <h2 className="text-3xl font-semibold uppercase">Trending</h2>
          </TabsTrigger>
          <TabsTrigger value="new">
            <h2 className="text-3xl font-semibold uppercase">New</h2>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="trending">
          <TrendingProducts />
          <div className="flex justify-center ">
          {
            trendingData?.slice(0,viweBtn).map(item=>{
              return <Link key={item.id} to={`/popular/${item.category}`}><Button onClick={""} variant="link" className="absolute md:top-0 md:right-9 lg:right-5">
              View All
            </Button></Link>
            })
          }
          </div>
        </TabsContent>
        <TabsContent value="new" className="">
          <NewProducts />
          <div className="flex justify-center ">
          {
            newData?.slice(0,viweBtn).map(item=>{
              return <Link key={item.id} to={`/popular/${item.category}`}><Button onClick={""} variant="link" className="absolute md:top-0 md:right-9 lg:right-5">
              View All
            </Button></Link>
            })
          }
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default FilterProducts