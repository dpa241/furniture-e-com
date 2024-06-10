import React, { createContext, useEffect, useState } from 'react'
import { productData } from '@/data'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    // products states here....
    // fetch products from api here...
    const [products,setProducts] = useState(productData)
    const [selecCatFilter,setSelectCatFilter] = useState("all")

    const featuredData = products.filter(item=> item.highlited === "featured")
    const trendingData = products.filter(item=> item.highlited === "trending")
    const newData = products.filter(item=> item.highlited === "new")

    useEffect(()=>{
      if(selecCatFilter === 'all')
        setProducts(productData)
      if(selecCatFilter === 'swivel-chair'){
        const filterProducts = products.filter(item=>item.category === 'swivel-chair')
        setProducts(filterProducts)
      }
      if(selecCatFilter === 'rocking-chair'){
        const filterProducts = products.filter(item=> item.category === 'rocking-chair')
        setProducts(filterProducts)
      }
      if(selecCatFilter === 'gaming-chair'){
        const filterProducts = products.filter(item=> item.category === 'gaming-chair')
        setProducts(filterProducts)
      }
    },[selecCatFilter])
  return (
    <ProductContext.Provider value={{products,featuredData,trendingData,newData, setSelectCatFilter}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider