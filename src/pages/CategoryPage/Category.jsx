import ProductCard from '@/pages/Shared/CommonProduct/ProductCard'
import { ProductContext } from '@/context/ProductContext'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {products} = useContext(ProductContext)
  const {catName} = useParams()

  const catProducts = products.filter(item=>{
    return item.prodCat === catName
  })

  console.log(catName);
  return (
    <div className='grid grid-cols-4 py-20 h-screen'>
      <div className='col-span-1 bg-red-200'></div>
      <div className='col-span-3 bg-green-200'>
        {
          catProducts.map(item=> <ProductCard key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}

export default Category