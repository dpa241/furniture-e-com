import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import CategoryFilter from "./CategoryFilter"
import PriceFilter from "./PriceFilter"
const ShopSidebar = () => {
  return (
    <Accordion  type="multiple" defaultValue={["item-1", "item-2", "item-3"]}  collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>CATEGORY</AccordionTrigger>
        <AccordionContent>
          <CategoryFilter/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>PRICE</AccordionTrigger>
        <AccordionContent>
          <PriceFilter/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>BRANDS</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ShopSidebar