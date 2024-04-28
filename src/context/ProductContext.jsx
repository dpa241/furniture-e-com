import React, { createContext, useState } from 'react'
import { productData } from '@/data'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    // products states here....
    // fetch products from api here...
    const [products,setProducts] = useState(productData)
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider