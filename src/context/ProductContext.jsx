import React, { createContext, useState } from 'react'
import { productData } from '@/data'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [viewAll,setViewAll] = useState(4)
  const [viweBtn,setViewBtn] = useState(1)
    // products states here....
    // fetch products from api here...
    const [products,setProducts] = useState(productData)
    const featuredData = products.filter(item=> item.category === "featured")
    const trendingData = products.filter(item=> item.category === "trending")
    const newData = products.filter(item=> item.category === "new")
  return (
    <ProductContext.Provider value={{products,featuredData,trendingData,newData,viewAll,viweBtn}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider