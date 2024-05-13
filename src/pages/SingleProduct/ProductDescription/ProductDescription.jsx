import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDescription = () => {
  return (
    <div className="py-20">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="flex justify-center gap-5">
          <TabsTrigger value="details" className="uppercase text-2xl">
            Product Detail
          </TabsTrigger>
          <TabsTrigger value="delivery" className="uppercase text-2xl">
            Delivery & Return
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="flex justify-center pt-6">
          <div className="flex">
            <div className="w-3/5 space-y-2 pr-32">
              <h2 className="text-[20px] font-bold">DESCRIPTION</h2>
              <p className="text-sm text-muted-foreground">
                Introducing our minimal sofa product - a sleek and stylish
                addition to any modern home. With its clean lines and simple
                design, this sofa is perfect for those who value both form and
                function. The neutral color palette and understated profile
                allow it to blend seamlessly into any living space, while the
                sturdy frame and comfortable cushioning ensure maximum comfort
                and durability. Our minimal sofa product is crafted from
                high-quality materials, making it a long-lasting investment for
                your home. Versatile and adaptable, it can be customized with
                pillows and throws to suit your personal style. Upgrade your
                living space with our minimal sofa product, a timeless and
                practical piece of furniture that will elevate any room.
              </p>
            </div>
            <div className="w-2/5 space-y-2">
              <h2 className="text-[20px] font-bold">FITS & FEATURES</h2>
              <ol className="text-sm text-muted-foreground list-decimal space-y-1">
                <li>
                  Minimal sofas have sleek designs with sturdy frames and firm
                  cushions.
                </li>
                <li>
                  They feature neutral-colored upholstery made of leather or
                  high-quality fabric.
                </li>
                <li>
                  Some designs may have modular components or hidden storage
                </li>
                <li>Minimal sofas are practical, versatile, and timeless.</li>
                <li>Upgrade your living space with a minimal sofa today.</li>
              </ol>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="delivery"
          className="flex flex-col items-center pt-6"
        >
          <h2 className="text-[20px] font-bold uppercase pb-5">Return Policy</h2>
          <ol className="text-sm text-muted-foreground list-decimal space-y-1">
            <li>
              Minimal sofas have sleek designs with sturdy frames and firm
              cushions.
            </li>
            <li>
              They feature neutral-colored upholstery made of leather or
              high-quality fabric.
            </li>
            <li>Some designs may have modular components or hidden storage</li>
            <li>Minimal sofas are practical, versatile, and timeless.</li>
            <li>Upgrade your living space with a minimal sofa today.</li>
            <li>
              They feature neutral-colored upholstery made of leather or
              high-quality fabric.
            </li>
            <li>Some designs may have modular components or hidden storage</li>
            <li>Minimal sofas are practical, versatile, and timeless.</li>
            <li>Upgrade your living space with a minimal sofa today.</li>
          </ol>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDescription;
