import React, { createContext, useState } from 'react'
import { productData } from '@/data'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    // products states here....
    // fetch products from api here...
    const [products,setProducts] = useState(productData)
    // const featuredData = products.filter(item=> item.category === "featured")
    // const trendingData = products.filter(item=> item.category === "trending")
    // const newData = products.filter(item=> item.category === "new")
    const featuredData = products.filter(item=> item.highlited === "featured")
    const trendingData = products.filter(item=> item.highlited === "trending")
    const newData = products.filter(item=> item.highlited === "new")
  return (
    <ProductContext.Provider value={{products,featuredData,trendingData,newData}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider