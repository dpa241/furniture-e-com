import React from 'react'
import NewProducts from "@/components/main/NewProducts/NewProducts";
import TrendingProducts from "@/components/main/TrendingProducts/TrendingProducts";

// UI COmponents
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

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
          <div className="flex justify-center ">
            <Button
              variant="link"
              className="absolute md:top-0 md:right-9 lg:right-5"
            >
              View All
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="new" className="">
          <NewProducts />
          <div className="flex justify-center ">
            <Button
              variant="link"
              className="absolute md:top-0 md:right-9 lg:right-5"
            >
              View All
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default FilterProducts