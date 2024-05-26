import React, { useContext, useState } from "react";
// import NewProducts from "@/components/main/TrashCode/NewProducts/NewProducts";
// import TrendingProducts from "@/components/main/TrashCode/TrendingProducts/TrendingProducts";

// UI COmponents
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingProducts from "./TrendingProducts";
import NewProducts from "./NewProducts";

const FilterProducts = () => {
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
        </TabsContent>
        <TabsContent value="new" className="">
          <NewProducts />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default FilterProducts;
